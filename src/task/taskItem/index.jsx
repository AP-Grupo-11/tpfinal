import { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alignProperty } from '@mui/material/styles/cssUtils';
import './styles.css';

export default function TaskItem(props) {

  const { task } = props;

  const [showButtons, setShowButtons] = useState(false);

  const handleItemPress = () => {
    setShowButtons(!showButtons);
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    console.log("entro");
  };

  return (
    <>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        style={{ margin: '0px' }}
        className='myAccordion'
      >
        <AccordionSummary 
        expandIcon={<ExpandMoreIcon />}
        >
          <ListItem
            sx={{
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              },
              padding: '0px',
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
              <ListItemText primary={props.title} />
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
                    onClick={() =>{ handleDeleteClick()}}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              )}
            </div>
          </ListItem>
        </AccordionSummary>
        <AccordionDetails>
          {props.description}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

{/*
import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TaskItem(props) {
  const { task } = props;
  const [showButtons, setShowButtons] = useState(false);

  const handleItemPress = () => {
    setShowButtons(!showButtons);
  };

  const handleDeleteClick = () => {
  };

  return (
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
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        style={{ width: '100%' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon disableGutters />}
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
              width: '100%',
            }}
          >
            <ListItemText primary={props.title} />
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
                    onClick={handleDeleteClick}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              )}
            </div>
          </ListItemButton>
        </AccordionSummary>
        <AccordionDetails>
          {props.description}
        </AccordionDetails>
      </Accordion>
    </ListItem>
  );
}
*/}