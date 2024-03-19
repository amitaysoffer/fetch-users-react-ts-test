import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    console.error(error.status, error.data);
    return (
      <div className="flex flex-col justify-center items-center w-full mt-10">
        <h1 className="text-6xl">Oops!</h1>
        <p className="text-xl mt-4">
          Sorry, it seemed that you landed on a page which doesn't exist
        </p>
        <p className="text-2xl mt-4">
          Click{" "}
          <Link className="underline text-blue-500 hover:text-blue-700" to="/">
            HERE
          </Link>{" "}
          to go back to the homepage
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-7xl">Oops!</h1>
      <p className="text-2xl">
        Sorry, an unexpected error has occurred while trying to fetch your data
      </p>
      <p className="text-2xl">Please come back in a few moments</p>
      <p className="text-2xl mt-4">
        You are welcome to try clicking{" "}
        <Link className="underline text-blue-500 hover:text-blue-700" to="/">
          HERE
        </Link>{" "}
        to go back to the homepage
      </p>
    </div>
  );
}
