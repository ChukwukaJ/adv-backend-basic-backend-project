const sampleData = require('../data/sample.json');

const dataController = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(sampleData));
};

module.exports = dataController;
