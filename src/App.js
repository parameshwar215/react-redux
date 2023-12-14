import React from 'react'
import Todo from './components/Todo'
import AddUser from './components/addUser'
import { Route,Routes } from 'react-router'
import UsersList from './components/usersList'
import ProductComponent from './components/addProduct'
import ProductList from './components/productList'
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<UsersList/>} />
      <Route path="/todo" element={<Todo/>} />
      <Route path="/adduser" element={<AddUser/>} />
      <Route path="/productsList" element={<ProductList/>} />
      <Route path="/addProduct" element={<ProductComponent/>}>
     </Route>    
    </Routes>
      
    </>
  )
}

export default App
