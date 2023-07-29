import connectDB from '../db/connect.js'
import Customer from '../Schema/CustomerSchema.js'
import inquirer from 'inquirer'
import mongoose from 'mongoose'
import chalk from 'chalk'
import createQuestions from '../questions/createQuestions.js'

async function createUser() {
    console.log(
        chalk.blue.bold('To create a new user, enter a name and a valid email and phone number')
    )

    inquirer.prompt(createQuestions)
        .then(async (answer) => {
            // Checking if the user confirms creation of the customer
            if (answer.confirm) {
                // The answers object contain: name, email, phone and confirm property entered by user
                // Here we destructure the essential properties
                const { name, email, phone } = answer
                const customer = { name, email, phone }

                // Connecting to the DB before performing create() operation
                await connectDB()

                // Creating the document
                await Customer.create(customer)
                    .then(result => {
                        console.log(
                            chalk.greenBright('Customer created successfully! \n', result)
                        )
                    })
                    .catch(error => {
                        // Checking for email duplication error
                        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
                            console.log(
                                chalk.redBright('The email you entered already exists. Please enter a unique email.')
                            )
                        } else {
                            console.log('Some error occurred: \n', error)
                        }
                    })

                // Finally, closing the connection to DB and terminating the process
                mongoose.disconnect()
                process.exit(0)
            } else {
                console.log(
                    chalk.redBright('Customer not created.')
                )
            }
        })
        .catch(error => console.error(error))
}

export default createUser