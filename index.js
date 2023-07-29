#!/usr/bin/env node

import { Command } from 'commander'
const program = new Command()
// const sayHello = require('./commands/sayHello')

import createUser from './commands/createUser.js'
import readUser from './commands/readUser.js'
import updateUser from './commands/updateUser.js'
import deleteUser from './commands/deleteUser.js'

program
.command('create')
.description('Creates a new customers in the database')
.action(createUser)

program
.command('read')
.description('Reads all the customers in the database')
.option('-n, --name <string>', 'Search by name')
.option('-p, --phone <string>', 'Search by phone number')
.option('-e, --email <string>', 'Search by email')
.action(readUser)

program
.command('update')
.description('Updates a customer in the database')
.argument('<id>', 'id of the customer')
.action(updateUser)

program
.command('delete')
.description('Deletes a customer in the database')
.argument('<id>', 'id of the customer')
.action(deleteUser)

program.parse()