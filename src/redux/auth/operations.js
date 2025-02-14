import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const goITApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  goITApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goITApi.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      console.error("Register Error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goITApi.post("/users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      console.error("Login Error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await goITApi.post("/users/logout");
  } catch (error) {
    console.error("Logout Error:", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const { data } = await goITApi.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
