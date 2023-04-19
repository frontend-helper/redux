const { createSlice } = require("@reduxjs/toolkit");

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    edit(state, action) {
      state.map((item) =>
        item.id === action.payload.id
          ? (item.title = action.payload.title)
          : item
      );
    },
  },
});

export const { add, remove, edit } = taskSlice.actions;
export default taskSlice.reducer;
