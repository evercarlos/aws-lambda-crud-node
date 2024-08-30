const AWS = require('aws-sdk') // Para conectar con varios servicios de AWS

const findAll = async(event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();

        const result = await dynamodb.scan({
            TableName: 'TaskTable',
    
        }).promise();
    
        const tasks = result.Items;
    
        return {
            status: 200,
            body: {
                tasks
            }
        };
    } catch( error) {
        console.log(error);
    }
};

module.exports = {
    findAll
}