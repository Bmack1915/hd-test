import Link from "next/link";

function Navigation() {
  return (
    <div className="m-5 p-5 flex justify-between">
      {/* Logo */}
      <h1 className="text-6xl">W.</h1>

      {/* Links */}
      <div className=" text-neutral-dark-grayish-blue py-5 space-x-16">
        <Link className="hover:text-primary-orange" href="/">
          Home
        </Link>
        <Link className="hover:text-primary-orange" href="/new">
          New
        </Link>
        <Link className="hover:text-primary-orange" href="/popular">
          Popular
        </Link>
        <Link className="hover:text-primary-orange" href="/trending">
          Trending
        </Link>
        <Link className="hover:text-primary-orange" href="/categories">
          Categories
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
