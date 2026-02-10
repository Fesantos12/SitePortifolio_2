import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  return (
    <>
      <div className="w-full h-22.5 px-6.5 py-9 flex items-center justify-between md:flex">
        <div>Fellipe Santos</div>

        {/* mobile header */}
        <HeaderMobile />

        <div className="flex items-center gap-5 max-md:hidden">
          <a href="#">About</a>
          <a href="#">Experience</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex items-center gap-5 max-md:hidden">
          <button className="w-20.25 h-8.75 border border-gray-300 rounded-sm hover:bg-gray-300 cursor-pointer">
            Resume
          </button>
          <button className="w-20.25 h-8.75 border border-gray-300 rounded-sm hover:bg-gray-300 cursor-pointer">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};
