import Hero from "../components/home/Hero";
import HomeAbout from "../components/home/HomeAbout";
import Explore from "../components/home/Explore";
import Consult from "../components/home/Consult";
import Chronicles from "../components/home/Chronicles";
const Home = () => {
	return (
		<>
			<Hero />
			<HomeAbout />
			<hr className='border border-gray-700' />
			<Explore />
			<hr className='border border-gray-700' />
			<Consult />
			<hr className='border border-gray-700' />
			<Chronicles />
		</>
	);
};
export default Home;
