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

        notes.logNote(note);

    } else {

        console.log('The note was not added');
    }

} else if (command === 'list') {

    var allNotes = notes.getAll();
    
    console.log(`Printing ${allNotes.length} note(s).`)

    allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {

    var note = notes.getNote(argv.title);

    if (note) {

        console.log(`Note found`);
        notes.logNote(note);

    } else {

        console.log(`Note not found`);
    }



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