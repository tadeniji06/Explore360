import { motion } from "framer-motion";

const Ready = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className='bg-light-brown mb-6 mt-6 text-white rounded-2xl max-w-[1000px] mx-auto py-12 px-4 flex justify-center items-center'
		>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={{
					hidden: {},
					visible: {
						transition: {
							staggerChildren: 0.2,
							delayChildren: 0.2,
						},
					},
				}}
				className='text-center space-y-6 max-w-xl mx-auto'
			>
				<motion.h2
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { duration: 0.6 },
						},
					}}
					className='text-2xl md:text-3xl font-semibold'
				>
					Ready to Expand or Explore Africa?
				</motion.h2>

				<motion.p
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { duration: 0.6 },
						},
					}}
					className='text-sm md:text-base text-white/90'
				>
					Partner with Explore360 today and let us guide your journey
					to business success and cultural discovery across Africa.
				</motion.p>

				<motion.button
					whileHover={{
						scale: 1.05,
						boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
					}}
					whileTap={{ scale: 0.95 }}
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { duration: 0.6 },
						},
					}}
					className='bg-white text-light-brown font-semibold px-6 py-3 rounded-full shadow-md transition duration-300'
				>
					Register Now
				</motion.button>
			</motion.div>
		</motion.section>
	);
};

export default Ready;
