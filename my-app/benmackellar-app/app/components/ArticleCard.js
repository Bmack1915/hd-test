import Image from "next/image";

function ArticleCard() {
  return (
    <div className="flex m-1">
      <div>
        <Image
          src="/image-gaming-growth.jpg"
          alt="A person working on a laptop"
          width={150}
          height={100}
        />
      </div>
      <div className="flex flex-col px-5">
        <p className="text-primary-red text-4xl pb-2 font-bold">01</p>
        <header className="text-neutral-very-dark-blue  text-xl font-bold">
          Reving Retro PCs
        </header>
        <p className="text-lg text-neutral-grayish-blue">
          What happens when old PCs are given modern upgrades?
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
