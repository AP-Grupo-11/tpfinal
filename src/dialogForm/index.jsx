import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const DialogForm = (props) => {
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');

  const handleAdd = () => {
    props.onAdd({title:formTitle, description:formDescription, done: false});
    handleClose();
  };

  const handleClose = () => {
    setFormTitle('');
    setFormDescription('');
    props.onClose();
  };

  const onChangeTitle = (e) => {
    setFormTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setFormDescription(e.target.value);
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Nueva tarea</DialogTitle>
      <DialogContent>
        <TextField
          sx={{
            marginBottom: '20px',
          }}
          autoFocus
          margin="dense"
          id="form-title"
          label="Título"
          type="text"
          value={formTitle}
          variant="outlined"
          onChange={onChangeTitle}
          fullWidth
        />
        <TextField
          sx={{
            marginBottom: '20px',
          }}
          autoFocus
          id="form-description"
          label="Descripción"
          type="text"
          value={formDescription}
          variant="outlined"
          onChange={onChangeDescription}
          fullWidth
          multiline
          maxRows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
        <Button variant="outlined" onClick={handleAdd}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogForm;
