const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
koalaRouter.get('/', (req, res) => {
  pool
    .query(`SELECT * FROM "koalas" ORDER BY "id"`)
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
  let sqlText = `INSERT INTO "koalas" ("name", "age", "gender", "ready_for_transfer", "notes") VALUES($1, $2, $3, $4, $5)`;
  let sqlArgs = [
    req.body.name,
    req.body.age,
    req.body.gender,
    req.body.readyForTransfer,
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
koalaRouter.put('/readyForTransfer/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  let koalaId = req.params.id;
  // let newValue = req.body.read;

  let sqlText = `UPDATE "koalas" SET "ready_for_transfer" = 'TRUE' WHERE "id"=$1`;

  pool
    .query(sqlText, [koalaId])
    .then((dbRes) => {
      console.log('dbRes is ', dbRes);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
    });
});

// DELETE

module.exports = koalaRouter;
