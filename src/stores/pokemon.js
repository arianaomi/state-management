import { create } from "zustand";

const usePokemonsStore = create((set,get)=>({
  pokemons:[],
  pokemonDetail:[],
  isLoading: false,
  errorMessage: '',
  hasError:false,

  getPokemons: async () => {
    try{
      set({isLoading: false, hasError:'', hasError: false})
  } catch{}},
  getPokemonsDetail: async () => {},
}))

export default usePokemonsStore;