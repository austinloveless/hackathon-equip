import React from 'react';
import './App.css';
import MapComponent from './components/MapComponent';
import { 
  Menu, 
  Button, 
  MenuItem,
  Typography
} from '@material-ui/core';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="App">
      
      <div>
        <Typography variant="h6" style={{ backgroundColor: "#50c7c7"}} color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Equip
       </Typography>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          color="primary"
        >
        </Menu>
      </div>
        <MapComponent/>
        
    </div>
  );
}

export default App;
