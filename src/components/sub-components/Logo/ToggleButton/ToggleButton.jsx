import React, { useEffect, useState } from 'react';
import './ToggleButton.css';

function ToggleButton() {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
      if (isChecked) {
          document.documentElement.style.setProperty('--background-color', '#ffffff'); // New theme background
          document.documentElement.style.setProperty('--text-color', '#000000'); // New theme text color
      } else {
          document.documentElement.style.setProperty('--background-color', '#282c34'); // Initial theme background
          document.documentElement.style.setProperty('--text-color', '#61dafb'); // Initial theme text color
      }
  }, [isChecked]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toggle-container">
      <input 
        type="checkbox" 
        id="toggle" 
        className="toggle-checkbox" 
        checked={isChecked} 
        onChange={handleToggle} 
      />
      <label htmlFor="toggle" className="toggle-label"></label>
    </div>
  );
}

export default ToggleButton;
