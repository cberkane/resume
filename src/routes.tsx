import { Navigate, RouteObject } from "react-router-dom";
import Home from "./pages/Home";


const routes: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		path: "/home",
		element: <Home />,
	}
];
export default routes;



