import React, {useState} from 'react'


const Box = () => {
  const [color, setColor] = useState('');
  const [boxList, setBoxList] = useState([]) 

  const handleSubmit = (e) => {
    e.preventDefault();
    let boxObj = {color}
    setBoxList([...boxList, boxObj]);
    document.getElementById('boxColorInput').value = '';
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      Color <input type="text" name="boxColor" id="boxColorInput" onChange={(e)=>setColor(e.target.value)}/> <button type="submit">Add</button>
    </form>
    <div className="boxes">
    {
      boxList.map((box) => {
        return(
          <div className="box" style={{background: box.color}}></div>
        );
      })
     }
    </div>

    </>
  );
}


export default Box;
