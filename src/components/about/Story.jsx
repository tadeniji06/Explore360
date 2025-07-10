import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Story = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true }}
			className='mt-12 px-4 py-10 bg-white rounded-xl shadow-lg'
		>
			<div className='max-w-6xl mx-auto space-y-12'>
				{/* Our Story Section */}
				<div className='flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12'>
					{/* Icon + Title */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='flex items-center gap-3 min-w-[180px]'
					>
						<Icon
							icon='mdi:globe'
							className='text-light-brown'
							width='40'
							height='40'
						/>
						<h2 className='text-2xl font-semibold text-gray-800'>
							Our Story
						</h2>
					</motion.div>

					{/* Text */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-gray-700 text-base leading-relaxed max-w-3xl'
					>
						<p className='mb-4'>
							Founded with a vision to redefine Africa’s global
							perception, Explore360 began as a consultancy to support
							businesses seeking market entry and trade expansion.
						</p>
						<p>
							Over the years, we expanded to include curated business
							and leisure tours, offering our clients authentic
							African experiences alongside strategic business growth.
							Today, Explore360 stands as a leading pan-African
							partner for organisations and individuals looking to
							expand, connect, and explore Africa confidently.
						</p>
					</motion.div>
				</div>

				{/* Divider */}
				<div className='h-px w-full bg-gray-200' />

				{/* Our Mission Section */}
				<div className='flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12'>
					{/* Icon + Title */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='flex items-center gap-3 min-w-[180px]'
					>
						<Icon
							icon='fluent:handshake-24-filled'
							className='text-light-brown'
							width='40'
							height='40'
						/>
						<h2 className='text-2xl font-semibold text-gray-800'>
							Our Mission
						</h2>
					</motion.div>

					{/* Text */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-gray-700 text-base leading-relaxed max-w-3xl'
					>
						<p>
							At Explore360, our mission is to empower global
							businesses and individuals to unlock the vast
							opportunities within Africa. We achieve this by
							providing strategic business expansion consulting,
							curated trade facilitation, and immersive tours that
							bridge cultures, foster partnerships, and drive growth
							across the continent.
						</p>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default Story;
