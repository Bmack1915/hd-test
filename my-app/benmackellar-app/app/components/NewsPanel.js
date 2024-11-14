import NewsCard from "./NewsCard";

function NewsPanel({ news }) {
  return (
    <div className="p-5 m-5 bg-neutral-very-dark-blue">
      <h1 className="text-5xl mt-5 font-normal text-primary-orange">New</h1>

      {news.map((article, index) => (
        <NewsCard
          key={index}
          border={true}
          title={article.title}
          description={article.description}
        />
      ))}
    </div>
  );
}

export default NewsPanel;
