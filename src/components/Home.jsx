import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { Circle, Trash, Trash2} from 'lucide-react'
const Home = () => {
    const [todo, setTodo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5001/get')
            .then(result => setTodo(result.data))
            .catch(err => console.log(err))

    }, [])
    const handleClick =(id)=>{
        axios.put('http://localhost:5001/update/'+id)
        .then(result => {
            location.reload();
        })
        .catch(err => console.log(err))
    }
    const handleDelete =(id)=>{
        axios.delete('http://localhost:5001/delete/'+id)
        .then(result => {
            location.reload();
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="flex flex-col items-center">


            <Create />
            {
                todo.length === 0
                    ?
                    <div>
                        <h3 className="font-bold text-2xl" >No Record</h3>
                    </div>
                    :
                    todo.map((item, index) => (

                        <div key={index} className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md  my-4">
                            <div className="max-h-96 overflow-y-auto">
                                
                                <div className="p-4 flex items-center justify-between w-full" onClick={()=>handleClick(item._id)}>
                                    {item.done ?  <Circle className="mr-2 text-black fill-current"/>
                                    :  <Circle/>}
                               
                                    <span className="font-semibold text-lg text-gray-800">
                                  
                                        {item.task}
                                        </span>
                                    <button onClick={()=>handleDelete(item._id)}>
                                   <Trash2/>
                                        </button>
                                </div>
                            </div>
                        </div>
                    ))}


        </div>
    )
}

export default Home;