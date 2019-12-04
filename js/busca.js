function pesquisa() {

    let clientesCadastrados = JSON.parse(localStorage.getItem('listaCliente'));
    let pesquisa = document.getElementById("buscar").value;
    /*let apagaTabela = document.getElementById("tabelaCliente").rows.length;
    for (let j = 1; j < apagaTabela; j++) {
        document.getElementById("tabelaCliente").deleteRow(j);
    }*/
    let encontrado = false;


    for (let i = 0; i < clientesCadastrados.length; i++) {
        let cliente = clientesCadastrados[i];
        let nomeCliente = cliente.nome.toLowerCase();
        let busca = pesquisa.toLowerCase();
        if (nomeCliente.search(busca) != -1) {

            encontrado = true;

            let table = document.getElementById('tabelaCliente');

            let row = table.insertRow(1);

            let nomeTabela = row.insertCell(0);
            let cpfTabela = row.insertCell(1);
            let emailTabela = row.insertCell(2);

            nomeTabela.innerHTML = nomeCliente;
            cpfTabela.innerHTML = cliente.cpf
            emailTabela.innerHTML = cliente.email;


        }

    }

    if (!encontrado) {
        alert('Cliente Não localizado!');
        document.getElementById("cadastrar").style.visibility = "visible";
        document.getElementById('divCliente').style.display = "none";
    } else {
        document.getElementById("cadastrar").style.visibility = "hidden";
        document.getElementById('divCliente').style.display = 'block';
    }

}