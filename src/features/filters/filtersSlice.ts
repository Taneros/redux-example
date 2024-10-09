import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  types: string[];
  powerRange: [number, number];
}

const initialState: FiltersState = {
  types: [],
  powerRange: [0, 100],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTypeFilter: (state, action: PayloadAction<string[]>) => {
      state.types = action.payload;
    },
    setPowerRange: (state, action: PayloadAction<[number, number]>) => {
      state.powerRange = action.payload;
    },
  },
});

export const { setTypeFilter, setPowerRange } = filtersSlice.actions;
export default filtersSlice.reducer;
