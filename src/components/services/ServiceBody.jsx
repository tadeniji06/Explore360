import { motion } from "framer-motion";
import { ptn, mkt, tour, reg } from "../../assets";

const ServiceBody = () => {
	const services = [
		{
			name: "Business Registration",
			image: reg,
			desc: "Our experts guide you through regulatory requirements, compliance processes, and documentation to ensure a smooth and timely establishment of your company",
		},
		{
			name: "Market Research",
			image: mkt,
			desc: "We conduct comprehensive market research to help you understand your target audience, industry trends, and competitive landscape, enabling informed decision-making.",
		},
		{
			name: "Partnerships and Collaborations",
			image: ptn,
			desc: "We facilitate partnerships and collaborations with local businesses, government agencies, and industry stakeholders to enhance your market entry strategy and foster growth.",
		},
		{
			name: "Tourism and Hospitality Consulting",
			image: tour,
			desc: "We provide specialized consulting services for the tourism and hospitality sector, helping businesses optimize operations, enhance guest experiences, and drive revenue growth.",
		},
		{
			name: "Market Testing",
			image: mkt, // You can replace with a specific market testing image
			desc: "We help you validate your products and services in African markets through comprehensive testing strategies, consumer feedback analysis, and market viability assessments.",
		},
		{
			name: "Bank Account Setup",
			image: reg, // You can replace with a banking-specific image
			desc: "Navigate the complexities of African banking systems with our expert assistance in setting up local bank accounts, understanding banking regulations, and establishing financial operations.",
		},
		{
			name: "Policy Advisory",
			image: ptn, // You can replace with a policy-specific image
			desc: "Stay compliant and informed with our policy advisory services, providing insights on regulatory changes, government policies, and strategic guidance for sustainable business operations.",
		},
		{
			name: "Stakeholder Engagement",
			image: tour, // You can replace with a stakeholder-specific image
			desc: "Build meaningful relationships with key stakeholders including government officials, industry leaders, and community representatives to ensure successful market integration.",
		},
		{
			name: "Management Administration and Office Management",
			image: ptn, // You can replace with an office management-specific image
			desc: "Streamline your operations with our comprehensive management services including office setup, administrative support, HR management, and operational efficiency optimization.",
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
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

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<section className='py-16 px-4 md:px-8 bg-white'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={containerVariants}
					className='text-center mb-16'
				>
					<motion.h2
						variants={itemVariants}
						className='text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'
					>
						Our Business Expansion{" "}
						<span className='text-light-brown'>
							Consulting Services
						</span>
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className='text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'
					>
						Our comprehensive services are tailored to empower your
						business to thrive across the continent's dynamic markets
						with end-to-end support.
					</motion.p>
				</motion.div>

				{/* Services Grid */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
				>
					{services.map((service, index) => (
						<motion.div
							key={service.name}
							variants={cardVariants}
							whileHover={{
								y: -8,
								transition: { duration: 0.3, ease: "easeOut" },
							}}
							className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100'
						>
							{/* Image Section */}
							<div className='relative overflow-hidden h-48 md:h-52'>
								<motion.img
									src={service.image}
									alt={service.name}
									className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
									whileHover={{ scale: 1.05 }}
								/>
								{/* Gradient overlay */}
								<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />

								{/* Service number badge */}
								<div className='absolute top-4 left-4 bg-primary-brown text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm'>
									{index + 1}
								</div>
							</div>

							{/* Content Section */}
							<div className='p-6'>
								<motion.h3 className='text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-light-brown transition-colors duration-300 line-clamp-2'>
									{service.name}
								</motion.h3>
								<motion.p className='text-gray-600 leading-relaxed mb-4 text-sm line-clamp-4'>
									{service.desc}
								</motion.p>

								{/* Learn More Button */}
								<motion.button
									whileHover={{
										scale: 1.05,
										boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
									}}
									whileTap={{ scale: 0.95 }}
									className='inline-flex items-center text-light-brown font-semibold hover:text-primary-brown transition-colors duration-300 group text-sm'
								>
									Learn More
									<motion.svg
										className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17 8l4 4m0 0l-4 4m4-4H3'
										/>
									</motion.svg>
								</motion.button>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={containerVariants}
					className='text-center mt-16'
				>
					<motion.div
						variants={itemVariants}
						className='bg-gray-50 rounded-2xl p-8 md:p-12'
					>
						<h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
							Ready to Expand Your Business?
						</h3>
						<p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto'>
							Let our expert team guide you through every step of your
							African market expansion journey with our comprehensive
							suite of services.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<motion.button
								whileHover={{
									scale: 1.05,
									boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
								}}
								whileTap={{ scale: 0.95 }}
								className='bg-primary-brown hover:bg-primary-brown/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg'
							>
								Get Started Today
							</motion.button>
							<motion.button
								whileHover={{
									scale: 1.05,
									boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
								}}
								whileTap={{ scale: 0.95 }}
								className='bg-light-brown hover:bg-light-brown/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg'
							>
								Schedule Consultation
							</motion.button>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ServiceBody;
