# Citewebgen

Citewebgen is a [Cite web][cw] generator. It is a single JavaScript file that
can be installed as a bookmarklet on a browser.

## Features

- Detection of all common fields
- Support for the `quote` field if text is selected on the page
- Date reported in UTC
- Works on all browsers supporting JavaScript

## Installation

You can install the script by copying the contents of the [minified
script][mini] into a bookmark.

## Examples

From
<https://www.theguardian.com/global-development-professionals-network/2015/dec/04/funding-humanitarian-assistance-development-aid>
on Firefox:

![Firefox example](ff_example.png)

From <http://www.wikihow.com/Archive-Websites-on-Unix-Like-Systems> on Google
Chrome:

![Example output](citeweb_example.png)

## Acknowledgements

Special thanks to Ark25 for creating and hosting [RefScript][rs]. I referred to
the source of RefScript while working on Citewebgen. Both scripts are in the
public domain.

[rs]: https://en.wikipedia.org/wiki/User:Ark25/RefScript
[cw]: https://en.wikipedia.org/wiki/Template:Cite_web
[mini]: https://raw.githubusercontent.com/riceissa/citewebgen/master/minified.js
