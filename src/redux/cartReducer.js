import * as types from "./authActionTypes"

const Initial_State = {
    cartItems: [''],
    showCart: false,
    loading: false,
    currentUser: null,
    error: null,
  };
  
  export const cartReducer = (state = Initial_State, action) => {
        switch(action.type) {
            case 'ADD_TO_CART':
                return {
                    ...state, //here we are returning the direct state
                    cartItems: addItem(state.cartItems, action.payload)
                }
            case "DELETE_FROM_CART":
                return {
                    ...state,
                    cartItems : state.cartItems.filter(obj=> obj.id !== action.payload.id)
                }
            case "Inc_Quantity":
                return {
                    ...state,
                    cartItems : AddExistingItem(state.cartItems, action.payload)
                }
            case "Dec_Quantity":
                return {
                    ...state,
                    cartItems: RemoveExistingItem(state.cartItems, action.payload)
                }
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
            return{
                ...state, loading : true,
            }
        
        case types.LOGOUT_SUCCESS:
            return{
                ...state,
                currentUser: null
            }
        
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return{
                ...state, loading: false, currentUser: action.payload,
            };
        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
        case types.LOGOUT_FAIL:
            return{
                ...state, loading: false, error : action.payload,
            }
                default :
            return state;
        }
  }
    

    const AddExistingItem = ((cartItems, itemAdd) => {            //here we have passed to parameters and then we are mapping it
    return cartItems.map(item => 
        item.id === itemAdd.id ? {...item, count: item.count + 1 } : item
        )
  });

  const RemoveExistingItem = ((cartItems, itemRemove) => {

    const existingItem = cartItems.find(item => item.id === itemRemove.id);
    console.log(existingItem);
    let newItem = [];
    if (existingItem.count <= 2) {
        newItem = cartItems.filter((item) => (item.id !== existingItem.id))
    }
    else {
        newItem = cartItems.map(item =>
            item.id === itemRemove.id ? { ...item, count: item.count - 1 } : item
        )
    }
    return newItem;
  });

const addItem = ((cartItems, itemAdd) =>{
    const existingItem = cartItems.find(item => item.id === itemAdd.id);
    if (existingItem) {
        return cartItems.map(item =>
            item.id === itemAdd.id ? {...item, count: item.count + 1} : item)
    }
    else {
        return [...cartItems, {...itemAdd, count: 1}]
    }
})

