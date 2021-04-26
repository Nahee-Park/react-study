import React from 'react';
import styled from 'styled-components';
import Button from './components/Button'; 
//Button테그는 여기에 정의되어 있지 않으므로 Button.js에서 들고 온다 

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <AppBlock>
      <Button>Button</Button> 
    </AppBlock>
  )
}

export default App;
