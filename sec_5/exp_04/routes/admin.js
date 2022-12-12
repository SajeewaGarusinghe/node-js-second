const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();

// /admin/add =>GET
router.get('/add', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add.html'));
});

// /admin/add =>POST
router.post('/add', (req, res, next) => {
  console.log(req.body);
  res.redirect('/add');
});

// console.log(rootDir);
module.exports = router;

// In the next lecture, we'll write this code:

//     module.exports = path.dirname(process.mainModule.filename);

// (I explain why we write this code in the next lecture when we write it!)

// The important thing is that you might get a deprecation warning for that code - in that case, you can simply switch to this code:

//     module.exports = path.dirname(require.main.filename);

// Quite straightforward :)
