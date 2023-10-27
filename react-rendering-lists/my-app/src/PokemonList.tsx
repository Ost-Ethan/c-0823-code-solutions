type Pokemonprops = {
  pokedex: Pokemon[];
};

type Pokemon = {
  number: string;
  name: string;
};

export default function PokemonList({ pokedex }: Pokemonprops) {
  const pokemon = pokedex.map((element) => (
    <li key={element.number}>{element.name}</li>
  ));

  return <ul>{pokemon}</ul>;
}
