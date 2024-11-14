"use client";
import Link from "next/link";
import { useData } from "../DataProvider";

function Navigation() {
  const { data, isLoading, error } = useData();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="m-5 p-5 flex justify-between">
      {/* Logo */}
      <h1 className="text-6xl">W.</h1>

      {data.navItems.map((navItem, index) => (
        <Link
          key={index}
          className="hover:text-primary-orange"
          href={`${navItem.url}`}
        >
          {navItem.name}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
