const fs         = require('fs');
const https      = require('https');
const http      = require('http');
const mockserver = require('mockserver');
const path       = require('path');
const mock       = mockserver(path.join(__dirname, './mocks'), true);

const host       = process.env.HOST  || 'localhost';
const port       = process.env.PORT  || 3000;
const delay      = process.env.DELAY || 500;

const options = {
};

const server = (req, res) => {
  setTimeout(() => mock(req, res), delay);
};

http.createServer(options, server).listen(port, function () {
  console.log(`api-mock server started at http://${host}:${port}`);
});
