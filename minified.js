javascript:var Manifest="Citewebgen, a cite web citation generator.";var publisher_map={"arstechnica.com":"Ars Technica","bloomberg.com":"Businessweek","bostonglobe.com":"The Boston Globe","econlog.econlib.org":"EconLog","economist.com":"The Economist","en.wikipedia.org":"English Wikipedia","ft.com":"Financial Times","givewell.org":"GiveWell","huffingtonpost.ca":"Huffington Post Canada","huffingtonpost.com":"The Huffington Post","independent.co.uk":"The Independent","indiatimes.com":"The Times of India","latimes.com":"Los Angeles Times","lesswrong.com":"LessWrong","mirror.co.uk":"Mirror","nybooks.com":"The New York Review of Books","nytimes.com":"The New York Times","plos.org":"PLOS","press.princeton.edu":"Princeton University Press","princeton.edu":"Princeton University","quora.com":"Quora","telegraph.co.uk":"The Telegraph","theatlantic.com":"The Atlantic","theguardian.com":"The Guardian","theregister.co.uk":"The Register","usatoday.com":"USA Today","usnews.com":"U.S. News & World Report","washingtonpost.com":"The Washington Post","who.int":"World Health Organization","wikipedia.org":"Wikipedia","wsj.com":"The Wall Street Journal"};function getDateFromStr(d){var b=Date.parse(d);if(b){var c=new Date(b);var a=["January","February","March","April","May","June","July","August","September","October","November","December"];return a[c.getUTCMonth()]+" "+c.getUTCDate()+", "+c.getUTCFullYear()}else{return 0}}var meta_tags=document.getElementsByTagName("meta");function citationWrapper(){var g={url:document.URL};for(var c=0;c<meta_tags.length;c++){var b=meta_tags.item(c).name;var a=meta_tags.item(c).getAttribute("property");var j=meta_tags.item(c).content;if(a=="og:title"){g.title=j}else{if(b=="title"){g.title=j}else{if(b=="author"){g.author=j}else{if(b=="article:author_name"){g.author=j}else{if(b=="DCSext.author"){g.author=j}else{if(b=="byl"){g.author=j.replace(/^[Bb][Yy] ?/,"")}else{if(a=="og:site_name"){g.publisher=j}else{if(b=="cre"){g.publisher=j}else{if(b=="dat"){g.date=j}else{if(b=="dcterms.date"){g.date=j}else{if(a=="article:modified_time"){g.date=j}else{if(a=="article:published_time"){g.date=j}}}}}}}}}}}}}if(!("title" in g)){g.title=document.title}if(location.hostname in publisher_map){g.publisher="[["+publisher_map[location.hostname]+"]]"}else{if(location.hostname.split(".").slice(1).join(".") in publisher_map){g.publisher="[["+publisher_map[location.hostname.split(".").slice(1).join(".")]+"]]"}}if("title" in g){g.title=g.title.replace(/\|/,"{{!}}")}var f=new Date();g.accessdate=getDateFromStr(f.toUTCString());var e=getDateFromStr(g.date);if(e){g.date=e}if(window.getSelection()!=""){g.quote=window.getSelection()}var d="<ref>{{cite web";for(var h in g){d+=" |"+h+"="+g[h]}d+="}}</ref>";return d}var print_str=citationWrapper();var s=prompt("Copy this reference:",print_str);
