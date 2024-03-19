import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// це конфігурація для localStorage
const contactsPersistConfig = {
  key: "contacts",
  storage,
  // whitelist: ["contacts"],
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
