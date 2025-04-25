import { usePeliculasContext } from "../context/PeliculasContext.jsx";

const Filtros = () => {
  const { filtro, setFiltro } = usePeliculasContext();

  return (
    <div className="filtros">
      <h2> Buscar película </h2>
      <input
        placeholder="Buscar por título o género"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      
      <button onClick={() => setFiltro("")}>Ver Todo</button>
    </div>
  );
};

export default Filtros;
