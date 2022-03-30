import React, {useState} from 'react'
import './task.css';

export default function Task({
    task_title, task_id, task_completed, card_id,
    updateTaskTitle, deleteTask, strikeTask
}) 
{
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [taskTitleChangeBool, setTaskTitleChangeBool] = useState(false);

    const [isCompleted, setIsCompleted] = useState(task_completed);

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        if (newTaskTitle === ''){
            return;
        }
        else{
           updateTaskTitle(task_id, newTaskTitle);
           setNewTaskTitle('');
           setTaskTitleChangeBool(!taskTitleChangeBool);
        }
    }

    const handleStrike = () => {
        strikeTask(task_id);
        setIsCompleted(!isCompleted);
    }
    
    return (
        <>
        <div className="task">
            {taskTitleChangeBool
                ?
                   <form className="update-form" onSubmit={event => handleUpdateSubmit(event)}>
                        <input 
                            className="update-task" 
                            type="text" 
                            placeholder={task_title}
                            onChange={event => setNewTaskTitle(event.target.value)}
                        />
                    </form>
                :
                    <>
                        <p 
                            onClick={() => handleStrike(task_id)}
                            className="title"
                            style={isCompleted ? {textDecoration: 'line-through', textDecorationWidth: '10px', textDecorationThickness: '2px', fontStyle: 'italic'} : {textDecoration: 'none'}}> 
                            {task_title} 
                        </p>
                    </>
             }     
            
            <div className="buttons">
                <button 
                    className="edit-task"
                    onClick={() => setTaskTitleChangeBool(!taskTitleChangeBool)}
                >
                </button>

                <button
                    className="delete"
                    onClick={() => deleteTask(task_id)}
                >X</button>
            </div>
        </div>
        </>

    )
}