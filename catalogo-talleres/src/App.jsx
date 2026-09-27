import { useState, useEffect } from "react";
import { talleres } from "./data/talleres";
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller";
import Boton from "./components/Boton/Boton";

export default function App() {
  const [tema, setTema] = useState("claro");
  const [vista, setVista] = useState("grilla"); 
  const [compacto, setCompacto] = useState(false); 

  useEffect(() => {
    document.documentElement.setAttribute("data-tema", tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((prev) => (prev === "claro" ? "oscuro" : "claro"));
  };

  const claseContenedor = compacto ? "container py-2" : "container py-5";
  const claseFila = compacto ? "row g-2" : "row g-4";
  const claseColumna = vista === "lista" ? "col-12" : "col-12 col-md-6 col-lg-4";

return (
    <main className={claseContenedor}>
      <header className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h1>Catálogo de Talleres</h1>
        
        <div className="d-flex gap-2 align-items-center">
          <Boton
            variante="secundario"
            activo={vista === "grilla"}
            onClick={() => setVista("grilla")}
          >
            Grilla
          </Boton>

          <Boton
            variante="secundario"
            activo={vista === "lista"}
            onClick={() => setVista("lista")}
          >
            Lista
          </Boton>
          <Boton
            variante="secundario"
            activo={compacto}
            onClick={() => setCompacto(!compacto)}
          >
            {compacto ? "Modo Normal" : "Modo Compacto"}
          </Boton>
          <Boton variante="primario" onClick={alternarTema}>
            {tema === "claro" ? "Tema oscuro" : "Tema claro"}
          </Boton>
        </div>
      </header>

      <div className={claseFila}>
        {talleres.map((taller) => (
          <div key={taller.id} className={claseColumna}>
            <TarjetaTaller taller={taller} vista={vista} />
          </div>
        ))}
      </div>
    </main>
  );
}