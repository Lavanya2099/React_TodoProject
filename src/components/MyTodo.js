
import React, { useState } from 'react'
function MyTodo() {
    const [text, settext] = useState(['Hi,Welcome To React JS'])
    const [val, setval] = useState("")
    
    let submitvalue = (event) => {
        setval(event.target.value)
    }
   
    let submit = (add) => {
        if (add!== "") {
            text.push(add)
            settext([...text])
            setval("")
        }
    }

    let remove=(del)=>{
        if(del>=0){
            text.splice(del,1)
            settext([...text])
        }
    }
    return <div>
    <h1 className="some" >TODO LIST</h1>

    <div class="input-group mb-3">
     <input  type="text" value={val} onChange={(event)=>{submitvalue(event)}} placeholder="add ur todo"/>
    <br/>
     <br/>
     <button onClick={()=>{submit(val)}} className="some">Add Item</button>
    <br/>
    <br/>
    
   </div>
            {
                text.map((text,idx)=>{
                    return <tr className="table-active">
                    <td key={idx}>{text}</td>
                    <td><button  className="some" onClick={()=>{remove(idx)}}>X</button></td></tr>
                      
                })
            }
           
     
 
    </div>

}

export default MyTodo