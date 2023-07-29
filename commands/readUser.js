import connectDB from '../db/connect.js'
import Customer from '../Schema/CustomerSchema.js'
import mongoose from 'mongoose'
import chalk from 'chalk'

async function readUser(options){
    try {
        // Establishing the connection to DB before performing read operation
        await connectDB()

        // Finding all the customers in the DB according to the options entered by the user
        // If no options entered (options = {}), all customers are fetched
        const customers = await Customer.find(options)

        // Checking whether customers exist in the DB or not
        if(customers.length === 0){
            console.log(
                chalk.redBright('No customer found.')
            )
        } else {
            console.log(customers)
        }
    } catch (error) {
        console.log('Some error occurred: \n', error)
    } finally {
        mongoose.disconnect()
    }
}

export default readUser