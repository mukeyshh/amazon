export const initialState={
    basket:[],
    user:null,
}

    export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=>item.price+amount,0);

 function reducer(state, action){
     switch (action.type) {
         case 'SET_USER':
             return{
             ...state,
             user:action.user
            }


         case 'ADD_TO_BASKET':
             //LOGI C FOR AADDING ITEM TO BASKET
             return {
                 ...state,
                 basket: [...state.basket, action.item]
                 };
             
        case 'REMOVE_FROM_BASKET':
            //LOGIC FOR REMOVING ITEM FROM BASKET


                 //here we cloned the basket
                let newBasket=  [...state.basket];

                 //here we checked if the item exists
                const index=state.basket.findIndex(
                    (basketItem)=>basketItem.id===action.id);    
                 
                if (index>=0){
                    //item exist in basket , remove it
                    newBasket.splice(index,1);
                } else {
                    console.warn(
                        `cant remove product (id:${action.id}) as it doesnot exist`
                    )
                }

            return {
                ...state,
                basket:newBasket
                };
         default:
         return state;
             
     }
 }

 export default reducer;