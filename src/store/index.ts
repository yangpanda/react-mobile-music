import { configureStore } from '@reduxjs/toolkit';
import currentSongReducer from './currentSongState';

const store = configureStore({
  reducer: {
    currentSong: currentSongReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const usePlayerDispatch = () => useDispatch<AppDispatch>();
export const usePlayerSelector: TypedUseSelectorHook<RootState> = useSelector;
