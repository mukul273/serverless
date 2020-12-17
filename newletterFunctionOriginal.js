var messages = [
    "Thank you for registering forour newsletter",
    "Thank you for signing up for our newsletter",
    "Thank you, You should start receiving the newsletter soon",
    "Thank you, we appreaciate your interest in our newsletter"
];

exports.handler = async(event, context, callback) => {
let message = messages[Math.floor(Math.random()*4)];
// TODO implement
// const response = {
//     statusCode: 200,
//     body: JSON.stringify('Hello from Lambda!'),
// };
return callback(null, message);
};
