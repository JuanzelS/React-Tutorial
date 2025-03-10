import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Title from './components/Title'; 
import POPOSList from './components/POPOSList'; 
import POPOSDetails from './components/POPOSDetails'; 

function App() {
  return (
    <Router> {/* Wrap your application in Router */}
      <div>
        <Title /> {/* Display Title */}
        <Routes>
          <Route path="/" element={<POPOSList />} />
          <Route path="/popos/:name" element={<POPOSDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
