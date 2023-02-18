import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";


export const Hero = () => {
  return (
    <div className="h-[80vh] border-red-500 flex justify-center w-full items-center text-center flex-col">
      <div className="relative">
        <div>
          <h1 className="font-bold font-serif text-4xl">Cuanto <span className="text-[#ff6f48]">Alcanza</span></h1>
          <span className="text-[#222222]">Maximiza tu ahorro</span>
        </div>
        <div className="relative flex items-center mt-12">
          <input
            className=" rounded-full w-full h-12 p-4 text-sm focus-within:no-underline outline-none border 
                            border-[#ff6f48] shadow-[0_20px_50px_rgba(255,_111,_72,_0.7)] transition-all"
            placeholder="Busca tu producto al mejor precio"
          />
          <AiOutlineSearch
            className=" absolute right-5"
            size={18}
            color={"#565d67"}
          />
        </div>
      </div>
      <a
        href="#app-explained"
      >
        <AiOutlineDown
        className="mt-24"
        size={24}
        color={"#565d67"}
        />
      </a>
   
    </div>
  );
};
