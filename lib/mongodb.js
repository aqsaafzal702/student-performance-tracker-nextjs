// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const MONGODB_URI = process.env.MONGODB_URI;

// console.log('MONGODB_URI:', MONGODB_URI); // Debug the environment variable
// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// }

// export default connectDB;

// src/lib/mongodb.js
import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectDB(dbName = "crud_db") {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName, // ✅ Use the dbName passed to the function
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
    console.log(`✅ Connected to MongoDB Atlas (${dbName})`);
  } catch (e) {
    cached.promise = null;
    console.error("❌ MongoDB connection failed:", e);
    throw e;
  }

  return cached.conn;
}
