import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // Make sure axios is imported
import { allbikes } from "../data";

const initialState = {
    Allbikes: allbikes,
    cartBikes: [],
    total: 0,
    user: null,
    cload: false
};

const BaseUrl2 = 'http://localhost:3000/loggedUser';
const BaseUrl1 = 'http://localhost:3000/Users';

// Fetch user cart from api
export const getcart = createAsyncThunk("cart/getcart", async () => {
    const response = await axios.get(BaseUrl2);
    return response.data;
});

// Post updated cart to backend for logged-in user
export const postcart = createAsyncThunk("cart/postcart", async (_, { getState }) => {
    const { user, cartBikes } = getState().cart;

    if (user && user.id) {  // Ensure user and user.id are both defined
        console.log('Updating cart for user with ID:', user.id);
        try {
            await axios.put(`${BaseUrl2}/${user.id}`, { ...user, cart: cartBikes });
        } catch (error) {
            console.error("Error updating cart:", error);
        }
    } else {
        console.error("No valid user is logged in or user ID is missing.");
    }
});


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        addtoCart: (state, action) => {
            const foundProduct = state.cartBikes.find((bike) => bike.id === action.payload);

            if (foundProduct) {
                // Update count if product exists in cart
                foundProduct.count += 1;
                state.total += foundProduct.price;
            } else {
                // Find product in Allbikes and add to cart
                const newBike = state.Allbikes.find((bike) => bike.id === action.payload);
                if (newBike) {
                    state.cartBikes.push({ ...newBike, count: 1 });
                    state.total += newBike.price;
                }
            }
        },
        removeFromCart: (state, action) => {
            const bikeIndex = state.cartBikes.findIndex((bike) => bike.id === action.payload);
            if (bikeIndex !== -1) {
                const removedBike = state.cartBikes[bikeIndex];
                state.total -= removedBike.price * removedBike.count;
                state.cartBikes.splice(bikeIndex, 1); // Remove bike from cart
            }
        },
        incCount: (state, action) => {
            const bike = state.cartBikes.find((bike) => bike.id === action.payload);
            if (bike) {
                bike.count += 1;
                state.total += bike.price;
            }
        },
        decCount: (state, action) => {
            const bike = state.cartBikes.find((bike) => bike.id === action.payload);
            if (bike && bike.count > 1) {
                bike.count -= 1;
                state.total -= bike.price;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getcart.pending, (state) => {
                state.cload = true;
            })
            .addCase(getcart.fulfilled, (state, action) => {
                state.cload = false;
                // console.log(action.payload[0])
                const userData = action.payload[0];
                // console.log('get cart after -', userData)
                userData != null ? (state.cartBikes = userData.cart,
                    state.total = state.cartBikes.reduce((sum, bike) => sum + bike.price, 0)) :
                    state.cartBikes = []
            })
            .addCase(getcart.rejected, (state) => {
                state.cload = false;
                console.error("Failed to fetch cart data.");
            });
    }
});

export const { addtoCart, removeFromCart, incCount, decCount, setUser } = cartSlice.actions;

export default cartSlice.reducer;
