// slices/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postData, { LoginAPI } from '../CommonAPI/CommonAPI';




// Async thunk action creator
export const login = createAsyncThunk('auth/login', async (formData, { rejectWithValue }) => {
 
  try {
    const response = await postData(LoginAPI, formData);

    if (response.data && response.data.error) {
      return rejectWithValue(response.data.message);
    } else {
      localStorage.setItem("userData", JSON.stringify(response.data));
     
      return response.data;
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  userData: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
