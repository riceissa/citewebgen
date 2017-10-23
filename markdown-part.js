// We don't want to return anything from this script, so wrap the main part in
// a function...
function citationWrapper() {
  var metadata = getMetadata();

  var print_str = metadata["url"] + ' "';

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
  print_str += "Retrieved " + metadata["accessdate"] + ".";
  // print_str = print_str.trim();
  print_str += '"';

  var verbose_str = "The following metadata were detected:\n\n";
  for (var key in metadata) {
    verbose_str += key + " = " + metadata[key] + "\n";
  }
  verbose_str += "\nYou can copy this reference:";

  return [verbose_str, print_str];
}
var res = citationWrapper();
// var s = prompt("Copy this reference:", print_str);
var s = prompt(res[0], res[1]);
