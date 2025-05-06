/* eslint-disable no-console */
import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  
  
  return mongoose
    .connect(import.meta.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
};

export { connectDB, mongoose };
