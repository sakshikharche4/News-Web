import React from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import { CiDark } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6">
      <div className="flex items-center justify-around gap-8 py-2">
        {/* Logo */}
        <div className="font-bold text-2xl text-blue-500">NewsApp</div>

        {/* Navigation */}
        <div className="flex items-center gap-5 font-semibold text-base">
          {[
            { name: "Business", path: "/business" },
            { name: "Entertainment", path: "/entertainment" },
            { name: "General", path: "/general" },
            { name: "Health", path: "/health" },
            { name: "Science", path: "/science" },
            { name: "Technology", path: "/technology" },
          ].map((nav) => (
            <button key={nav.path} onClick={() => navigate(nav.path, { replace: true })}>
              <span className="hover:text-lg">{nav.name}</span>
            </button>
          ))}
        </div>

        {/* Searchbar */}
        <Searchbar />

        {/* Dark mode */}
        <CiDark className="size-8 bg-slate-400 rounded-2xl hover:bg-gray-500 p-1" />
      </div>
    </div>
  );
};

export default Navbar;
