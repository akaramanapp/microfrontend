import React from 'react';
import './App.css';

const ProductApp = React.lazy(
  () => import('PRODUCT/App')
);

const UserApp = React.lazy(
  () => import('USER/App')
);

const Header = React.lazy(
  () => import('HEADER/App')
);

const Footer = React.lazy(
  () => import('FOOTER/App')
);

export { ProductApp, UserApp, Header, Footer };