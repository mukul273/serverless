const aws = require('aws-sdk');
aws.config.update({ region: 'us-east-2'});

const dynamodb = new aws.DynamoDB();

//To List the tables
dynamodb.listTables({}, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
  
});


// To List the table meta data
var params = {
    TableName: 'td_notes_sdk'
};

dynamodb.describeTable(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(JSON.stringify(data));           // successful response
    
});

//To Create the table
/* dynamodb.createTable({
    TableName: 'td_notes_sdk',
    AttributeDefinitions: [
        {
            AttributeName: 'user_id',
            AttributeType: "S"
        },
        {
            AttributeName: 'timestamp',
            AttributeType: "N"
        }
    ],
    KeySchema: [
        {
            AttributeName: 'user_id',
            KeyType: "HASH"
        },
        {
            AttributeName: 'timestamp',
            KeyType: "RANGE"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
}, (err, data) => {
    if (err) 
        console.log(err, err.stack);
    else
        console.log(JSON.stringify(data, null, 2));
}); */

//To Update the table
/* dynamodb.updateTable({
    TableName: "td_notes_sdk",
    ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 1
    }
}, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
}); */

//TO Delete the table
/* dynamodb.deleteTable({
    TableName: "td_notes_sdk"
}, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
}); */