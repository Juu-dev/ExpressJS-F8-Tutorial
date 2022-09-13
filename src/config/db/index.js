import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/F8", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully!");
  } catch (error) {
    console.log("Connect Failure!");
  }
}

module.exports = { connect };
