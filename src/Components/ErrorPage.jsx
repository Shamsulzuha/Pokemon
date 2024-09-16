import { useNavigate } from "react-router-dom";
import error404 from "../../src/assets/Error404.gif";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center">
        <img className="max-h-[400px]" src={error404} alt="error 404" />

        <h1 className="font-semibold text-2xl sm:text-4xl">Error 404</h1>
        <p className="pt-1 pb-3 font-semibold text-sm sm:text-xl">
          Sorry, the page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-green-700 py-[6px] text-xs sm:text-lg px-4 text-white font-semibold rounded-full hover:bg-green-600 "
        >
          Go back to the Home page
        </button>
      </div>
    </>
  );
}

export default ErrorPage;
