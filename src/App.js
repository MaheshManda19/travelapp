import React from 'react';
import FantasticTourVlog from './components/pages/FantasticTourVlog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About'; // Import the About component
import Help from './components/pages/Help';
import TourDetail from './components/pages/TourDetail';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<FantasticTourVlog  />}></Route>
        <Route path="/tour"  element={<TourDetail />}></Route>
        <Route path='help' element={<Help></Help>}/>

      </Routes>
    </Router>
  );
}

export default App;
