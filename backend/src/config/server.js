const port = 3333;

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(morgan('tiny'));
server.use(cors());

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = server;
