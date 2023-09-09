import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
	// return <div className={`card ${reverse && 'card-reverse'}`}>{children}</div>;

	return (
		<div
			className='card'
			style={reverse ? { backgroundColor: 'rgba(0,0,0,0.4)', color: '#ffffff' } : { backgroundColor: '#ffffff', color: '#000000' }}
		>
			{children}
		</div>
	);
};

Card.defaultProps = {
	reverse: true,
};

Card.propTypes = {
	children: PropTypes.array.isRequired,
	reverse: PropTypes.bool,
};

export default Card;
