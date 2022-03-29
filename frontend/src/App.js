// Packages
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


// Page Components
import Trello from './trello.js';

// CSS Imports
import './App.css';
import './Components/card.css';

function App() {
  
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Trello}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;