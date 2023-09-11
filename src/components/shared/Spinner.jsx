import spinner from '../../assets/90-ring.svg/';

const Spinner = () => {
	return (
		<img
			src={spinner}
			style={{
				width: '100px',
				margin: 'auto',
				display: 'block',
			}}
			alt='Loading, please wait'
		/>
	);
};

export default Spinner;
