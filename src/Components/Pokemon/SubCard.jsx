import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loader from "../../assets/1495.gif";

const SubCard = () => {
  const navigate = useNavigate(); //back
  const { id } = useParams(); // Get the Pokémon ID from the URL
  console.log(useParams());

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    // Fetch Pokémon data from an API
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemonData(data);
    };
    fetchPokemon();
  }, [id]);

  if (!pokemonData) {
    return (
      <div className="flex justify-center items-center h-lvh">
        <img src={loader} alt="loader" />
        <div className="p-3 text-2xl lg:text-5xl font-medium">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-lime-100 p-4 h-screen flex sm:flex-row flex-col justify-center text-center gap-8 sm:gap-10 md:gap-16 items-center">
      <div>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="h-48 w-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{pokemonData.name.toUpperCase()}</h2>
        <p>Height: {pokemonData.height}</p>
        <p>Weight: {pokemonData.weight}</p>
        <p>Speed: {pokemonData.stats[5].base_stat}</p>
        <p>Experience: {pokemonData.base_experience}</p>
        <p>
          Abilities:{" "}
          {pokemonData.abilities
            .map((ability) => ability.ability.name)
            .join(", ")}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-green-700 py-[6px] text-xs sm:text-lg px-4 text-white font-semibold rounded-full hover:bg-green-600 "
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SubCard;
