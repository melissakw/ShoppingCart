import { createStore, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { product } from "./product";

export const ConfigureStore = () => {
  const config = {
    key: "root",
    storage: storage,
    debug: true
  };

  const store = createStore(
    persistCombineReducers(config, {
      product
    }),
    applyMiddleware(thunk, logger)
  );

  const persistor = persistStore(store);
  return { persistor, store };
};
