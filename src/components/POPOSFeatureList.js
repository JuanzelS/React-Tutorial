import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary routing components
import Title from './Title';
import POPOSList from './POPOSList'; // Assuming you have this component
import POPOSDetails from './POPOSDetails'; // Assuming you have this component


function App() {
  return (
    <Router> {/* Wrap your application in Router */}
      <div>
        <Title /> {/* Display Title */}
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<POPOSList />} />
          <Route path="/popos/:name" element={<POPOSDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
