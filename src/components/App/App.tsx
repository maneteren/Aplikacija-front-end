import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MainMenu } from './MainMenu/MainMenu';

function App() {
  return (
    <Container>
      <MainMenu></MainMenu>
      <FontAwesomeIcon icon={ faHome } />Home
    </Container>
  );
}

export default App;
