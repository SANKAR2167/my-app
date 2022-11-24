import { useState } from 'react';

function AddColor() {
  const [color, setColor] = useState('orange');
  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState(['crimson', 'orange', 'red', 'pink']);
  return (
    <div>
      <input style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder='enter a color'
        value={color} />
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => <ColorBox color={clr} />)}
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    width: '250px',
    height: '25px',
    background: color,
    marginTop: '10px',
  };
  return <div style={styles}>

  </div>;
}
