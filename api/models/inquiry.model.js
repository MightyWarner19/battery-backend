import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    inquiry_type: {
      type: String,
      require:false
    },
    name: {
      type: String,
      require:false
    },
    email: {
      type: String,
      require:false
    },

    subject: {
      type: String,
      require:false
    },
    phone: {
      type: String,
      require:false
    },
    message: {
      type: String,
      require:false
    },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
