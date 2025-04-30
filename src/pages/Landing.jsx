import HeaderLP from "../components/LP-Header";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      {/* <HeaderLP /> */}
      <div className="bg-orange-100">
        <h1 className="p-20">Images</h1>
        <p className="px-10 pb-10 font-bold">
          Welcome to Stardew Valley Pocket Companion!
        </p>
        <p className="px-10 pb-10">
          Your journey to 100% perfection just got a whole lot easier — and a
          lot more fun! This companion app is designed to help you track your
          progress, stay organized, and enjoy every moment of your adventure in
          Stardew Valley.
        </p>
        <p className="px-10 pb-10">
          Easily keep tabs on friendships, Community Center bundles, special
          orders, collections, and every milestone on your way to completing the
          game. Need a reminder of who loves which gifts? Wondering what crops
          you’re missing for the greenhouse? We’ve got you covered with helpful
          information and quick tips right at your fingertips.
        </p>
        <p className="px-10 pb-10">
          Whether you’re a brand new farmer or a seasoned pro, Stardew Valley
          Pocket Companion makes it simple and satisfying to see your hard work
          pay off. Track, plan, and celebrate your farm life — one step closer
          to perfection!
        </p>
        <p className="px-10 pb-10 font-bold">Start your journey today!</p>
        <button
          type="button"
          class="bg-pink-300 border border-pink-400 focus:outline-none hover:bg-pink-400 font-medium rounded-lg px-5 py-2.5 mb-4 mx-4"
        >
          Login
        </button>
        <p>or</p>
        <button
          type="button"
          class="bg-blue-300 border border-blue-400 focus:outline-none hover:bg-blue-400 font-medium rounded-lg px-5 py-2.5 mb-4 mx-4"
        >
          Sign Up
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
