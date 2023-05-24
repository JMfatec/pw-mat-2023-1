import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      
      <IconButton 
      id="basic-button"
      aria-controls={open ? 'MainMenu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      edge="start" 
      color="inherit" 
      aria-label="menu" 
      sx={{ mr: 2 }}
      >
            <MenuIcon />
          </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        <MenuItem divider
         onClick={handleClose}
         component={Link}>
         to="/"
        Página inicial
        </MenuItem>    

         <MenuItem divider
         onClick={handleClose}
         component={Link}>
         to="/"
         Clientes
        </MenuItem>
        
       
         <Link to="/customers">
         <MenuItem onClick={handleClose}>Clientes</MenuItem>
         </Link>
        
      </Menu>
    </div>
  );
}