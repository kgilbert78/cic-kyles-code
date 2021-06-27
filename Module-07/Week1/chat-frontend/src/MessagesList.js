//import { FormatTimestamp } from "./FormatTimestamp";

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
						// changing line 12 to timestamp={formatDate(message.timestamp)} says RangeError: Invalid time value. date & time seem to be in a different format than in our first chat app. There when I take out the time formatter it displays as Sun Jun 27 2021 11:41:54 GMT-0400 (Eastern Daylight Time) and on the React version it displays as 2021-06-27T15:19:35.565Z - I don't know why, we used new Date() to create them both times. Even so, the website we got the code from https://devhints.io/wip/intl-datetime shows that second format as an ISO string and it looks like it supports it.
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

	const editClicked = async () => {
		//console.log(props.message.text);
		const editedText = window.prompt(`Enter the new text for your message "${props.message.text}":`);
		if (editedText) {
			const res = await fetch(`http://localhost:3001/messages/${props.index}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({text: editedText})
			});
			const data = await res.json();
			props.setMessages(data.messages);
		};
	};

	const deleteClicked = async () => {
		window.confirm(`Are you sure you want to delete your message "${props.message.text}"?`)
		const res = await fetch(`http://localhost:3001/messages/${props.index}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
		const data = await res.json();
		props.setMessages(data.messages);
	};

	// return SentMessage
	return (
	<div className="row message">
			<div className="col-2"></div>
			<div className="col-10 text-end">
			<div className="buttons">
			<span onClick={editClicked}>edit</span> | <span onClick={deleteClicked}>delete</span>
			</div>
				<span className="messageText">{props.message.text}</span>
				{/* <FormatTimestamp timestamp={props. message.timestamp} />  */}
				<div className="timestamp">{props.message.timestamp.toString()}</div>
				{/* changing line 70 to {formatDate(props.timestamp).toString()} says RangeError: Invalid time value. date & time seem to be in a different format than in our first chat app. There when I take out the time formatter it displays as Sun Jun 27 2021 11:41:54 GMT-0400 (Eastern Daylight Time) and on the React version it displays as 2021-06-27T15:19:35.565Z - I don't know why, we used new Date() to create them both times. Even so, the website we got the code from https://devhints.io/wip/intl-datetime shows that second format as an ISO string and it looks like it supports it. */}
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

// function formatDate(timestamp) {
// 	return new Intl.DateTimeFormat("default", 
//     {
// 		hour: "numeric",
// 		minute: "numeric",
// 		second: "numeric",
// 	}
//     ).format(timestamp);
// };
