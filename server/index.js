var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var path = require('path');
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname + '/../client/index.html'));
})
app.post('/', function(req, res){
  res.status(200);
})

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
