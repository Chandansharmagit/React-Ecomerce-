import React, { useState } from 'react';const ScrollComponent = () => {
    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
      setHovered(true);
    };
    const handleMouseLeave = () => {
      setHovered(false);
    };
    return (
      <div
        className={`my-element ${hovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1>Hover Effect Example</h1>
        <p>{hovered ? 'Mouse entered!' : 'Mouse left!'}</p>
      </div>
    );
  };
  export default ScrollComponent;