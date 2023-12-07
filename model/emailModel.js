const mongoose = require("mongoose")
const emailSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    phoneNumber:{
        type: String,
    },
    password:{
        type: String,
    }
})

const emailModel = mongoose.model("emailVal", emailSchema)
module.exports = emailModel