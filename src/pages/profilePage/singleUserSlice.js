import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  activeUser: {},
};

// Define your async thunk
export const fetchActiveUser = createAsyncThunk(
  "users/fetchActiveUser",
  async (id) => {
    const response = await fetch(`https://panorbit.in/api/users.json`);
    const data = await response.json();
    const user = data.users.find((user) => user.id === Number(id));
    return user;
  }
);

const singleUserSlice = createSlice({
  name: "activeUser",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchActiveUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchActiveUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.activeUser = action.payload;
        state.loading = false;
      })
      .addCase(fetchActiveUser.rejected, (state) => {
        state.loading = false;
      }),
});

export default singleUserSlice.reducer;
