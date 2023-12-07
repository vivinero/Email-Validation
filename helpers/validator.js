const joi = require("joi")

const val =  joi.object({
    name: joi.string()
            .min(3)
            .max(30)
            .required(),
    email: joi.string()
            .email(),
    phoneNumber:joi.string()
            .pattern(new RegExp("^[0-9]"))
            .min(5)
            .max(11),
    password: joi.string()
            .pattern(new RegExp ('^[a-zA-Z0-9]{8,}$'))
            
})

module.exports = val
