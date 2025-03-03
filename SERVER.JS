const express = require('express')
const app = express();
const db = require('./db.js')

const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get('/', function (req, res) {
    res.send('welcome to my hotel...')
})

const personroutes = require('./routes/personroutes.js');

app.use('/person', personroutes)

const menuitemsroutes = require('./routes/menuitemsroutes.js');

app.use('/menuitems', menuitemsroutes)

//for app
app.listen(3000, () => {
    console.log('listening to port 3000')
})