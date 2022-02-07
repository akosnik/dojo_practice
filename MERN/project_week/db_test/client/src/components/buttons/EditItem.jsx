import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { borderBottom } from '@mui/system';


const EditItem = styled(() => {
  return (
    <>
      <TextField
        variant='standard'
        type='text'
        label='Task Name'
        style={{ marginBottom: '0' }}
      />
      <TextField
        variant='standard'
        type='text'
        label='Description'
        multiline
        maxRows={6}
      />
    </>
  )
})(({ theme }) => ({
  backgroundColor: '#000'
  // display: 'flex',
  // flexDirection: 'column',
  // gap: '2rem',
  // padding: theme.spacing(2),
  // border: `2px dashed ${theme.palette.divider}`,
  // width: '100%'
}))


export default EditItem;
