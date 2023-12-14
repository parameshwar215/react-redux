// export const addTodo=(data)=>{
//     return{
//         type:"ADD_TODO",
//         payload:{
//             id:new Date().getTime().toString(),
//             data:data
//         }
//     }
// }


// export const deleteTodo=(id)=>{
//     return{
//         type:"DELETE_TODO",
//         id:id
//     }
// }


// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('YOUR_API_ENDPOINT_HERE');
//         dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
//       } catch (error) {
//         dispatch({ type: FETCH_DATA_FAILURE, payload: 'Error fetching data' });
//       }
//     };
 
//     fetchData();
//   }, []);
export const getRequest=()=>{
   
    return{
        type:"USER_REQUEST",
        
    }
}
export const addRequest=(data)=>{
    console.log(data)
    return{
        type:"ADD_REQUEST",
        payload:data
      
    }
}
export const removeRequest=(id)=>{

    return{
        type:"REMOVE_REQUEST",
        id:id
      
    }
}