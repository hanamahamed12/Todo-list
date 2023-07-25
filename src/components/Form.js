import { useState } from "react";

function Form(){
    const[item, setItem] = useState("")

    const[todos, setTodos] = useState([])

    const handleItem = (event)=>{
        event.preventDefault()

       if(item){
        setTodos([...todos, item])
        setItem("")
       }

    }

    return <div className="main">
        <h1>Our list of Todos</h1>

        <form className="form">
            <label>Enter Item</label> <br/>

            <input type="text"  value={item}  onChange={(event) =>{
                setItem(event.target.value)
            }}/>

            <button onClick={handleItem}>Add</button>
        </form>

        {
        todos.map((todo,index)=>(
            <div className="item-p">
            <div className="items"> 
                <h5>{todo}</h5>
            </div>
        </div>

        ))
        }
    </div>
}

export default Form;   