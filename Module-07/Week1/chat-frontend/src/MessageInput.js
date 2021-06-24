import { useState } from "react";

export const MessageInput = ({ setMessages, messages }) => { // <-- destructured
// export const MessageInput = (props) => { // <-- translation of destructured
	const [text, setText] = useState("");
	const onSubmit = (event) => {
		event.preventDefault();
		setMessages([...messages, { // <-- destructured
		// props.setMessages([...props.messages, { // <-- translation of destructured
            text: text,
            received: false,
            timestamp: new Date()
        }]);
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