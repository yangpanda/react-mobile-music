import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICurrentSongState {
  value: number;
}

const initialState: ICurrentSongState = {
  value: 0
};

export const currentSongSlice = createSlice({
  name: 'currentSong',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<number>) => {
      console.log('set');
      state.value = action.payload;
    }
  }
});

export const { set } = currentSongSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default currentSongSlice.reducer;
