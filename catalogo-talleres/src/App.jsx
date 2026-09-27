import { useState, useEffect } from "react";
import { talleres } from "./data/talleres";
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller";

export default function App() {
  const [tema, setTema] = useState("claro");

  // Aplica el atributo data-tema al HTML para cambiar el tema de toda la página
  useEffect(() => {
    document.documentElement.setAttribute("data-tema", tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((prev) => (prev === "claro" ? "oscuro" : "claro"));
  };

  return (
    <main className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Catálogo de Talleres</h1>
        <button className="btn btn-outline-primary" onClick={alternarTema}>
          {tema === "claro" ? "Tema oscuro" : "Tema claro"}
        </button>
      </div>

      <div className="row g-4">
        {talleres.map((taller) => (
          <div key={taller.id} className="col-12 col-md-6 col-lg-4">
            <TarjetaTaller taller={taller} />
          </div>
        ))}
      </div>
    </main>
  );
}