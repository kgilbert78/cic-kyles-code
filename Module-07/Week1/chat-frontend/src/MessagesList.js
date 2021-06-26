export const MessagesList = ({messages, setMessages}) => {
	return (
		<div id="messages">
			{messages.map((message, index) => {
				if (message.received) {
					return (
						<ReceivedMessage 
							key={index} 
							text={message.text} 
							timestamp={message.timestamp}
						/>);
				} else {
					return (
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

	const editClicked = () => {
		console.log(props.message.text);
		const editedText = window.prompt(`Enter the new text for your message "${props.message.text}":`);
		if (editedText) {
			fetch(`http://localhost:3001/messages/${props.index}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({text: editedText})
			}).then((res) => {
				return res.json();
			}).then((data) => {
				props.setMessages(data.messages);
			});
		};
	};

	const deleteClicked = () => {
		window.confirm(`Are you sure you want to delete your message "${props.message.text}"?`)
		fetch(`http://localhost:3001/messages/${props.index}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		}).then((res) => {
			return res.json();
		}).then((data) => {
			props.setMessages(data.messages);
		})
	};

	return (
	<div className="row message">
			<div className="col-2"></div>
			<div className="col-10 text-end">
			<div className="buttons">
			<span onClick={editClicked}>edit</span> | <span onClick={deleteClicked}>delete</span>
			</div>
				<span className="messageText">{props.message.text}</span>
				<div className="timestamp">{props.message.timestamp.toString()}</div>
			</div>
		</div>
	);
};

const ReceivedMessage = (props) => {
	return (
		<div className="row message">
			<div className="col-10">
				<span className="userMessageText messageText">{props.text}</span>
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