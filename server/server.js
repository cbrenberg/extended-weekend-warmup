console.log('Wooooo');
const express = require('express');
const app = express();
const pg = require('pg');

const pool = new pg.Pool({
  host: 'localhost', // Server hosting the postgres database
  port: 5432, 
  database: 'spooky_things',
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000
})

pool.on('connect', () => {
  console.log('Postgres up and running!');
})

pool.on('error', (error) => {
  console.log('Postgres error:', error);
})

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Up and running on port ${PORT}`);
})

app.get('/greeting', (req, res) => {
  res.send('Boo');
})

app.get('/monsters', (req, res) => {
  res.send(['Giant Spider', 'Mummy', 'Ghost']);
})