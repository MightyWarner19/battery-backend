import {
  HomepageForm,
  ServiceForm,
  ProductForm,
} from "../models/forms.model.js";

export const createHomepageForm = async (req, res, next) => {
  try {
    const newForm = new HomepageForm(req.body);
    await newForm.save();
    res.status(200).json(newForm);
  } catch (error) {
    next(error);
  }
};

export const createServiceForm = async (req, res, next) => {
  try {
    const newForm = new ServiceForm(req.body);
    await newForm.save();
    res.status(200).json(newForm);
  } catch (error) {
    next(error);
  }
};

export const createProductForm = async (req, res, next) => {
  try {
    const newForm = new ProductForm(req.body);
    await newForm.save();
    res.status(200).json(newForm);
  } catch (error) {
    next(error);
  }
};
