import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import loader from "../../assets/1495.gif";
import { Link } from "react-router-dom";

const PokemonApi = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  const Api = "https://pokeapi.co/api/v2/pokemon?limit=100";

  const fetchData = async () => {
    try {
      const res = await fetch(Api);
      const data = await res.json();
      // console.log(data);

      const fetchDataDetails = data.results.map(async (currEle) => {
        const res = await fetch(currEle.url);
        const data = await res.json();
        return data;
        // console.log(data);
      });
      // console.log(fetchDataDetails);

      const apiResponse = await Promise.all(fetchDataDetails);
      setApiData(apiResponse);
      setLoading(false);
      // console.log(apiResponse);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("👉 Api is not Working 👀");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-lvh">
        <img src={loader} alt="loader" />
        <div className="p-3 text-2xl lg:text-5xl font-medium">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl lg:text-5xl font-medium">
        {error}
      </div>
    );
  }

  // Search funtionality
  const searchData = apiData.filter((curCard) =>
    curCard.name.includes(search.toLowerCase())
  );
  // console.log(searchData);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-3xl pt-5 pb-3">
          💥 Lets Catch Pokemon 💪
        </h1>
        <input
          className="py-2 px-2 bg-black text-white focus:outline-none shadow-sm shadow-slate-200 rounded-md"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-8 p-3 lg:p-5">
        {searchData.map((pokemon) => {
          return (
            <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
              <PokemonCard pokemonData={pokemon} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default PokemonApi;
