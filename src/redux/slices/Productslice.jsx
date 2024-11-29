import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allbikes } from "../data";


const initialState = {
    Allbikes: allbikes,
    selectedProduct: {},
    loading: false
}


export const productslice = createSlice({
    name: "product",
    initialState,
    reducers: {
        selectproduct: (state, action) => {
            const product = state.Allbikes.find(bike => bike.id === action.payload);
            if (product) {
                state.selectedProduct = product;
                localStorage.setItem("selectedpr", JSON.stringify(product));
            }
        },
        getfromlocal: (state, action) => {
            const selected = localStorage.getItem("selectedpr");

            if (selected) {
                console.log(JSON.parse(selected))
                state.selectedProduct = JSON.parse(selected)

            }
        }
    },

})


export const { selectproduct, getfromlocal } = productslice.actions

export default productslice.reducer