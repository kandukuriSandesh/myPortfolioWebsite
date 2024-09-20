import React, { useEffect, useState } from 'react';
import './ToggleButton.css';

function ToggleButton({isToggled,setIsToggled}) {

    useEffect(() => {
      if (isToggled) {
          document.documentElement.style.setProperty('--background-color', '#ffffff'); // New theme background
          document.documentElement.style.setProperty('--text-color', '#000000'); // New theme text color
      } else {
          document.documentElement.style.setProperty('--background-color', '#282c34'); // Initial theme background
          document.documentElement.style.setProperty('--text-color', '#61dafb'); // Initial theme text color
      }
  }, [isToggled]);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-container">
      <input 
        type="checkbox" 
        id="toggle" 
        className="toggle-checkbox" 
        checked={isToggled} 
        onChange={handleToggle} 
      />
      <label htmlFor="toggle" className="toggle-label"></label>
    </div>
  );
}

export default ToggleButton;
