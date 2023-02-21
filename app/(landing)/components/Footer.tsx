import { AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'



export const Footer = () => {
  return (
    <footer className="flex flex-col bg-green-50 p-4">
      <div className="text-center">
        <h1 className="font-bold font-serif text-2xl">
          Cuanto <span className="text-green-500">Alcanza</span>
        </h1>
        <span className=" font-extralight font-xs text-gray-500">
          Maximiza tu ahorro
        </span>
      </div>
      <div className="flex flex-col items-center justify-center mt-2">
        <ul className="flex flex-col items-center text-xs">
          <li className='text-xs mb-4 font-extralight'>Sobre Nosotros</li>
          <span className="flex flex-row gap-x-4 items-center">
            <li className='cursor-pointer'><AiFillInstagram size={24} color={"#22c55e"}/></li>
            <li className='cursor-pointer'><AiFillTwitterSquare size={24} color={"#22c55e"}/></li>
            <li className='cursor-pointer'><AiFillYoutube size={24} color={"#22c55e"}/></li>
          </span>
        </ul>
        <ul></ul>
      </div>
    </footer>
  );
};
