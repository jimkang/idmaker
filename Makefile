test:
	node tests/basictests.js

pushall:
	git push origin master && npm publish --access=public

prettier:
	prettier --single-quote --write "**/*.js"
