import React, { Component } from 'react';
import ActionsContainer from './ActionsContainer';
import ListContainer from './ListContainer';


class App extends Component {
  render() {


    return (
      <div>
          <ActionsContainer></ActionsContainer> 
          <ListContainer></ListContainer>
      </div>
    );
  }
}

export default App;