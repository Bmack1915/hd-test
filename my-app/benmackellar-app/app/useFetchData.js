"use client";
import { getData } from "@/lib/api";
import { useEffect, useState } from "react";

// Custom hook to fetch data from the server for the client
const useFetchData = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await getData();
        setData(result);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetchData;
