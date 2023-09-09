import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import data from './data';

const App = () => {
	const [feedback, setFeedback] = useState(data);

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList feedback={feedback} />
			</div>
		</>
	);
};

export default App;
