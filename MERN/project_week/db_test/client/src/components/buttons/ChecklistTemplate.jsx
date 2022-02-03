import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

function ChecklistTemplate({ list }) {

  const TemplateButton = styled(Button)(({ theme }) => ({
    fontSize: '1.5rem',
    padding: theme.spacing(1.5),
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }))

  return (
    <>
      {list.map((template, idx) => {
        return (
          <TemplateButton key={idx}>{template.name}</TemplateButton>
        )
      })}
    </>
  );
}

export default ChecklistTemplate;
