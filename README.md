# Discord FBI
## A NodeJS Discord RPC that tracks your every (active window) move

### Installation
- Install [NodeJS](https://nodejs.org/en/) (Warning: version 12 and above are not supported because of building issues)
- Install with NPM using `npm install discord-fbi` (in the console)
- Create a .JS file (can name it whatever you want!) and use the following code: 
```js
const FBI = require('discord-fbi');

// you can pass it an array of process names (e.g opera.exe) to hide their title for sensitive information reasons (e.g. your IP can appear in the title of the process)
new FBI();
```
- Start the JS file using the following command (in the console, it being CD'd into the folder where the file is): `node filename.js`
