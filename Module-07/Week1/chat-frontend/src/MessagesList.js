export const MessagesList = (props) => {
	return (
		<div id="messages">
			{props.messages.map((message) => {
				if (message.received) {
					return <ReceivedMessage text={message.text} timestamp={message.timestamp}/>
				} else return <SentMessage message={message} />
			})}
		</div>
	);
};

const SentMessage = (props) => {
	return (
	<div className="row message">
			<div className="col-2"></div>
			<div className="col-10 text-end">
			<div className="buttons">
			<a>edit</a> | <a>delete</a>
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