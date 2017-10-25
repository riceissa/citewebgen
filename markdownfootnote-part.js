function printStr(metadata) {
  if ("archiveurl" in metadata) {
    var url = metadata["archiveurl"];
  } else {
    var url = metadata["url"];
  }

  var res = "";

  if ("author" in metadata) {
    res += metadata["author"] + ". ";
  }
  if ("title" in metadata) {
    res += "[“" + metadata["title"] + "”](" + url + "). ";
  }
  if ("publisher" in metadata) {
    res += metadata["publisher"] + ". ";
  }
  if ("date" in metadata) {
    res += metadata["date"] + ". ";
  }

  if ("archiveurl" in metadata) {
    res += "Archived from [the original](" + metadata["url"] + ") ";
    if ("archivedate" in metadata) {
      res += "on " + getDateFromStr(metadata["archivedate"]) + ". ";
    }
  }

  res += "Retrieved " + metadata["accessdate"] + ". ";

  if ("quote" in metadata) {
      res += '“' + metadata["quote"] + '”';
  }

  return res.trim();
}
