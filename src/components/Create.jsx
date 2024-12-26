import { useState } from "react";
import axios from "axios";

const Create = () => {
    const [task, setTask] = useState()
    const handleAdd = ()=> {
        axios.post('http://localhost:5001/add', {task:task})
        .then(result => 
            location.reload()
        )
        .catch(err => console.log(err))
    }
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            handleAdd()
        }
    }
    return (
        <div className="flex p-8 m-8 items-center justify-center">
            <input 
                className="w-80 h-12 px-4 outline-none bg-gray-200 rounded-lg shadow-md" 
                type="text" 
                placeholder="Enter Task.." 
                onChange={(e)=> setTask(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="h-12 rounded-lg w-24 p-3 mx-6 bg-black text-center text-white cursor-pointer hover:bg-gray-800" onClick={handleAdd} >Add</button>
        </div>
    )
}

export default Create;