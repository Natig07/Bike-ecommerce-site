import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./slices/Shopslice";
import cartSlice from "./slices/Cartslice";
import productslice from "./slices/Productslice";
import userslice from "./slices/usersSlice";
import themeslice from "./slices/Themeslice";

export const store = configureStore({
    reducer: {
        bikes: shopSlice,
        cart: cartSlice,
        product: productslice,
        users: userslice,
        theme: themeslice
    }
})