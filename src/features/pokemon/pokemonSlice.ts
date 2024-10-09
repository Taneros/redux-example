import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import { createAppSelector } from '../../app/selectors';

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
      });
  },
});

const filter = (searchQuery: string, filterTypes: string[], pokemon.pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())) => {
  const matchSearch = searchQuery.length === '' ? true : ;
};

export const selectPokemons = createAppSelector(
  (state: RootState) => state.search.query,
  (state: RootState) => state.filters.types,
  (state: RootState) => state.pokemon.pokemons,
  (searchQuery, filterTypes, pokemons) => {
    return pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  },
);

export default pokemonSlice.reducer;
