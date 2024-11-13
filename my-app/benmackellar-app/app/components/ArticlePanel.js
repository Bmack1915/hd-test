import ArticleCard from "./ArticleCard";

function ArticlePanel() {
  return (
    <div className="flex justify-between p-5">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
}

export default ArticlePanel;
