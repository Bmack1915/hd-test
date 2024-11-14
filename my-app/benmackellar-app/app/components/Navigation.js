"use client";
import Link from "next/link";
import { useData } from "../DataProvider";
import { Abril_Fatface } from "next/font/google";
import { useState } from "react";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { data, isLoading, error } = useData();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="m-5 flex justify-between items-center">
      {/* Logo */}
      <h1 className={`${abril.className} text-6xl font-extrabold`}>W.</h1>

      <div className="font-inter  flex justify-between space-x-24">
        {data.navItems.map((navItem, index) => (
          <Link
            key={index}
            className="text-neutral-dark-grayish-blue hover:text-primary-orange"
            href={`${navItem.url}`}
          >
            {navItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
