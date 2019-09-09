# Discord FBI
## A NodeJS Discord RPC that tracks your every (active window) move

### Installation
- Install [NodeJS](https://nodejs.org/en/) (Warning: version 12 and above are not supported because of building issues)
- Create a folder you want to store this in, open the console in that specific folder and install with NPM using `npm install discord-fbi`
- Create a .JS file in the created folder (can name it whatever you want!), open it and type out the following code: 
    ```js
    const FBI = require('discord-fbi');

    // you can pass it an array of process names (e.g opera.exe) to hide their title for sensitive information reasons (e.g. your IP can appear in the title of the process)
    new FBI();
    ```
- Start the JS file using the following command (in the console, it being open in the folder you created): `node filename.js`

### Pre-Requisites 
You need to have Build Tools for C++, this being a requirement for [active-win](https://www.npmjs.com/package/active-win), the package that powers discord-fbi.
- If you're on Windows, you need to have [Windows Build Tools](https://www.npmjs.com/package/windows-build-tools) installed (run `npm install --global windows-build-tools` under an administrative command prompt or powershell for easy installation) <span style="color: #eb4034">[Warning: The Windows Build Tools require over 3GB of space to install and use. Make sure you have enough space before starting this installation!]</span>
- On Linux, most distributions come with Python 2.7 pre-installed. As for the C++ building tools, `sudo apt install build-essential` will do fine for most Debian based systems. For others, look towards your package manager and specifically "GCC build tools". This can vary from distribution to distribution but hey, you're using Linux, you should know this stuff. 
- As far as I am concerned, all MacOS versions come with Python 2.7 pre-installed, you will, however, still need the C++ Build Tools, which can be acquired by: 
    - Installing [XCode](https://developer.apple.com/xcode/download/)
    - Once XCode installed, go to Preferences, Downloads, and install the Command Line Tools.