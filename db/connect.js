import mongoose from 'mongoose'
import chalk from 'chalk';
import * as dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.MONGO_URI

async function connectDB(){
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(chalk.greenBright.bold('Successfully connected to DB!'))
    } catch (error) {
        console.log(chalk.red.bold('Connection to the database failed. Please try again later.'))
        mongoose.disconnect()
        process.exit(0)
    }
}

export default connectDB