import DropdownMenu from "./Menu-Header";

function Header() {
  return (
    <div className="px-15 pt-10 pb-5 bg-violet-300">
      <div className="flex items-center justify-between mb-5">
        <h3>SVPC</h3>
        <h1>Stardew Valley Pocket Companion</h1>
        <div>
          <DropdownMenu/>
        </div>
      </div>
      <div>
        <ul className="flex justify-around">
          <li><a href="/">Home</a></li>
          <li><a href="/tracker">Progress Tracker</a></li>
          <li><a href="/help">Help/Info</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
