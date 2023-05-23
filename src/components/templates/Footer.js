import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center" mt={10} data-testid='footer'>
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
