// Packages
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


// Page Components
import Trello from './trello.js';

// CSS Imports
import './App.css';
import './Components/card.css';

function App() {
  
  return (
    <DndProvider backend={HTML5Backend}>
      <AlertProvider template={AlertTemplate}>
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Trello}/>
          </Switch>
        </BrowserRouter>
      </AlertProvider>
    </DndProvider>
  );
}

export default App;