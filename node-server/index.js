const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const VolunteerModel = require('./models/Volunteer')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Volunteer")

app.post('/login',(req,res) =>{
    const {email,password} = req.body;
    VolunteerModel.findOne({email:email})
    .then(user =>{
       if(user){
        if(user.password === password){
            res.json("Success")
        }else{
            res.json("the password is incorrect")
        }
       } else {
        res.json("No record existed")
       }
    })
 
 })

app.post('/Volunteer',(req,res) =>{
   VolunteerModel.create(req.body)
   .then(employee => res.json(volunteers))
   .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running.")
})
