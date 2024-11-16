import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import routes from "./routes";

import "./App.scss";

function App() {
  const content = useRoutes(routes, '');
  
  console.log(import.meta.env.VITE_BALOU);
  
  return (
    <>
      <Navbar />
      <div id="main-app-container">
        {content}
      </div>
      <Footer />
    </>
  )
}

export default App
