const Button = ({ className, onClick, title, isLoading }) => {
	return (
		<button
			className={`${className} px-4 py-2 rounded-md flex items-center justify-center font-semibold`}
			onClick={onClick}
			disabled={isLoading}
		>
			{isLoading ? (
				<div className='animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2' />
			) : null}
			{title}
		</button>
	);
};

export default Button;
