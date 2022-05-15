import './App.css';
import { useState,useEffect } from 'react';
import {nanoid} from 'nanoid';
import Padlist from './components/Padlist';
import SearchBar from './components/SearchBar';

function App() {
  const [notes,setNotes]=useState([{id:nanoid(),text:"Today",time:"29-01-2000"},{id:nanoid(),text:"Yesterday",time:"28-01-2000"}])
  const [searchText,setSearchText]=useState('')
  const searchNotes=(text)=>{
    setSearchText(text);

  }
  useEffect(()=>{
    const savedNotes =JSON.parse(localStorage.getItem('react-my-stickypads'))
    if(savedNotes){
      setNotes(savedNotes);
    }},[]);

  useEffect(() => {
    localStorage.setItem('react-my-stickypads',JSON.stringify(notes));
   
  }, [notes]);

    const addNote=(text)=>{
    const date = new Date();
    const newNote={
      id:nanoid(),
      text:text,
      time:date.toLocaleDateString(),
    }
    const newNotes=[...notes,newNote]
    setNotes(newNotes);
  };
  const deleteNote=(id)=>{
   const newNotes=notes.filter((note)=>note.id !== id);
   setNotes(newNotes);
   
  }
  return (
    <div className="container">
      <h1 className="header">Sticky Notes</h1>
      <SearchBar search={searchNotes}/>
      <header className="App-header">
       <Padlist padlist={notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()))} handleAdd={addNote} handleDel={deleteNote} filter={searchText}></Padlist>
      </header>
    </div>
  );
}

export default App;
