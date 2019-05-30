@echo off
call ./node_modules/.bin/mocha src/test/users.test.js
call ./node_modules/.bin/mocha src/test/reddit_api.test.js