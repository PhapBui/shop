import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  location: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUser(state, action) {
      state.loading = true;
    },

    fetchUserLocation(state, action) {
      state.loading = true;
    },
    fetchUserLocationSuccess(state, action) {
      state.loading = false;
      state.location = action.payload;
    },

    fetchUserFailed(state, action) {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions;

//Creat Select

export const selectUserLocation = (state) => state.rootReducer.users.location;

//Reducer
const userReducer = userSlice.reducer;
export default userReducer;
