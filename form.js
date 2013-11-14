var express = require('express');
var app     = express();

app.use(express.bodyParser());

app.post('/myaction', function(req, res) {
  res.send('Your form has been sent!');
});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
