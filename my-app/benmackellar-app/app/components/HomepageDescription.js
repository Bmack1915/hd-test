function HomepageDescription({ mainArticle }) {
  return (
    <div>
      <p className="text-neutral-dark-grayish-blue text-xl p-5">
        {mainArticle.description}
      </p>
      <button className="bg-primary-red w-60 text-xl hover:text-neutral-off-white hover:bg-neutral-very-dark-blue p-5 m-5 tracking-widest font-bold">
        {mainArticle.ctaButton.name}
      </button>
    </div>
  );
}

export default HomepageDescription;
