const { v4 } = require('uuid')
const AWS = require('aws-sdk') // Para conectar con varios servicios de AWS

const middy = require("@middy/core");
const httpJSONBodyParser = require("@middy/http-json-body-parser");

const create = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()// se conecto por el cliente y secret

    const { title, description } = event.body; //JSON.parse()
    const createAt = new Date()
    const id = v4()

    const newTask = {
        id,
        title,
        description,
        createAt,
        done: false
    }
    await dynamodb.put({
        TableName: 'TaskTable',
        Item: newTask
    }).promise()

    return {
      statusCode: 200,
      body: JSON.stringify(newTask)
    }
}

module.exports = {
    create: middy(create).use(httpJSONBodyParser()) // middy.. new
}