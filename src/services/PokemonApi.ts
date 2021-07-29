import { IPokemon } from "../interfaces/PokemonInterface";
import axios from "axios";
export function getAllPokemon(page: number): Promise<any> {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=13&offset=" + (page - 1) * 13)
    .then((data) => {
      let allPokemon: IPokemon[] = [];
      const { results } = data.data;

      const output: IPokemon[] = results.map(function (el: IPokemon) {
        const out: IPokemon = {
          name: el.name,
        };
        return out;
      });
      allPokemon = [...output];

      return {
        page,
        pageCount: Math.ceil(data.data.count / 13),
        results: allPokemon,
      };
    });
}

export function getPokemonByName(name: string): Promise<any> {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon/" + name)
    .then((data: any) => data.data);
}

export function getEvolutionsBySpecies(speciesUrl: string): Promise<any> {
  return axios.get(speciesUrl).then((res: any) => {
    return axios.get(res.data.evolution_chain.url).then((dat: any) => {
      return dat;
    });
  });
}
