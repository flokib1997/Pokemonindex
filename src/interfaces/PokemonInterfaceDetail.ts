export interface IPokemonDetail {
  name: string;
  image: string;
  information: {
    name: string;
    value: string;
  }[];
  stats: {
    name: string;
    value: string;
  }[];
}
