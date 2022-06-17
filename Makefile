MAIN_FILE	:=	src/index.js

run: $(MAIN_FILE)
	node $?

dev: $(MAIN_FILE)
	nodemon $?
