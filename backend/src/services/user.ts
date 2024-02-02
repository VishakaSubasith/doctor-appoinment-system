const userModel = require('../models/userModel');
var { v4: uuidv4 } = require('uuid');

// Add User to Database---------------------------------------
const userControllers = {
  signUp: async ({ ...rest }, res: any) => {
    console.log('USERRRR', rest);
    const { username, email, address, contactno, gender, password } = rest;
      const newUser = new userModel({
        username,
        email,
        address,
        contactno,
        gender,
        password
      }); 
      await newUser.save();    
  },
  singIn: async ({ ...rest }, res: any) => {
    const { email, password } = rest;

      const response = await userModel.findOne({
        email: email,
        password: password
      });
      console.log('RESSS', response);
      return response;
  }
};

module.exports = userControllers;
