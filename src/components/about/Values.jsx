import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const valuesData = [
	{
		icon: "mdi:shield-check",
		title: "Professionalism",
		description:
			"We uphold the highest standards of excellence in everything we do. From the first consultation to project execution, we combine expert insight with diligence, ensuring deliverables that not only meet our clients’ expectations, but exceed them. Our approach is strategic, with insights, timeliness, and services that drive your goals forward with confidence and clarity.",
	},
	{
		icon: "mdi:handshake",
		title: "Integrity",
		description:
			"Trust is the foundation of our relationships. We operate with unwavering transparency, honesty, and ethical practices in all engagements. Whether advising on sensitive market entry strategies or facilitating partnerships, we ensure that integrity is at the core of everything we do and the right fit for our clients, partners, and communities.",
	},
	{
		icon: "mdi:earth",
		title: "Pan-African Excellence",
		description:
			"We celebrate Africa’s diversity, opportunities, and humanity — with a deep understanding of regional cultures, economies, and networks, we tailor each client experience with localized context. This enables us to create the most authentic and relevant strategies by combining global best practices with local knowledge — delivering outcomes that drive sustainable impact across the continent.",
	},
	{
		icon: "mdi:lightbulb-on-outline",
		title: "Innovation",
		description:
			"In a rapidly evolving world, we bring fresh perspectives to every project. We embrace creativity and adaptive thinking, alongside validated structures that address your unique challenges and opportunities. Our innovative mindset ensures you stay competitive, while unlocking possibilities for growth, partnership, and exploration.",
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.2, duration: 0.6 },
	}),
};

const Values = () => {
	return (
		<section className='py-16 px-4 bg-gray-50'>
			<div className='max-w-7xl mx-auto text-center mb-12'>
				<h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
					Our Values
				</h2>
				<p className='text-gray-600 mt-3 max-w-2xl mx-auto'>
					We are driven by values that define our brand and the impact
					we create for our clients
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
				{valuesData.map((value, index) => (
					<motion.div
						key={index}
						custom={index}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={cardVariants}
						className='bg-white rounded-xl shadow-md p-6 text-left border border-gray-100 hover:shadow-lg transition'
					>
						<div className='mb-4 flex items-center gap-2 text-light-brown'>
							<Icon icon={value.icon} width='24' height='24' />
							<h3 className='font-semibold text-lg text-gray-800'>
								{value.title}
							</h3>
						</div>
						<p className='text-gray-600 text-sm leading-relaxed'>
							{value.description}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Values;
