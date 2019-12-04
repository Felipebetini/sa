function pesquisa() {

    let clientesCadastrados = JSON.parse(localStorage.getItem('listaCliente'));
    let pesquisa = document.getElementById("buscar").value;

    let encontrado = false;

    for (let i = 0; i < clientesCadastrados.length; i++) {
        let cliente = clientesCadastrados[i];
        let nomeCliente = cliente.nome.toLowerCase();
        let busca = pesquisa.toLowerCase();
        if (nomeCliente.search(busca) != -1) {

            encontrado = true;

            let table = document.getElementById('tabelaCliente');

            let row = table.insertRow(i + 1);

            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);

            cell1.innerHTML = nomeCliente;
            cell2.innerHTML = cliente.cpf
            cell3.innerHTML = cliente.email;




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
}