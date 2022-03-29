import React, {useState} from 'react'
import './task.css';

export default function Task({
    task_title, task_id, task_completed, card_id
}) 
{
    
    return (
        <>
        <div className="task">
                   <form className="update-form">
                        <input 
                            className="update-task" 
                            type="text" 
                            placeholder={task_title}
                        />
                    </form>     
            
            <div className="buttons">
                <button 
                    className="edit-task"
                >
                </button>

                <button
                    className="delete"
                >X</button>
            </div>
        </div>
        </>

    )
}