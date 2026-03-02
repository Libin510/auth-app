import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./services/authService";

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      return service.registerUser(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      return service.loginUser(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);