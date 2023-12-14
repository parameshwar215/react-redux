import React ,{useEffect,useState} from 'react'
import {getRequest, removeRequest} from '../actions/ecomActions'
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'

import {Link,useNavigate} from 'react-router-dom'

function UsersList() {
    const dispatch=useDispatch();
    const [users,setUsers]=useState([])
   const usersList=useSelector(state=>state.users.usersList)
   

   console.log(usersList);
  
 
 console.log(users)
 useEffect(()=>{
    const getUsers =async ()=>{
       await axios.get("http://localhost:3001/users")
       .then((res)=>(setUsers(res.data),console.log(res)))
       .catch(error=>{
        console.log(error)
       })
      // dispatch(getRequest(users));
    }
    getUsers();
 },[])
  return (
    <>
    <h1 className='center'>Users list</h1>
    <Link to="/addUser" >Add User</Link>
    <br/>
    <Link to="/addProduct" >Add Product</Link>
    <br/>
    <Link to="/productsList" >Products</Link>
 {/* <a className='btn' onClick={navigateHandle()}>Add User</a> */}
      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name1}</td>
              <td>{user.email1}</td>
              <td>{user.age1}</td>
             <td><button onClick={()=>dispatch(removeRequest(user.id))}>Remove </button></td> 
            </tr>
          ))}
        </tbody>
      </table> 

      
    </>
  )
}

export default UsersList
