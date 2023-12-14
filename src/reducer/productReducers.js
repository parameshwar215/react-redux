



const initialState = {
    productsList: [],

    loading: true,
    error: null,
}
const productReducers = (state = initialState, action) => {
    console.log(action.payload)


    // console.log(state.usersList)
    switch (action.type) {

    
        case 'ADD_PRODUCT':

            return {
                ...state,
                productsList: [...state.productsList, action.payload]

            }
            case 'REMOVE_REQUEST':
                
            const newList=state.productsList.filter(elem=>elem.id!==action.id)
            return{
                ...state,
                productsList:newList
            }

        default: return state;

    }
}
export default productReducers;