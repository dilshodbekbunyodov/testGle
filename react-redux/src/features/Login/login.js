import {createSlice} from "@reduxjs/toolkit";
import axios from '../../services/axiosSettings.js';


const initialState = {
    userData: {}
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        getUserData: (state, action) => {
            state.userData = action.payload.data;
            localStorage.setItem('userData', JSON.stringify(action.payload.data.user_data));
            localStorage.setItem('access', JSON.stringify(action.payload.data.access));
            localStorage.setItem('refresh', JSON.stringify(action.payload.data.refresh));
        }
    },
})

export const login = (initialData) => async (dispatch) => {
    const data = await axios.post('/users/auth/login/', initialData)
    if (data) {
        dispatch(getUserData(data.data))
        return data.data
    }
}

export const LogOut = () => async () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('userData');
}

export const {
    getUserData
} = loginSlice.actions;

export default loginSlice.reducer;