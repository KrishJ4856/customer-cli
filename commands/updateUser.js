import connectDB from '../db/connect.js'
import Customer from '../Schema/CustomerSchema.js'
import inquirer from 'inquirer'
import mongoose from 'mongoose'
import chalk from 'chalk'
import updateQuestionsFunc from '../questions/updateQuestions.js'

async function updateUser(id) {
    try {
        // First, creating a connection to the DB before performing other operations
        await connectDB()

        // Finding the customer by the id entered by the user
        const customer = await Customer.findById(id)

        // Checking whether the customer exists or not
        if(!customer){
            console.log(
                chalk.redBright(`No customer exists with id: ${id}. Nothing to update.`)
            )
        } else {
            await inquirer
            .prompt(updateQuestionsFunc(customer))
            .then(async(answers) => {
                // Checking if the user confirms updating the customer
                if(answers.confirm){
                    // Updating the customer
                    customer.name = answers.name
                    customer.phone = answers.phone
                    customer.email = answers.email

                    await Customer.updateOne({_id: id}, customer)
                    .then(() => {
                        console.log(
                            chalk.green.bold('Customer updated successfully!')
                        )
                    })
                    .catch((error) => {
                        // Checking for email duplication error
                        if(error.code === 11000 && error.keyPattern && error.keyPattern.email){
                            console.log(
                                chalk.red('Failed to update the customer. \nThe email you entered already exists. Please enter a different email.')
                            )
                        } else {
                            console.log('Some error occurred:', error)
                        }
                    })
                    process.exit(0)
                } else {
                    console.log(
                        chalk.red.bold('Customer not updated.')
                    )
                }
            })
        }
    } catch (error) {
        console.log('Some error occurred \n', error)
    } finally {
        mongoose.disconnect()
    }
}

export default updateUser