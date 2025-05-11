import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import About from "./pages/About";
import Services from "./pages/Services"; 
import Contact from "./pages/Contact"; 
import './App.css';
import Home from './pages/Home';
import "./App.css";
import ascendons from "./ascendons.jpeg";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
      <Footer />
    </>
  );
}

export default App;