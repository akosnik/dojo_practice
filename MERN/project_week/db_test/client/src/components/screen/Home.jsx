import React from 'react';
import CustomizedAccordions from '../Accordion';
import axios from 'axios'
import { useState, useEffect } from 'react';



const Home = () => {
  const [checklistList, setChecklistList] = useState();
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:8000/api/checklists')
      .then(res => {
        // console.log(res)
        setChecklistList(res.data.results);
      })
  }, [])


  return (
    <div>
      <h1>CHECK IT</h1>
      {checklistList && <CustomizedAccordions list={checklistList} />}
    </div>
  );
}

export default Home;
