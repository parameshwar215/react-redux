import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addRequest} from '../actions/ecomActions'
import { useNavigate } from 'react-router';
function AddUser() {
    const dispatch=useDispatch();

   const navigate=useNavigate()
 
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState(0);
    const [password,setPassword]=useState("");
    const  handleSubmit=()=>{
        dispatch(addRequest({id:Date.now(),name1:name,email1:email,age1:age,password1:password}))
        alert("User Detail are added successefully")
        navigate('/')
    }

//   const handleSyncWithServer = () => {
//     // Assume your JSON server is running at http://localhost:3001
//        axios.post('http://localhost:3001/todos', todos)
//       .then(response => console.log('Sync successful:', response))
//       .catch(error => console.error('Error syncing:', error));
//   };
  return (
    <>

   
  <div className="mb-3">
    <label>Name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label>Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label >Age</label>
    <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}  className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <div className="mb-3">
    <label >Password</label>
    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}   className="form-control" id="exampleInputPassword1"/>
  </div>
  
  

<button onClick={handleSubmit} className="btn btn-primary">Submit</button>
      
    </>
  )
}

export default AddUser
