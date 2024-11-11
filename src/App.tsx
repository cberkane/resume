import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import routes from "./routes";


function App() {
  const content = useRoutes(routes, '');
  
  return (
    <>
      <Navbar />
      {content}
      <Footer />
    </>
  )
}

export default App
