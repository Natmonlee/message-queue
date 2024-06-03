import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../reducers/messageReducer";

const store = configureStore({ reducer: messageReducer });

export default store;
