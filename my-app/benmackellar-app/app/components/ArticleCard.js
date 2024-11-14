import Image from "next/image";

function ArticleCard({ article, articleId }) {
  return (
    <div className="flex m-1">
      <div>
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={150}
          height={100}
        />
      </div>
      <div className="flex flex-col px-5">
        <p className="text-primary-red text-4xl pb-2 font-bold">
          0{articleId + 1}
        </p>
        <button className="text-neutral-very-dark-blue text-left hover:text-primary-red  text-xl font-bold">
          {article.title}
        </button>
        <p className="text-lg text-neutral-grayish-blue">
          {article.description}
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
