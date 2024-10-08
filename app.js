const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Portfolio running on http://localhost:3000');
});