import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import data from './data';

const App = () => {
	const [feedback, setFeedback] = useState(data);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList
					feedback={feedback}
					handleDelete={deleteFeedback}
				/>
			</div>
		</>
	);
};

export default App;
