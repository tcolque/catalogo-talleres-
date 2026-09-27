import estilos from "./Boton.module.css";

export default function Boton({ variante = "primario", activo = false, onClick, children }) {
    const claseVariante = variante === "secundario" ? estilos.secundario : estilos.primario;
    const claseActivo = activo ? estilos.activo : "";

    return (
    <button
        className={`${estilos.boton} ${claseVariante} ${claseActivo}`}
        onClick={onClick}
    >
        {children}
    </button>
    );
}