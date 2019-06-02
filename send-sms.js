const accountSid = 'AC068ac85bbd1dfc33ddcc8cdb10ee8bf0'
const authToken = '106b7dd295fdb91cbb9eff0d93734fbb'

const client = require('twilio')(accountSid, authToken)

// client.messages.create({
//     to: '+15047154741',
//     from: "+15045968529",
//     body: "You a hoe fasho bitch"
// })
//     .then((message) => console.log(message.sid));

module.exports.client = client;
