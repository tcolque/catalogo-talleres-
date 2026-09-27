import { useState } from "react";
import estilos from "./TarjetaTaller.module.css";

export default function TarjetaTaller({ taller, vista }) {
    const { titulo, categoria, cupo, inscriptos, nuevo, descripcion } = taller;
    const [expandido, setExpandido] = useState(false);

    const libres = cupo - inscriptos;
    const porcentaje = Math.round((inscriptos / cupo) * 100);

    let claseEstado = estilos.disponible;
    if (libres === 0) {
    claseEstado = estilos.completo;
    } else if (libres <= 3) {
    claseEstado = estilos.pocos;
    }

    const claseVista = vista === "lista" ? estilos.lista : "";
    const claseTarjeta = `${estilos.tarjeta} ${claseEstado} ${expandido ? estilos.expandida : ""} ${claseVista}`;

    return (
    <article className={claseTarjeta}>
        <div className="d-flex justify-content-between align-items-start mb-2">
        <h2 className="h5 m-0">{titulo}</h2>
        {nuevo && <span className={estilos.badge}>Nuevo</span>}
        </div>

        <p className="text-muted small mb-2">{categoria}</p>

        {libres === 0 ? (
        <p className={estilos.alertaTexto}>Completo</p>
        ) : (
        <p className="mb-1">Cupos libres: {libres} de {cupo}</p>
        )}

        <div className={estilos.contenedorBarra}>
        <div
            className={estilos.barraOcupacion}
            style={{ width: `${porcentaje}%` }}
        ></div>
        </div>

        <button
        className="btn btn-sm btn-outline-secondary mb-2"
        onClick={() => setExpandido(!expandido)}
        >
        {expandido ? "Ocultar detalles" : "Ver detalles"}
        </button>

        {expandido && <p className="mt-2 small text-secondary">{descripcion}</p>}
    </article>
    );
}