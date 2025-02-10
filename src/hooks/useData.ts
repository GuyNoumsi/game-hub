import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface ApiResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(
    () => {
      const controlller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<ApiResponse<T>>(endpoint, {
          signal: controlller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      return () => controlller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
