import { motion } from "framer-motion";
import { about } from "../../assets";

const HomeAbout = () => {
	// Animation variants for text content
	const textVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	// Animation variants for image
	const imageVariants = {
		hidden: { opacity: 0, x: 50, scale: 0.9 },
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
		},
	};

	// Animation variants for button
	const buttonVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
		},
	};

	// Staggered animation for text elements
	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const staggerItem = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<section className='py-16 px-4 md:px-8 max-w-7xl mx-auto'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
				{/* Text Content */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={staggerContainer}
					className='space-y-6'
				>
					<motion.div variants={staggerItem}>
						<span className='inline-block text-light-brown font-semibold text-sm uppercase tracking-wide mb-2'>
							About Explore 360
						</span>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>
							Guiding Your Success in African Markets
						</h2>
					</motion.div>

					<motion.p
						variants={staggerItem}
						className='text-gray-600 text-lg leading-relaxed'
					>
						At Explore360, we specialize in guiding businesses through
						successful startup, growth and expansion in African markets. With deep
						expertise in market research, business development, and
						policy advisory, we provide end-to-end solutions that help
						companies navigate new territories with confidence.
					</motion.p>

					<motion.p
						variants={staggerItem}
						className='text-gray-600 text-lg leading-relaxed'
					>
						From stakeholder engagement to lead generation and
						strategic partnerships, we ensure our clients are equipped
						with local insights and global standards. Our services
						include coordinating business tours, trade missions, business education, and
						business consulting support, all designed to unlock
						growth, reduce risk, and drive measurable impact across
						emerging markets.
					</motion.p>

					<motion.div variants={buttonVariants}>
						<motion.button
							whileHover={{
								scale: 1.05,
								boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
							}}
							whileTap={{ scale: 0.95 }}
							className='bg-primary-brown hover:bg-primary-brown/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl'
						>
							{/* <Link>Read More</Link> */}
						</motion.button>
					</motion.div>
				</motion.div>

				{/* Image Content */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={imageVariants}
					className='relative'
				>
					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.3 }}
						className='relative overflow-hidden rounded-2xl shadow-2xl'
					>
						<img
							src={about}
							alt='About Explore360 - African business expansion experts'
							className='w-full h-auto object-cover'
						/>
						{/* Subtle overlay for better image quality */}
						<div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent' />
					</motion.div>

					{/* Decorative elements */}
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.8, duration: 0.6 }}
						className='absolute -top-4 -right-4 w-20 h-20 bg-light-brown/20 rounded-full blur-xl'
					/>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 1, duration: 0.6 }}
						className='absolute -bottom-4 -left-4 w-16 h-16 bg-primary-brown/20 rounded-full blur-xl'
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default HomeAbout;
