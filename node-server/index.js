const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/form');
    console.log('mongodb connected');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  const volunteerSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true,
       trim: true
    },
    phoneNumber: {
       type: String,
       required: true,
       trim: true
    },
    email: {
       type: String,
       required: true,
       trim: true,
       unique: true,
       match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    availability: {
       type: [String],
       required: true
    },
    jobPreferences: {
       type: [String],
       required: true
    }
   });

   const volunteer = mongoose.model('volunteer', volunteerSchema);


const server=express();
const corsOptions = {
    origin: 'http://localhost:3000', // Adjust this to match your React app's origin
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
   };
   

server.use(cors(corsOptions));
server.use(bodyParser.json());
main().catch(err => console.log(err));



server.post('/form', async (req, res) => {
    console.log('Received POST request');
    try {
       let newVolunteer = new volunteer({
         name: req.body.name,
         phoneNumber: req.body.phoneNumber,
         email: req.body.email,
         availability: req.body.availability,
         jobPreferences: req.body.jobPreferences,
       });
       const doc = await newVolunteer.save();
       console.log(doc);
       res.json(doc);
    } catch (error) {
       console.error('Error handling POST request:', error);
       res.status(500).json({ message: 'An error occurred', error });
    }
});


   
server.listen(8080,()=>{
    console.log('listening on port');
})
