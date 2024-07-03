import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NFTDetails from './components/NFTDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';  // Import the Login component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/nft/:id" element={<NFTDetails />} />
          <Route path="/login" element={<Login />} />  {/* Add Login route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
