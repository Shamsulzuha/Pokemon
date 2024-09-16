import React from "react";

const PokemonCard = ({ pokemonData }) => {
  return (
    <div className="bg-lime-200 shadow-md shadow-lime-100 rounded-md py-3 px-1 sm:px-5 md:px-2 sm:py-7 flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-all hover:shadow-xl hover:shadow-lime-100">
      <img
        className="h-20 w-32 sm:w-44 sm:h-28 lg:h-32 lg:w-56"
        src={pokemonData.sprites.other.dream_world.front_default}
        alt={pokemonData.name}
      />
      <p className="font-semibold text-xl sm:text-2xl lg:text-3xl py-2 sm:py-4">
        {pokemonData.name}
      </p>
      <button className="bg-green-500 py-[6px] rounded-full shadow-md shadow-green-200 px-4 text-xs sm:text-sm text-white font-semibold">
        {pokemonData.types.map((currType) => currType.type.name).join(", ")}
      </button>
      <div className="flex justify-between items-center gap-1 sm:gap-2 lg:gap-4 py-2 sm:py-4">
        <p className="text-[8px] sm:text-sm md:text-xs font-medium">
          Height: <span className="font-bold"> {pokemonData.height} </span>
        </p>
        <p className="text-[8px] sm:text-sm md:text-xs font-medium">
          Weight: <span className="font-bold"> {pokemonData.weight} </span>
        </p>
        <p className="text-[8px] sm:text-sm md:text-xs font-medium">
          Speed:
          <span className="font-bold"> {pokemonData.stats[5].base_stat} </span>
        </p>
      </div>

      <div className="flex justify-between items-center gap-2 lg:gap-4">
        <p className="flex flex-col text-[8px] sm:text-sm md:text-xs font-medium text-center">
          <span className="font-bold">{pokemonData.base_experience}</span>
          Experience:
        </p>
        <p className="flex flex-col text-[8px] sm:text-sm md:text-xs font-medium text-center">
          <span className="font-bold">
            {/* {pokemonData.abilities
                .map((curAbi) => curAbi.ability.name)
                .slice(0, 1)
                .join(", ")} */}
            {pokemonData.abilities[0].ability.name}
          </span>
          Abilities:
        </p>
        <p className="flex flex-col text-[8px] sm:text-sm md:text-xs font-medium text-center">
          <span className="font-bold">{pokemonData.stats[1].base_stat}</span>
          Attack:
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
