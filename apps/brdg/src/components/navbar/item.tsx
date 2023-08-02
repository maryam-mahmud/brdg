import React from "react";
import { useGeneralContext } from "../context/context";

type Props = {
  // icon: React.ReactNode;
  name: string;
  id: number;
};

export default function Item({ name, id }: Props) {

  const {active, setActive} = useGeneralContext()

  const handleActiveBar = (index: number) => {
    setActive(index)
  }

  console.log(active)
  return (
    <button className={`${active === id ? "text-brown-50 bg-white" : "text-white"} p-3 rounded-lg py-2 px-4 h-[80%]`} onClick={() => handleActiveBar(id)}>
      <p className={`text-base font-bold`}>{name}</p>
    </button>
  );
}
