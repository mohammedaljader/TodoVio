// Packages
import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

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
      CardService.getCards().then((response) => {
          console.log(response.data);
          setCards([...cards, ...response.data]);
      })
    }

    const getAllTasks = () => {
        TaskService.getTasks().then((response) => {
          console.log(response.data);
          setTasks([...tasks, ...response.data]);
      })
    }
    //Card functionalities 
    const addCard = () => {
      let nextCard = {
          card_id: uuidv4(),
          card_title : `New Card (Update)`
      };
  
      setCards([...cards, nextCard]);
      
      CardService.addCard(nextCard).then(() => {
        alert.success('Card added successfully!', {timeout: 2000})
      }).catch(err=>{console.log(err);
        alert.error('Can not make a card, Please try again!!')
      });
      // window.location.reload(false);
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
          card_title:newName
      }
      
      CardService.updateCard(card_id, updatedCard).then(() => {
        alert.success('Card updated successfully!', {timeout: 2000})
      }).catch(err=>{console.log(err);
        alert.error('Can not update a card, Please try again!!')
      }); 
    }

    const deleteCard = (card_id) => {
      setTasks(tasks.filter(currTask => currTask.card_id !== card_id));
      setCards(cards.filter(currCard => currCard.card_id !== card_id));

      CardService.deleteCard(card_id).then(() => {
        alert.success('Card deleted successfully!', {timeout: 2000})
      }).catch(err=>{console.log(err);
        alert.error('Can not delete the card, Please try again!!')
      }); 
    }

     //Task functionalities 
     const addTask = (card_id, addedTitle) => {
      let newTask = {
          task_id : uuidv4(),
          task_title : addedTitle,
          task_completed: false,
          card_id : card_id,
        };
        
        setTasks([...tasks, newTask]);
  
        TaskService.addTask(newTask).then(() => {
          alert.success('Task added successfully!', {timeout: 2000})
        }).catch(err=>{console.log(err);
          alert.error('Can not make a task, Please try again!!')
        });
        // setTimeout(() => {  window.location.reload(false); }, 2000);
    }

    const updateTaskTitle = (task_id, newName) => {
      let edit = tasks.slice();
      edit.forEach(currTask => {
        if (currTask.task_id === task_id){
          currTask.task_title = newName
        }
      })
      setTasks(edit);
  
      const updatedTask = {
        task_title: newName
      }
  
      TaskService.updateTask(task_id , updatedTask).then(() => {
        alert.success('Task updated successfully!', {timeout: 2000})
      }).catch(err=>{console.log(err);
        alert.error('Can not update the task, Please try again!!')
      }); 
    }

    const deleteTask = (task_id) => {
      setTasks(tasks.filter(currTask => currTask.task_id !== task_id));
  
      TaskService.deleteTask(task_id).then(() => {
        alert.success('Task deleted successfully!', {timeout: 2000})
      }).catch(err=>{console.log(err);
        alert.error('Can not delete the task, Please try again!!')
      }); 
    }

    const strikeTask = (task_id) => {
      let edit = tasks.slice();
      edit.forEach(currTask => {
        if (currTask.task_id === task_id){
          let isStruck = currTask.task_completed;
          currTask.task_completed = !isStruck;
  
          const updatedTask = {
            task_completed: !isStruck
          }

          console.log(updatedTask)
  
          TaskService.strikeTask(task_id, updatedTask).then(() => {
            alert.success('Task updated successfully!', {timeout: 2000})
          }).catch(err=>{console.log(err);
            alert.error('Can not update the task, Please try again!!')
          }); 
        }
      })
      setTasks(edit);
  
    }

    const updateNewCard = (task_id, card_id) => {
      let edit = tasks.slice();
      edit.forEach(currTask => {
        if (currTask.task_id === task_id){
            currTask.card_id= card_id;
        }
      })

      setTasks(edit);
      
      const updatedTask = {
        card_id: card_id
      }

      TaskService.TaskToAnotherCard(task_id, updatedTask).then(() => {
        alert.success('Task updated successfully!', {timeout: 2000})
      }).catch(err=>{console.log(err);
        alert.error('Can not update the task, Please try again!!')
      });
    };

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
           deleteCard={deleteCard}

           // Task Functions
           updateTaskTitle={updateTaskTitle}
           addTask={addTask}
           deleteTask={deleteTask}
           strikeTask={strikeTask}
           updateNewCard={updateNewCard}
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