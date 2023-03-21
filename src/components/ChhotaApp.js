import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
// import noteStore from "./NoteStore";
import CreateArea from "./CreateArea";



const ChhotaApp = () => {
  const[notes, setNotes] = useState([]);
  const addNote=(newNote)=>{
     setNotes((prevItem)=>{
      return [...prevItem, newNote];
     });
    
  }
  const deleteNote=(id)=>{
    setNotes((prevNotes)=>{
      return prevNotes.filter((prevNoteItem,index)=>{
        return index!==id;
      })
    })
  }
    return(
      <div>
        <Header />
        <CreateArea
         onAdd={addNote}
        />
        {notes.map((noteItem,index)=>{
          return <Note key={index} id={index}
          title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
        })}
       
        <Footer />
      </div>
    );
  }

  export default ChhotaApp;