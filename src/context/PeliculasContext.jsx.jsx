import { createContext, useContext } from "react";
import usePeliculas from "../hooks/usePeliculas.jsx";

const PeliculasContext = createContext();

export const PeliculasProvider = ({ children }) => {
  const peliculasData = usePeliculas();

  return (
    <PeliculasContext.Provider value={peliculasData}>
      {children}
    </PeliculasContext.Provider>
  );
};

export const usePeliculasContext = () => useContext(PeliculasContext);
