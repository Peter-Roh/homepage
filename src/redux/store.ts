import {
  type ThunkAction,
  configureStore,
  type Action,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import modalSlice from "./modal";

function makeStore() {
  return configureStore({
    reducer: {
      modal: modalSlice.reducer,
    },
    middleware: (middleware) =>
      import.meta.env.DEV ? middleware().concat(logger) : middleware(),
    devTools: import.meta.env.DEV,
  });
}

const store = makeStore();

export default store;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
