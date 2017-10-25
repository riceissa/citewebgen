.PHONY: all
all: mediawiki-minified.js markdown-minified.js markdownfootnote-minified.js

mediawiki-minified.js: common.js mediawiki-part.js main.js
	cat common.js mediawiki-part.js main.js > temp.js
	yui-compressor temp.js > "$@"
	rm -f temp.js

markdown-minified.js: common.js markdown-part.js main.js
	cat common.js markdown-part.js main.js > temp2.js
	yui-compressor temp2.js > "$@"
	rm -f temp2.js

markdownfootnote-minified.js: common.js markdownfootnote-part.js main.js
	cat common.js markdownfootnote-part.js main.js > temp3.js
	yui-compressor temp3.js > "$@"
	rm -f temp3.js
