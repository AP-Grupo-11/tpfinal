import { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function TaskItem(props) {

  const { texto } = props;

  const [showButtons, setShowButtons] = useState(false);

  const handleItemPress = () => {
    setShowButtons(!showButtons);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <>
      <ListItem
        sx={{
          transition: 'background-color 0.3s ease',
          '&:hover': {
           backgroundColor: 'rgba(0, 0, 0, 0.1)',
          },
          padding: '0',
        }}
        onClick={handleItemPress}
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <ListItemButton
          disableRipple
          TouchRippleProps={{ center: false }}
          sx={{
            '&:hover': {
              backgroundColor: 'transparent',
            },
            paddingX: '20px',
            paddingY: '0',
            minHeight: '40px',
          }}>
          <ListItemText primary={texto} />
        </ListItemButton>
        <div style={{ minWidth: '60px', marginRight: '20px' }}>
          {showButtons && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleButtonClick('Editar')}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => onClick={handleDeleteClick}}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          )}
        </div>
      </ListItem>
      <Divider />
    </>
  );
}