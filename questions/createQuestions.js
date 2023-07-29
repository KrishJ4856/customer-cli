const createQuestions = [
    {
        name: "name",
        message: "Enter name of the user:",
        type: "input",
        validate: (value) => {
            value = value.trim()

            if (value === '') return 'Please enter a value'

            return true;
        }
    },
    {
        name: "email",
        message: "Enter a valid email of the user:",
        type: "input",
        validate: (value) => {
            value = value.trim()

            if (value === '') return 'Please enter a value'

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            if (emailRegex.test(value)) return true
            else return 'Invalid Input. Please enter a valid email'
        }
    },
    {
        name: "phone",
        message: "Enter a valid phone number of the user in the format - ##### #####:",
        type: "input",
        validate: (value) => {
            value = value.trim()

            if (value === '') return 'Please enter a value'

            const phoneRegex = /^\d{5} \d{5}$/

            if (phoneRegex.test(value)) return true
            else return 'Invalid Input. Please enter a valid phone number as ##### #####'
        }
    },
    {
        name: "confirm",
        message: "Create the customer?",
        type: "confirm"
    }
]

export default createQuestions