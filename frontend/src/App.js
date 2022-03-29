// Packages
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';


// Page Components
import Trello from './trello.js';

// CSS Imports
import './App.css';
import './Components/card.css';

function App() {
  
  return (
    <AlertProvider template={AlertTemplate}>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Trello}/>
        </Switch>
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;