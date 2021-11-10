const mongoose = require('mongoose')

const visiteSchema = new mongoose.Schema(
    {
        titre : {
            type : String, 
            required : true,
            
        }, 
        description: {
            type : String, 
            required: true,
        }, 
        photo: {
            type: String, 
            required: true
        }, 
        visiteurs: {
            type : [String]
        }
    }
)

const VisitesModel = mongoose.model('visite', visiteSchema)
module.exports = VisitesModel