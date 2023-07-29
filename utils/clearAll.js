import connectDB from "../db/connect.js";
import Customer from "../Schema/CustomerSchema.js";
import mongoose from "mongoose";

try {
    await connectDB()
    await Customer.deleteMany({})
    console.log('Deleted all the users')
} catch (error) {
    console.log('Error \n', error)
} finally {
    mongoose.disconnect()
}
