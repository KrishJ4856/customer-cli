import mongoose from 'mongoose'

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name of the customer'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required.'],
    },
    email: {
        type: String,
        required: [true, 'Please enter the email of the customer'],
        unique: true
    }
})

const CustomerModel = mongoose.model('Customer', CustomerSchema)
export default CustomerModel