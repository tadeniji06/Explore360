import { tour2 } from "../../assets";

const TourHero = () => {
	return (
		<div className='relative'>
			<div
				className='bg-cover bg-center bg-no-repeat w-full h-[500px] md:h-[700px] relative transition-opacity duration-1000 ease-in-out'
				style={{ backgroundImage: `url(${tour2})` }}
			>
				{/* Dark overlay */}
				<div className='absolute inset-0 bg-black/70' />

				{/* Content */}
				<div className='relative z-10 flex items-center justify-center h-full'>
					<div className='flex flex-col gap-4 text-white items-center px-4 max-w-4xl mx-auto text-center'>
						{/* Upcoming Tour Badge */}
						<div className='bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium'>
							Upcoming Tour
						</div>

						{/* Main heading - KENYA */}
						<h1 className='text-5xl md:text-7xl font-bold tracking-wider'>
							KENYA
						</h1>

						{/* Subtitle */}
						<p className='text-lg md:text-xl font-medium'>
							Explore360 heads to Kenya in September
						</p>

						{/* Date */}
						<p className='text-base md:text-lg font-medium opacity-90'>
							September 15 - 30, 2025
						</p>

						{/* Get Ticket Button */}
						<div className='mt-4'>
							<button className='bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg'>
								Get Ticket
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TourHero;
