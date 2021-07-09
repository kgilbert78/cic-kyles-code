import './App.css';
import Header from "./Header";
import { MessagesList } from "./MessagesList";
import { MessageInput } from "./MessageInput";
import { useState, useEffect } from 'react';

function App() {
	const [messages, setMessages] = useState([]);

	// fetch messages and load new ones into the messages array with setMessages function from useState
	const loadMessages = () => {
		fetch("http://localhost:3001/messages")
		.then((response) => {
			return response.json();
		}).then((data => {
			setMessages(data.messages);
		}));	
	};

	// load messages when the page loads (empty dependancy array), and every 3 seconds (setInterval)
	useEffect(() => {
		loadMessages();
		setInterval(() => {
			loadMessages();
		}, 3000)
	}, []);
	
	// components to display in index.html. pass props for messages and updated messages to these child components for use in functions there
	return (
		<div className="App container">
			<Header />
			<MessagesList messages={messages} setMessages={setMessages} />
			<MessageInput setMessages={setMessages} />
			{/* also passed messages={messages} to MessageInput when messages were being handled by the front end, but don't need this now messages are being stored on the backend, fetch takes care of passing the previously stored messages to MessageInput  */}
		</div>
	);
};

export default App;
