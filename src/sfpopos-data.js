// Import the JSON data
import rawData from './data/sfpopos-data.json';

// Adding a unique `id` to each object in the array
const data = rawData.map((obj, index) => ({
  ...obj,
  id: index // Assigning a unique id based on the index
}));

// Export the modified data
export default data;
