.PHONY: all
all: mediawiki-minified.js markdown-minified.js markdownfootnote-minified.js mediawikinotemplate-minified.js

mediawiki-minified.js: common.js mediawiki-part.js main.js
	(echo 'javascript:(function(){' && cat common.js mediawiki-part.js main.js && echo '})();') > temp.js
	yui-compressor temp.js > "$@"
	rm -f temp.js

markdown-minified.js: common.js markdown-part.js main.js
	(echo 'javascript:(function(){' && cat common.js markdown-part.js main.js && echo '})();') > temp2.js
	yui-compressor temp2.js > "$@"
	rm -f temp2.js

markdownfootnote-minified.js: common.js markdownfootnote-part.js main.js
	(echo 'javascript:(function(){' && cat common.js markdownfootnote-part.js main.js && echo '})();') > temp3.js
	yui-compressor temp3.js > "$@"
	rm -f temp3.js

mediawikinotemplate-minified.js: common.js mediawikinotemplate-part.js main.js
	(echo 'javascript:(function(){' && cat common.js mediawikinotemplate-part.js main.js && echo '})();') > temp4.js
	yui-compressor temp4.js > "$@"
	rm -f temp4.js
