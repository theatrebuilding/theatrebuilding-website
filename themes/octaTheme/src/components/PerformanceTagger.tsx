import React, { useState } from 'react';

const PerformanceTagger = ({ input, field, form }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Implement your search logic here
    // Update 'results' based on the search
  };

  const handleSelectPerformance = (performance) => {
    // Logic to add the selected performance to the tags
    // This might involve updating the form values or the input field
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} />
      <ul>
        {results.map((performance, index) => (
          <li key={index} onClick={() => handleSelectPerformance(performance)}>
            {performance.name} {/* Adjust based on your data structure */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceTagger;
