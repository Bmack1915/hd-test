"use client";
import React, { createContext, useContext } from "react";
import useFetchData from "./useFetchData";

const DataContext = createContext();

export function DataProvider({ children }) {
  // Data set in global state using custom hook that fetches data via the SSR API
  const { data, isLoading, error } = useFetchData();

  return (
    <DataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
}

// Custom hook to access the data from the global state
export function useData() {
  const context = useContext(DataContext);
  // To use the global state, the component must be a child of the DataProvider
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
