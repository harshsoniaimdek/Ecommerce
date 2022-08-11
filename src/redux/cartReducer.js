const Initial_State = {
    cartItems: ['item1'],
    showCart: false
  };
  
  export const cartReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case 'DELETE_FROM_CART' : {
                  return{
                    ...state ,
                    cartItems : state.cartItems.filter(obj=>obj.id !== action.payload.id)
                  }
                }
        case 'Increase_Item_Count_Cart':
            return {
                ...state,
                cartItems: AddExistingItemToCart(state.cartItems, action.payload)
            }
        case 'Decrease_Item_Count_Cart':
            return {
                ...state,
                cartItems: RemoveExistingItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
  }
  
  const AddExistingItemToCart = ((cartItems, itemToAdd) => {
    return cartItems.map(item =>
        item.id === itemToAdd.id ? { ...item, count: item.count + 1 } : item
    )
  }); 
  
  const RemoveExistingItemFromCart = ((cartItems, itemToRemove) => {
  
    const existingItem = cartItems.find(item => item.id === itemToRemove.id);
    console.log(existingItem);
    let newItem = [];
    if (existingItem.count <= 1) {
        newItem = cartItems.filter((item) => (item.id !== existingItem.id))
    }
    else {
        newItem = cartItems.map(item =>
            item.id === itemToRemove.id ? { ...item, count: item.count - 1 } : item
        )
    }
    return newItem;
  });
  
  const addItemToCart = ((cartItems, itemToAdd) => {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);
  
    if (existingItem) {
        return cartItems.map(item =>
            item.id === itemToAdd.id ? { ...item, count: item.count + 1 } : item
        )
    }
    else {
        return [...cartItems, { ...itemToAdd, count: 1 }]
    }
  });