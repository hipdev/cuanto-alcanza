"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { useInput } from "../hooks";

export const InputProducts = () => {
  const { form, onChange } = useInput({
    name: "",
  });


  return (
    <form className="relative flex items-center mt-12">
      <input
        className=" rounded-full w-full h-12 p-4 text-sm focus-within:no-underline outline-none border 
                          border-green-500 shadow-[0_20px_50px_rgba(34,_197,_94,_0.7)] transition-all"
        placeholder="Busca tu producto al mejor precio"
        onChange={({ target }) => onChange(target.value, "name")}
      />
        <AiOutlineSearch
          className=" absolute right-5 cursor-pointer"
          size={18}
          color={"#565d67"}
        />
    </form>
  );
};
