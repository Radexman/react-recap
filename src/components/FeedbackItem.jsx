import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import PropTypes from 'prop-types';
import Card from './shared/Card';

const FeedbackItem = ({ item }) => {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
	const { id, rating, text } = item;

	return (
		<Card reverse={true}>
			<div className='num-display'>{rating}</div>
			<button
				onClick={() => deleteFeedback(id)}
				className='close'
				type='button'
			>
				<FaTimes color='white' />
			</button>
			<button
				onClick={() => editFeedback(item)}
				className='edit'
				type='button'
			>
				<FaEdit color='white' />
			</button>
			<div className='text-display'>{text}</div>
		</Card>
	);
};

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedbackItem;
