import React, { useState } from 'react';
import "./Toggle.css"

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isToggled ? 'Turn Off' : 'Turn On'}
      </button>
      {isToggled && <p className='mt-3 bg class'>Toggle is ON</p>}
    </div>
  );
}

export default Toggle;

