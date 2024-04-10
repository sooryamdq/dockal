import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  studentGroups: [],
  status: 'idle',
  error: null
};

// Define the thunk for fetching data from the API
export const fetchGroups = createAsyncThunk(
  'studentGroups/fetchGroups',
  async ({ loginUserId, bearerToken }) => {
    try {
      // Create a new FormData object
      const formData = new FormData();
      // Append the loginUserId to the FormData object
      formData.append('loginUserId', loginUserId);
        console.log("frm",formData)
      // Make the GET request with the FormData in the request body
      const response = await axios.post(
        `https://mdqualityapps.in/API/dockal/development/get_all_student_departments`,
        formData,
        {
          
         
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Set the Content-Type header for form data
            Authorization: `Bearer ${bearerToken}` // Pass bearerToken in the request headers
          }
        }
      );
      console.log("res", response.data);
      return response.data; // Return the response data
    } catch (error) {
      // Handle error
      throw error;
    }
  }
);

// Define the thunk for creating a new group via POST request
export const createGroup = createAsyncThunk(
  'studentGroups/createGroup',
  async ({newgroup, loginUserId, bearerToken }) => {
    console.log("grp",newgroup)
    try {
      // Create a new FormData object
      const formData = new FormData();
      // Append the loginUserId to the FormData object
      formData.append('loginUserId', loginUserId);
      formData.append('data',newgroup)
      console.log("form",formData)
      // Make the GET request with the FormData in the request body
      const response = await axios.post(
        `https://mdqualityapps.in/API/dockal/development/add_student_department`,
        formData,
        {
          
         
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Set the Content-Type header for form data
            Authorization: `Bearer ${bearerToken}` // Pass bearerToken in the request headers
          }
        }
      );
      console.log("res", response.data);
      return response.data; // Return the response data
    } catch (error) {
      // Handle error
      throw error;
    }
  }
);

// Define the slice
const studentGroupsSlice = createSlice({
  name: 'studentGroups',
  initialState,
  reducers: {
    addGroup(state, action) {
      state.studentGroups.push(action.payload);
    },
    addSubgroup(state, action) {
      const { groupId, subgroup } = action.payload;
      const group = state.studentGroups.find(group => group.id === groupId);
      if (group) {
        group.subgroups.push(subgroup);
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGroups.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.studentGroups = action.payload;
      })
      .addCase(fetchGroups.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createGroup.pending, state => {
        state.status = 'loading';
      })
      .addCase(createGroup.fulfilled, (state, action) => {
        console.log("d",action)
        state.status = 'succeeded';
        state.studentGroups.data.push(action.payload);
      })
      .addCase(createGroup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addGroup, addSubgroup } = studentGroupsSlice.actions;

export default studentGroupsSlice.reducer;
