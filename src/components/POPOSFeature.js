import React from 'react';
import './POPOSFeature.css';

function getFeature(str) {
  switch(str) {
    case 'outdoors':
      return '🌲';  // Outdoors emoji
    case 'coffee':
      return '☕️';  // Coffee emoji
    case 'art':
      return '🖼';  // Art emoji
    case 'toilet':
      return '🚽';  // Toilet emoji
    case 'power':
      return '🔌';  // Power emoji
    default:
      return '❓';  // Default emoji for unknown feature
  }
}

function POPOSFeature(props) {
  const emoji = getFeature(props.name);  // Get emoji based on the name prop
  return <div className="POPOSFeature">{emoji}</div>;
}

export default POPOSFeature;
