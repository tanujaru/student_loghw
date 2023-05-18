
// Require 


const express = require('express');
// creating express app
const app = express();

require('dotenv').config();
const mongoose = require('mongoose');

// method override
const methodOverride = require('method-override');


// Mongoose Connection *******************


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', ()=> {
  console.log('connected to mongo');
})


// Setting Up View Engine*****************

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


// Setting Up Body *************

app.use(express.urlencoded({extended:false}));


// Method Override***************


app.use(methodOverride('_method'));

// routes moved to controllers
const logController = require('./controllers/logs')
app.use('/logs', logController)


// App Is Listening**************


app.listen(3000, () => {
  console.log('listening on port 3000');
});