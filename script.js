function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("senha").value;
    let erro = document.getElementById("erro");

    if (user === "" || pass === "") {
        erro.innerText = "Preencha todos os campos!";
        return;
    }

    if (user === "admin" && pass === "1234") {
        window.location.href = "home.html";
    } else {
        erro.innerText = "Usuário ou senha incorretos!";
    }
}
window.onload = function() {
    mostrarComentarios();
}

function adicionarComentario() {
    let nome = document.getElementById("nome").value;
    let texto = document.getElementById("comentario").value;

    if (nome === "" || texto === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentarios.push({
        nome: nome,
        texto: texto
    });

    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    document.getElementById("nome").value = "";
    document.getElementById("comentario").value = "";

    mostrarComentarios();
}

function mostrarComentarios() {
    let lista = document.getElementById("listaComentarios");
    lista.innerHTML = "";

    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentarios.forEach(c => {
        lista.innerHTML += `
            <div class="card p-3 mb-2">
                <strong>${c.nome}:</strong>
                <p>${c.texto}</p>
            </div>
        `;
    });
}