"use server";

import axios from "axios";

export async function getData() {
  try {
    const response = await axios.get("http://localhost:3002/data");
    const { articles, mainArticle, navItems, sidebar } = response.data;
    return { articles, mainArticle, navItems, sidebar };
  } catch (error) {
    console.error("Error fetching data from server:", error);
    throw new Error("Failed to fetch data from server");
  }
}
