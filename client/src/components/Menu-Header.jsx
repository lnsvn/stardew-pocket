import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <button
          type="button"
          className="inline-flex px-3 py-2 font-semibold"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          Hi, Y/N!
          <ChevronDownIcon/>
        </button>
      </div>

      {isOpen && (
        <div className="bg-white absolute" >
            <ul>
                <li className="pt-2"><a>Profile</a></li>
                <li className="p-2"><a>Settings</a></li>
                <li className="pb-2"><a>Sign out</a></li>
            </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;