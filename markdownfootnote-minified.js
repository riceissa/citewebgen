javascript:(function(){var f=false;var e={"arstechnica.com":"Ars Technica","bloomberg.com":"Businessweek","bostonglobe.com":"The Boston Globe","econlog.econlib.org":"EconLog","economist.com":"The Economist","en.wikipedia.org":"English Wikipedia","ft.com":"Financial Times","givewell.org":"GiveWell","huffingtonpost.ca":"Huffington Post Canada","huffingtonpost.com":"The Huffington Post","independent.co.uk":"The Independent","indiatimes.com":"The Times of India","intelligence.org":"Machine Intelligence Research Institute","latimes.com":"Los Angeles Times","lesswrong.com":"LessWrong","mirror.co.uk":"Mirror","nybooks.com":"The New York Review of Books","nytimes.com":"The New York Times","plos.org":"PLOS","press.princeton.edu":"Princeton University Press","princeton.edu":"Princeton University","quora.com":"Quora","rationality.org":"Center for Applied Rationality","telegraph.co.uk":"The Telegraph","theatlantic.com":"The Atlantic","theguardian.com":"The Guardian","theregister.co.uk":"The Register","usatoday.com":"USA Today","usnews.com":"U.S. News & World Report","washingtonpost.com":"The Washington Post","who.int":"World Health Organization","wikipedia.org":"Wikipedia","wired.com":"WIRED","wsj.com":"The Wall Street Journal"};function c(n){var l=Date.parse(n);if(l){var m=new Date(l);var k=["January","February","March","April","May","June","July","August","September","October","November","December"];return k[m.getUTCMonth()]+" "+m.getUTCDate()+", "+m.getUTCFullYear()}else{return 0}}function i(l,m){var k=(l-m)/(1000*60*60*24);if(k>2){return false}else{return true}}function b(){var q=document.getElementsByTagName("meta");var x={url:document.URL};for(var p=0;p<q.length;p++){var m=q.item(p).name;if(m){m=m.trim().toLowerCase()}var l=q.item(p).getAttribute("property");if(l){l=l.trim().toLowerCase()}var z=q.item(p).content;if(z){z=z.trim()}if(l=="og:title"||m=="title"){x.title=z}else{if(m=="author"||m=="article:author_name"||m=="dcsext.author"){x.author=z}else{if(m=="byl"){x.author=z.replace(/^[Bb][Yy] /,"")}else{if(l=="og:site_name"||m=="cre"){x.publisher=z}else{if(m=="dat"||m=="dcterms.date"||l=="article:modified_time"||l=="article:published_time"||m=="date"||m=="timestamp"||m=="sailthru.date"||m=="displaydate"||m=="dc.date.issued"){x.date=z}}}}}}if(!("title" in x)){x.title=document.title}var w=new Date();x.accessdate=c(w.toUTCString());if(f){var y=document.getElementsByClassName("author");if(y.length>0&&!("author" in x)){x.author=y[0].textContent.trim()}var k=document.getElementsByClassName("date");if(k.length>0&&!("date" in x)){x.date=k[0].textContent.trim()}}var u=c(x.date);if(u){x.date=u}if(window.getSelection()!=""){x.quote=window.getSelection().toString()}if(location.hostname in e){var o=e[location.hostname]}else{if(location.hostname.split(".").slice(1).join(".") in e){var o=e[location.hostname.split(".").slice(1).join(".")]}}if(o){x.publisher=o}if(location.hostname=="www.lesserwrong.com"){try{x.date=c(document.getElementsByClassName("posts-page-content-body-metadata-date").item(0).innerText)}catch(n){}try{x.author=document.getElementsByClassName("posts-page-content-header-author").item(0).innerText}catch(n){}}var t=false;if(document.URL.match(/\/\/archive\.is\//)){t=true;x.archiveurl=x.url;if("date" in x){x.archivedate=x.date}x.url=document.querySelectorAll("input")[0].value;delete x.date;delete x.publisher}else{if(document.URL.match(/\/\/web\.archive\.org\/web\//)){t=true;x.archiveurl=x.url;x.url=encodeURI(document.querySelectorAll("input#wmtbURL")[0].value);var r=document.URL.match(/\/\/web\.archive\.org\/web\/\d{8}/)[0].substr(-8);x.archivedate=c(r.substr(0,4)+"-"+r.substr(4,2)+"-"+r.substr(6,2))}}if(t){var v=Date.parse(x.archivedate);if(v){var s=new Date(v);if(!i(w,s)){x["dead-url"]="yes"}}if(!("dead-url" in x)){x["dead-url"]="no"}}return x}function d(m){var k="The following metadata were detected:\n\n";for(var l in m){k+=l+" = "+m[l]+"\n"}k+="\nYou can copy this reference:";return k}function h(m){if("archiveurl" in m){var k=m.archiveurl}else{var k=m.url}var l="";if("author" in m){l+=m.author+". "}if("title" in m){l+="[“"+m.title+"”]("+k+"). "}if("publisher" in m){l+=m.publisher+". "}if("date" in m){l+=m.date+". "}if("archiveurl" in m){l+="Archived from [the original]("+m.url+") ";if("archivedate" in m){l+="on "+c(m.archivedate)+". "}}l+="Retrieved "+m.accessdate+". ";if("quote" in m){l+="“"+m.quote+"”"}return l.trim()}function a(){var k=b();return[d(k),h(k)]}var g=a();var j=prompt(g[0],g[1])})();