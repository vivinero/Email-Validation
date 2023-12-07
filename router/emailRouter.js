const router = require('express').Router()
const{home, createVal, updateuser}= require('../controller/emailController')

router.get("/", home)
router.post("/createuser", createVal)
router.put("/updateuser/:id", updateuser)


module.exports = router