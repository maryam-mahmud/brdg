"use client";
import React, { useState } from "react";
// import { Video, Audio, Text, Image, Sticker, Logo } from "icons";
import Item from "./item";
import { Icons } from "../../../public/icons";
import Logo from "../../../public/icons/Logo";
import { useGeneralContext } from "../context/context";


export default function Navbar() {

  const menu = [
    {
      id: 1,
      name: "Portfolio",
    },
    {
      id: 2,
      name: "Stake",
    },
    {
      id: 3,
      name: "Withdrawal",
    },
    {
      id: 4,
      name: "Rewards",
    },
  ];

  return (
    <div className="flex w-full justify-between items-center px-10 py-8 bg-brown-50">
        <p className="text-[2rem] font-bold text-white">Bridge</p>
        <div className="bg-brown-30 ml-10 rounded-2xl p-2 gap-8 flex">
            {menu.map((item) => (
              <Item id={item.id} name={item.name} />
            ))}
          </div>
        <div className="flex items-center gap-5">
            <Icons.Notification />
            <div className="flex gap-2 p-3 h-[3.3125rem] bg-light-green rounded-2xl w-[9.187rem] border-white border-3 items-center justify-between">
              <Logo />
              <p>0xce...0564</p>
            </div>
        </div>
    </div>
  );
}
