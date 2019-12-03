function pesquisa() {

    let clientesCadastrados = JSON.parse(localStorage.getItem('listaCliente'));
    let pesquisa = document.getElementById("buscar").value;

    let encontrado = false;

    for (let i = 0; i < clientesCadastrados.length; i++) {
        let cliente = clientesCadastrados[i];
        let nomeCliente = cliente.nome.toLowerCase();
        let busca = pesquisa.toLowerCase();
        if (nomeCliente.search(busca) != -1) {
            console.log(nomeCliente + ' no indice ' + i);
            encontrado = true;

            alert("Cliente: " + nomeCliente + "  " + "CPF: " + cliente.cpf + "  " + "E-mail: " + cliente.email);

            //let javascript = AbrirPagina(.. / html / relatorio.html);

        }
        //	function AbrirPagina(link){
        //		document.getElementById("container").action = link;
        //		document.getElementById("container").submit();
        //	}


    }
    if (!encontrado) {
        alert('Cliente Não localizado!');
        document.getElementById("cadastrar").style.visibility = "visible";
    } else {
        document.getElementById("cadastrar").style.visibility = "hidden";
    }
}