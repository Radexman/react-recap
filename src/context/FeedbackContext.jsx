import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		isEdit: false,
	});

	useEffect(() => {
		fetchFeedback();
	}, []);

	// Fetch Feedback
	const fetchFeedback = async () => {
		const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc');
		const data = await response.json();

		setFeedback(data);
		setIsLoading(false);
	};

	// Add New Feedback Item
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	// Update Feedback Item
	const updateFeedback = (id, updItem) => {
		setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)));
	};

	// Set Feedback Item To Be Updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			isEdit: true,
		});
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
				feedbackEdit,
				isLoading,
				addFeedback,
				updateFeedback,
				editFeedback,
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
