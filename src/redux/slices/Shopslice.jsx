import { createSlice } from "@reduxjs/toolkit";
import { allbikes, cbikes, ebikes, fbikes, kbikes, mbikes } from "../data";



const initialState = {
    Allbikes: allbikes,
    Mbikes: mbikes,
    Cbikes: cbikes,
    Ebikes: ebikes,
    Fbikes: fbikes,
    Kbikes: kbikes,
    loading: false
}

export const shopSlice = createSlice({
    name: "bikes",
    initialState,
    reducers: {
        setdoneTrue: (state, action) => {
            state.Allbikes.map((bike) => {
                if (bike.id == action.payload) {
                    bike.added = true;

                }
            })
        },
        setdoneFalse: (state, action) => {
            state.Allbikes.map((bike) => {
                if (bike.id == action.payload) {
                    bike.added = false;
                };
            })
        }
    }
})

export const { setdoneTrue, setdoneFalse } = shopSlice.actions
export default shopSlice.reducer