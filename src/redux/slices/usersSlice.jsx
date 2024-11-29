import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    Users: [],
    loggedUser: {},
    infotext: null,
    reginfo: null,
    loading: false,
};

const BaseUrl = 'http://localhost:3000/Users';
const BaseUrl2 = 'http://localhost:3000/loggedUser';

export const getAllUsers = createAsyncThunk("getAllusers", async () => {
    const response = await axios.get(BaseUrl);
    return await response.data;
});
export const getLogged = createAsyncThunk("getLogged", async () => {
    const response = await axios.get(BaseUrl2);
    // console.log(response.data[0])
    return response.data;
});


export const deletelogged = createAsyncThunk("deleteUser", async (id) => {
    const response = await axios.delete(`${BaseUrl2 + '/' + id}`)
    await axios.put(`${BaseUrl}` + '/' + `${id}`, response.data)

});
export const regNew = createAsyncThunk("users/registeruser",
    async (newuser, { rejectWithValue }) => {
        try {
            const response = await axios.get(BaseUrl);
            const existingUsername = response.data.find(user => user.regusername === newuser.regusername);
            const existingEmail = response.data.find(user => user.email === newuser.email);

            if (existingUsername && existingEmail) {
                return rejectWithValue('User exists!');
            } else if (existingUsername) {
                return rejectWithValue('Username already exists!');
            } else if (existingEmail) {
                return rejectWithValue('Email already exists!');
            }

            const adduserresponse = await axios.post(BaseUrl, { ...newuser, cart: [] });
            return adduserresponse.data;

        } catch (error) {
            return rejectWithValue('Failed to register!');
        }
    }
);

// export const login = createAsyncThunk('users/loginuser',async())

export const userslice = createSlice({
    name: "users",
    initialState,
    reducers: {
        logged: (state, action) => {
            const foundUser = state.Users.find(
                user => (user.regusername === action.payload.logusername && user.regpassword === action.payload.logpassword)
            );
            if (foundUser) {
                state.loggedUser = foundUser;
                axios.post('http://localhost:3000/loggedUser', foundUser)
                state.infotext = `Welcome ${foundUser.regusername}`;
            } else {
                state.infotext = 'Username or password is wrong!';
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;

            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;

                state.Users = action.payload;

            })
            .addCase(getLogged.fulfilled, (state, action) => {
                if (state.loggedUser) {
                    state.loggedUser = action.payload[0]
                };

            })
            .addCase(regNew.pending, (state, action) => {
                state.loading = true;
                state.reginfo = null;
            })
            .addCase(regNew.fulfilled, (state, action) => {
                state.reginfo = 'Successfully registered!';
                state.loading = false;
                state.Users.push(action.payload);
                console.log('Users:', state.Users)

            })
            .addCase(regNew.rejected, (state, action) => {
                state.loading = false;
                state.reginfo = action.payload;
            })
    },
});

export const { logged, register } = userslice.actions;
export default userslice.reducer;
