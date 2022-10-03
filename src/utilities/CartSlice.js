import {createSlice} from "@reduxjs/toolkit";

const initialState =  {bag:[], itemsAdded: 0, totalPrice: 0.00};

const cartSlice = createSlice (
    {
        name: 'cart',
        initialState,
        reducers: {
            addToCart(state,action)
            {
                let found = false;
                for(let counter = 0; counter < state.bag.length; counter++)
                {
                    if(state.bag[counter][0].id === action.payload.id)
                    {
                        state.bag[counter][1]++;
                        state.itemsAdded++;
                        state.totalPrice += Number((Number(action.payload.price)).toFixed(2));
                        found = true;
                    }
                }
                if(!found)
                {
                    state.bag.push([action.payload,1])
                    state.itemsAdded++;
                    state.totalPrice += Number((Number(action.payload.price)).toFixed(2));
                }
            },
            removeFromCart(state, action)
            {
                for(let counter = 0; counter < state.bag.length; counter++)
                {
                    if(state.bag[counter][0].id === action.payload)
                    {
                        state.totalPrice -= Number((Number(state.bag[counter][0].price) * Number(state.bag[counter][1])).toFixed(2));
                        state.itemsAdded -= state.bag[counter][1];
                        state.bag.splice(counter, 1);
                    }
                }
            },
            incrementProduct(state, action)
            {
                for(let counter = 0; counter < state.bag.length; counter++)
                {
                    if(state.bag[counter][0].id === action.payload)
                    {
                        state.totalPrice += Number((Number(state.bag[counter][0].price)).toFixed(2));
                        state.bag[counter][1]++;
                        state.itemsAdded++;
                    }
                }
            },
            decrementProduct(state, action)
            {
                for(let counter = 0; counter < state.bag.length; counter++)
                {
                    if(state.bag[counter][0].id === action.payload)
                    {
                        state.totalPrice -= Number(state.bag[counter][0].price);
                        state.bag[counter][1]--;
                        state.itemsAdded--;
                        if(state.bag[counter][1] === 0)
                        {
                            state.bag.splice(counter, 1);
                        }
                    }
                }
            }
        }
    }
)

export const {addToCart, removeFromCart, incrementProduct, decrementProduct} =  cartSlice.actions;

export default cartSlice.reducer;