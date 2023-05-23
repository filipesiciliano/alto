import React from 'react';
import { styled } from '@mui/system';

const Logo = ({ src, alt }) => {
  return <LogoImg src={src} alt={alt} />;
};


const LogoImg = styled('img')`
  width: 120px;
  height: 60px;
  margin-right: 10px;
`;

export default Logo;
