console.log('Starting app.js');

/**************************************** Vendor packages ****************************************/
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
/**************************************** User packages ****************************************/
const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];

console.log(`Command: ${command}`);
console.log('Yargs', argv);

if (command === 'add') {

    let note = notes.addNote(argv.title, argv.body);

    if (note) {

        console.log(`Note: ${note.title} was added`);

    } else {

        console.log('The note was not added');
    }

} else if (command === 'list') {

    notes.getAll();

} else if (command === 'read') {

    notes.read(argv.title);

} else if (command === 'remove') {

    let removed = notes.remove(argv.title);

    if (removed) {

        console.log(`Note: ${argv.title} removed`);

    } else {

        console.log('Nothing removed');
    }

} else {

    console.log('Command not recognised');
}