import mongoose from "mongoose";

const serviceMetaTagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    keywords: {
      type: String,
    },
    other: {
      type: String,
    },
  },
  { timestamps: true }
);

const ServiceMetaTags = mongoose.model("ServiceMetatags", serviceMetaTagSchema);

const ProductMetaTagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    keywords: {
      type: String,
    },
    other: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProductMetaTags = mongoose.model("ProductMetatags", ProductMetaTagSchema);

const BlogMetaTagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    keywords: {
      type: String,
    },
    other: {
      type: String,
    },
  },
  { timestamps: true }
);
const BlogMetaTags = mongoose.model("BlogMetatags", BlogMetaTagSchema);

const OtherMetaTagSchema = new mongoose.Schema(
  {
    header: {
      type: String,
    },
    footer: {
      type: String,
    },
    body: {
      type: String,
    },
  },
  { timestamps: true }
);
const OtherMetaTags = mongoose.model("OtherMetatags", OtherMetaTagSchema);

const CommonMetaTagsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    keywords: {
      type: String,
    },
    other: {
      type: String,
    },
  },
  { timestamps: true }
);
const CommonMetaTags = mongoose.model("CommonMetaTags", CommonMetaTagsSchema);

export {
  ServiceMetaTags,
  ProductMetaTags,
  BlogMetaTags,
  OtherMetaTags,
  CommonMetaTags,
};
