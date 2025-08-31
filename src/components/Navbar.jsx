import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { IoMdSearch, IoMdMic } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearch } from "../store/reducer/getSearch";
import { useSelector } from "react-redux";
import {
  changeSearchTerm,
  clearVideos,
} from "../features/youtube/youtubeSlices";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // local input state
  const [inputValue, setInputValue] = useState("");
  const searchTerm = useSelector((state) => state.youtube.searchTerm);

  const handleSearch = () => {
    // update Redux only when user presses Enter or clicks search
    dispatch(changeSearchTerm(inputValue));
    dispatch(clearVideos());

    if (location.pathname !== "/search") {
      navigate("/search");
    } else {
      dispatch(getSearch(false));
    }
  };

  return (
    <nav className="h-14 flex bg-black items-center justify-between">
      {/* Left side */}
      <div className="flex gap-5 text-[20px] p-5 cursor-pointer">
        <div className="flex hover:bg-gray-500 rounded-2xl p-1.5 transition-colors duration-300 ease-in-out">
          <RxHamburgerMenu />
        </div>
        <div className="flex items-center">
          <FaYoutube color="red" size={24} />
          <span className="font-bold">YouTube</span>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex gap-5">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-96 rounded-2xl h-7 rounded-r-none text-white-500 px-1.5 bg-zinc-900"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit">
                <IoMdSearch className="w-10 text-white bg-zinc-700 rounded-2xl rounded-l-none h-7 hover:cursor-pointer" />
              </button>
            </div>
            <div>
              <IoMdMic className="bg-zinc-700 p-1.5 rounded-2xl text-3xl text-white hover:cursor-pointer" />
            </div>
          </div>
        </form>
      </div>

      {/* Right side */}
      <div className="flex gap-5 pr-5 hover:cursor-pointer">
        <div className="h-8 flex bg-zinc-700 rounded-2xl justify-center items-center px-2 gap-1 text-white">
          <AiOutlinePlus />
          <span>Create</span>
        </div>
        <div className="text-white justify-center items-center flex text-[1.2rem] relative">
          <FaRegBell />
          <span className="absolute bottom-4 left-2 bg-red-700 rounded-full px-1 text-xs">
            9+
          </span>
        </div>
        <div className="h-8 w-8">
          <img
            src="https://imgs.search.brave.com/-mMXj2be48HYxbn4eH_xOBg6EV-N-_dicEbUzA3KxWY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC82/Ny8yMi9waW5rLXBp/Zy1ub3NlLWZlc3Rp/dmUtY2VsZWJyYXRp/b24tdmVjdG9yLTIy/MzU2NzIyLmpwZw"
            alt="profilephoto"
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
