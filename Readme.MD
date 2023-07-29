# Introduction

This is my first cli app using NodeJS. It is a CRUD Functionality cli tool using which you can Create, Read, Update and Delete customers in the database.

Building this tool all by myself from scratch helped me learn a lot of new things like working with several cli building tools including chalk, inquirer, commander and also helped me revise some backend development concepts I had lost touch with.

## What can it do?

## Creating a customer

To create a customer, run `customercli create`. Then, type in the name, email and phone number of the customer to create one in the database.

![Creating a customer](https://cdn.discordapp.com/attachments/1125104832441766028/1134842396232908810/create.png)

## Reading the customer(s)

To get all the customers present in the database, run `customercli read`. You can also get a particular customer based on it's name/email/phone:
- Get customer by name, run: `customercli read --name <name>`
- Get customer by name, run: `customercli read --email <email>`
- Get customer by name, run: `customercli read --phone <phone>`

![Reading the customers](https://cdn.discordapp.com/attachments/1125104832441766028/1134842396442628207/read.png)

## Updating the customer

To update a customer, you need to run: `customercli update <id>`. On running this command, you need to update the data which you desire to. Note that, `id` here refers to the id of the customer.

![Updating the customers](https://cdn.discordapp.com/attachments/1125104832441766028/1134842396648153190/update.png)

## Deleting the customer

The process of deleting the customer goes the same like updation. To delete the customer, run this command: `customercli delete <id>`. Here `id` refers to the id of the customer document.

![Deleting the customers](https://cdn.discordapp.com/attachments/1125104832441766028/1134842396933357699/delete.png)

## How to make it work?

You can play around with this cli app, follow these steps:
1. Clone this repoitory.
2. Create a `.env` file in the root directory of the project.
3. Add an environment variable in this `.env` file with the name of `MONGO_URI=<connection_string>` and replace `connection_string` with your mongodb connection string.
4. The last step is to run this command: `npm i -g .`
5. You are now ready to play around and use this cli tool.
