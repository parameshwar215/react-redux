import React, {useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {addTodo,deleteTodo,removeTodo} from '../actions/index'
import {getRequest} from '../actions/ecomActions'
import axios from 'axios';

import {Link,useNavigate} from 'react-router-dom'


function Todo() {
    const dispatch=useDispatch();
    const list=useSelector(state=>state.todo.list)
    console.log(list)
    const [todo,setTodo]=useState('');

    
    

  return (
    
    <>
   

    <h1>Add item hear</h1>
    <div>
        <input type="text" placeholder=' ✍️  Add Item' value={todo} onChange={(e)=>setTodo(e.target.value)} ></input>
        <button onClick={()=>(dispatch(addTodo(todo)),setTodo(''))}> Add Item</button>
        {todo}
      </div>
      <br/>

      {list.map(elem=>{
        return(
            <>
            {elem.data} <button onClick={()=>(dispatch(deleteTodo(elem.id)),setTodo(''))}>Delete</button>
            <hr/>

        


            </>
        )
      
      })}
          <button onClick={()=>dispatch(removeTodo())}>Remove All</button>
      <div>
      <h1 className='text-center'>List of Users </h1>

     </div>

   
  
      {/* <button onClick={()=>dispatch(getRequest(users))}>getUsers</button> */}
      {/* <button onClick={()=>dispatch(getRequest())}>getUsers</button> */}

      
      
    </>
   
  )
}

export default Todo
