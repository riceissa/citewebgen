// If we are writing an article on Wikipedia, then wikilinks to Wikipedia pages
// can be done with "[[page]]", but if we are not writing for Wikipedia, then
// wikilinks to Wikipedia must be done with "[[wikipedia:page|page]]". This
// variable allows the user to specify whether they are writing for Wikipedia.
var onWikipedia = false;

function printStr(metadata) {
  // Perform some simple replacements to ensure the result conforms to the
  // Manual of Style.
  for (var key in metadata) {
    var val = metadata[key];
    // For some reason, greaterwrong.com adds an "isEmpty" key with a function
    // stored at that place to any dictionary I define on the site. The
    // typeof() for that entry is "function" so that gets skipped over in this
    // loop.
    if (typeof(val) === "string") {
      val = val.replace(/[“”]/g, '"');
      val = val.replace(/[‘’]/g, "'");
      val = val.replace(/--/g, "–");
      val = val.replace(/\n/g, " ");

      // MediaWiki uses the bar for separating fields, so escape it.
      val = val.replace(/\|/g, "{{!}}");

      metadata[key] = val;
    }
  }

  var pub = metadata["publisher"];
  if (pub && (location.hostname in publisher_map
      || location.hostname.split(".").slice(1).join(".") in publisher_map)) {
    if (onWikipedia) {
      metadata["publisher"] = "[[" + pub + "]]";
    } else {
      metadata["publisher"] = "[[wikipedia:" + pub + "|" + pub + "]]";
    }
  }

  var print_str = "<ref>{{cite web";
  for (var key in metadata) {
    if (typeof(metadata[key]) === "string") {
      print_str += " |" + key + "=" + metadata[key];
    }
  }
  print_str += "}}</ref>";

  return print_str;
}
