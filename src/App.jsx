const App = () => {
	const title = 'Blog Post';
	const body = 'This is my blog post';
	const comments = [
		{ id: 1, text: 'Comment one' },
		{ id: 2, text: 'Comment two' },
		{ id: 3, text: 'Comment three' },
	];

	return (
		<div>
			<h2>{title.toUpperCase()}</h2>
			<p>{body}</p>
			<div>
				<h3>Comments ({comments.length})</h3>
				<ul>
					{comments.map((comment, idx) => {
						const { text } = comment;
						return <li key={idx}>{text}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default App;
