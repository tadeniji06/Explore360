import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom"; // if you're using React Router

const NotFound = () => {
	return (
		<section className='min-h-screen flex items-center justify-center bg-white px-6 py-16'>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='text-center max-w-lg'
			>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
					className='mb-6'
				>
					<Icon
						icon='mdi:alert-circle-outline'
						width='72'
						height='72'
						className='text-light-brown mx-auto'
					/>
				</motion.div>

				<h1 className='text-5xl font-bold text-gray-800 mb-4'>404</h1>
				<p className='text-gray-600 text-lg mb-8'>
					Oof. The page you're looking for doesn’t exist or might’ve
					been moved.
				</p>

				<Link
					to='/'
					className='inline-block bg-light-brown text-white px-6 py-3 rounded-full font-semibold transition hover:bg-orange-700'
				>
					Go back home
				</Link>
			</motion.div>
		</section>
	);
};

export default NotFound;
