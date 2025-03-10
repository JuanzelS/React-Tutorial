import { Link } from 'react-router-dom';
import React from 'react';
import './POPOSSpace.css';

function POPOSSpace({ name, address, image, hours }) {
  // Fallback image if no image is provided
  const imagePath = image ? `${process.env.PUBLIC_URL}/images/${image}` : `${process.env.PUBLIC_URL}/images/default-image.jpg`;

  return (
    <div className="POPOSSpace">
      <Link to={`/popos/${encodeURIComponent(name)}`} className="POPOSLink">
        {/* Image, name, address, and hours displayed with a link to detailed view */}
        <img src={imagePath} alt={name} />
        <h3>{name}</h3>
        <p>{address}</p>
        <p><strong>Hours:</strong> {hours}</p>
      </Link>
    </div>
  );
}

export default POPOSSpace;
