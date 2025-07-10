import {
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../screens/Home";
import About from "../screens/About";
import Tour from "../screens/Tour";
import Services from "../screens/Services";
import Contact from "../screens/Contact";
import NotFound from "../screens/NotFound";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/tour",
				element: <Tour />,
			},
			{
				path: "/services",
				element: <Services />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

const AppRoutes = () => {
	return <RouterProvider router={router} />;
};

export default AppRoutes;
