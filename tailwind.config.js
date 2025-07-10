/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-brown": "#4e1803f0",
				"light-brown": "#BC3908",
			},
		},
	},
	plugins: [],
};
