import React from 'react'
import './TaskItem.css'

const TaskItem = ({elt,handleComplete,handleDelete}) => {
    return (
        <div className='task'>
            <p className={elt.isDone?"barre":null}>{elt.task}</p>
            <button onClick={()=>handleComplete(elt.id)}>{elt.isDone?"Undo":"Complete"}</button>
            <button onClick={()=>handleDelete(elt.id)}>Delete</button>
        </div>
    )
}

export default TaskItem
