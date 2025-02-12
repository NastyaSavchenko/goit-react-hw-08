import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export const userReducer = slice.reducer;
