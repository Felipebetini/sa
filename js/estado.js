function carregarPais() {
    const pais = "Brasil";
    document.getElementById("nome_pais").value = pais;
}

function Estado(nome, pais) {
    this.nome = nome;
    this.pais = pais;
}

function salvarEstado() {
    let input = document.getElementById("nome_estado");
    let nome = input.value;

    input = document.getElementById("nome_pais");
    let pais = input.value;

    let estado = new Estado(nome, pais);

    let listaEstadosStr = localStorage.getItem("listaEstados");
    let listaEstados = [];
    if (listaEstadosStr != null) {
        listaEstados = JSON.parse(listaEstadosStr);
    }
    let encontrado = false;
    for (let i = 0; i < listaEstados.length; i++) {
        if (listaEstados[i].nome === estado.nome) {
            encontrado = true;
            alert('Estado ja cadastrado!');
            break;
        }
    }
    if (!encontrado) {
        listaEstados.push(estado);
    }

    listaEstadosStr = JSON.stringify(listaEstados);

    localStorage.setItem("listaEstados", listaEstadosStr);

    location.reload();
    let javascript = AbrirPagina('../html/cidade.html');
}


function AbrirPagina(link) {
    document.getElementById("form1").action = link;
    document.getElementById("form1").submit();
}