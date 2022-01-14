import React, { useState } from 'react'

const Ninja = (props) =>{
  let [ninjaName, setNinjaName] = useState('');
  let [imgUrl, setImgUrl] = useState('');
  let [favColor, setFavColor] = useState('');

  let [ninjaList, setNinjaList] = useState([]);

  const createNinja = (e) => {
    e.preventDefault();
    let ninjaObj = {ninjaName, imgUrl, favColor};
    setNinjaList([...ninjaList, ninjaObj]);
    console.log(ninjaObj);
    
  }

  return (
    <>
    <form onSubmit={createNinja}>
      <div className="form-group">
        <label htmlFor="" className="form-label" >Ninja name:</label>
        <input type="text" className="form-control" onChange={(e) => setNinjaName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="" className="form-label">Image Url:</label>
        <input type="text" className="form-control"  onChange={(e) => setImgUrl(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="" className="form-label">Favorite Color:</label>
        <input type="text" className="form-control" onChange={(e) => setFavColor(e.target.value)}/>
      </div>
      <input type="submit" value="Create Ninja" className='btn'/>
    </form>
    <hr />
    <h3>Here are our Ninjas</h3>
    {
    ninjaList.map((ninja) => {
      return (
      <div className="ninja">
        <h1>{ninja.ninjaName}</h1>
        <p><img src={ninja.imgUrl} alt="ninjaImg" width="100px"/></p>
        <p>My favorite color is {ninja.favColor}</p>
      </div>
      )
    }
    )}
    </>
  );
}




export default Ninja;