import OilForm  from "../models/oilForm.model.js";
export const createOilForm = async (req, res, next) => {
  try {
    const newForm = new OilForm(req.body);
    await newForm.save();
    res.status(200).json(newForm);
    console.log(req.body);
    sendEmail(req.body);
  } catch (error) {
    next(error);
  }
};

export const getOilFormData=async()=>{
  try{

  }catch(err){
    
  }
}

export const sendEmail = (data) => {};

//{baseUrl}/api/oilForm/create/oil-form