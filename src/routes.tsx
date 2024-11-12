import { Navigate, RouteObject } from "react-router-dom";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/resume",
		element: <Resume />,
	},
	{
		path: "/skills",
		element: <Skills />,
	},
	{
		path: "/contact",
		element: <Contact />,
	}
];

export default routes;



