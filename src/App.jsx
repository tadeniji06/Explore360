import AppRoutes from "./routes/routes";
import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const App = () => {
	const projectId = 'sd5vdec7d7';
		useEffect(() => {
		Clarity.init(projectId);
	}, []);
	return <AppRoutes />;
};
export default App;
