import { motion } from "framer-motion";
import { why } from "../../assets";

const ServiceHero = () => {
	return (
		<section className='py-16 px-4 bg-gray-200'>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10'
			>
				{/* Text Content */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					className='flex-1 space-y-6'
				>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-900'>
						Our Services
					</h1>
					<p className='text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl'>
						Our Strategic solutions to help you start, grow, expand
						and thrive across Africa. Explore360 consulting service
						arm provides tailored business growth and expansion
						services in Africa, supporting your organisation with
						actionable insights, market entry strategies, regulatory
						guidance, and stakeholder connections.
					</p>
				</motion.div>

				{/* Image */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					className='flex-1 w-full'
				>
					<img
						src={why}
						alt='Explore360 Services'
						className='w-full h-auto object-cover rounded-lg shadow-md'
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default ServiceHero;
