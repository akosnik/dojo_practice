import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import CustomizedAccordions from '../Accordion';
import NewButton from '../buttons/NewButton';


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
      <NewButton onClick={() => { console.log('New Template') }}>New Template</NewButton>
    </div>
  );
}

export default Home;
