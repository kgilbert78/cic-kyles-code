import { useState } from "react";

export const MessageInput = ({ setMessages, messages }) => {
	const [text, setText] = useState("");
    // label whole function as async in order to use await within it
	const onSubmit = async (event) => {
		event.preventDefault();
        // assign response to a variable here  for reference below, and label to await. fetch is a promise, when it's done running, assign it to res.
		const res = await fetch(`http://localhost:3001/messages`, {
			method: "POST", 
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				text: text,
				received: false,
				timestamp: new Date()
			}),
		});
        // set data to wait for the json to be available, and assign the json to data when it is.
        const data = await res.json();
        setMessages(data.messages);
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