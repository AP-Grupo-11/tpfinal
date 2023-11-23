import { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, IconButton, Checkbox, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TaskItem({ index, title, description, done, handleAll }) {
  const { handleDelete, handleUpdate, handleDone } = handleAll


  const [showButtons, setShowButtons] = useState(false);
  const [update, setUpdate] = useState('')
  const [open, setOpen] = useState(false);

  const [isChecked, setIsChecked] = useState(done);

  const handleItemPress = () => {
    setShowButtons(!showButtons);
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    handleDelete(index)

  };

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateValue = (event) => {
    const { value } = event.target;
    setUpdate(value)
  }

  const handleConfirmUpdate = () => {
    handleUpdate(index, update)
    handleClose()
  }

  const handleChecked = () => {
    setIsChecked(!isChecked);
    handleDone(index)
  }

  return (
    <>
      <Accordion disableGutters
        TransitionProps={{ unmountOnExit: true }}
        sx={{
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: isChecked ? '#E1F8E8' : '#f1f0f0',
          },
          border: '1px solid #d7d7d7',
          backgroundColor: isChecked ? '#E1F8E8' : 'inherit',
          fontFamily: 'Open Sans',
          overflow: 'hidden'
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <div style={{
            display: 'flex',
            flexGrow: '1',
            alignItems: 'center'
          }}
            onClick={handleItemPress}
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}
            >
              <Checkbox
                checked={done}
                onChange={(event) => handleChecked(event)}
                onClick={(event) => event.stopPropagation()}
              />
              <Typography component="div">{title}</Typography>
            </div>
            <div style={{ minWidth: '60px', marginRight: '20px', marginLeft: 'auto' }}>
              {(showButtons &&
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    sx={{
                      borderRadius: '5%',
                      marginRight: '0px',
                      '&:hover, &:focus': {color: '#1976d2'}
                    }}
                    edge="end"
                    aria-label="edit"
                    onClick={(event) => handleClickOpen(event)}
                  >
                    <EditIcon/>
                  </IconButton>
                  <IconButton
                    sx={{
                      borderRadius: '5%',
                      '&:hover, &:focus': {color: '#e91e63'}
                    }}
                    edge="end"
                    aria-label="delete"
                    onClick={(event) => { handleDeleteClick(event) }}
                  >
                    <DeleteIcon/>
                  </IconButton>
                </div>
              )}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
          paddingLeft: '32px'
        }}>
          {description}
        </AccordionDetails>
      </Accordion >
      <Dialog
        open={open}
        onClose={handleClose}
        width={1600}
      >
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {title}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Descripción"
            type="text"
            value={update}
            onChange={handleUpdateValue}
            fullWidth
            variant="outlined"
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          <Button variant="outlined" onClick={handleConfirmUpdate}>Actualizar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}