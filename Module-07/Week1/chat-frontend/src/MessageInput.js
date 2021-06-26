import { useState } from "react";

export const MessageInput = ({ setMessages, messages }) => { // <-- destructured
// export const MessageInput = (props) => { // <-- not destructured (see below)
	const [text, setText] = useState("");
	const onSubmit = (event) => {
		event.preventDefault();
		fetch(`http://localhost:3001/messages`, {
			method: "POST", 
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				text: text,
				received: false,
				timestamp: new Date()
			}),
		}).then((res) => {
			return res.json();
		}).then((data) => {
			setMessages(data.messages);
		});
		// setMessages([...messages, { // <-- pairs with destructured
		// // props.setMessages([...props.messages, { // <-- pairs with  non-destructured
        //     text: text,
        //     received: false,
        //     timestamp: new Date()
        // }]);
		setText("");
	};
	return(
		<form className="row inputBar" onSubmit={onSubmit}>
			<div className="col-10">
				<input className="form-control" type="text" value={text} onChange={(event) => {
					setText(event.target.value);
				}} />
			</div>
			<div className="col-2">
				<button className="btn btn-success" type="submit">Send</button>
			</div>
		</form>
	);
};