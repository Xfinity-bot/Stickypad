import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNote=({handleAdd})=>{
    const [noteText,setNoteText]=useState('')
    const remChar=100-noteText.length;
    const handleChange=(e)=>{
        if(remChar>0)
          setNoteText(e.target.value);

    }
    
    const onSave=(e)=>{
       
        if(noteText.trim().length>0){
        handleAdd(noteText);
        setNoteText('')
        toast.success("Successfully Added");

        }
        else {toast.error("Cant be Empty!!");
       }
        

    }
    return(
    <div className="note add"><textarea className='ta_addNote' placeholder='Type here to add....' onChange={handleChange} rows='5' value={noteText}></textarea>
        <div className='rem-char'>{noteText.length}/100</div>
        <button className='save' onClick={onSave} >ADD</button>
        <ToastContainer  />
    </div>
    
    )
};
export default AddNote;