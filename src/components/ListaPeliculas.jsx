import { usePeliculasContext } from "../context/PeliculasContext.jsx";

const ListaPeliculas = () => {
  const {
    peliculas,
    eliminarPelicula,
    toggleFavorito,
    favoritos,
    filtro,
    setPeliculaEditando
  } = usePeliculasContext();

  const filtradas = peliculas.filter(p =>
    p.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
    p.genero.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="lista">
      <h1>Lista de Películas Registradas</h1>
      {filtradas.length === 0 && <p>No hay películas que coincidan.</p>}
      {filtradas.map(p => (
        <div key={p.id} className="pelicula">
          <h3>{p.titulo}</h3>
          <p>{p.descripcion}</p>
          <p><strong>Género:</strong> {p.genero}</p>
          <button onClick={() => eliminarPelicula(p.id)}>Eliminar</button>
          <button onClick={() => setPeliculaEditando(p)}>Editar</button>
          <button onClick={() => toggleFavorito(p.id)}>
            {favoritos.includes(p.id) ? "Quitar de favoritos" : "Favorito"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaPeliculas;
