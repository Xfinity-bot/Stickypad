import AddNote from './AddNote';
import Pad from './Pad';
const PadList =({padlist,handleAdd,handleDel,filter})=>{
    if(filter.length<=0){ 
         return(
                <div className='notes-list'>
                    <AddNote handleAdd={handleAdd}/>
                    {padlist.map((pad)=><Pad id={pad.id} text={pad.text} time={pad.time} handleDelNote={handleDel} filterText='None'/>)}
                </div>)}
    else{
        return(
        <div className='notes-list'>  
            {padlist.map((pad)=><Pad id={pad.id} text={pad.text} time={pad.time} handleDelNote={handleDel} filterText={filter}/>)}
        </div>)
    }

}
export default PadList;