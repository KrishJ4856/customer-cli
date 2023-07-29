export default function updateQuestionsFunc(customer){
    const updateQuestions = [
        {
            name: "name",
            message: "Update the name:",
            default: customer.name,
            type: "input",
            validate: (value) => {
                value = value.trim()
    
                if(value === '') return 'Please enter a value'
    
                return true;
            }
        },
        {
            name: "phone",
            message: "Update the phone number:",
            default: customer.phone,
            type: "input",
            validate: (value) => {
                value = value.trim()
    
                if (value === '') return 'Please enter a value'
    
                const phoneRegex = /^\d{5} \d{5}$/
    
                if(phoneRegex.test(value)) return true
                else return 'Invalid Input. Please enter a valid phone number as ##### #####'
            }
        },
        {
            name: "email",
            message: "Update the email:",
            default: customer.email,
            type: "input",
            validate: (value) => {
                value = value.trim()
    
                if(value === '') return 'Please enter a value'
    
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
                if(emailRegex.test(value)) return true
                else return 'Invalid Input. Please enter a valid email'
            }
        },
        {
            name: "confirm",
            message: "Update the customer?",
            type: "confirm"
        }
    ]

    return updateQuestions
}