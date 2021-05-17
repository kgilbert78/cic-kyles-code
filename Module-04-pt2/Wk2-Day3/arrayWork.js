const messages = [
    {text: "This is my first message", outgoing: true},
    {text: "This is my second message", outgoing: false},
    {text: "This is my third message", outgoing: true},
    {text: "This is my fourth message", outgoing: false}
];

// LOOP TO BE REPLACED WITH MAP
// let messagesText = [];

// for (const message of messages) {
//     messagesText.push(message.text);
// }
// console.log(messagesText);

// OLD STYLE LOOP
// let textOfMessages = [];
// for (let messagesIndex = 0; messagesIndex < messages.length; messagesIndex++) {
//     textOfMessages.push(messages[messagesIndex].text);
// }
// console.log(textOfMessages);


const messagesText = messages.map(function (message) {
    return message.text;
});

//shorthand
// const messagesText = messages.map((message) => message.text);

console.log("Print out all messages with .map: ", messagesText);


const outgoingMessages = messages.filter(function(message) {
    if (message.outgoing === true) {
        return true;
    } else {
        return false;
    }
});
console.log("Print out outgoing messages only with .filter: ", outgoingMessages)

//shorthand
//const outgoingMessages = messages.filter((message) => !message.outgoing);

// const outgoingMessagesText = outgoingMessages.map(function (message) {
//     return message.text;
// });
// console.log(outgoingMessagesText);
