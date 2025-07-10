import { motion } from "framer-motion";
import { afri } from "../../assets";

const Chronicles = () => {
	return (
		<section className='py-16 px-4 bg-white'>
			<div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12'>
				{/* Africa Image */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
					className='flex-shrink-0'
				>
					<img
						src={afri}
						alt='Africa map'
						className='w-[300px] h-auto object-cover'
					/>
				</motion.div>

				{/* Content Card */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
					className='bg-gradient-to-br from-[#D24726] to-[#B63D1E] text-white rounded-2xl p-8 md:p-10 w-full max-w-md shadow-xl'
				>
					<h2 className='text-lg font-semibold mb-2'>
						Explore360 Chronicles Snippet
					</h2>
					<p className='text-sm leading-relaxed text-white/90 mb-6'>
						Stay informed with Explore360 Chronicles, our exclusive
						content series featuring insights, stories, and interviews
						on doing business and exploring Africa. Learn from
						industry leaders, uncover emerging opportunities, and be
						inspired by Africa's success stories.
					</p>
					<motion.button
						whileHover={{
							scale: 1.05,
							boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
						}}
						whileTap={{ scale: 0.95 }}
						className='bg-white text-[#B63D1E] font-semibold px-6 py-3 rounded-full transition duration-300'
					>
						Read Our Chronicles
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default Chronicles;
