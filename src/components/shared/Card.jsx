import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
	// return <div className={`card ${reverse && 'card-reverse'}`}>{children}</div>;

	const lightTheme = {
		backgroundColor: '#ffffff',
		color: '#000000',
	};

	const darkTheme = {
		backgroundColor: 'rgba(0,0,0,0.4)',
		color: '#ffffff',
	};

	return (
		<div
			className='card'
			style={reverse ? darkTheme : lightTheme}
		>
			{children}
		</div>
	);
};

Card.defaultProps = {
	reverse: true,
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
};

export default Card;
