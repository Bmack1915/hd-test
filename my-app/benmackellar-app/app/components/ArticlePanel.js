import ArticleCard from "./ArticleCard";

function ArticlePanel({ articles }) {
  return (
    <div className="flex justify-between p-5">
      {articles.map((article, index) => (
        <ArticleCard key={index} articleId={index} article={article} />
      ))}
    </div>
  );
}

export default ArticlePanel;
