import { useState } from 'react'
import './App.css'

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff');
  console.log(color)
  return(
    <div id = "color-picker-container"  style={{ backgroundColor: color }} >
      <p>Choose a color to change the background</p>
      <input id ="color-input" type="color" value={color}  onChange={(e) => setColor(e.target.value)}/>
    </div>
  )
};


export default ColorPicker;
