import { createSlice } from "@reduxjs/toolkit";
import { saveToken, dropToken, getToken } from "../services/token";
import { UserResp } from "./api-actions";

const initialUser = localStorage.getItem("user");

type UserSlicePayload = {
    token: string;
    user: UserResp;
};

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: initialUser ? (JSON.parse(initialUser) as UserResp) : null,
        token: getToken() as string,
    },
    reducers: {
        setUser: (
            state,
            action: { payload: UserSlicePayload; type: string },
        ) => {
            saveToken(action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            dropToken();
            localStorage.removeItem("user");
            state.user = null;
            state.token = "";
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
