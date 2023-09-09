import PropTypes from 'prop-types';

const FeedbackItem = ({ item }) => {
	const { rating, text } = item;
	return (
		<div className='card'>
			<div className='num-display'>{rating}</div>
			<div className='text-display'>{text}</div>
		</div>
	);
};

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedbackItem;
