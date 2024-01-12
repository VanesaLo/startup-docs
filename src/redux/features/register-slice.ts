import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface Register {
    email: string;
    password: string;
}

const initialState: Register = {
    email: '',
    password: ''
};

const RegisterSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<Register>) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
})

export const { registerUser } = RegisterSlice.actions;
export default RegisterSlice.reducer;