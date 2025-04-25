import { useEffect, useState } from "react";
import { usePeliculasContext } from "../context/PeliculasContext.jsx";

const Formulario = () => {
  const {
    agregarPelicula,
    editarPelicula,
    peliculaEditando,
    setPeliculaEditando
  } = usePeliculasContext();

  const [form, setForm] = useState({ titulo: "", descripcion: "", genero: "" });

  useEffect(() => {
    if (peliculaEditando) {
      setForm({
        titulo: peliculaEditando.titulo,
        descripcion: peliculaEditando.descripcion,
        genero: peliculaEditando.genero
      });
    } else {
      setForm({ titulo: "", descripcion: "", genero: "" });
    }
  }, [peliculaEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (peliculaEditando) {
      editarPelicula(peliculaEditando.id, form);
    } else {
      agregarPelicula(form);
    }

    setForm({ titulo: "", descripcion: "", genero: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>{peliculaEditando ? "Editar Película" : "Agregar Película"}</h2>
      <input
        placeholder="Título"
        value={form.titulo}
        onChange={e => setForm({ ...form, titulo: e.target.value })}
        required
      />
      <input
        placeholder="Descripción"
        value={form.descripcion}
        onChange={e => setForm({ ...form, descripcion: e.target.value })}
        required
      />
      <input
        placeholder="Género"
        value={form.genero}
        onChange={e => setForm({ ...form, genero: e.target.value })}
        required
      />
      <button type="submit">{peliculaEditando ? "Guardar Cambios" : "Agregar"}</button>
      {peliculaEditando && (
        <button type="button" onClick={() => setPeliculaEditando(null)}>Cancelar</button>
      )}
    </form>
  );
};

export default Formulario;
