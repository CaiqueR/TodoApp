import React from 'react';
import './PageHeader.css';
// import { Container } from './styles';

const PageHeader = (props) => (
  <header className="pb-2 mt-4 mb-2 border-bottom">
    <h1>
      {props.name} 
{' '}
<small className="texto">{props.small}</small>
    </h1>
  </header>
);

export default PageHeader;
