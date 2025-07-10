import { heroImage } from "../../assets";

const Hero = () => {
	return (
		<div className='relative'>
			<div
				className='bg-cover bg-center bg-no-repeat w-full h-[500px] md:h-[700px] relative transition-opacity duration-1000 ease-in-out'
				style={{ backgroundImage: `url(${heroImage})` }}
			>
				{/* Dark overlay */}
				<div className='absolute inset-0 bg-black/60' />

				{/* Content */}
				<div className='relative z-10 flex items-center justify-center h-full'>
					<div className='flex flex-col gap-6 text-white items-center px-4 max-w-4xl mx-auto text-center'>
						{/* Main heading */}
						<h1 className='text-4xl md:text-6xl font-bold leading-tight'>
							Expand Your Business into Africa with Confidence
						</h1>

						{/* Subheading */}
						<p className='text-lg md:text-xl font-medium leading-relaxed max-w-3xl'>
							Explore360 helps global companies enter and thrive in
							African markets through market research, local
							partnerships, regulatory support, and strategic
							execution
						</p>

						{/* Buttons */}
						<div className='flex flex-col sm:flex-row gap-4 mt-4'>
							<button className='bg-primary-brown hover:bg-primary-brown/90 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200'>
								Explore Our Services
							</button>
							<button className='bg-light-brown hover:bg-light-brown/90 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200'>
								Book Consultation
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
