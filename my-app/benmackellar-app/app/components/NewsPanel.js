import NewsCard from "./NewsCard";

function NewsPanel() {
  return (
    <div className="p-5 m-5 bg-neutral-very-dark-blue">
      <h1 className="text-5xl mt-5 font-normal text-primary-orange">New</h1>

      {/* News Headings */}
      <div>
        <NewsCard
          border={true}
          title="Hydrogen VS Electric Cars"
          description="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <NewsCard
          border={true}
          title="The Downsides of AI Artistry"
          description="What are the possible adverse effects of on-demand AI image generation?"
        />
        <NewsCard
          title="Is VC Funding Drying Up?"
          description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        />
      </div>
    </div>
  );
}

export default NewsPanel;
