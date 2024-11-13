import Link from "next/link";

function Navigation() {
  return (
    <div className="m-5 p-5 flex justify-between">
      {/* Logo */}
      <h1 className="text-6xl">W.</h1>

      {/* Links */}
      <div className=" text-neutral-grayish-blue py-5 space-x-8">
        <Link href="/">Home</Link>
        <Link href="/new">New</Link>
        <Link href="/popular">Popular</Link>
        <Link href="/trending">Trending</Link>
        <Link href="/categories">Categories</Link>
      </div>
    </div>
  );
}

export default Navigation;
