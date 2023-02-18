export const AppExplained = () => {
  return (
    <div className=" w-full relative flex flex-col " id="app-explained">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
        <p className="font-semibold text-2xl">¿Porque CuantoAlcanza.com?</p>
        <button className="border border-black border-rounded py-2 px-4 rounded-full transition-all duration-200 hover:bg-black hover:text-white hover:scale-9 font-extralight ">
          Decubre como funciona
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between  ">
        <div className="p-4  md:relative md:left-44 ">
          <h3 className="text-5xl font-bold w-full md:w-3/6 mt-32">Siempre El Mejor Precio</h3>
          <p className="font-light w-full md:w-4/6 mt-6">
            Cuanto alcanza se alimenta de la informacion recibida por los
            usuarios de las tiendas, para asi estar actualizada en los precios
            de los productos en el mercado.
          </p>
        </div>
        <div className="relative">
            <img 
                alt="img-maqueta"
                src="https://dz7smbqkw02oe.cloudfront.net/extension/build/assets/images/temp/app-mockup2.png"
                className="text-black w-80 absolute right-0 md:relative"
            />
        </div>
      </div>
    </div>
  );
};
