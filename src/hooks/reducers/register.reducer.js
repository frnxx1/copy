import {createAsyncThunk, createSlice, isRejectedWithValue} from '@reduxjs/toolkit';
import axios from '../../api/axios.js';

export const createNewUser = createAsyncThunk(
    'createUser/post',

    async (data, {rejectWithValue}) => {
        try {
            const res = await axios.post('/signup', data);
            if(!res.data) {
                throw new Error();
            }

            return res.data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        users: [],
        loading: false
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(createNewUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(createNewUser.fulfilled, (state) => {
          state.loading = false;
        })
        .addCase(createNewUser.rejected, (state) => {
          state.loading = false;
        });
    }
})



export default registerSlice.reducer;