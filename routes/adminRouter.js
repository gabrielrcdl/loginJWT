const express = require("express");
const router = express.Router();

const auth = require('../controller/authController')




router.get('/', auth,  (req, res) => {

    if(req.user.admin){
    res.send('Somente administradores do sistema poderão terem acesso.')

    }
    else{
      res.status(401).send('Not Admin: Access Danied')
    }
})



module.exports = router;