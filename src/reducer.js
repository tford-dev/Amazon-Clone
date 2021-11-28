//Throughout this file, the shopping cart is referred to as basket
export const initialState = {
	/*basket key is an empty array for any products that get added to the cart.
	basket key values will be passed in through product component and then potentially
	the checkout, payment, and orders component
	*/
	basket: [],
	user: null
};

//Function to get total price of items in basket
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

//reducer function that has conditional switch-case statements for the basket
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
		//Next 3 switch cases is logic for managing basket
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case "EMPTY_BASKET":
			return {
				...state,
				basket: []
			}

		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			)
			let newBasket = [...state.basket];

			if (index >= 0){
				newBasket.splice(index, 1)
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as it's not in basket!`
				)
			}
			return {
				...state,
				basket: newBasket
			}

			//Sets authenticated user in state
			case "SET_USER":
				return {
					...state,
					user: action.user
				}

            default:
            	return state;
      		}
};

export default reducer;
