const User = require("../models/USER");

const userController = {

  register: async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } 
    catch (error) {
      res.status(400).send(error);
    }
  },


  login: (req, res) => {
    res.send("Login");
  },
};


module.exports = userController;
