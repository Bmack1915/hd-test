import ArticleCard from "./components/ArticleCard";
import ArticlePanel from "./components/ArticlePanel";
import DisplayImage from "./components/DisplayImage";
import HomepageDescription from "./components/HomepageDescription";
import NewsPanel from "./components/NewsPanel";
import Title from "./components/Title";

function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-3 grid-rows-7 gap-4">
        <div className="object-fill col-span-2 row-span-3">
          <DisplayImage image="../front-end/assets/images/image-web-3-desktop.jpg" />
        </div>
        <div className="row-span-2 col-start-1 row-start-4">
          <Title />
        </div>
        <div className="row-span-5 col-start-3 row-start-1">
          <NewsPanel />
        </div>
        <div className="row-span-2 row-start-4">
          <HomepageDescription />
        </div>
        <div className="col-span-3 row-span-2 row-start-6">
          <ArticlePanel />
        </div>
      </div>
    </div>
  );
}

export default Home;
