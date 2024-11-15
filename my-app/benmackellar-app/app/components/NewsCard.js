export default function NewsCard({ title, description, border }) {
  return (
    <div className={`mt-12 mb-12  ${border ? "border-b-2 pb-7" : ""}`}>
      <button className="mb-5 hover:text-primary-orange text-white text-2xl font-bold">
        {title}
      </button>
      <p className="text-neutral-grayish-blue text-lg">{description}</p>
    </div>
  );
}
