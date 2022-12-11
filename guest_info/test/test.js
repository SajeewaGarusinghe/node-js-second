const fs = require('fs');

const os = require('os');

// fs.writeFileSync('data.txt', 'hellow');
// fs.appendFileSync('data.txt', 'we are one');

// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.uptime());
// console.log('app print');
// db.add()

// console.log(chalk.blue.bgCyan.inverse.bold('Hello'));

// console.log(process.argv);


// ---------write to a file--------------------
// const guests = [];
// guests.push({
//   name: 'name1',
//   address: 'address1',
// });

// const dataJson = JSON.stringify(guests);
// fs.writeFileSync('data.json', dataJson);


//-----------read from a file------------------------
const dataBuffer = fs.readFileSync('data.json');
console.log(dataBuffer);
const dataJson = dataBuffer.toString();
console.log(dataJson);
const data=JSON.parse(dataJson)
console.log(data[0].name);


