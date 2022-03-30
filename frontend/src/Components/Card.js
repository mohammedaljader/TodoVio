import React, {useState} from 'react';
import './card.css';
import Task from './Task';

export default function Card({
    card_title, taskList, card_id,
    updateCardTitle, deleteCard,
    updateTaskTitle, addTask, deleteTask, strikeTask
}) 
{
    const [newCardTitle, setNewCardTitle] = useState('');
    const [cardTitleChangeBool, setCardTitleChangeBool] = useState(false);
    const [addTaskTitle, setAddTaskTitle] = useState('')

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        if (newCardTitle === ''){
            return;
        }
        else{
           updateCardTitle(card_id, newCardTitle)
           setCardTitleChangeBool(!cardTitleChangeBool)
           setNewCardTitle('')
        }
    }

    const handleAddSubmit = (e) => {
        e.preventDefault();
        if (addTaskTitle === ''){
            return;
        }
        else{
           addTask(card_id, addTaskTitle);
           setAddTaskTitle('');
        }
    }

    return (
        <div className="card">
            <div className="title-div">
                {cardTitleChangeBool
                    ?
                        <form action="" onSubmit={event => handleUpdateSubmit(event)}>
                                <input 
                                    onChange={event => setNewCardTitle(event.target.value)}
                                    className="update-title" 
                                    type="text"
                                    placeholder={card_title}
                                />
                        </form>      
                    :
                        <h3 onClick={() => setCardTitleChangeBool(!cardTitleChangeBool)}>
                            {card_title}
                        </h3>  
                }  
            </div>

            {taskList.map(curr => (
                <Task 
                    key={curr.task_id}

                    // Task Properties
                    task_title={curr.task_title}
                    task_id={curr.task_id}
                    task_completed={curr.task_completed}
                    card_id={card_id}
                    
                     // Task Functions
                     updateTaskTitle={updateTaskTitle}
                     deleteTask={deleteTask}
                     strikeTask={strikeTask}
                />
            ))}

            <form className="add-task" action="input" onSubmit={event => handleAddSubmit(event)}>
                <input type="text" placeholder="Add Task" value={addTaskTitle} onChange={event => setAddTaskTitle(event.target.value)}/> 
                <button className="add-btn" >+</button>  
            </form>
            
            <button className="delete-card" onClick={() => deleteCard(card_id)}>Delete</button>
        </div>
    )
}