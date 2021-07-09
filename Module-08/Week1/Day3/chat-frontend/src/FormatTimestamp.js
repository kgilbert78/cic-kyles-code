export function FormatTimestamp(timestamp) {
	const messageTimestamp = new Intl.DateTimeFormat("default", 
    {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	}
    ).format(timestamp);

    return <div className="timestamp">timestamp={timestamp.toString()}</div>
};