import { createSlice } from "@reduxjs/toolkit";
import { News } from "../types/News";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        news: [] as News[],
    },
    reducers: {
        setNews: (state, action: { payload: News[]; type: string }) => {
            state.news = action.payload;
        },
        clearNews: (state) => {
            state.news = [];
        },
    },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
