import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface GenresApiResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controlller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GenresApiResponse>("/genres", { signal: controlller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controlller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
