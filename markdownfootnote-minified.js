javascript:var Manifest="Citewebgen, a cite web citation generator.";var useClasses=false;var publisher_map={"arstechnica.com":"Ars Technica","bloomberg.com":"Businessweek","bostonglobe.com":"The Boston Globe","econlog.econlib.org":"EconLog","economist.com":"The Economist","en.wikipedia.org":"English Wikipedia","ft.com":"Financial Times","givewell.org":"GiveWell","huffingtonpost.ca":"Huffington Post Canada","huffingtonpost.com":"The Huffington Post","independent.co.uk":"The Independent","indiatimes.com":"The Times of India","intelligence.org":"Machine Intelligence Research Institute","latimes.com":"Los Angeles Times","lesswrong.com":"LessWrong","mirror.co.uk":"Mirror","nybooks.com":"The New York Review of Books","nytimes.com":"The New York Times","plos.org":"PLOS","press.princeton.edu":"Princeton University Press","princeton.edu":"Princeton University","quora.com":"Quora","rationality.org":"Center for Applied Rationality","telegraph.co.uk":"The Telegraph","theatlantic.com":"The Atlantic","theguardian.com":"The Guardian","theregister.co.uk":"The Register","usatoday.com":"USA Today","usnews.com":"U.S. News & World Report","washingtonpost.com":"The Washington Post","who.int":"World Health Organization","wikipedia.org":"Wikipedia","wired.com":"WIRED","wsj.com":"The Wall Street Journal"};function getDateFromStr(d){var b=Date.parse(d);if(b){var c=new Date(b);var a=["January","February","March","April","May","June","July","August","September","October","November","December"];return a[c.getUTCMonth()]+" "+c.getUTCDate()+", "+c.getUTCFullYear()}else{return 0}}function getMetadata(){var f=document.getElementsByTagName("meta");var k={url:document.URL};for(var e=0;e<f.length;e++){var c=f.item(e).name;if(c){c=c.trim().toLowerCase()}var b=f.item(e).getAttribute("property");if(b){b=b.trim().toLowerCase()}var m=f.item(e).content;if(m){m=m.trim()}if(b=="og:title"||c=="title"){k.title=m}else{if(c=="author"||c=="article:author_name"||c=="dcsext.author"){k.author=m}else{if(c=="byl"){k.author=m.replace(/^[Bb][Yy] /,"")}else{if(b=="og:site_name"||c=="cre"){k.publisher=m}else{if(c=="dat"||c=="dcterms.date"||b=="article:modified_time"||b=="article:published_time"||c=="date"||c=="timestamp"||c=="sailthru.date"||c=="displaydate"||c=="dc.date.issued"){k.date=m}}}}}}if(!("title" in k)){k.title=document.title}var j=new Date();k.accessdate=getDateFromStr(j.toUTCString());if(useClasses){var l=document.getElementsByClassName("author");if(l.length>0&&!("author" in k)){k.author=l[0].textContent.trim()}var a=document.getElementsByClassName("date");if(a.length>0&&!("date" in k)){k.date=a[0].textContent.trim()}}var h=getDateFromStr(k.date);if(h){k.date=h}if(window.getSelection()!=""){k.quote=window.getSelection().toString()}if(location.hostname in publisher_map){var d=publisher_map[location.hostname]}else{if(location.hostname.split(".").slice(1).join(".") in publisher_map){var d=publisher_map[location.hostname.split(".").slice(1).join(".")]}}if(d){k.publisher=d}if(document.URL.match(/\/\/archive\.is\//)){k.archiveurl=k.url;if("date" in k){k.archivedate=k.date}k.url=document.querySelectorAll("input")[0].value;delete k.date;delete k.publisher;k["dead-url"]="no"}else{if(document.URL.match(/\/\/web\.archive\.org\/web\//)){k.archiveurl=k.url;k.url=document.querySelectorAll("input#wmtbURL")[0].value;var g=document.URL.match(/\/\/web\.archive\.org\/web\/\d{8}/)[0].substr(-8);k.archivedate=getDateFromStr(g.substr(0,4)+"-"+g.substr(4,2)+"-"+g.substr(6,2));k["dead-url"]="no"}}return k}function verboseStr(c){var a="The following metadata were detected:\n\n";for(var b in c){a+=b+" = "+c[b]+"\n"}a+="\nYou can copy this reference:";return a}function printStr(c){if("archiveurl" in c){var a=c.archiveurl}else{var a=c.url}var b="";if("author" in c){b+=c.author+". "}if("title" in c){b+="[“"+c.title+"”]("+a+"). "}if("publisher" in c){b+=c.publisher+". "}if("date" in c){b+=c.date+". "}if("archiveurl" in c){b+="Archived from [the original]("+c.url+") ";if("archivedate" in c){b+="on "+getDateFromStr(c.archivedate)+". "}}b+="Retrieved "+c.accessdate+".";return b}function citationWrapper(){var a=getMetadata();return[verboseStr(a),printStr(a)]}var res=citationWrapper();var s=prompt(res[0],res[1]);