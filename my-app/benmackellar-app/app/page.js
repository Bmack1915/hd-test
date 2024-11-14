"use client";

import ArticleCard from "./components/ArticleCard";
import ArticlePanel from "./components/ArticlePanel";
import DisplayImage from "./components/DisplayImage";
import HomepageDescription from "./components/HomepageDescription";
import NewsPanel from "./components/NewsPanel";
import Title from "./components/Title";
import { useData } from "./DataProvider";

function Home() {
  const { data, isLoading, error } = useData();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-7 sm:grid-rows-6 gap-4">
        <div className="object-fill sm:col-span-1 sm:row-span-3 md:col-span-1 md:row-span-3 lg:col-span-2 lg:row-span-3">
          <DisplayImage imageUrl={data.mainArticle.imageUrl} />
        </div>

        <div className="sm:col-span-1 sm:row-start-4 sm:row-span-2 md:col-span-1 md:row-start-3 md:row-span-2 lg:col-start-1 lg:row-start-4 lg:row-span-2">
          <Title>{data.mainArticle.title}</Title>
        </div>

        <div className="lg:row-span-5 lg:col-start-3 lg:row-start-1 md:col-span-2 md:row-span-3">
          <NewsPanel news={data.sidebar.articles} />
        </div>

        <div className="sm:col-span-1 sm:row-start-5 sm:row-span-2 md:col-span-1 md:row-start-4 md:row-span-2 lg:row-span-2 lg:row-start-4">
          <HomepageDescription mainArticle={data.mainArticle} />
        </div>

        <div className="sm:col-span-1 sm:row-span-2 sm:row-start-6 md:col-span-1 md:row-start-5 md:row-span-2 lg:col-span-3 lg:row-span-2 lg:row-start-6">
          <ArticlePanel articles={data.articles} />
        </div>
      </div>
    </div>
  );
}

export default Home;
