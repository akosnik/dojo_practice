import React from 'react';
import { useState } from 'react';
import NewButton from '../buttons/NewButton';
import EditItem from '../buttons/EditItem';

function CreateChecklist() {

  const [itemList, setItemList] = useState([]);

  const Item = () => {
    return (
      <EditItem />
    )
  }

  const addItemBtnClick = () => {
    setItemList(itemList.concat(<Item key={itemList.length} />));
  }

  return (
    <div>
      <h1>NEW CHECKLIST</h1>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {itemList}
      </div>
      <NewButton onClick={addItemBtnClick}>New Item</NewButton>
    </div>
  );
}

export default CreateChecklist;
