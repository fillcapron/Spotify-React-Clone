import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

interface UserState {
    user: IUser,
    isLoading: boolean,
    error: string
}

const initialState: UserState = {
    user: {
        display_name: '',
        external_urls: {
            spotify: ''
        },
        followers: {
            href: '',
            total: 0
        },
        href: '',
        id: '',
        images: [],
        type: '',
        uri: ''
    },
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetching(state) {
            state.isLoading = true;
        },
        userFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
        },
        userFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
export const { userFetching, userFetchingSuccess, userFetchingError } = userSlice.actions;
export default userSlice.reducer;