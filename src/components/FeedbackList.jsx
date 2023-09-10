import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, handleDelete }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>;
	}

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item) => {
					const { id } = item;
					return (
						<motion.div
							key={id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<FeedbackItem
								key={id}
								item={item}
								handleDelete={handleDelete}
							/>
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);
};

FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
	handleDelete: PropTypes.func.isRequired,
};

export default FeedbackList;
