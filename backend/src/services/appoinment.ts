var appoinmentModel = require('../models/appoinmentModel');
var categoryService = require('../services/category');

var { v4: uuidv4 } = require('uuid');

const apoinmentServices = {
  createAppoinment: async ({ ...rest }, res: any) => {
    console.log('USERRRR', rest);
    try {
      const { userId, name, description, categoryId, dateAndTime, doctorId } = rest;
      const getCategory = await categoryService.getCategories();
      console.log('category', categoryId);
      console.log(
        'getCategory',
        !getCategory?.some((x: { appoinmentId: string }) => x?.appoinmentId === categoryId)
      );
      const isCategoryExists = !getCategory?.some(
        (x: { categoryId: string }) => x?.categoryId === categoryId
      );
      if (isCategoryExists) throw new Error('Category not found!');

      const newAppoinment = new appoinmentModel({
        appoinmentId: uuidv4(),
        doctorId,
        userId,
        name,
        description,
        categoryId,
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
        appoinmentId: appoinmentId
      });
      console.log('RESSS', response);
      return response;
    } catch (e: any) {
      console.log('Error', e);
      throw new Error(e);
    }
  },
  getAppoinments: async () => {
    const response = await appoinmentModel.find({}).lean();
    const appoinments = response?.map((appoinment: any) => ({
      ...appoinment,
      appoinmentId: appoinment.appoinmentId,
    }));
    console.log('Appinments', appoinments);
    return response;
  }
};

module.exports = apoinmentServices;
