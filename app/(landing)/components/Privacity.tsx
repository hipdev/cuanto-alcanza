import { MdOutlineSecurity } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";

export const Privacity = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center mt-40 p-4 mb-12">
      <h3 className=" text-3xl md:text-4xl font-bold w-full text-center ">
        Tu Privacidad Cuenta
      </h3>
      <div className="flex flex-col md:flex-row justify-between gap-y-28 md:gap-x-28 mt-12 ">
        <div className="flex justify-center flex-col items-center text-center">
          <MdOutlineSecurity size={34} color={"#22c55e"} />
          <p className="mt-2  font-light">Nunca venderemos tus datos a terceros.</p>
        </div>
        <div className="flex justify-center flex-col items-center text-center">
          <AiFillLock size={34} color={"#22c55e"}/>
          <p className="mt-2 font-light ">Todos los datos en el almacenamiento seran cifrados.</p>
        </div>
      </div>
    </div>
  );
};
