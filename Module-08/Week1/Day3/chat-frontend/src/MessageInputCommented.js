import { useState } from "react";

export const MessageInput = ({ setMessages }) => { // <-- destructured
// export const MessageInput = (props) => { // <-- not destructured (see below)

    // set initial value of text to empty string to avoid uncontrolled components error - controlled means you are always controlling the value of state.
	const [text, setText] = useState("");
	// label whole function as async in order to use await within it
	const onSubmit = async (event) => {
		event.preventDefault();
		// assign response to a variable here  for reference below, and label to await. fetch is a promise, when it's done running, assign it to res. replaces first ".then" in promise.
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
		// set data to wait for the json to be available, and assign the json to data when it is. replaces second ".then" in promise.
		const data = await res.json();
        // setMessages coming from props from App.js here. use to assign message data from server to messages
		setMessages(data.messages);
		// props.setMessages(data.messages) // <-- pairs with  non-destructured

        // // when frontend was handling messages, used spread operator to spread previous messages from props:
        // // MessageInput = ({ setMessages, messages }) 
        // // over the new message array before adding the new message. merges the 2.
		// setMessages([...messages, { 
        //     text: text,
        //     received: false,
        //     timestamp: new Date()
        // }]);

        // clear input after submitting - clears in text variable and also automatically clears from input display due to useState
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