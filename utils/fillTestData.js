import Customer from '../Schema/CustomerSchema.js'
import connectDB from '../db/connect.js'
import mongoose from 'mongoose'
import jsonData from '../initialData.json'

async function fillTestData(){
    try {
        await connectDB()
        await Customer.insertMany(jsonData)
        console.log('Test Data Imported Successfully')
    } catch (error) {
        console.log('Error Occurred!', error)
    } finally{
        mongoose.disconnect()
    }
}

fillTestData()