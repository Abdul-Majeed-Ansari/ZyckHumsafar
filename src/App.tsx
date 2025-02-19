import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Packages from "./pages/pricing/Pricing";
import FeaturedProfiles from "./pages/featuredprofile/FeaturedProfiles";
import Events from "./pages/events/Events";
import RishtaConsultants from "./pages/rishtaconsultants/RishtaConsultants";
import Layout from "./components/Layout";
import Signup from "./pages/register/SignUp";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Router>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/featuredprofiles" element={<FeaturedProfiles />} />
          <Route path="/rishtaconsultants" element={<RishtaConsultants />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </Layout>
      </Router>
    </>
  );
}

export default App;
