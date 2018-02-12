function printStr(metadata) {
  if ("archiveurl" in metadata) {
    var url = metadata["archiveurl"];
  } else {
    var url = metadata["url"];
  }

  var result = "<ref>";
  if ("author" in metadata) {
    result += metadata["author"] + ". ";
  }
  result += "[" + url;
  if ("title" in metadata) {
    result += ' "' + metadata["title"] + '"].';
  }
  if ("date" in metadata) {
    result += " " + metadata["date"] + ".";
  }
  if ("publisher" in metadata) {
    result += " " + metadata["publisher"] + ".";
  }
  if ("archiveurl" in metadata) {
    res += "Archived from [" + metadata["url"] + " the original]";
    if ("archivedate" in metadata) {
      res += "on " + getDateFromStr(metadata["archivedate"]) + ". ";
    }
  }
  result += "Retrieved " + metadata["accessdate"] + ".";
  if ("quote" in metadata) {
      res += '"' + metadata["quote"] + '"';
  }
  result += "</ref>";
  return result;
}
