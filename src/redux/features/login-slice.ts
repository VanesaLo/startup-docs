import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface Login {
    email: string;
    password: string;
}

const initialState: Login = {
    email: '',
    password: ''
};

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<Login>) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
})

export const { loginUser } = LoginSlice.actions;
export default LoginSlice.reducer;