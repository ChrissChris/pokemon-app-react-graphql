import React from "react";
import { useQuery } from "@apollo/client";
import { Pokemon } from "../components/Pokemon";

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS);
  return <p>I am a pokemon container</p>;
}
