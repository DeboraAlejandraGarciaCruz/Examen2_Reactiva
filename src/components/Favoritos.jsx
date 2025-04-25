import { usePeliculasContext } from "../context/PeliculasContext.jsx";

const Favoritos = () => {
  const { peliculas, favoritos } = usePeliculasContext();

  return (
    <div className="favoritos">
      <h1>Favoritas</h1>
      {peliculas.filter(p => favoritos.includes(p.id)).map(p => (
        <div key={p.id}>
          <strong>{p.titulo}</strong> ({p.genero})
        </div>
      ))}
    </div>
  );
};

export default Favoritos;
