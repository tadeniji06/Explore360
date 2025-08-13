import {
	ptn,
	mkt,
	tour,
	reg,
	spotify,
	youtube,
	video,
} from "../../assets";

const Consult = () => {
	const services = [
		{
			name: "Business Registration",
			image: reg,
			desc: "Our experts guide you through regulatory requirements, compliance processes, and documentation to ensure a smooth and timely establishment of your company",
		},
		{
			name: "Market Research",
			image: mkt,
			desc: "We conduct comprehensive market research to help you understand your target audience, industry trends, and competitive landscape, enabling informed decision-making.",
		},
		{
			name: "Partnerships and Collaborations",
			image: ptn,
			desc: "We facilitate partnerships and collaborations with local businesses, government agencies, and industry stakeholders to enhance your market entry strategy and foster growth.",
		},
		{
			name: "Business Strategy Consulting",
			image: tour,
			desc: "We provide customized business strategy consulting services for players in different sectors, helping businesses to optimize their operations and drive revenue growth.",
		},
	];

	return (
		<section className='py-16 px-4 md:px-8 bg-white'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<div className='text-center mb-16'>
					<h2 className='text-xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight'>
						Engage Our Business Growth{" "}
						<span className=''>Consulting Services</span>
					</h2>
					<p className='text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
						Our services are tailored to empower your business to
						thrive across the continent's dynamic markets.
					</p>
				</div>

				{/* Services Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{services.map((service, index) => (
						<div
							key={service.name}
							className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100'
						>
							{/* Image Section */}
							<div className='relative overflow-hidden h-48 md:h-56'>
								<img
									src={service.image}
									alt={service.name}
									className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
								/>
								{/* Gradient overlay */}
								<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />

								{/* Service number badge */}
								<div className='absolute top-4 left-4 bg-primary-brown text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm'>
									{index + 1}
								</div>
							</div>

							{/* Content Section */}
							<div className='p-6 md:p-8'>
								<h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-light-brown transition-colors duration-300'>
									{service.name}
								</h3>
								<p className='text-gray-600 leading-relaxed mb-6'>
									{service.desc}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Enhanced Call to Action with Video */}
				<div className='mt-20'>
					<div className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 overflow-hidden relative'>
						{/* Background decoration */}
						<div className='absolute top-0 right-0 w-64 h-64 bg-primary-brown/5 rounded-full -translate-y-32 translate-x-32'></div>
						<div className='absolute bottom-0 left-0 w-48 h-48 bg-light-brown/5 rounded-full translate-y-24 -translate-x-24'></div>

						<div className='relative z-10'>
							<h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center'>
								Watch and listen to our Showcase Africa Podcast
							</h3>
							<p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto text-center'>
								Glean insights from experts in different markets,
								watch and listen to our Business Showcase podcast here
							</p>

							{/* Video Section */}
							<div className='mb-10 max-w-4xl mx-auto'>
								<div className='relative rounded-2xl overflow-hidden shadow-2xl'>
									<video
										className='w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl'
										controls
										preload='metadata'
									>
										<source src={video} type='video/mp4' />
										Your browser does not support the video tag.
									</video>
								</div>
							</div>

							{/* Social Media Links */}
							<div className='text-center'>
								<p className='text-gray-700 font-medium mb-8 text-lg'>
									Follow us on your favorite platform:
								</p>

								<div className='flex flex-col sm:flex-row gap-8 justify-center items-center mb-8'>
									{/* YouTube Link */}
									<a
										href='https://youtube.com/@YourChannelName' // Replace with your actual YouTube channel
										target='_blank'
										rel='noopener noreferrer'
										className='group flex items-center gap-6 bg-white hover:bg-red-50 px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-red-200 min-w-[250px]'
									>
										<div className='w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300'>
											<img
												src={youtube}
												alt='YouTube'
												className='w-12 h-12 object-contain'
											/>
										</div>
										<div className='text-left'>
											<p className='font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 text-lg'>
												Watch on YouTube
											</p>
											<p className='text-gray-500'>Video episodes</p>
										</div>
									</a>

									{/* Spotify Link */}
									<a
										href='https://open.spotify.com/show/YourPodcastID' // Replace with your actual Spotify podcast
										target='_blank'
										rel='noopener noreferrer'
										className='group flex items-center gap-6 bg-white hover:bg-green-50 px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-200 min-w-[250px]'
									>
										<div className='w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300'>
											<img
												src={spotify}
												alt='Spotify'
												className='w-12 h-12 object-contain'
											/>
										</div>
										<div className='text-left'>
											<p className='font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300 text-lg'>
												Listen on Spotify
											</p>
											<p className='text-gray-500'>Audio episodes</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Consult;
