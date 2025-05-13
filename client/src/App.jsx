import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
// import LandingPage from "./pages/Landing";
import Home from "./pages/Home";
import ProgressPage from "./pages/Progress-Tracker";
import HelpPage from "./pages/Help";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<ProgressPage/>}/>
        <Route path="/help" element={<HelpPage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
