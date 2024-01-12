import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginSlice from './features/login-slice'
import storage from 'redux-persist/lib/storage';
import registerSlice from './features/register-slice';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: loginSlice,
  register: registerSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch