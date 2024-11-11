import { Navigate, RouteObject } from "react-router-dom";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

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
		path: "/skills",
		element: <Skills />,
	},
	{
		path: "/contact",
		element: <Contact />,
	}
];

export default routes;



