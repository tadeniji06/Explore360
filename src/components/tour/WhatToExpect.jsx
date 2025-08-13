import { motion } from "framer-motion";

const WhatToExpect = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				duration: 0.6,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const titleVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const expectationItems = [
		{
			title: "Business Training ( 3 Days)",
			description:
				"Comprehensive training sessions covering market entry strategies, local business practices, and regulatory compliance.",
		},
		{
			title: "1 on 1 Legal Advisory",
			description:
				"Personal consultation with local legal experts to navigate regulatory requirements and business setup procedures.",
		},
		{
			title: "Meet Up Industry Leaders",
			description:
				"Exclusive networking opportunities with established business leaders and potential partners in your target market.",
		},
		{
			title: "Attend Top Business Events",
			description:
				"Access to premium business conferences, trade shows, and industry gatherings throughout your tour.",
		},
		{
			title: "Nature, Safari, and Adventure",
			description:
				"Cultural immersion experiences including wildlife safaris and adventure activities to understand the local environment.",
		},
		{
			title: "Flight and Accommodation",
			description:
				"Complete travel package including round-trip flights and premium accommodation throughout your business tour.",
		},
	];

	return (
		<motion.section
			className='py-16 px-4 max-w-6xl mx-auto'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			variants={containerVariants}
		>
			<div className='grid lg:grid-cols-2 gap-12 items-start'>
				{/* Left Column - Title and Description */}
				<motion.div variants={titleVariants}>
					<h2 className='text-3xl md:text-4xl font-bold text-orange-600 mb-6'>
						What To Expect
					</h2>
					<p className='text-gray-600 text-lg leading-relaxed'>
						Join the Explore360 tour for a seamless blend of business
						insights, cultural immersion, and unforgettable
						experiences
					</p>
				</motion.div>

				{/* Right Column - Expectation Items */}
				<motion.div
					className='space-y-6'
					variants={containerVariants}
				>
					{expectationItems.map((item, index) => (
						<motion.div
							key={index}
							className='flex items-start gap-4 group'
							variants={itemVariants}
							whileHover={{
								scale: 1.02,
								transition: { duration: 0.2 },
							}}
						>
							{/* Icon Circle */}
							<motion.div
								className='flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-orange-200 transition-colors duration-300'
								whileHover={{
									scale: 1.1,
									transition: { duration: 0.2 },
								}}
							>
								<div className='w-3 h-3 bg-orange-600 rounded-full'></div>
							</motion.div>

							{/* Content */}
							<div className='flex-1'>
								<h3 className='text-lg font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300'>
									{item.title}
								</h3>
								<p className='text-gray-600 leading-relaxed'>
									{item.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.section>
	);
};

export default WhatToExpect;
