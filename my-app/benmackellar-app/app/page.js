import NewPanel from "./components/newPanel";

function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-3 grid-rows-7 gap-4">
        <div className="col-span-2 row-span-3">1</div>
        <div className="row-span-2 col-start-1 row-start-4">2</div>
        <div className="row-span-5 col-start-3 row-start-1">
          <NewPanel />
        </div>
        <div className="row-span-2 row-start-4">5</div>
        <div className="col-span-3 row-span-2 row-start-6">6</div>
      </div>
    </div>
  );
}

export default Home;
