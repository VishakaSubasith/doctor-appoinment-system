const userModel = require('../models/userModel');
var { v4: uuidv4 } = require('uuid');

// Add User to Database---------------------------------------
const userControllers = {
  signUp: async ({ ...rest }, res: any) => {
    console.log('USERRRR', rest);
    const { username, email, address, contactno, gender, password, userType } = rest;
      const newUser = new userModel({
        userId: uuidv4(),
        username,
        email,
        address,
        contactno,
        gender,
        password,
        userType
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
  },
  getUserById: async (userType: string, userId: string) => {
      const response = await userModel.findOne({
        userType: userType,
        userId: userId
      });
      console.log('RESSS', response);
      return response;
  },
  getUsersByType: async ({ ...rest }, res: any) => {
    const {userType} = rest
      const response = await userModel.find({
        userType: userType
      });
      console.log('RESSS', response);
      return response;
  }
};

module.exports = userControllers;
