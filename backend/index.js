
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const applicationRoutes = require('./routes/application.route');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://vaibhavsardar1210:6DyXQ9WxIbE08Hgf@cluster0.thoabre.mongodb.net/?retryWrites=true&w=majority');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use(cors());
app.use(cors({credentials: true,
  origin: ["http://localhost:3000", "jobapplicationtracker-t68s.vercel.app"],
  
 }));

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use('/api', applicationRoutes);





app.listen(PORT, () => {
  console.log(`Server is running on  port ${PORT}`);

});
