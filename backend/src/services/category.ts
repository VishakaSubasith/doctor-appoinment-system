var categoryModel = require('../models/categoryModel');
var { v4: uuidv4 } = require('uuid');

// Add User to Database---------------------------------------
const categoryServices = {
  createCategory: async ({ ...rest }, res: any) => {
    console.log('Category', rest);
    const { category, description} = rest;
    const newAppoinment = new categoryModel({
      category,
      description
    });
    await newAppoinment.save();
  },
  getCategories: async () => {
    const response = await categoryModel.find({}).lean();
    const categories = response?.map((category: any) => ({
      ...category,
      _id: category._id.toString(),
    }));
    console.log('getCategories', categories);
    return response;
  }
};

module.exports = categoryServices;
