import './App.css';
import React from 'react';
import IpAddress from './IpAddress';
import Container from './Container'; 

function App() {
  return (
    <div>
      <Container>
        <IpAddress type="ipv4" />
      </Container>
      <Container>
        <IpAddress type="ipv6" />
      </Container>
    </div>
  );
}

export default App;
