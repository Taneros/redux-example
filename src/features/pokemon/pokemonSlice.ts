import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { FiltersState } from '../filters/filtersSlice';
import { RootState } from '../../app/store';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  pokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemons: [],
  filteredPokemons: [],
  loading: false,
  error: null,
};

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
  return response.data.results;
});

const applyFiltersAndSearch = (pokemonList: Pokemon[], searchQuery: string, filters: FiltersState) => {
  return pokemonList
    .filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload;
        state.filteredPokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch Pokémon data';
      })
    .addMatcher(
        (action): action is PayloadAction<string> => action.type === 'search/setSearchQuery',
        (state, action) => {
          const searchQuery = action.payload;
          const filters = (state as RootState).filters;
          state.filteredPokemons = applyFiltersAndSearch(state.pokemons, searchQuery, filters);
        }
    )
  },
});

export default pokemonSlice.reducer;
