import './App.css';
import Header from "./Header";
import { MessagesList } from "./MessagesList";
import { MessageInput } from "./MessageInput";
import { useState, useEffect } from 'react';

function App() {
	const [messages, setMessages] = useState([]);

	const loadMessages = () => {
		fetch("http://localhost:3001/messages").then((response) => {
			return response.json();
		}).then((data => {
			setMessages(data.messages);
		}));	
	};

	useEffect(() => {
		loadMessages();
		setInterval(() => {
			loadMessages();
		}, 3000)
	}, []);
	
	return (
		<div className="App container">
			<Header />
			<MessagesList messages={messages} setMessages={setMessages} />
			<MessageInput messages={messages} setMessages={setMessages} />
		</div>
	);
};

export default App;
