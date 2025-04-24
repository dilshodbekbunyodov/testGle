import {createSlice} from "@reduxjs/toolkit";
import axios from "../../services/axiosSettings.js";

const initialState = {
    USER_LIST: {
        results: [],
        total_pages: 0
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserData: (state, {payload}) => {
            state.USER_LIST = payload.data
        }
    }
})

export const getUserList = (params) => async (dispatch) => {
    const data = await axios.get('/users/list/', {params})
    if (!data) return;
    dispatch(getUserData(data.data))
}

export const {
    getUserData
} = userSlice.actions;

export default userSlice.reducer;