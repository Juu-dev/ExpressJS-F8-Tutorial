import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, default: "" },
  description: { type: String, default: "" },
  image: { type: String, default: "" },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mogoose.module("Course", Course);
