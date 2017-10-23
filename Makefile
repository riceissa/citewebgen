.PHONY: all
all: mediawiki-minified.js markdown-minified.js

mediawiki-minified.js:
	cat common.js mediawiki-part.js > temp.js
	yui-compressor temp.js > "$@"
	rm -f temp.js

markdown-minified.js:
	cat common.js markdown-part.js > temp2.js
	yui-compressor temp2.js > "$@"
	rm -f temp2.js
