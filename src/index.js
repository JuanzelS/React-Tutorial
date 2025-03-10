import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import POPOSList from './components/POPOSList';
import About from './AboutPage';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<POPOSList />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
