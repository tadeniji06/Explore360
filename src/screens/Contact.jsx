import { motion } from "framer-motion";
import { socials } from "../utils/data";
import { Icon } from "@iconify/react";
import Ready from "../components/home/Ready";
const Contact = () => {
	return (
		<section className='bg-gray-50 py-20 px-6'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
				{/* Left: Contact Info + Socials */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className='space-y-8'
				>
					<div>
						<h2 className='text-3xl font-bold text-gray-800 mb-2'>
							Get in Touch
						</h2>
						<p className='text-gray-600 max-w-md'>
							We’re excited to hear from you. Drop us a message, or
							reach out directly via our contact details or socials
							below.
						</p>
					</div>

					{/* Contact Info */}
					<div className='space-y-4 text-gray-700'>
						<p>
							📞 Phone:{" "}
							<a
								href='tel:+2349012345678'
								className='text-light-brown hover:underline'
							>
								+234 901 234 5678
							</a>
						</p>
						<p>
							📧 Email:{" "}
							<a
								href='mailto:hello@explore360.africa'
								className='text-light-brown hover:underline'
							>
								hello@explore360.africa
							</a>
						</p>
					</div>

					{/* Socials */}
					<div className='flex gap-5 items-center flex-wrap mt-6'>
						{socials.map((item, i) => (
							<motion.a
								key={item.name}
								href={item.link}
								target='_blank'
								rel='noopener noreferrer'
								whileHover={{ scale: 1.15 }}
								whileTap={{ scale: 0.95 }}
								className='text-light-brown hover:text-orange-600 text-2xl'
							>
								<Icon
									icon={
										item.name === "Facebook"
											? "mdi:facebook"
											: item.name === "Twitter"
											? "mdi:twitter"
											: item.name === "Instagram"
											? "mdi:instagram"
											: item.name === "LinkedIn"
											? "mdi:linkedin"
											: item.name === "WhatsApp"
											? "mdi:whatsapp"
											: "mdi:account"
									}
									width='28'
									height='28'
								/>
							</motion.a>
						))}
					</div>

					{/* Map */}
					<div className='mt-10 w-full h-64 rounded-lg overflow-hidden shadow-sm border'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.635046076416!2d3.361918315823735!3d6.595145695193492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d98b96a26ab%3A0x86e0aeb1176a758f!2sOmole%20Phase%201%2C%20Ojodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1616035303401!5m2!1sen!2sng'
							width='100%'
							height='100%'
							style={{ border: 0 }}
							allowFullScreen={false}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</motion.div>

				{/* Right: Contact Form */}
				<motion.form
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className='bg-white rounded-xl p-8 shadow-lg space-y-6'
					onSubmit={(e) => {
						e.preventDefault();
						alert("Form submitted (mock)");
					}}
				>
					<h3 className='text-2xl font-semibold text-gray-800'>
						Send a Message
					</h3>
					<div className='space-y-4'>
						<input
							type='text'
							placeholder='Your Name'
							className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-brown'
							required
						/>
						<input
							type='email'
							placeholder='Your Email'
							className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-brown'
							required
						/>
						<textarea
							rows={5}
							placeholder='Your Message'
							className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-brown'
							required
						></textarea>
					</div>
					<button
						type='submit'
						className='bg-light-brown text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition'
					>
						Send Message
					</button>
				</motion.form>
			</div>
			<Ready />
		</section>
	);
};

export default Contact;
