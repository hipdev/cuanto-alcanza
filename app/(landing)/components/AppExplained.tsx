import productImg from "../../../assets/pc-landing.png";
import productImgTwo from "../../../assets/money-three.jpg";

import Image from "next/image";

export const AppExplained = () => {
  return (
    <div
      className=" relative flex flex-col items-center container mx-auto justify-center max-w-6xl p-8"
      id="app-explained"
    >
      {/* App Explained Button and Title */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center mb-24">
        <p className="font-semibold text-2xl">¿Porque CuantoAlcanza.com?</p>
        <button className="border border-black border-rounded py-2 px-4 rounded-full transition-all duration-200 hover:bg-black hover:text-white hover:scale-9 font-extralight ">
          Decubre como funciona
        </button>
      </div>
      {/* First Banner */}
      <div className="items-center w-full md:text-start  grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-4 flex-1   w-full ">
          <h3 className=" text-3xl md:text-4xl font-bold w-full ">
            Siempre el mejor precio
          </h3>
          <p className="font-light mt-2 ">
            Te indicamos el menor precio en productos, entre todos los
            supermercados disponibles en tu zona.
          </p>
        </div>
        <Image
          src={productImg}
          alt="cuanto-alcanza-app"
          width={300}
          height={300}
          className="mt-4 md:mt-0 object-cover justify-self-end"
        />
      </div>
      {/* Second Banner */}
      <div className="mt-40 items-center w-full  md:text-start justify-around grid grid-cols-1 md:grid-cols-2 ">
        <Image
          src={productImgTwo}
          alt="cuanto-alcanza-app"
          className="shadow-lg rounded-md object-cover self-center justify-self-center "
          width={700}
          height={700}
        />
        <div className="p-4 flex-1  border-black w-full ">
          <h3 className=" text-3xl md:text-4xl font-bold w-full ">
            Te ayudamos a reducir tus gastos
          </h3>
          <p className="font-light mt-2 ">
            Con CuantoAlcanza.com como asistente financiero, Reduce el gasto en
            tus compras y ahorra mas!
          </p>
          <button className="mt-4 bg-green-500 shadow uppercase text-white text-sm font-semibold ransition-all hover:bg-green-700 px-6 py-2 rounded-full">
            Empieza ya
          </button>
        </div>
      </div>
    </div>
  );
};
