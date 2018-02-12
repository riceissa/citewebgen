function sqlQuote(x) {
  if (! x) {
    return "NULL";
  }
  x = x.replace(/\\/g, "\\\\");
  x = x.replace(/'/g, "''");
  x = x.replace(/\n/g, "\\n");
  return "'" + x + "'";
}

function printStr(metadata) {
  var result = ",(";
  if ("title" in metadata) {
    result += sqlQuote(metadata["title"]);
  } else {
    result += "NULL";
  }
  result += "," + sqlQuote(metadata["url"]);
  result += ",NULL";  // document_type
  if ("date" in metadata) {
    result += "," + sqlQuote(metadata["date"]);
    result += "," + sqlQuote("day");
  } else {
    result += ",NULL";
  }
  result += ",NULL,NULL"; // modified_date and modified_date_precision
  if ("publisher" in metadata) {
    result += "," + sqlQuote(metadata["publisher"]);
  } else {
    result += ",NULL";
  }
  result += ",NULL)";  // notes
  return result;
}
