import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { YouTubeContext } from "../context/youTubeContext";

const Header = () => {
  const { toggleButton, setToggleButton } = useContext(YouTubeContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    let inputValue = e.target[0].value;

    navigate(`/results?search_query=${inputValue}`);
  };
  return (
    <header className="flex justify-between items-center p-[16px] bg-[#0F0F0F] text-white">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setToggleButton(!toggleButton)}
          className="p-[7px] transition hover:bg-[#424242] rounded-full cursor-pointer  text-[24px]"
        >
          <GiHamburgerMenu />
        </button>
        <Link to={"/"} className="flex items-center gap-2">
          <img src="/public/logo.png" width={50} />
          <h1 className="md:text-3xl">YouTube</h1>
        </Link>
      </div>
      <form className="relative" onSubmit={handleSearch}>
        <input
          type="text"
          className="lg:w-[500px] md:w-[350px] sm:w-[200px] bg-[#0F0F0F] py-1 outline-none border position-relative border-gray-500 rounded-[15px] focus:outline focus:outline-blue-300"
        />
        <button className="absolute rounded-r-[15px] right-0 top-[1px] px-5 py-[8px] bg-[#222222]">
          <BsSearch />
        </button>
      </form>
      <div className="flex justify-between items-center md:gap-4 text-[24px]">
        <span className="p-[7px] transition hover:bg-[#424242] rounded-full cursor-pointer">
          <RiVideoAddLine />
        </span>
        <span className="p-[7px] transition hover:bg-[#424242] rounded-full cursor-pointer">
          <IoIosNotifications />
        </span>
        <img
          src="/public/logo.png"
          className="rounded-full w-[24px] h-[24px] "
        />
      </div>
    </header>
  );
};

export default Header;
