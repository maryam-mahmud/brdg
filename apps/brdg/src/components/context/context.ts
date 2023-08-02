import React, {createContext, Dispatch, useContext} from "react";

interface GeneralProp {
    active: number;
    setActive: Dispatch<number>;
  }


export const GeneralContext = createContext<GeneralProp>({
    active: 1,
    setActive: (id) => {},
  });


export const useGeneralContext = () => {
    return useContext(GeneralContext)
}