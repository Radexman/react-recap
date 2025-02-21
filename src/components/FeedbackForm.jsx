import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = () => {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

	useEffect(() => {
		if (feedbackEdit.isEdit) {
			setBtnDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage('Text must be at least 10 characters');
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}

		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text.trim().length >= 10) {
			const newFeedback = {
				text,
				rating,
			};

			if (feedbackEdit.isEdit) {
				updateFeedback(feedbackEdit.item.id, newFeedback);
			} else {
				addFeedback(newFeedback);
			}

			setText('');
		}
	};

	return (
		<Card reverse={false}>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input
						type='text'
						placeholder='Write a review'
						onChange={handleTextChange}
						value={text}
					/>
					<Button
						type='submit'
						isDisabled={btnDisabled}
					>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;
