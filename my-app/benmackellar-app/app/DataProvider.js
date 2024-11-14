"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import useFetchData from "./useFetchData";

const DataContext = createContext();

export function DataProvider({ children }) {
  const { data, isLoading, error } = useFetchData();

  return (
    <DataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
}
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
