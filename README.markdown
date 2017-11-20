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
script](https://raw.githubusercontent.com/riceissa/citewebgen/master/mediawiki-minified.js) into a bookmark.

Minified scripts for [Markdown](https://raw.githubusercontent.com/riceissa/citewebgen/master/markdown-minified.js)
and [Markdown footnote](https://raw.githubusercontent.com/riceissa/citewebgen/master/markdownfootnote-minified.js)
versions are also available.

## Examples

From
<https://www.theguardian.com/global-development-professionals-network/2015/dec/04/funding-humanitarian-assistance-development-aid>
on Firefox:

![Firefox example](ff_example.png)

From <http://www.wikihow.com/Archive-Websites-on-Unix-Like-Systems> on Google
Chrome:

![Example output](citeweb_example.png)

## Caveats

On Firefox, some websites (e.g. GitHub and Twitter) block bookmarklets from
executing. If you have the developer console open while trying to run the
script, you will see the following message:

> Content Security Policy: The page’s settings blocked the loading of a
> resource at self

I'm not sure how to fix this on Firefox, but one workaround is to open the same
page on Chrome and run Citewebgen there.

## Adding a new filetype

In this section, by "filetype" we mean the output formats, like MediaWiki,
Markdown, or Markdown footnote.
Citewebgen is written in a modular way, so that it is possible to easily add
new filetypes.
The files `common.js` and `main.js` are used for all filetypes.
To add a new filetype, all you need to do is implement the `printStr`
function. This function takes as input a dictionary called `metadata` with all
of the metadata in separate key-value pairs. The function must return a string.
You can look at the samples [`mediawiki-part.js`](mediawiki-part.js),
[`markdown-part.js`](markdown-part.js), and
[`markdownfootnote-part.js`](markdownfootnote-part.js) to see how the function
is implemented for the existing filetypes.

Once you have implemented `printStr`, place that in a file called
`newfiletype-part.js`. Then do:

```bash
(echo 'javascript:(function(){' && cat common.js newfiletype-part.js main.js && echo '})();') > temp.js
yui-compressor temp.js > newfiletype-minified.js
rm -f temp.js
```

Now the final bookmarklet is stored in `newfiletype-minified.js`.

## Acknowledgements

Special thanks to Ark25 for creating and hosting [RefScript][rs]. I referred to
the source of RefScript while working on Citewebgen. Both scripts are in the
public domain.

[rs]: https://en.wikipedia.org/wiki/User:Ark25/RefScript
[cw]: https://en.wikipedia.org/wiki/Template:Cite_web
