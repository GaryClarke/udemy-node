console.log('Starting app.js');

/**************************************** Vendor packages ****************************************/
const fs = require('fs');
const _ = require('lodash');
/**************************************** User packages ****************************************/
const notes = require('./notes');

var command = process.argv[2];

console.log(`Commad: ${command}`);

if (command === 'add') {

    console.log('Adding new note');

} else if (command === 'list') {

    console.log('Listing all notes.');

} else if (command === 'read') {

    console.log('Reading note');

} else if (command === 'remove') {

    console.log('Removing note');

} else {

    console.log('Command not recognised');
}