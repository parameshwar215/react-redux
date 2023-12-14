



const initialState = {
    usersList: [],

    loading: true,
    error: null,
}
const userReducers = (state = initialState, action) => {
    console.log(action.payload)


    // console.log(state.usersList)
    switch (action.type) {

        case 'USER_REQUEST':

            return {
                usersList: state.usersList
            }
        case 'ADD_REQUEST':

            return {
                ...state,
                usersList: [...state.usersList, action.payload]

            }
            case 'REMOVE_REQUEST':
                
            const newList=state.usersList.filter(elem=>elem.id!==action.id)
            return{
                ...state,
                usersList:newList
            }

        default: return state;

    }
}
export default userReducers;