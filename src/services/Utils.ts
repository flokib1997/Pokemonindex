import { IPokemonEvolution } from "../interfaces/PokemonEvolutionInterface";

export const searchTree = (tree: IPokemonEvolution): string => {
  if (tree.evolves_to.length < 1) {
    return tree.species.name;
  } else {
    return `${tree.species.name}, ${searchTree(tree.evolves_to[0])}`;
  }
};
