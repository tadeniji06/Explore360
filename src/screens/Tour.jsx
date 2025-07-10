// import Book from "../components/tour/Book";
import Spotlight from "../components/tour/Spotlight";
import TourHero from "../components/tour/TourHero";
import UpcomingTours from "../components/tour/UpcomingTours";
import WhatToExpect from "../components/tour/WhatToExpect";

const Tour = () => {
	return (
		<>
			<TourHero />
			<UpcomingTours />
			<WhatToExpect />
			{/* <Book /> */}
			<Spotlight />
		</>
	);
};
export default Tour;
