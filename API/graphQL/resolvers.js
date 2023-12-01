const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const Employee = require('../models/Employee')

const DateTimeResolver = new GraphQLScalarType({

   name: 'DateTime',
   description: 'DateTime custom scalar type',
   parseValue(value) {
      return new Date(value); // value from the client
   },
   serialize(value) {
      return value.toISOString(); // value sent to the client
   },
   parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
         return new Date(ast.value) // ast value is always in string format
      }
      return null;
   },
})

module.exports = {
   DateTime: DateTimeResolver,
   Query: {
      async employee(_, { ID }) {
         return await Employee.findById(ID)
      },
      async getEmployees(_, { amount }) {
         return await Employee.find().limit(amount)
      }
   },
   Mutation: {
      async createEmployee(_, { employeeInput: { firstName, lastName, age, dateOfJoining, title, department, employeeType } }) {
         const createEmployee = new Employee({
            firstName: firstName,
            lastName: lastName,
            age: age,
            dateOfJoining: new Date().toISOString(),
            title: title,
            department: department,
            employeeType: employeeType,
            currentStatus: 1
         })

         const res = await createEmployee.save(); // MongoDB Saving Happens
         console.log(res._doc)
         return {
            id: res.id,
            ...res._doc
         }
      },
      async deleteEmployee(_, { ID }) {
         const wasDeleted = (await Employee.deleteOne({ _id: ID })).deletedCount
         return wasDeleted
         // 1 if something was deleted, 0 if nothing was deleted
      },
      async updateEmployee(_, { ID, employeeInput: { firstName, lastName, age, dateOfJoining, title, department, employeeType } }) {
         const wasUpdated = (await Employee.updateOne({ _id: ID }, { firstName: firstName, lastName: lastName, age: age, dateOfJoining: dateOfJoining, title: title, department: department, employeeType: employeeType })).modifiedCount
         return wasUpdated
         // 1 if something was updated, 0 if nothing was updated
      }
   }
}