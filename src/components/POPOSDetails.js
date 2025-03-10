import React from 'react';
import { useParams } from 'react-router-dom';
import './POPOSDetails.css';
import data from '../data/sfpopos-data.json'; // Updated path
import POPOSFeatureList from './POPOSFeatureList';  // Import from the correct path

function POPOSDetails() {
  const { id } = useParams();
  const space = data.find(space => space.id === id); // Find the specific space by ID
  
  if (!space) return <h2>Space not found</h2>;

  const { images, title, desc, hours, features, geo } = space;

  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{title}</h1>
        <p className="POPOSDetails-desc">{desc}</p>
        <p className="POPOSDetails-hours"><strong>Hours:</strong> {hours}</p>
        
        {/* Use the POPOSFeatureList to display the features as emojis */}
        <div className="POPOSDetails-features">
          <strong>Features:</strong>
          <POPOSFeatureList features={features} /> {/* Pass features array to POPOSFeatureList */}
        </div>
        
        <p className="POPOSDetails-geo"><strong>Location:</strong> {geo.lat}, {geo.lon}</p>
      </div>
    </div>
  );
}

export default POPOSDetails;
