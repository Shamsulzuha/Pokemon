import { Route, Routes } from "react-router-dom";
import PokemonApi from "./Components/Pokemon/PokemonApi";
import ErrorPage from "./Components/ErrorPage";
import SubCard from "./Components/Pokemon/SubCard";
const App = () => {
  return (
    <>
      <div className="max-w-[1350px] w-full mx-auto">
        <Routes>
          <Route path="/" element={<PokemonApi />} />
          <Route path="/pokemon/:id" element={<SubCard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
