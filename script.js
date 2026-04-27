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