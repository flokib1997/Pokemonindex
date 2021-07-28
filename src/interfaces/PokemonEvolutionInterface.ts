export interface IPokemonEvolution {
  evolution_details: Array<any>;
  evolves_to: IPokemonEvolution[];
  is_baby: Boolean;
  species: {
    name: string;
    url: string;
  };
}
