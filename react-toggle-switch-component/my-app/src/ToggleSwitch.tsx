import { useState } from 'react';
import './SwitchStyle.css';

function ToggleSwitch() {
  const [isToggled, setToggle] = useState(true);
  let statusText = 'Off';
  let toggleSwitchOn = 'toggle-switch';

  function toggleButton() {
    setToggle(!isToggled);
  }

  if (isToggled === true) {
    statusText = 'On';
    toggleSwitchOn = 'toggle-switch is-on';
  } else {
    statusText = 'Off';
    toggleSwitchOn = 'toggle-switch';
  }

  return (
    <div className={toggleSwitchOn} onClick={toggleButton}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <p className="toggle-switch state-label">{statusText}</p>
    </div>
  );
}

export default ToggleSwitch;
