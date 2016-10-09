
# Fetch API test

### A very simplified example of using Fetch API to get data from the remote resource. Can be used as API client.


### Demo: [http://fetchtest.dmitryshevchenko.com/](http://fetchtest.dmitryshevchenko.com/)

## Features:
- Fetch API with polyfill for the old browsers by using Babel and Browserify
- Using ES6 modules with polyfill
- Highlight results (JSON or XML)
- Gulp automation for auto-compiling JS and LESS
- JS autotests


## Installation:
- Checkout project
- Execute ```npm install``` in the project root folder
- Execute from the project root
```
./node_modules/.bin/gulp --gulpfile ./gulp_tasks/app_tasks.js front:compile:less
./node_modules/.bin/gulp --gulpfile ./gulp_tasks/app_tasks.js front:comile:js
```


**Note:** we do not install gulp globally

Results compiled JS and CSS would be in the www/js and www/css folder.


## Mocks:
The json and XML files are expected in ```www/mock``` folder. For now the file name should be response.(xml/json)


## Tests:
Test are available in the test folder.
Execute ``` npm test ```


## Dependencies:
For the code highlighting this project depends on [PrismJS](http://prismjs.com/)  http://prismjs.com/


The module would be installed by node, you need to **copy CSS** from ```node_modules/prismjs/themes/prism.css```  into the ```www/thirdparty/css``` folder



## License: 
MIT






