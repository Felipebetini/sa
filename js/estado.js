// JavaScript source code
//construtor para Estado
function Estado(nome, pais) {
    this.nome = nome;
    this.pais = pais;
}

function carregarPais() {
    const pais = "Brasil";
    document.getElementById("nome_pais").value = pais;
}

function AbrirPagina(link) {
    document.getElementById("form1").action = link;
    document.getElementById("form1").submit();
}
function comboEstado() {
    let input = document.getElementById("estado");
    let estado = input.options[input.selectedIndex].value;
    let option;
    option.value = listaEstado[index].nome;

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
    let encontrei = false;
    for (let i = 0; i < listaEstados.length; i++) {
        if (listaEstados[i].nome == estado.nome) {
            encontrei = true;
        }
    } if (!encontrei) {
        listaEstados.push(estado);
    }
    listaEstadosStr = JSON.stringify(listaEstados);

    localStorage.setItem("listaEstados", listaEstadosStr);
    let javascript = AbrirPagina('../html/cidade.html');
}
function carregarEstados() {
    let listaEstadosStr = localStorage.getItem("listaEstados");
    let listaEstados = [];
    if (listaEstadosStr != null) {
        listaEstados = JSON.parse(listaEstadosStr);
    }
    let comboEstado = document.getElementById("comboEstado");
    let option;
    for (let index = 0; index < listaEstados.length; index++) {
        option = document.createElement("option");
        option.text = listaEstados[index].nome;
        option.value = listaEstados[index].nome;
        comboEstado.add(option);
    }
}