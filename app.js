let amigos = [];

/* AGREGAR AMIGO */
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

/* ACTUALIZAR LISTA */
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        const btn = document.createElement("button");
        btn.textContent = "X";
        btn.onclick = () => eliminarAmigo(index);

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

/* ELIMINAR AMIGO */
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

/* SORTEAR AMIGO */
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Mínimo 2 participantes.");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * amigos.length);
    document.getElementById("resultado").textContent = `🎉 ${amigos[randomIndex]} es el amigo secreto 🎉`;
}

/* FORMAR PAREJAS */
function formarParejas() {
    if (amigos.length < 2) {
        alert("Mínimo 2 participantes.");
        return;
    }

    const shuffled = [...amigos].sort(() => Math.random() - 0.5);
    const parejas = [];

    for (let i = 0; i < shuffled.length - 1; i += 2) {
        parejas.push(`${shuffled[i]} 🤝 ${shuffled[i + 1]}`);
    }

    document.getElementById("resultado").innerHTML = parejas.join("<br>");
}

/* REINICIAR */
function reiniciar() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").textContent = "";
}
