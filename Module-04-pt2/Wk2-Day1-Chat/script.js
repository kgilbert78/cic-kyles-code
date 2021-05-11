let messages = [];

function sendMessage(event) {
    event.preventDefault();
    const messageInput = document.getElementById("messageInput");
    console.log(messageInput.value);
    messages.push(
        {
            text: messageInput.value,
            iSentIt: true,
            timeStamp: new Date()
        }
    );
    console.log(messages);
    messageInput.value = "";
    updateHTML();
}

function formatDate(timestamp) {
    let hours = timestamp.getHours();
    let minutes = timestamp.getMinutes();
    let isAM = true;
    if (hours > 12) {
        isAM = false;
        hours -= 12;
    }
    // if (hours = 12 && messages.timeStamp.includes("GMT-0400")) {
    //     isAM = false;
    // }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return `${hours}: ${minutes} ${isAM === true ? "am" : "pm"}`;
    console.log(hours, minutes, isAM)
}

function updateHTML() {
    const messagesDiv = document.getElementById("messages");
    let htmlToUpdate = "";
    for (const message of messages) {
        if (message.iSentIt === true) {
            htmlToUpdate += 
            `<div class="row message">
                <div class="col-2"></div>
                <div class="col-10 text-end">
                    <span class="messageText">${message.text}</span>
                    <div class="timeStamp">${formatDate(message.timeStamp)}</div>
                </div>
            </div>`;
            // ${message.text} .text pulls it from the object saved in sendMessage()
        }
        
    }
    messagesDiv.innerHTML = htmlToUpdate; 


}