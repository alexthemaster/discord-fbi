#!/usr/bin/env node
const program = require('commander');
const FBI = require('../index');
const pkg = require('../../package.json');

program
    .option('-s, --sensitive <process names>', 'pass it one or multiple process names (separated by commas) (e.g opera.exe, Code.exe) to hide their title for sensitive information reasons')
    .parse(process.argv)
    .version(pkg.version);

const sensitive = program.sensitive ? program.sensitive.split(', ') : '';

if (sensitive) console.log(`Hiding the title for the following process': ${sensitive.join(', ')}`)

return new FBI(sensitive);