// Packages
import React, {useState, useEffect} from 'react';

// Child Components
import Navbar from './Components/Navbar';
import Card from './Components/Card';

// CSS Imports
import './App.css';
import './Components/card.css';

function Trello() {
  const [cards, setCards] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Cards and Tasks Calls
  useEffect(() => {
    getAllCards()
    getAllTasks()
  }, []); // eslint-disable-line

  
    const getAllCards =() =>{
      fetch('http://127.0.0.1:8000/api/cards')
          .then(res => res.json())
          .then(data => {
          console.log(data);
          setCards([...cards, ...data]);
      })
    }

    const getAllTasks =()=>{
        fetch('http://127.0.0.1:8000/api/tasks')
          .then(res => res.json())
          .then(data => {
          setTasks([...tasks, ...data]);
      })
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
        />
      ))}

      {/* NEW CARD */}
      <button className="new-list">+</button>
      <div className="padding-div"></div>
    </div>
    </>
  );
}

export default Trello;