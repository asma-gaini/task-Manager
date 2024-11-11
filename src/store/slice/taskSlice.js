import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      //payload = newTask
      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {
      //payload = taskId
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },

    //update anjam nashode

    clearTask(state) {
      state.tasks = [];
    },
  },
});

export const { addTask, deleteTask, clearTask } = taskSlice.actions;

export default taskSlice.reducer;
