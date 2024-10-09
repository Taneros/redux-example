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

const filterType = (filterTypes: string[], pokemon: Pokemon) => {
  console.log(`pokemon/pokemonSlice.ts - line: 78 ->> filterTypes`, filterTypes);
  console.log(`pokemon/pokemonSlice.ts - line: 79 ->> pokemon`, pokemon);

  if (filterTypes.length === 0) {
    return true;
  }

  return filterTypes.some((filterType) => {
    console.log(
      `pokemon/pokemonSlice.ts - line: 83 ->> filterType, slice`,
      filterType,
      pokemon.url.split('/').join('').slice(-1),
    );

    return filterType === pokemon.url.split('/').join('').slice(-1);
  });
};

const filterSearch = (searchQuery: string, pokemon: Pokemon) => {
  console.log(`pokemon/pokemonSlice.ts - line: 97 ->> searchQuery`, searchQuery);
  console.log(`pokemon/pokemonSlice.ts - line: 98 ->> pokemon`, pokemon);

  return pokemon.name.toLowerCase().includes(searchQuery.trim().toLowerCase());
};

export const selectPokemons = createAppSelector(
  (state: RootState) => state.search.query,
  (state: RootState) => state.filters.types,
  (state: RootState) => state.pokemon.pokemons,
  (searchQuery, filterTypes, pokemons) => {
    return pokemons
      .filter((pokemon) => filterSearch(searchQuery, pokemon))
      .filter((pokemon) => filterType(filterTypes, pokemon));
  },
);

export default pokemonSlice.reducer;
