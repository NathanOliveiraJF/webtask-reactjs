import React from 'react';
import Container from './components/Container';
import CardContainer from './components/CardContainer';
import CardTask from './components/CardTask';

import useFiles from './hooks/useFiles';

function App() {
  const {tasks} = useFiles();
  
  return (
     <Container>
       <CardContainer title='Todo'>
          <CardTask tasks={tasks} typeTask="Todo" />
       </CardContainer>

        <CardContainer title='Open'>
           <CardTask tasks={tasks} typeTask="Open" />
       </CardContainer>

        <CardContainer title='Close'>
           <CardTask tasks={tasks} typeTask="Close"  />
       </CardContainer>
     </Container>
  );
}

export default App;
