import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'Life sucks ass',
			rating: 1,
		},
	]);

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
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
