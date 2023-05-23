import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Menu from '../molecules/Menu';
import { SearchInputWrapper } from '../atoms/SearchInput';
import Logo from '../atoms/Logo';

const Header = () => {
  return (
    <AppBar position="static" data-testid='header'>
      <Toolbar>
        <Logo src="https://picsum.photos/120/60" alt="Logo" />
        <Menu />
        <SearchInputWrapper />
      </Toolbar>
    </AppBar>
  );
};


export default Header;
