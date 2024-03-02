import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Donate from './pages/Donate';
import FooterContext from "./components/FooterContext";
import { useRef } from "react";
import Blog from "./pages/Blog";
import GetStarted from './pages/VolunteerForm'
import Responsibilities from "./pages/Responsibilities";
import Vet from './pages/Vet';
import Button from "./pages/Button";
import ChatBot from "./pages/ChatBot";

const App = () => {
  const footerRef = useRef(null);
  return (
    <Router>
      <FooterContext.Provider value={footerRef}>
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/Button" element={<Button/>}/>
        <Route path="/ChatBot" element={<ChatBot/>}/>
      </Routes>
      <Footer/>
      </FooterContext.Provider>
      <Button/>
      <ChatBot/>
    </Router>
  );
};

export default App;
