function printStr(metadata) {
  var result = "[" + metadata["url"];
  if ("title" in metadata) {
    result += ' "' + metadata["title"] + '"].';
  }
  if ("date" in metadata) {
    result += " " + metadata["date"] + ".";
  }
  if ("publisher" in metadata) {
    result += " " + metadata["publisher"] + ".";
  }
  result += " " + metadata["accessdate"] + ".";
  return result;
}
