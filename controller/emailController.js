const emailModel = require("../model/emailModel")
const  val  = require("../helpers/validator")

exports.home = (req, res) => {
    res.send(`Welcome`)
}
exports.createVal = async (req, res) => {
    try {
        const data ={
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        }

        await val.validate(data);

        const user = await emailModel.create(data);

        res.status(201).json({
            message: `user with email ${user.email} has been created successfully`,
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            message: `unable to create a user`,
            error: error.message
        })
    }
}
exports.updateuser = async (req, res) => {
    try {
        const data ={
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        }

        await val.validate(data);

        const user = await emailModel.findByIdAndUpdate(req.params.id, data,{new: true});

        res.status(201).json({
            message: `user with email ${user.email} has been updated successfully`,
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            message: `unable to update a user`,
            error: error.message
        })
    }
}