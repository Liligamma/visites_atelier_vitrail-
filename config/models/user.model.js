const mongoose = require('mongoose')
const {isEmail} = require('validator')


const userSchema = new mongoose.Schema(
    {
        nom: {
            type: String, 
            required: true, 
            trimp: true
        }, 
        prenom: {
            type: String, 
            required: true, 
            trim : true
        }, 
        dateDeNaissance: {
            type : Date, 
            required : true
        }, 
        email: {
            type : String, 
            required: true, 
            validate : [isEmail], 
            lowercase: true, 
            trim : true
        }

    }
)