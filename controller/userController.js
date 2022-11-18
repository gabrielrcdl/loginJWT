const User = require('../models/USER');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


const userController = {


  // deleteAll: async(req, res) => {
  //     const deleteUser = await User.find({User})
  //     return res.send('wewewe')
  // },


  users: async(req, res)=>{
    const getUsers = await User.find({User})
    return res.send(getUsers)
  },


  register: async (req, res) => {

    const selectedUser =  await User.findOne({email: req.body.email})
    if(selectedUser){
        return res.status(400).send('Esse email já se encontra cadastrado em nosso sistema!')
    }


    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password)
    });

    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } 
    catch (error) {
      res.status(400).send(error);
    }
  },


  login: async (req, res) => {

    const selectedUser =  await User.findOne({email: req.body.email})
    if(!selectedUser){
        return res.status(400).send('Email ou senha incorreta!')
    }

    const passwordAndUserMatch =  bcrypt.compareSync(req.body.password, selectedUser.password)
      if(!passwordAndUserMatch){
        return res.status(400).send('Email ou senha incorreta!')
      }

      const token = jwt.sign({_id: selectedUser._id}, process.env.TOKEN_SECRET)

      res.header('authorization-token', token)
      res.status(200).send('Usuário logado com sucesso!')

  },
};


module.exports = userController;
