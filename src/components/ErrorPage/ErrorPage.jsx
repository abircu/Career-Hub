import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-red-600 flex justify-center items-center">
        Opps!!!
      </h1>
      <button className=" bg-red-300 rounded-lg p-3 text-green-950">
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
