import { Route, Routes, BrowserRouter } from "react-router-dom";


import './App.css';

import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import FAQ from "./Components/FAQ";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Jobs from "./Components/Jobs";




function App() {
  return (
    <div className="App">
      <Header></Header> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />

            <Route path="About" element={<About />} />

            <Route path="Services" element={<Services />} />
            <Route path="Jobs" element={<Jobs />} />
            
            <Route path="FAQ" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
