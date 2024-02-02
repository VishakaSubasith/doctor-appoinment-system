var appoinmentModel = require('../models/appoinmentModel');
var categoryService = require('../services/category');

var { v4: uuidv4 } = require('uuid');

const apoinmentServices = {
  createAppoinment: async ({ ...rest }, res: any) => {
    console.log('USERRRR', rest);
    try {
      const { userId, name, description, category, dateAndTime } = rest;
      const getCategory = await categoryService.getCategories();
      console.log('category', category);
      console.log(
        'getCategory',
        !getCategory?.some((x: { _id: string }) => x?._id?.toString() === category)
      );
      const isCategoryExists = !getCategory?.some(
        (x: { _id: string }) => x?._id?.toString() === category
      );
      if (isCategoryExists) throw new Error('Category not found!');

      const newAppoinment = new appoinmentModel({
        userId,
        name,
        description,
        category,
        dateAndTime
      });
      await newAppoinment.save();
    } catch (e: any) {
      console.log('Error', e);
      throw new Error(e);
    }
  },
  getAppoinment: async ({ ...rest }, res: any) => {
    const { appoinmentId } = rest;
    try {
      const response = await appoinmentModel.findOne({
        _id: appoinmentId
      });
      console.log('RESSS', response);
      return response;
    } catch (e: any) {
      console.log('Error', e);
      throw new Error(e);
    }
  }
};

module.exports = apoinmentServices;
