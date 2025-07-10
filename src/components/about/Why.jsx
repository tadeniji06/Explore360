import { motion } from "framer-motion";
import { why } from "../../assets";

const Why = () => {
	return (
		<section className='mt-12 px-4'>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true }}
				className='max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 bg-white rounded-2xl p-10 shadow-sm'
			>
				{/* Text Section */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex-1 space-y-6'
				>
					<h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
						Why Choose Explore360?
					</h2>
					<p className='text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl'>
						With deep regional expertise, strong stakeholder networks,
						and a team of experienced consultants and tour curators,
						Explore360 is uniquely positioned to guide your African
						journey. We blend business strategy with cultural
						immersion, ensuring every engagement delivers value,
						growth, and lasting partnerships.
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className='bg-light-brown text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg'
					>
						Read More
					</motion.button>
				</motion.div>

				{/* Image Section */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex-1 w-full'
				>
					<img
						src={why}
						alt='Why Choose Explore360'
						className='w-full h-auto object-cover rounded-lg'
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Why;
