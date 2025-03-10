import { useState } from 'react';
import data from '../sfpopos-data.js'; // Ensure this path is correct
import POPOSSpace from '../POPOSSpace.js'; // Import POPOSSpace component





function POPOSList() {
  const [query, setQuery] = useState('');

  // Filter data based on query input for title or address
  const spaces = data
    .filter((obj) => {
      const inTitle = obj.title.toLowerCase().includes(query.toLowerCase());
      const inAddress = obj.address.toLowerCase().includes(query.toLowerCase());
      return inTitle || inAddress;
    })
    .map((obj) => {
      const { id, title, address, images, hours } = obj;

      // Ensure images is defined and fall back to an empty array if not
      const image = (images && images.length > 0) ? images[0] : 'default-image.jpg'; // Fallback to default image

      return (
        <POPOSSpace
          key={id} // Use id for uniqueness
          id={id}
          name={title}
          address={address}
          image={`${process.env.PUBLIC_URL}/images/${image}`} // Use process.env.PUBLIC_URL for images in public folder
          hours={hours}
        />
      );
    });

  // Handle form submit to prevent page reload
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="POPOSList">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Search by address or title"
          onChange={(e) => setQuery(e.target.value)} // Update query on input change
        />
        <button type="submit" disabled={!query}>Submit</button> {/* Disable button if no input */}
      </form>
      {/* Displaying the filtered spaces */}
      {spaces.length > 0 ? (
        <div className="spaces-list">{spaces}</div>
      ) : (
        <p>No spaces found matching your search criteria.</p> // Show message if no results
      )}
    </div>
  );
}

export default POPOSList;
