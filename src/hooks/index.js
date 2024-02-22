import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './reducers/register.reducer';

const store = configureStore({
    reducer: {
        register: registerSlice
    }
});

export default store;