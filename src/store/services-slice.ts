import { createSlice } from "@reduxjs/toolkit";
import { Service } from "../types/Services";

const servicesSlice = createSlice({
    name: "services",
    initialState: {
        services: [] as Service[],
    },
    reducers: {
        setServices: (state, action: { payload: Service[]; type: string }) => {
            state.services = action.payload;
        },
        clearServices: (state) => {
            state.services = [];
        },
    },
});

export const { setServices } = servicesSlice.actions;
export default servicesSlice.reducer;
