import React from "react";

export function useFetch<T>(url: string) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>();
  const [data, setData] = React.useState<T>();

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          setError("Problem with network request");
          throw new Error();
        }

        const data = (await res.json()) as T;
        setData(data);
      } catch (err) {
        console.error(err);
        if (err instanceof Error) {
          setError(err.message);
        }

        setError("Unexpected error");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return [data, isLoading, error] as [T, boolean, string | undefined];
}
