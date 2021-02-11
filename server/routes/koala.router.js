const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
koalaRouter.get('/', (req, res) => {
  pool
    .query(`SELECT * FROM "koalas"`)
    .then(function (dbRes) {
      console.log('dbRes.rows', dbRes.rows);
      res.send(dbRes.rows);
    })
    .catch(function (error) {
      console.log('GET error', error);
      res.sendStatus(500);
    });
});

// POST

// PUT

// DELETE

module.exports = koalaRouter;
