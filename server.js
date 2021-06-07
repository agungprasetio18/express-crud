const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");

//import routes
const articleRoutes = require('./routes/articleRoutes');
const commentRoutes = require('./routes/commentRoutes');

//package
var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


//routes
app.use('/article', articleRoutes);
app.use('/comment', commentRoutes);

//connect to db 
const db = "mongodb+srv://agungp:12345678agung@Pertama.phaty.mongodb.net/Pertama?retryWrites=true&w=majority";
mongoose.connect(db,  { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected'))
        .catch(err => console.log(err));

app.listen(3000, () => {
    console.log('Server is running 3000 !');
});