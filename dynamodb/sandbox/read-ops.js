const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

//To get matching item(s)
/* docClient.get({
    TableName: 'td_notes_sdk',
    Key: {
        user_id: 'ABC',
        timestamp: 1
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
}); */

// To get items within single partition 
/* docClient.query({
    TableName: 'td_notes_sdk',
    KeyConditionExpression: "user_id = :uid",
    ExpressionAttributeValues: {
        ":uid": "ABC"
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
}); */

// To get the records across multiple partitions
/* docClient.scan({
    TableName: 'td_notes',
    FilterExpression: "catagory = :cat",
    ExpressionAttributeValues: {
        ":cat": "general"
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
}); */

//To get batch items
docClient.batchGet({
    RequestItems: {
        
        'td_notes_sdk': {
          Keys: [
            { 
                user_id: '11',
                timestamp: 1
            }
          ]
        },
        'td_notes': {
          Keys: [
            {
                user_id: 'muks123',
                timestamp: '1608157504'
            },
            {
                user_id: 'muks129',
                timestamp: '1608157504'
            }
          ]
        },
    }
}, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});