import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import { Toolbar, Button } from '@mui/material';

const Menu = () => {
  return (
      <Toolbar>
        <NavButton component={RouterLink} to="/" color="inherit">Home</NavButton>
        <NavButton component={RouterLink} to="/about" color="inherit">About</NavButton>
        <NavButton component={RouterLink} to="/blog" color="inherit">Blog</NavButton>
        <NavButton component={RouterLink} to="/contact" color="inherit">Contact</NavButton>
      </Toolbar>
  );
};

const NavButton = styled(Button)`
  margin-left: 8px;
`;

export default Menu;
