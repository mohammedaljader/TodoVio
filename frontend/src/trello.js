// Packages
import React, {useState, useEffect} from 'react';

// Child Components
import Navbar from './Components/Navbar';
import Card from './Components/Card';

// CSS Imports
import './App.css';
import './Components/card.css';

//Service classes imports
import CardService from './Service/CardService';
import TaskService from './Service/TaskService';

import { useAlert } from 'react-alert'

function Trello() {
  const [cards, setCards] = useState([]);
  const [tasks, setTasks] = useState([]);
  const alert = useAlert()

  // Cards and Tasks Calls
  useEffect(() => {
    getAllCards()
    getAllTasks()
  }, []); // eslint-disable-line

  
    const getAllCards =() =>{
      CardService.getCards()
          .then(res => res.json())
          .then(data => {
          console.log(data);
          setCards([...cards, ...data]);
      })
    }

    const getAllTasks = () => {
        TaskService.getTasks()
          .then(res => res.json())
          .then(data => {
          setTasks([...tasks, ...data]);
      })
    }
    //Card functionalities 
    const addCard = () => {
      let nextCard = {
          title : `New Card (Update)`
      };
  
      setCards([...cards, nextCard]);
      
      CardService.addCard(JSON.stringify(nextCard)).then(() => {
        alert.success('Card added successfully!', {timeout: 2000})
      }).catch(err=>{console.log(err);
        alert.error('Can not make a card, Please try again!!')
      });
    }

    const updateCardTitle = (card_id, newName) => {
      let edit = cards.slice();
      edit.forEach(currCard => {
        if (currCard.card_id === card_id){
          console.log(currCard.card_title)
          currCard.card_title = newName;
        }
      })
      setCards(edit);
  
      const updatedCard = {
          title:newName
      }
      
      CardService.updateCard(JSON.stringify(updatedCard)).then(() => {
        alert.success('Card updated successfully!', {timeout: 2000})
      }).catch(err=>{console.log(err);
        alert.error('Can not update a card, Please try again!!')
      }); 
    }

  return (
    <>
    <Navbar /> 
    <div className="contain">
      {/* CARDS */}
      {cards.map(currCard => (
        <Card
          key={currCard.card_id}
          card_title={currCard.card_title}
          taskList={tasks.filter(curr => curr.card_id === currCard.card_id)}
          card_id={currCard.card_id}
          
           // Card Functions
           updateCardTitle={updateCardTitle}
        />
      ))}

      {/* NEW CARD */}
      <button className="new-list" onClick={() => addCard()}>+</button>
      <div className="padding-div"></div>
    </div>
    </>
  );
}

export default Trello;