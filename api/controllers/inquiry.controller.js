import Inquiry from "../models/inquiry.model.js";
import { errorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
  console.log(req.body);
  if (!req.body.name) {
    return next(errorHandler(400, "Please provide all required fields"));
  }

  const newInquiry = new Inquiry({
    ...req.body,
  });
  try {
    const savedInquiry = await newInquiry.save();
    res.status(201).json(savedInquiry);
  } catch (error) {
    next(error);
  }
};

export const getinquirys = async (req, res, next) => {
  try {
    console.log(req);
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;

    // Fetch inquiries based on optional filters
    const inquiries = await Inquiry.find({
      ...(req.query.name && { name: req.query.name }),
      ...(req.query.searchTerm && {
        $or: [
          { name: { $regex: req.query.searchTerm, $options: 'i' } },
          { subject: { $regex: req.query.searchTerm, $options: 'i' } },
          { message: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalInquirys = await Inquiry.countDocuments();
    
    // Calculate inquiries from the last month
    const now = new Date();
    const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    const lastMonthInquirys = await Inquiry.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      inquiries, // Return the inquiries
      totalInquirys, // Total count of inquiries
      lastMonthInquirys, // Count of inquiries in the last month
    });
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
};
