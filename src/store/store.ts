import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import newsReducer from "./news-slice";
import servicesReducer from "./services-slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        news: newsReducer,
        services: servicesReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
