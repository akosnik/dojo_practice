import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

function ChecklistInstance({ list }) {



  const InstanceButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1.5),
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }))

  return (
    <>
      {list.map((checklist, idx) => {
        return (
          checklist.instances.map((instance) => {
            if (true) { // TODO replace with !instance.isTemplate
              return (
                <InstanceButton key={instance._id} >
                  <Typography>{checklist.name}</Typography>
                  <Typography>{instance.startTime}</Typography>
                </InstanceButton>
              )
            }
          })
        )
      })}
    </ >
  )
}

export default ChecklistInstance;
