import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';


const EditItemButton = styled((Button))(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: '1rem',
  border: `1px dashed ${theme.palette.divider}`,
  width: '100%'
}))


export default EditItemButton;
