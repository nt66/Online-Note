import React, { useState } from 'react'
import './index.less'

interface TooltipProps {
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleMouseEnter = () => {
    setShowTooltip(true)
  };

  const handleMouseLeave = () => {
    setShowTooltip(false)
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && <div className="tooltip-text"><span>{text}</span></div>}
    </div>
  );
};

export default React.memo(Tooltip)