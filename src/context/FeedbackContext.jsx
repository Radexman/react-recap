import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import data from '../data';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(data);

	// Add New Feedback Item
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	// Delete Feedback Item
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				addFeedback,
				deleteFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

FeedbackProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default FeedbackContext;
