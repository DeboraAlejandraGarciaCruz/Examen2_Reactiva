import { useEffect, useState } from "react";

const usePeliculas = () => {
  const [peliculas, setPeliculas] = useState(() => {
    const data = localStorage.getItem("peliculas");
    return data ? JSON.parse(data) : [];
  });

  const [favoritos, setFavoritos] = useState(() => {
    const data = localStorage.getItem("favoritos");
    return data ? JSON.parse(data) : [];
  });

  const [filtro, setFiltro] = useState("");
  const [peliculaEditando, setPeliculaEditando] = useState(null);

  // Guardar películas en localStorage siempre que cambien
  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  // Guardar favoritos
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const agregarPelicula = (pelicula) => {
    const nueva = { ...pelicula, id: Date.now() };
    const nuevasPeliculas = [...peliculas, nueva];
    setPeliculas(nuevasPeliculas);
  };

  const eliminarPelicula = (id) => {
    const nuevas = peliculas.filter(p => p.id !== id);
    setPeliculas(nuevas);
    setFavoritos(favoritos.filter(f => f !== id));
  };

  const editarPelicula = (id, datos) => {
    const nuevas = peliculas.map(p => p.id === id ? { ...p, ...datos } : p);
    setPeliculas(nuevas);
    setPeliculaEditando(null);
  };

  const toggleFavorito = (id) => {
    setFavoritos(favoritos.includes(id)
      ? favoritos.filter(f => f !== id)
      : [...favoritos, id]
    );
  };

  return {
    peliculas,
    agregarPelicula,
    eliminarPelicula,
    editarPelicula,
    toggleFavorito,
    favoritos,
    filtro,
    setFiltro,
    peliculaEditando,
    setPeliculaEditando
  };
};

export default usePeliculas;
