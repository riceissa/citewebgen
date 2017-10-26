// Some sites, like EconLog, use class="date" multiple times on a page and in
// an unpredictable order. It may therefore be preferable to not attempt to use
// class fields and to instead manually enter in some information. Set this to
// false in such cases.
var useClasses = false;

var publisher_map = {
        "arstechnica.com": "Ars Technica",
        "bloomberg.com": "Businessweek",
        "bostonglobe.com": "The Boston Globe",
        "econlog.econlib.org": "EconLog",
        "economist.com": "The Economist",
        "en.wikipedia.org": "English Wikipedia",
        "ft.com": "Financial Times",
        "givewell.org": "GiveWell",
        "huffingtonpost.ca": "Huffington Post Canada",
        "huffingtonpost.com": "The Huffington Post",
        "independent.co.uk": "The Independent",
        "indiatimes.com": "The Times of India",
        "intelligence.org": "Machine Intelligence Research Institute",
        "latimes.com": "Los Angeles Times",
        "lesswrong.com": "LessWrong",
        "mirror.co.uk": "Mirror",
        "nybooks.com": "The New York Review of Books",
        "nytimes.com": "The New York Times",
        "plos.org": "PLOS",
        "press.princeton.edu": "Princeton University Press",
        "princeton.edu": "Princeton University",
        "quora.com": "Quora",
        "rationality.org": "Center for Applied Rationality",
        "telegraph.co.uk": "The Telegraph",
        "theatlantic.com": "The Atlantic",
        "theguardian.com": "The Guardian",
        "theregister.co.uk": "The Register",
        "usatoday.com": "USA Today",
        "usnews.com": "U.S. News & World Report",
        "washingtonpost.com": "The Washington Post",
        "who.int": "World Health Organization",
        "wikipedia.org": "Wikipedia",
        "wired.com": "WIRED",
        "wsj.com": "The Wall Street Journal"
};

// Try to parse the string s as a date, and return in the format "%B %-d, %Y",
// e.g. "October 4, 2015". If unable to parse, return 0.
function getDateFromStr(s) {
  var parsed = Date.parse(s); // This will be NaN if unable to parse
  if (parsed) {
    var date = new Date(parsed);
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    // We have to use the UTC versions of the methods because otherwise
    // JavaScript performs a timezone change to the local time before
    // returning.
    return months[date.getUTCMonth()] + " " + date.getUTCDate() + ", " +
      date.getUTCFullYear();
  } else {
    return 0;
  }
}

function getMetadata() {
  var meta_tags = document.getElementsByTagName("meta");

  // Store all extracted metadata in this dictionary
  var metadata = {"url": document.URL};

  for (var i = 0; i < meta_tags.length; i++) {
    var name = meta_tags.item(i).name;
    if (name) {
      name = name.trim().toLowerCase();
    }
    var prop = meta_tags.item(i).getAttribute("property");
    if (prop) {
      prop = prop.trim().toLowerCase();
    }
    var cont = meta_tags.item(i).content;
    if (cont) {
      cont = cont.trim();
    }
    if (prop == "og:title" || name == "title") {
      metadata["title"] = cont;
    } else if (name == "author" || name == "article:author_name" ||
                    name ==  "dcsext.author") {
      metadata["author"] = cont;
    } else if (name == "byl") {
      metadata["author"] = cont.replace(/^[Bb][Yy] /, "");
    } else if (prop == "og:site_name" || name == "cre") {
      metadata["publisher"] = cont;
    } else if (name == "dat" || name == "dcterms.date" ||
                    prop == "article:modified_time" ||
                    prop == "article:published_time" ||
                    name == "date" ||
                    name == "timestamp" ||
                    name == "sailthru.date" ||
                    name == "displaydate" ||
                    name == "dc.date.issued") {
      metadata["date"] = cont;
    }
  }

  // Use the <title> tag only if we couldn't use the other meta tags.
  if (!("title" in metadata)) {
    metadata["title"] = document.title;
  }

  var today = new Date();
  metadata["accessdate"] = getDateFromStr(today.toUTCString());

  if (useClasses) {
    var authors = document.getElementsByClassName("author");
    if (authors.length > 0 && !("author" in metadata)) {
        metadata["author"] = authors[0].textContent.trim();
    }
    var dates = document.getElementsByClassName("date");
    if (dates.length > 0 && !("date" in metadata)) {
        metadata["date"] = dates[0].textContent.trim();
    }
  }

  var tryDateParse = getDateFromStr(metadata["date"]);
  if (tryDateParse) {
    metadata["date"] = tryDateParse;
  }

  // If text is selected in the page, use that for the "quote" field.
  if (window.getSelection() != "") {
    metadata["quote"] = window.getSelection().toString();
  }

  // If the base URL is in our hard-coded map, then use that instead of trying
  // to extract it from the HTML.
  if (location.hostname in publisher_map) {
    var pub = publisher_map[location.hostname];
  } else if (location.hostname.split(".").slice(1).join(".") in
      publisher_map) {
    var pub = publisher_map[location.hostname.split(".").slice(1).join(".")];
  }
  if (pub) {
    metadata["publisher"] = pub;
  }

  // Check for common archival services
  if (document.URL.match(/\/\/archive\.is\//)) {
    metadata["archiveurl"] = metadata["url"];
    if ("date" in metadata) {
      metadata["archivedate"] = metadata["date"];
    }
    metadata["url"] = document.querySelectorAll("input")[0].value;
    delete metadata["date"];
    delete metadata["publisher"];
    metadata["dead-url"] = "no";
  } else if (document.URL.match(/\/\/web\.archive\.org\/web\//)) {
    metadata["archiveurl"] = metadata["url"];
    metadata["url"] = document.querySelectorAll("input#wmtbURL")[0].value;
    var date_part = document.URL.match(/\/\/web\.archive\.org\/web\/\d{8}/)[0].substr(-8);
    metadata["archivedate"] = getDateFromStr(date_part.substr(0,4) + "-" +
      date_part.substr(4,2) + "-" + date_part.substr(6,2));
    metadata["dead-url"] = "no";
  }

  return metadata;
}

function verboseStr(metadata) {
  var verbose_str = "The following metadata were detected:\n\n";
  for (var key in metadata) {
    verbose_str += key + " = " + metadata[key] + "\n";
  }
  verbose_str += "\nYou can copy this reference:";

  return verbose_str;
}
