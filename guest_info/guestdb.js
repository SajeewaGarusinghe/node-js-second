const chalk = require('chalk');
const fs = require('fs');
// import chalk from 'chalk';
//console.log('guest db');

const db_file = 'data.json';

const addGuest = (name, address, contact, date) => {
  const guests = loadGuest();
  const length = guests.length;

  console.log(length);
  //let id = length;
  let id = 1;
  if (length > 0) {
    id = guests[length - 1].id + 1;
  }
  guests.push({ id, name, address, contact, date });
  saveGuest(guests);
  // console.log(chalk.green('add guest', name));
};
const updateGuest = (id, name, address, contact, date) => {
  const guests = loadGuest();
  const guestIndex = guests.findIndex((guest) => guest.id === id);
  if (guestIndex != -1) {
    const guest = guests[guestIndex];
    guest.name = name ? name : guest.name;
    guest.address = address ? address : guest.address;
    guest.contact = contact ? contact : guest.contact;
    guest.date = date ? date : guest.contact;

    saveGuest(guests);
    console.log(chalk.yellow('update guest', id));
  } else {
    console.log(chalk.yellow.inverse('No record found for that id', id));
  }
};
const deleteGuest = (id) => {
  const guests = loadGuest();
  let newGuests = [];
  newGuests = guests.filter((guest) => guest.id !== id);

  if (guests.length > newGuests.length) {
    console.log(chalk.red('delete guest', id));
    saveGuest(newGuests);
  } else {
    console.log(chalk.red.inverse('No record found for that id', id));
  }
};
const readGuest = (id) => {
  console.log(chalk.blue('read guest', id));
  const guests = loadGuest();
  // guests.filter(guest =>guest.id=== id).forEach((element) => {
  //   console.log(element);
  // });
  const guest = guests.find((guest) => {
    return guest.id === id;
  });

  if (guest) {
    console.log(guest);
  } else {
    console.log(chalk.red('no user for that id'));
  }
  // guests.forEach((guest) => {
  //   if (guest.id === id) {
  //     console.log(guest);
  //   }
  // });
};
const listGuest = () => {
  console.log(chalk.magenta('list guest'));
  const guests = loadGuest();
  console.log(guests);
};

const saveGuest = (guest) => {
  dataJSON = JSON.stringify(guest);
  fs.writeFileSync(db_file, dataJSON);
  console.log(chalk.red('data saved'));
};
const loadGuest = () => {
  // return JSON.parse(fs.readFileSync(db_file).toString());

  try {
    const dataBuffer = fs.readFileSync(db_file);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    console.log('no guest file >> new file created');
    return [];
  }
};

module.exports = {
  addGuest,
  updateGuest,
  deleteGuest,
  readGuest,
  listGuest,
};
