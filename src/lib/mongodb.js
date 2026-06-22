import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {

  throw new Error("Please define MONGODB_URI");

}

export async function connectDB() {

  if (mongoose.connections[0].readyState) {

    console.log("Already Connected");

    return;

  }

  try {

    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB Connected");

  }

  catch (error) {

    console.log("MongoDB Connection Error");

    console.log(error);

    throw error;

  }

}