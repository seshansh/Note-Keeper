import React, { useState } from "react";
import './CreateArea.css';

const CreateArea=(props)=>{
    const[note, setNote] = useState({
        title:"",
        content:""
    })

const handleChange=(event)=>{
    const {name, value} = event.target;
    setNote((preValue=>{
        return{
            ...preValue,
            [name]:value
        }
    }))
}

const submitNote=(event)=>{
    event.preventDefault();
    props.onAdd(note);
    setNote({
        title:"",
        content:""
    })
}

    return <div>
        <form>
            <input name="title" placeholder="title"
            value={note.title} onChange={handleChange}/>
            <textarea name="content" placeholder="type a note..." rows="3"
            value={note.content} onChange={handleChange}/>
            <button onClick={submitNote}>Add</button>
        </form>
    </div>
}

export default CreateArea;