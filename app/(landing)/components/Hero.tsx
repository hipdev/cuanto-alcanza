import { AiOutlineDown } from "react-icons/ai";
import { InputProducts } from "./InputProducts";
import { AvalaibleStore } from './AvalaibleStores';


export const Hero = () => {
  return (
    <div className=" h-[85vh] border-red-500 flex justify-center w-full items-center text-center flex-col">
      <div className="relative">
        <div>
          <h1 className="font-bold font-serif text-4xl">Cuanto <span className="text-green-500">Alcanza</span></h1>
          <span className="text-[#222222]">Maximiza tu ahorro</span>
        </div>
        <InputProducts/>
        {/* <AvalaibleStore/> */}
      </div>
      <a
        href="#app-explained"
      >
        <AiOutlineDown
        className="relative top-28 animate-bounce "
        size={26}
        color={"#565d67"}
        />
      </a>
   
    </div>
  );
};
