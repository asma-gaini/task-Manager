import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "./slice/taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskSliceReducer,
  },
});

export default store;
