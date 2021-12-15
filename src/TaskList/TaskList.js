import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({todos,handleComplete,handleDelete}) => {
    return (
        <div>
            {todos.map(elt=><TaskItem elt={elt} key={elt.id} handleComplete={handleComplete} handleDelete={handleDelete}/>)}
        </div>
    )
}

export default TaskList
