
import Formulario from "./components/Formulario.jsx";
import ListaPeliculas from "./components/ListaPeliculas.jsx";
import Favoritos from "./components/Favoritos.jsx";
import Filtros from "./components/Filtros.jsx";
import "./index.css";
import { PeliculasProvider } from "./context/PeliculasContext.jsx";


const App = () => (
  <PeliculasProvider>
    <div className="app">
      <h1>Gestor de Películas</h1>
      <Formulario />
      <Filtros />
      <ListaPeliculas />
      <Favoritos />
    </div>
  </PeliculasProvider>
);

export default App;
