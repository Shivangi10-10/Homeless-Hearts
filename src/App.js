import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Link
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Adopt from "./pages/Adopt";
import Donate from './pages/Donate';
import FooterContext from "./components/FooterContext";
import { useRef } from "react";
import Blog from "./pages/Blog";
import GetStarted from './pages/VolunteerForm';
import Button from "./pages/Button";
import ChatBot from "./pages/ChatBot";
import BlogCareGuide from "./pages/BlogCareGuide";
import BlogFirstAid from "./pages/BlogFirstAid";
import BlogNutrition from "./pages/BlogNutrition";
import BlogTraining from "./pages/BlogTraining";
import LoginForm from "./pages/LoginForm";
import VolunteerDashboard from "./pages/VolunteerDashboard";

const App = () => {
  const footerRef = useRef(null);
  return (
    <Router>
      <FooterContext.Provider value={footerRef}>
        <NavBar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Adopt" element={<Adopt />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogCareGuide" element={<BlogCareGuide />} />
          <Route path="/BlogNutrition" element={<BlogNutrition />} />
          <Route path="/BlogFirstAid" element={<BlogFirstAid />} />
          <Route path="/BlogTraining" element={<BlogTraining />} />
          <Route path="/GetStarted" element={<GetStarted />} />
          <Route path="/Button" element={<Button />} />
          <Route path="/ChatBot" element={<ChatBot />} />
          <Route path="/LoginForm" element={<LoginForm />} /> 
          <Route path="/VolunteerDashboard" element={<VolunteerDashboard />} />
        </Routes>
        <Footer />
        <Link to="/LoginForm"> {/* Link to LoginForm */}
          <Button>Apply</Button> {/* Apply button */}
        </Link>
        <Link to="/VolunteerDashboard"> 
          <Button>Login</Button> 
        </Link>
      </FooterContext.Provider>
      <ChatBot />
    </Router>
  );
};

export default App;
