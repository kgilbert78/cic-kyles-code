// pass props in a destructured object so I don't have to  write props.messages & props.setMessages below
export const MessagesList = ({messages, setMessages}) => {
	return (
		<div id="messages">
            {/* loop through messages to divide them into sent & received components and pass different props to each component */}
			{messages.map((message, index) => {
				// received is key for boolean in message object
				if (message.received) {
					return (
                        // pass text & timestamp separately. pass index as required key for list.
						<ReceivedMessage 
							key={index} 
							text={message.text} 
							timestamp={message.timestamp}
						/>);
				} else {
					return (
                        // pass whole message and divide into text & timestamp in SentMessage component after passing it in. pass index as required key for list, and again separately as index, for indicating which message to update or delete. pass setMessages for use in edit & delete functions.
						<SentMessage 
							key={index} 
							index={index} 
							message={message} 
							setMessages={setMessages}
						/>
					);
				};
			})};
		</div>
	);
};


const SentMessage = (props) => {
// async/await comments in MessageInputCommented.js
	const editClicked = async () => {
        // prompt for new text
		const editedText = window.prompt(`Enter the new text for your message "${props.message.text}":`);
        // only send data to the backend if text was entered (cancel was not clicked)
		if (editedText) {
            // fetch to endpoint at index of message that was edited, using props passed from SentMessages component in MessagesList above
			const res = await fetch(`http://localhost:3001/messages/${props.index}`, {
			// PUT for updating existing data (instead of POST for creating new data. send json but convert to string so fetch can send it. headers to tell express/body-parser to convert it back to json)	
            method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({text: editedText})
			});
			const data = await res.json();
            // assign all messages from backend (including updated one) back to the messages array with usestate. overwrites the copy that contains the unedited message.
			props.setMessages(data.messages);
		};
	};

	const deleteClicked = async () => {
		window.confirm(`Are you sure you want to delete your message "${props.message.text}"?`)
        // fetch to endpoint at index of message that was deleted, using props passed from SentMessages component in MessagesList above
		const res = await fetch(`http://localhost:3001/messages/${props.index}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
		const data = await res.json();
        // assign all messages from backend (without the deleted one) back to the messages array with usestate. replaces the copy that contains the message that has now been deleted.
		props.setMessages(data.messages);
	};

	// return SentMessage
	return (
	<div className="row message">
			<div className="col-2"></div>
			<div className="col-10 text-end">
			<div className="buttons">
            {/* call edit & delete functions when edit or delete is clicked */}
			<span onClick={editClicked}>edit</span> | <span onClick={deleteClicked}>delete</span>
			</div>
                {/* message.text and message.timestamp here (instead of text & timestamp) because the prop passed in was the whole message */}
				<span className="messageText">{props.message.text}</span>
                {/* convert timestamp object to string so React can show it.  */}
				<div className="timestamp">{props.message.timestamp.toString()}</div>
			</div>
		</div>
	);
};

// pass in props to display text and timestamp. use classNames to apply formatting to distinguish from sent messages (align left, gray)
const ReceivedMessage = (props) => {
	return (
		<div className="row message">
			<div className="col-10">
                   {/* text and timestamp here (instead of message.text & message.timestamp) because they were passed in individually as props instead of passing in the whole message */}
				<span className="userMessageText messageText">{props.text}</span>
                {/* convert timestamp object to string so React can show it.  */}
				<div className="timestamp">{props.timestamp.toString()}</div>
			</div>
		</div>
	);
};


// // Destructured props:
// const ReceivedMessage = ({ text, timestamp }) => {
// 	return (
// 		<div className="row message">
// 			<div className="col-10">
// 				<span className="userMessageText messageText">{text}</span>
// 				<div className="timestamp">{timestamp.toString()}</div>
// 			</div>
// 		</div>
// 	);
// };