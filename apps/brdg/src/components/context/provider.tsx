"use client"

import { useState } from "react";
import { GeneralContext } from "./context";


export const Provider = ({ children }) => {
    const [active, setActive] = useState(1);
  
  
    return (
     <GeneralContext.Provider value={{ active, setActive}}>
        {children}
     </GeneralContext.Provider>
    );
  };
  