import React, { useState } from 'react'

const AddTask = ({handleAdd}) => {
    const [text, setText] = useState("")
    const handleChange=(e)=>
    {
        setText(e.target.value);
    }
    return (
        <div className='add'>
            <input type="text" onChange={handleChange}></input>
            <button onClick={()=>{handleAdd(text);setText("")}}>Add</button>
        </div>
    )
}

export default AddTask
