# Discord FBI
## A NodeJS Discord RPC that tracks your every (active window) move

### Requirements
- [Node.js](https://nodejs.org/en/)
- [node-gyp](https://github.com/nodejs/node-gyp)

### Usage
There are several ways you can use discord-fbi:
- Use it directly from the terminal: (recommended)
    1. `npx discord-fbi`
    1. Or install it globally: `npm install --global discord-fbi` and use it in the CLI (just run `discord-fbi` in a terminal!)
        ```
        Usage: discord-fbi [options]

        Options:
        -s, --sensitive <process names>  pass it one or multiple process names (separated by commas) (e.g opera.exe, Code.exe) to hide their title for sensitive information reasons
        -h, --help                       output usage information
        ```
- Install the package using npm: `npm install discord-fbi --no-optional` and set it up in a JS file like this:
    ```js
    const FBI = require('discord-fbi');

    // you can pass it an array of process names (e.g opera.exe) to hide their title for sensitive information reasons (e.g. your IP can appear in the title of the process)
    new FBI();
    ```
    After this, just run the file using `node <filename>.js`