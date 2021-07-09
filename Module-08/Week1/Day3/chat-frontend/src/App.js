import './App.css';
import Header from "./Header";
import { MessagesList } from "./MessagesList";
import { MessageInput } from "./MessageInput";
import { useState, useEffect } from 'react';

function App() {
	const [messages, setMessages] = useState([]);

	const loadMessages = () => {
		fetch("http://localhost:3001/messages")
		.then((response) => {
			//console.log(response.json);
			return response.json();
		}).then((data => {
			//console.log(data);
			setMessages(data.messages);
		}));	
	};

// // Could not get async/await to work here. TypeError: Cannot read property 'map' of undefined. 
// 	const loadMessages = async () => {
// 		const response = await fetch("http://localhost:3001/messages");
// 		const data = await response.json;
// 		//console.log(data); // output: json() { [native code] } should be {messages: Array(3)}
// 		setMessages(data.messages);
// 	};

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
			<MessageInput setMessages={setMessages} />
		</div>
	);
};

export default App;
