const yargs = require('yargs');
// const fs = require('fs');
const db = require('./guestdb');
 
yargs.version('1.1.3');

//add
yargs.command({
  command: 'add',
  describe: 'To add guest',
  builder: {
    name: { describe: 'Name', type: 'String', demandOption: true },
    address: { describe: 'Address', type: 'String'},
    contact: { describe: 'Contact No', type: 'Number' },
    date: { describe: 'Visit date', type: 'String' },
  },
  handler: function (argv) {
    db.addGuest(argv.name, argv.address, argv.contact, argv.date);
    // console.log('Name=', argv.name);
    // console.log('Address=', argv.address);
  },
});

//update
yargs.command({
  command: 'update',
  describe: 'To update guest',
  builder: {
    id: { describe: 'ID', type: 'number', demandOption: true },
    name: { describe: 'Name', type: 'String' },
    address: { describe: 'Address', type: 'String' },
    contact: { describe: 'Contact No', type: 'Number' },
    date: { describe: 'Visit date', type: 'String' },
  },
  handler(argv) {
    db.updateGuest(argv.id, argv.name, argv.address, argv.contact, argv.date);
  },
});

//delete
yargs.command({
  command: 'delete',
  describe: 'To delete guest',
  builder: {
    id: { describe: 'ID', type: 'number', demandOption: true },
  },
  handler: function (argv) {
    db.deleteGuest(argv.id);
    // console.log('Name=', argv.name);
    // console.log('Address=', argv.address);
  },
});

//read
yargs.command({
  command: 'read',
  describe: 'To read a guest',
  builder: {
    id: { describe: 'ID', type: 'number', demandOption: true },
  },
  handler: function (argv) {
    db.readGuest(argv.id);
    // console.log('Name=', argv.name);
    // console.log('Address=', argv.address);
  },
});

//list
yargs.command({
  command: 'list',
  describe: 'To list guest',

  handler(argv) {
    db.listGuest();
  },
});

yargs.parse();
//console.log(yargs.argv);
