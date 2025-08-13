import { motion } from "framer-motion";
import { southA, kenA } from "../../assets";

const UpcomingTours = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				duration: 0.6,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
		hover: {
			scale: 1.02,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	return (
		<motion.section
			className='py-16 px-4 max-w-6xl mx-auto'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			variants={containerVariants}
		>
			{/* Header Section */}
			<motion.div
				className='text-center mb-12'
				variants={itemVariants}
			>
				<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
					Expand Your Network and Discover Africa's Markets
				</h2>
				<p className='text-gray-600 max-w-4xl mx-auto leading-relaxed'>
					Explore360's Business Tours are designed to immerse you in
					Africa's thriving economic landscapes, connect you with
					industry leaders, and provide firsthand insights into market
					opportunities. From corporate visits and government
					engagements to networking events and cultural immersions,
					our tours equip you with the knowledge, relationships, and
					confidence to grow your business across Africa.
				</p>
			</motion.div>

			{/* Upcoming Business Tours Title */}
			<motion.h3
				className='text-2xl font-bold text-gray-900 mb-8'
				variants={itemVariants}
			>
				Upcoming Business Tours
			</motion.h3>

			{/* Tours Grid */}
			<div className='grid md:grid-cols-2 gap-6'>
				{/* Kenya Business Tour */}
				<motion.div
					className='bg-white rounded-lg shadow-lg overflow-hidden'
					variants={cardVariants}
					whileHover='hover'
				>
					<div className='relative h-48 md:h-56'>
						<img
							src={kenA}
							alt='Kenya Business Tour'
							className='w-full h-full object-cover'
						/>
					</div>

					<div className='p-6'>
						<div className='flex items-center gap-2 mb-2'>
							<span className='bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-medium'>
								Business Tour
							</span>
						</div>

						<h4 className='text-xl font-bold text-gray-900 mb-2'>
							Kenya Business Tour
						</h4>

						<div className='flex items-center gap-2 text-gray-600 mb-4'>
							<svg
								className='w-4 h-4'
								fill='currentColor'
								viewBox='0 0 20 20'
							>
								<path
									fillRule='evenodd'
									d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
									clipRule='evenodd'
								/>
							</svg>
							<span>October 16 - 30, 2025</span>
						</div>

						{/* Tags */}
						<div className='flex flex-wrap gap-2 mb-6'>
							{[
								"Training",
								"Site Visits",
								"Networking",
								"City Tours",
								"Seminars",
								"Professionals",
								"Arts & Culture",
								"Exhibitions",
							].map((tag, index) => (
								<span
									key={index}
									className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'
								>
									{tag}
								</span>
							))}
						</div>

						{/* Price and Register */}
						<div className='flex items-center justify-between'>
							<div>
								<span className='text-2xl font-bold text-gray-900'>
									NGN 5.5M
								</span>
								<p className='text-sm text-gray-600'>
									Payment Available. Pay as low as 50k
								</p>
							</div>
							<button className='bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors'>
								Register
							</button>
						</div>
					</div>
				</motion.div>

				{/* South Africa Business Tour */}
				<motion.div
					className='bg-white rounded-lg shadow-lg overflow-hidden'
					variants={cardVariants}
					whileHover='hover'
				>
					<div className='relative h-48 md:h-56'>
						<img
							src={southA}
							alt='South Africa Business Tour'
							className='w-full h-full object-cover'
						/>
					</div>

					<div className='p-6'>
						<div className='flex items-center gap-2 mb-2'>
							<span className='bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-medium'>
								Business Tour
							</span>
						</div>

						<h4 className='text-xl font-bold text-gray-900 mb-2'>
							South Africa Business Tour
						</h4>

						<div className='flex items-center gap-2 text-gray-600 mb-4'>
							<svg
								className='w-4 h-4'
								fill='currentColor'
								viewBox='0 0 20 20'
							>
								<path
									fillRule='evenodd'
									d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
									clipRule='evenodd'
								/>
							</svg>
							<span>November 15 - 30, 2025</span>
						</div>

						{/* Tags */}
						<div className='flex flex-wrap gap-2 mb-6'>
							{[
								"Training",
								"Site Visits",
								"Networking",
								"City Tours",
								"Seminars",
								"Professionals",
								"Arts & Culture",
								"Exhibitions",
							].map((tag, index) => (
								<span
									key={index}
									className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'
								>
									{tag}
								</span>
							))}
						</div>

						{/* Price and Register */}
						<div className='flex items-center justify-between'>
							<div>
								<span className='text-2xl font-bold text-gray-900'>
									NGN 5.5M
								</span>
								<p className='text-sm text-gray-600'>
									Payment Available. Pay as low as 50k
								</p>
							</div>
							<button className='bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors'>
								Register
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default UpcomingTours;
