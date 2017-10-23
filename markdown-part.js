// We don't want to return anything from this script, so wrap the main part in
// a function...
function citationWrapper() {
  var metadata = getMetadata();

  if ("archiveurl" in metadata) {
    var print_str = metadata["archiveurl"] + ' "';
  } else {
    var print_str = metadata["url"] + ' "';
  }

  if ("author" in metadata) {
    print_str += metadata["author"] + ". ";
  }
  if ("title" in metadata) {
    print_str += '“' + metadata["title"] + '”. ';
  }
  if ("publisher" in metadata) {
    print_str += metadata["publisher"] + ". ";
  }
  if ("date" in metadata) {
    print_str += metadata["date"] + ". ";
  }
  if ("archiveurl" in metadata) {
    print_str += "Archived from the original (" +
      metadata["url"] + ") ";
    if ("archivedate" in metadata) {
      print_str += "on " + getDateFromStr(metadata["archivedate"]) + ". ";
    }
  }

  print_str += "Retrieved " + metadata["accessdate"] + ".";
  // print_str = print_str.trim();
  print_str += '"';

  return [verboseStr(metadata), print_str];
}
var res = citationWrapper();
// var s = prompt("Copy this reference:", print_str);
var s = prompt(res[0], res[1]);
