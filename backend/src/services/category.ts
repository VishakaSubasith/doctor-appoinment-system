var categoryModel = require('../models/categoryModel');
var { v4: uuidv4 } = require('uuid');

// Add User to Database---------------------------------------
const categoryServices = {
  createCategory: async ({ ...rest }, res: any) => {
    console.log('Category', rest);
    const { category, description} = rest;
    const newAppoinment = new categoryModel({
      categoryId: uuidv4(),
      category,
      description
    });
    await newAppoinment.save();
  },
  getCategories: async () => {
    const response = await categoryModel.find({}).lean();

    console.log('getCategories response', response);
    return response;
  },
  getCategoryById: async (categoryId: string) => {
    const response = await categoryModel.findOne({categoryId: categoryId});
    console.log('getCategory', response);
    return response;
  }
};

module.exports = categoryServices;
