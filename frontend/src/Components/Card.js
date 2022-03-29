import React, {useState} from 'react';
import './card.css';
import Task from './Task';

export default function Card({
    card_title, taskList, card_id
}) 
{
  

    return (
        <div className="card">
            <div className="title-div">
                <form action="">
                                <input 
                                    className="update-title" 
                                    type="text"
                                    placeholder={card_title}
                                />
                </form>      
            </div>

            {taskList.map(curr => (
                <Task 
                    key={curr.task_id}

                    // Task Properties
                    task_title={curr.task_title}
                    task_id={curr.task_id}
                    task_completed={curr.task_completed}
                    card_id={card_id}
                />
            ))}

            <form className="add-task" action="input">
                <input type="text" placeholder="Add Task"/> 
                <button className="add-btn" >+</button>  
            </form>
            
            <button className="delete-card">Delete</button>
        </div>
    )
}