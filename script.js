function mostrarNombres() {
    const contenedor = document.getElementById("contenedor-nombres");
    contenedor.innerHTML = `
        <h3>Integrantes del grupo:</h3>
        <ul>
            <li>Daniel Blandón</li>
            <li>Andrés Juan</li>
        </ul>
    `;
}

document.getElementById("btn-nombres").addEventListener("click", mostrarNombres);