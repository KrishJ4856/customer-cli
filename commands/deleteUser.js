import connectDB from '../db/connect.js'
import Customer from '../Schema/CustomerSchema.js'
import chalk from 'chalk'
import mongoose from 'mongoose'

async function deleteUser(id) {
    try {
        // First, establishing a connection to the DB before performing the delete operation
        await connectDB()

        // Deleting the customer by the id entered by the user
        const result = await Customer.deleteOne({ _id: id })

        // Checking whether the customer exists or not
        if(result.deletedCount === 0){
            console.log(
                chalk.redBright(`No user found with the id: ${id}. Nothing to delete.`)
            )
        } else {
            console.log(
                chalk.green.bold('Customer deleted successfully!')
            )
        }
    } catch (error) {
        console.log('Some error occurred: \n', error)
    } finally {
        mongoose.disconnect()
    }
}

export default deleteUser