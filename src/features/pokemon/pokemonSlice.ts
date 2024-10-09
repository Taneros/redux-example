import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { FiltersState } from '../filters/filtersSlice';
import { store } from '../../app/store';
import { SearchState } from '../search/searchSlice';

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

const applyFiltersAndSearch = ({
  searchQuery,
  filterQuery,
}: {
  searchQuery?: SearchState['query'];
  filterQuery?: FiltersState['types'];
}) => {
  // const pokemonList = store.getState;
  // return pokemonList
  //   .filter((pokemon) => {
  //     if (!searchQuery) {
  //       return true;
  //     }
  //     return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
  //   })
  //   .filter((pokemon) => {
  //     if (!filterQuery || filterQuery.length === 0) {
  //       return true;
  //     }
  //     filterQuery.includes(pokemon.url.slice(-1));
  //   });
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
      });

    builder.addMatcher(
      (action): action is PayloadAction<string> => action.type === 'search/setSearchQuery',
      (state, action) => {
        const searchQuery = action.payload;
        state.filteredPokemons = applyFiltersAndSearch({ searchQuery });
      },
    );
    //   .addMatcher(
    //     (action): action is PayloadAction<string[]> => action.type === 'filters/setTypeFilter',
    //     (state, action) => {
    //       const filterQuery = action.payload;
    //       state.filteredPokemons = applyFiltersAndSearch({ filterQuery });
    //     },
    //   );
  },
});

export default pokemonSlice.reducer;
