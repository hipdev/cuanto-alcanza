import { GrMenu } from "react-icons/gr";

export const Header = () => {
  return (
    <header className="h-16 flex justify-between w-full p-4 items-center ">
      <div className="flex flex-row mr-12 items-center gap-2 font-extralight text-sm text-[#222222] ">
        <GrMenu size={19} color={"#222222"} />
        <span className="uppercase sm:hidden md:block">Menu</span>
      </div>
      <ul className="flex flex-row gap-12 mr-4 uppercase font-extralight text-sm text-[#222222]">
        <li className="">Tienda</li>
        <li>Login</li>
      </ul>
    </header>
  );
};
