const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  let filename = path.join(__dirname, 'public/views/index/html');
  res.sendFile('filename');
});

const port = process.env.PORT || 5000;
const server = app.listen(port, function(){
  console.log('Listening on port', server.address().port);
});
