const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();

// require('dotenv/config');

const app = express();




//Middlewares
app.use(cors());
app.use(bodyParser.json());

//IMPORT Routes
const posts = require('./routes/posts')


//ROUTES
router.get('/', (req, res) => {
   res.send('we are on home');
});
router.use('/posts',posts)


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true,useUnifiedTopology: true },
    // {  },
    () =>{
        console.log('connected to DB');
    });


//LISTEN
app.listen(process.env.PORT||9000);

app.use('/api', router);