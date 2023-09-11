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
		const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
		const data = await response.json();

		setFeedback(data);
		setIsLoading(false);
	};

	// Add New Feedback Item
	const addFeedback = async (newFeedback) => {
		const response = await fetch('http://localhost:5000/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		});

		const data = await response.json();

		setFeedback([data, ...feedback]);
	};

	// Update Feedback Item
	const updateFeedback = async (id, updItem) => {
		const response = await fetch(`http://localhost:5000/feedback/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updItem),
		});

		const data = await response.json();

		setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)));
	};

	// Set Feedback Item To Be Updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			isEdit: true,
		});
	};

	// Delete Feedback Item
	const deleteFeedback = async (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			await fetch(`http://localhost:5000/feedback/${id}`, {
				method: 'DELETE',
			});

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
