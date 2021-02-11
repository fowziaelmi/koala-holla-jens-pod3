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
koalaRouter.post('/', (req, res) => {
  let sqlText = `INSERT INTO "koalas" ("name", "age", "gender", "ready_for_transfer", "notes")`;
  let sqlArgs = [
    req.body.name,
    req.body.age,
    req.body.gender,
    req.body.ready_for_transfer,
    req.body.notes,
  ];

  pool
    .query(sqlText, sqlArgs)
    .then(function (dbRes) {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log('POST error', error);
    });
});

// PUT

// DELETE

module.exports = koalaRouter;
