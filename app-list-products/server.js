var compression = require('compression')

const express = require('express');
const app = express();

app.use(compression());
app.use(express.static(__dirname + '/dist/app-list-products'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/app-list-products/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log("up and running on port " + process.env.PORT);
});

