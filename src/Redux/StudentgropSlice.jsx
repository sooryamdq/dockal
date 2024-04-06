// studentGroupsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const studentGroupsSlice = createSlice({
  name: "studentGroups",
  initialState: [],
  reducers: {
    addGroup: (state, action) => {
      state.push(action.payload);
    },
    addSubgroup: (state, action) => {
      const { groupId, subgroup } = action.payload;
      const group = state.find((group) => group.id === groupId);
      if (group) {
        group.subgroups.push(subgroup);
      }
    },
  },
});

export const { addGroup, addSubgroup } = studentGroupsSlice.actions;

export default studentGroupsSlice.reducer;
