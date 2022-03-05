import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducer/auth-reducer";
const rootReducer = combineReducers({
  authReducer,
});

const persistsConfig = {
  key: "root",
  storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistsConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers()
);

export const persistor = persistStore(store);