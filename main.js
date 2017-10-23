// We don't want to return anything from this script, so wrap the main part in
// a function...
function citationWrapper() {
  var metadata = getMetadata();
  return [verboseStr(metadata), printStr(metadata)];
}
var res = citationWrapper();
// var s = prompt("Copy this reference:", print_str);
var s = prompt(res[0], res[1]);
