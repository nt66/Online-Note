import React, { useState, useEffect } from 'react'
import './index.less'

interface SwitchProps {
  onChange?: (newState: boolean) => void
  defaultValue:boolean
}

const Switch: React.FC<SwitchProps> = ({ onChange, defaultValue }) => {
  const [isChecked, setChecked] = useState(defaultValue)

  useEffect(()=>{
    setChecked(defaultValue)
  },[defaultValue])

  // 切换事件
  const handleToggle = () => {
    const newState = !isChecked
    setChecked(newState)

    if (onChange) {
      onChange(newState)
    }
  }

  return (
    <label className='switch'>
      <input type='checkbox' checked={isChecked} onChange={handleToggle} />
      <span className="slider round" />
    </label>
  );
};

export default React.memo(Switch)
