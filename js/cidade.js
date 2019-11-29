function carregarEstados(){
	let listaEstadosStr = localStorage.getItem("listaEstados");
	let listaEstados = [];
		if (listaEstadosStr != null){
			listaEstados = JSON.parse(listaEstadosStr);
	}
	let comboEstado = document.getElementById("comboEstado");
	let option;
	for(let index = 0; index < listaEstados.length; index++){
		option = document.createElement("option");
		option.text = listaEstados[index].nome;
		option.value = listaEstados[index].nome;
		comboEstado.add(option);
	}
}
function salvarCidade() {
    let input = document.getElementById("nome_cidade");
    let nome = input.value;

    let cidade = new Cidade(nome);

    let listaCidadesStr = localStorage.getItem("listaCidades");
    let listaCidades = [];
    if (listaCidadesStr != null) {
        listaCidades = JSON.parse(listaCidadesStr);
    }
    let encontrei = false;
    for (let i = 0; i < listaCidades.length; i++) {
        if (listaCidades[i].nome == cidade.nome) {
            encontrei = true;
            alert('Cidade ja existe!');
            break;
        }
    } if (!encontrei) {
        
        listaCidades.push(cidade);
    }
    listaCidadesStr = JSON.stringify(listaCidades);

    localStorage.setItem("listaCidades", listaCidadesStr);
    let javascript = AbrirPagina('../html/dadosCliente.html');
}

//carregar AbrirPagina
function AbrirPagina(link){
	document.getElementById("form1").action = link;
	document.getElementById("form1").submit();
}

function Cidade(nome, estado){
	this.nome = nome;
	this.estado = estado;
}

function carregarCidade() {
    let listaCidadesStr = localStorage.getItem("listaCidades");
    let listaCidades = [];
    if (listaCidadesStr != null) {
        listaEstados = JSON.parse(listaCidadesStr);
    }
    let comboCidade = document.getElementById("comboCidade");
    let option;
    for (let index = 0; index < listaCidades.length; index++) {
        option = document.createElement("option");
        option.text = listaCidades[index].nome;
        option.value = listaCidades[index].nome;
        comboCidade.add(option);
    }
}

function comboCidade(){
	let input = document.getElementById("cidade");
	let cidade = input.options[input.selectedIndex].value;
	let option;
	option.value = listaCidade[index].nome;
	
}