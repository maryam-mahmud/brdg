"use client"

import React, { ReactNode } from "react";
import { useGeneralContext } from "../context/context";
import Portfolio from "../screens/portfolio";
import Stake from "../screens/stake";
import Withdrawal from "../screens/withdrawal";
import Rewards from "../screens/rewards";

type Props = {};

export default function Bridge({}: Props) {

  const {active} = useGeneralContext()

  let content: React.ReactNode

  switch (active) {
    case 1:
      content = <Portfolio />
      break;
    case 2:
      content = <Stake />
      break;
    case 3:
      content = <Withdrawal />
      break;
    case 4:
      content = <Rewards />
      break;
  
    default:
      break;
  }
  return (
    <div className="w-full h-full">
      {content}
    </div>
  );
}
