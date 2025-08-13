import { motion } from "framer-motion";
import { sa, iv, moro, ghana, heroImage } from "../../assets";

const Explore = () => {
	const countries = [
		{ name: "South Africa", image: sa },
		{ name: "Ghana", image: ghana },
		{ name: "Ivory Coast", image: iv },
		{ name: "Morocco", image: moro },
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const heroVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
		},
	};

	const countryVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<section className='bg-gray-50 py-16 px-4 md:px-8'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={containerVariants}
					className='text-center mb-12'
				>
					<motion.h2
						variants={itemVariants}
						className='text-3xl md:text-4xl font-bold text-light-brown mb-4'
					>
						Explore Our Upcoming Tours
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className='text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed'
					>
						Explore360 Business Tours combine strategic business visits
						with immersive cultural experiences, giving you unmatched
						insights into Africa's leading markets while enjoying its
						rich heritage and vibrant lifestyles.{" "}
						{/* <span className='text-light-brown font-semibold cursor-pointer hover:underline'>
							See All Tours
						</span> */}
					</motion.p>
				</motion.div>

				{/* Main Kenya Tour Section */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={heroVariants}
					className='relative mb-8 rounded-2xl overflow-hidden shadow-2xl'
				>
					<div
						className='bg-cover bg-center bg-no-repeat w-full h-[400px] md:h-[500px] relative'
						style={{ backgroundImage: `url(${heroImage})` }}
					>
						{/* Dark overlay */}
						<div className='absolute inset-0 bg-black/50' />

						{/* Upcoming Tour Badge */}
						<div className='absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium'>
							Upcoming Tour
						</div>

						{/* Content */}
						<div className='relative z-10 flex items-center justify-center h-full'>
							<div className='text-white text-center px-6'>
								<motion.h3
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.5, duration: 0.6 }}
									className='text-5xl md:text-7xl font-bold mb-4 tracking-wide'
								>
									KENYA
								</motion.h3>
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.7, duration: 0.6 }}
									className='text-xl md:text-2xl mb-8'
								>
									Explore360 heads to Kenya in September
								</motion.p>
								<motion.button
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.9, duration: 0.6 }}
									whileHover={{
										scale: 1.05,
										boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
									}}
									whileTap={{ scale: 0.95 }}
									className='bg-light-brown hover:bg-light-brown/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg'
								>
									Register Now
								</motion.button>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Countries Grid */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
					className='grid grid-cols-2 md:grid-cols-4 gap-4'
				>
					{countries.map((country, index) => (
						<motion.div
							key={country.name}
							variants={countryVariants}
							whileHover={{
								scale: 1.02,
								y: -5,
								transition: { duration: 0.3 },
							}}
							className='relative group cursor-pointer'
						>
							<div className='relative overflow-hidden rounded-xl shadow-lg'>
								<img
									src={country.image}
									alt={`${country.name} business tour`}
									className='w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110'
								/>
								{/* Overlay */}
								<div className='absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300' />

								{/* Country Name */}
								<div className='absolute bottom-4 left-4 text-white'>
									<h4 className='text-lg font-semibold'>
										{country.name}
									</h4>
								</div>

								{/* Hover overlay */}
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Explore;
