import { ChevronDownIcon } from "@heroicons/react/16/solid";

function Home() {
  return (
    <div className="bg-orange-100">
      <div>
        <h1 className="p-10">Stats</h1>
        <div className="flex justify-around">
          <p>Current season/year/day</p>
          <p>Play time</p>
          <p>Days</p>
          <p>Items crafted</p>
          <p>Items cooked</p>
          <p>Steps Taken</p>
          <p>etc.</p>
        </div>
      </div>
      <div className="p-10">
        <div>
          <h1 className="inline-flex items-center pb-5">
            Perfection Progress
            <ChevronDownIcon className="h-10" />
          </h1>
        </div>
        <div>
          <p>Produce and Forage Shipped</p>
          <p>Obelisks on Farm</p>
          <p>Golden Clock on Farm</p>
          <p>Monster Slayer Hero</p>
          <p>Great Friends</p>
          <p>Farmer Level</p>
          <p>Found All Stardrops</p>
          <p>Cooking Recipes Made</p>
          <p>Crafting Recipes Made</p>
          <p>Fish Caught</p>
          <p>Golden Walnuts Found</p>
        </div>
      </div>

      <h1 className="p-10">Farm Image?</h1>
    </div>
  );
}

export default Home;
