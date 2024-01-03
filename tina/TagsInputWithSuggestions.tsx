import React, { useState, useEffect } from 'react';
import tagsData from '../static/tags.json';

const divStyle = {
    zIndex: "994",
};

const inputStyle = {
    // Add more styles as needed
  };
  
  const ulStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    transition: 'height 1s ease',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    marginBottom: '50px',
    marginTop: '5px',
  };
  
  const liStyle = {
    paddingLeft: '5px',
    paddingRight: '5px',
    cursor: 'pointer',
    margin: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
  };

  const TagsInputWithSuggestions = (props) => {
    const [inputValue, setInputValue] = useState(props.input.value || '');
    const [userIsTyping, setUserIsTyping] = useState(false);
    const [suggestions, setSuggestions] = useState(tagsData.tags.map(tag => ({ value: tag, label: tag }))); // Initialize with all options
  
    useEffect(() => {
        if (!userIsTyping) {
          // Reset to all suggestions when not typing
          setSuggestions(tagsData.tags.map(tag => ({ value: tag, label: tag })));
        }
      }, [userIsTyping]);
      
  
      const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        setUserIsTyping(true);
      
        // Extract the latest word after the last comma
        const words = newValue.split(',');
        const latestWord = words[words.length - 1].trim();
      
        // Update suggestions based on the latest word
        const filtered = tagsData.tags.filter(tag =>
          tag.toLowerCase().includes(latestWord.toLowerCase())
        ).map(tag => ({ value: tag, label: tag }));
      
        setSuggestions(filtered);
      
        // Inform TinaCMS of the change
        props.input.onChange(newValue);
      };
      
      
  
      const handleSuggestionClick = (label) => {
        setInputValue(prev => {
          // Split the current input by comma and trim each part
          const parts = prev.split(',').map(part => part.trim());
      
          // Replace the last part with the selected label
          parts[parts.length - 1] = label;
      
          // Join the parts back together with commas and add a comma and a space after the last label
          const newValue = parts.join(', ') + ', ';
      
          // Inform TinaCMS of the change
          props.input.onChange(newValue);
      
          return newValue;
        });
      
        setUserIsTyping(false); // Reset typing status on selecting a suggestion
      };
      
      
      
  
    return (
      <div
        className="relative mb-5 last:mb-0"
        style={divStyle}
        >
        <label 
          htmlFor="tags"
          className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2 undefined">
          Add some key words. You can chose from the list or write your own.
        </label>
        <input 
          type="text"
          className="shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md  undefined"
          value={inputValue}
          onChange={handleInputChange}
          style={inputStyle}
          name='tags'
        />
        <ul style={ulStyle}>
          {suggestions.map(suggestion => (
            <li
              key={suggestion.value}
              onClick={() => handleSuggestionClick(suggestion.label)}
              style={liStyle}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default TagsInputWithSuggestions;
