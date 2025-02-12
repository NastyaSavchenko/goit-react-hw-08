import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { userReducer } from "./auth/slice";
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    user: userReducer,
  },
});
