/*funçoes para tela de estado
function carregarPais(){
	const pais = "Brasil";
	document.getElementById("nome_pais").value = pais;
}

//construtor para Estado
function Estado(nome, pais){
	this.nome = nome;
	this.pais = pais;
}

function salvarEstado(){
	let input = document.getElementById("nome_estado");
	let nome = input.value;
	
	input = document.getElementById("nome_pais");
	let pais = input.value;
	
	let estado = new Estado(nome, pais);
	
	let listaEstadosStr = localStorage.getItem("listaEstados");
	let listaEstados = [];
	if(listaEstadosStr != null){
		listaEstados= JSON.parse(listaEstadosStr);
	}
	let encontrei = false;
	for(let i=0; i<listaEstados.length;i++){
		if(listaEstados[i].nome == estado.nome){
			encontrei = true;
		}
	}if(!encontrei){
	listaEstados.push(estado);
	}
	listaEstadosStr = JSON.stringify(listaEstados);
	
    localStorage.setItem("listaEstados", listaEstadosStr);
    let javascript = AbrirPagina('../html/cidade.html');
}

funções para tela de cidades

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


function AbrirPagina(link){
	document.getElementById("form1").action = link;
	document.getElementById("form1").submit();
}

function Cliente(nome, cpf, nascimento, nome_mae, rua, numero, bairro, tel, cel, email, estado, cidade, cep, complemento){
	this.nome = nome;
    this.cpf = cpf;
    this.nascimento = nascimento;
    this.nome_mae = nome_mae;
	this.rua = rua;
	this.numero = numero;
	this.bairro = bairro;
	this.tel = tel;
	this.cel = cel;
	this.email = email;
	this.estado = estado;
	this.cidade = cidade;
	this.cep = cep;
	this.complemento = complemento;
}

function salvarCliente() {
	let input = document.getElementById("nome_cliente");
	let nome = input.value;
	input = document.getElementById("cpf");
    let cpf = input.value;
    input = document.getElementById("nascimento");
    let nascimento = input.value;
    input = document.getElementById("nome_mae");
    let nome_mae = input.value;
	input = document.getElementById("rua");
	let rua = input.value;
	input = document.getElementById("numero");
	let numero = input.value;
	input = document.getElementById("bairro");
	let bairro = input.value;
	input = document.getElementById("tel");
	let tel = input.value;
	input = document.getElementById("cel");
	let cel = input.value;
	input = document.getElementById("email");
	let email = input.value;
	input = document.getElementById("comboEstado");
	let estado = input.value;
	input = document.getElementById("comboCidade");
	let cidade = input.value;
	input = document.getElementById("cep");
    let cep = input.value;
    input = document.getElementById("complemento");
    let complemento = input.value;
	

    let cliente = new Cliente(nome, cpf, nascimento, nome_mae, rua, numero, bairro, tel, cel, email, estado, cidade, cep, complemento);
	
	let listaClienteStr = localStorage.getItem("listaCliente");
	let listaCliente = [];
	if(listaClienteStr != null){
		listaCliente = JSON.parse(listaClienteStr);
	}
	listaCliente.push(cliente);
	
	listaClienteStr = JSON.stringify(listaCliente);
	
    localStorage.setItem("listaCliente", listaClienteStr);
    //Abrir página para Novo Cadastro
    //let javascript = AbrirPagina('../index.html');
}




//função para carregar lista de clientes e atributos da lista
function carregarCliente(){
	let cidadeStr = localStorage.getItem("cidade");
	let cidade = JSON.parse(cidadeStr);
	let input = document.getElementById("comboCidade");
	input.value = cidade.nome;
	input = document.getElementById("comboEstado");
	input.value = cidade.estado;
	input = document.getElementById("pais");
	input = carregarPais();
	
	let listaClienteStr = localStorage.getItem("listaCliente");
	    listaCliente = [];
		if (listaCliente != null){
			listaCliente = JSON.parse(listaClienteStr);
		}
	let comboCliente = document.getElementById("comboCliente");
	let option;
	for(let index = 0; index < listaCliente.length; index++){
		option = document.createElement('option');
		option.text = listaCliente[index].nome;
		option.value = listaCliente[index].nome;
        comboCliente.add(option);
		}
}
function checkform () {
	var f = document.getElementById('form1').elements;
	var cansubmit = true;
	for ( var i = 0; i < f.length; i++ ) {
		if (f[i].value !== "") {
			cansubmit;
		} else {
			cansubmit = false;
		}

		var chkButton = document.getElementById('button_name').disabled = !cansubmit;
	}

}
function colorForm () {
    var getForm = [];
    getForm = document.getElementById('form1').elements;
    for (var k = 0;k<getForm.length;k++){
        if(getForm[k].value !==""){
            var inputForm = document.getElementById(getForm[k].id).style.borderColor = "blue";
        }if(getForm[k].value ===""){
            inputForm = document.getElementById(getForm[k].id).style.borderColor = "red";
        }
    }


}

function vCliente (){

    this.clientesCadastrados = JSON.parse(localStorage.getItem('listaCliente'));
    var encontrado = false;

    for (var i=0; i < clientesCadastrados.length; i++){
        var cliente = clientesCadastrados[i];
        var cpfCliente = cliente.cpf
        var busca = document.getElementById('cpf').value;
        if (cpfCliente.search(busca) != -1){
            encontrado = true;

            alert('CPF: '+busca+' já está no cadastro');

            busca.value = document.getElementById('cpf').value = "";
			break


        }


    }

}function buscaCep(){
	$("#cep").focusout(function(){
	    //Início do Comando AJAX
	    $.ajax({
	        //O campo URL diz o caminho de onde virá os dados
	        //É importante concatenar o valor digitado no CEP
	        url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
	        //Aqui você deve preencher o tipo de dados que será lido,
	        //no caso, estamos lendo JSON.
	        dataType: 'json',
	        //SUCESS é referente a função que será executada caso
	        //ele consiga ler a fonte de dados com sucesso.
	        //O parâmetro dentro da função se refere ao nome da variável
	        //que você vai dar para ler esse objeto.
	        success: function(resposta){
	            //Agora basta definir os valores que você deseja preencher
	            //automaticamente nos campos acima.
	            $("#rua").val(resposta.logradouro);
	            $("#complemento").val(resposta.complemento);
	            $("#bairro").val(resposta.bairro);
	            //Vamos incluir para que o Número seja focado automaticamente
	            //melhorando a experiência do usuário
	            $("#numero").focus();
	        }
	    });
	});
	}


	var pCliente;
	pCliente = function () {
	    buscaCep();
	    checkform();
		//colorForm ();
        //carregarCliente();
        carregarEstados();
		salvarCliente();


	};

	
function AbrirPaginaIndex(link) {
    document.getElementById('../../WebContent/index.html').action = link;
    document.getElementById('../../WebContent/index.html').submit();
}


function comboCidade(){
	let input = document.getElementById("cidade");
	let cidade = input.options[input.selectedIndex].value;
	let option;
	option.value = listaCidade[index].nome;
	
}
function comboCliente() {
    let input = document.getElementById("nome_cliente");
    let cliente = input.options[input.selectedIndex].value;
    let option;
    option.value = listaCliente[index].nome;
}
function validar() {
	let nome = document.getElementById('nome');
	if (!nome.value.trim()) {
		nome.classList.add('erro-validacao');
	} else {
		nome.classList.remove('erro-validacao');
		alert('Problemas em Validar!');
	}
}


//mascaras min javascript
function mascaras(){
	for(var o=document.getElementsByTagName("input"),e=0;e<o.length;e++)"text"==o[e].type&&(o[e].style.backgroundColor="",o[e].style.borderColor="")
}
function coresMask(o){
	var e=o.value,r=e.length,
	t=o.maxLength;0==r?(o.style.borderColor="",o.style.backgroundColor=""):r<t?(o.style.borderColor=corIncompleta,o.style.backgroundColor=corIncompleta):(o.style.borderColor=corCompleta,o.style.backgroundColor=corCompleta)}
		function mascara(o,e,r,t){
			var l=e.selectionStart,a=e.value;a=a.replace(/\D/g,"");
			var s=a.length,c=o.length;window.event?id=r.keyCode:r.which&&(id=r.which),cursorfixo=!1,l<s&&(cursorfixo=!0);
			var n=!1;
				if((16==id||19==id||id>=33&&id<=40)&&(n=!0),ii=0,mm=0,!n){
					if(8!=id)for(e.value="",j=0,i=0;i<c&&("#"==o.substr(i,1)?(e.value+=a.substr(j,1),j++):"#"!=o.substr(i,1)&&(e.value+=o.substr(i,1)),8==id||cursorfixo||l++,j!=s+1);i++);
					t&&coresMask(e)}cursorfixo&&!n&&l--,e.setSelectionRange(l,l)
		}
		var corCompleta="#99ff8f",corIncompleta="#eff70b";

	
function mascararTel(){
    tel=tel.replace(/\D/g,"");            
    tel=tel.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    tel=tel.replace(/(\d)(\d{4})$/,"$1-$2");   
    return tel;
    }
var corCompleta = "#99ff8f"
	var corIncompleta = "#eff70b"

	function ResetCampos(){
	    var textFields = document.getElementsByTagName("input");
	        for(var i=0; i < textFields.length; i++){
	        if(textFields[i].type == "text"){
	            textFields[i].style.backgroundColor = "";
	            textFields[i].style.borderColor = "";
	        }
	    }   
	}

	function coresMask(t){
		var l = t.value;
		var m = l.length;
		var x = t.maxLength;
		if(m==0){
			t.style.borderColor="";
			t.style.backgroundColor="";
		}
		else if(m<x){
			t.style.borderColor=corIncompleta;
			t.style.backgroundColor=corIncompleta;
		}else{
			t.style.borderColor=corCompleta;
			t.style.backgroundColor=corCompleta;
		}
	}

	function mascara(m,t,e,c){
		var cursor = t.selectionStart;
		var texto = t.value;
		texto = texto.replace(/\D/g,'');
		var l = texto.length;
		var lm = m.length;
		if(window.event) {                  
		    id = e.keyCode;
		} else if(e.which){                 
		    id = e.which;
		}
		cursorfixo=false;
		if(cursor < l)cursorfixo=true;
		var livre = false;
		if(id == 16 || id == 19 || (id >= 33 && id <= 40))livre = true;
	 	ii=0;
	 	mm=0;
	 	if(!livre){
		 	if(id!=8){
			 	t.value="";
			 	j=0;
			 	for(i=0;i<lm;i++){
			 		if(m.substr(i,1)=="#"){
			 			t.value+=texto.substr(j,1);
			 			j++;
			 		}else if(m.substr(i,1)!="#"){
			 			t.value+=m.substr(i,1);
			 		}
			 		if(id!=8 && !cursorfixo)cursor++;
			 		if((j)==l+1)break;
			 		
			 	} 	
		 	}
		 	if(c)coresMask(t);
	 	}
	 	if(cursorfixo && !livre)cursor--;
	 	t.setSelectionRange(cursor, cursor);
}

function gerarRelatorio2() {
    let clientes = JSON.parse(localStorage.getItem('listaCliente'));
    console.log(clientes);
    let table = document.getElementById('table-relatorio');
    let listaColunas = ['nome','cpf','nascimento', 'nome_mae', 'estado', 'cidade', 'email'];
	for (let i=0; i < clientes.length; i++){
		let row = table.insertRow(i+1);
		
		for(let j=0; j<listaColunas.length; j++){
			let cell = row.insertCell(j);
			let nomeColuna = listaColunas[j];
			cell.innerHTML = clientes[i][nomeColuna];
		
		}
		
	}
    	
}

//crudClientes é um objeto que representa toda a aplicação de CRUD
var storage = new function() {

	this.getItems = function(listaCliente, cpf) {
		var itemStorage = JSON.parse(localStorage.getItem('listaCliente'));
		var items = [];

		for(var i = 0; i < listaCliente.length; i++) {
			items.push(listaCliente[i][cpf]);
		}

		return listaCliente;
	}

	this.getCidades = function() {		
		return this.getItems('Cidades', 'nome');
	};

	this.getEstados = function() {
		return this.getItems('Estados', 'nome');		
	};

}

// crudClientes é um objeto que representa toda a aplicação de CRUD
var crudClientes = new function() {	

	// Exemplo de JSON com objetos. 		
	this.tabelaClientes = JSON.parse(localStorage.getItem('listaCliente'));

	// Array de colunas da tabela
	this.col = [];

	// Função de criação da tabela dinâmica do CRUD
	this.criarTabela = function() {

		// Extrair a chave do atributo do objeto JSON Para ser o cabeçalho da
		// tabela. Pode ser com valores fixos.
		for (var i = 0; i < this.tabelaClientes.length; i++) {
			// Exemplo de for-in
			for ( var key in this.tabelaClientes[i]) {
				if (this.col.indexOf(key) === -1) {
					this.col.push(key);
				}
			}
		}

		// Criando a tabela.
		var table = document.createElement('table');
		table.setAttribute('id', 'tabelaClientes'); 

		// CÓDIGO DO CABEÇALHO

		var tr = table.insertRow(-1); // criando a linha do cabeçalho.

		for (var h = 0; h < this.col.length; h++) {
			// Adicionando o cabeçalho
			var th = document.createElement('th');
			var colName = this.col[h];
			// replace = substituir isso por aquilo
			th.innerHTML = colName.replace('_', ' ');
			tr.appendChild(th);
		}

		// Adicionando as células de cabeçalho dos botões de ação
		th = document.createElement('th');
		// merge de celulas
		th.setAttribute('colspan', 2);
		th.innerHTML = 'Ações';
		// Adicionando a célula th na linha do cabeçalho
		tr.appendChild(th);

		// FIM DO CÓDIGO DO CABEÇALHO

		// Adicionando as linhas usando o aray de tabelaClientes em JSON.
		for (var i = 0; i < this.tabelaClientes.length; i++) {

			tr = table.insertRow(-1); // Criando uma nova linha no final (-1).

			for (var j = 0; j < this.col.length; j++) {
				var tabCell = tr.insertCell(-1);
				var keyName = this.col[j];
				tabCell.setAttribute('data-key', keyName);
				tabCell.innerHTML = this.tabelaClientes[i][keyName];
			}

			// Criando e adicionando dinamicamente os elementos às células da
			// tabela com eventos

			this.td = document.createElement('td');

			// *** Opção Cancelar.
			tr.appendChild(this.td);
			
			var lblCancelar = document.createElement('label');
			lblCancelar.innerHTML = '✖';
			lblCancelar.setAttribute('onclick', 'crudClientes.cancelar(this)'); // Evento
																				// onlcick
			lblCancelar.setAttribute('style', 'display:none;');
			lblCancelar.setAttribute('title', 'Cancelar');
			lblCancelar.setAttribute('id', 'lbl' + i);
			
			
			this.td.appendChild(lblCancelar);

			// *** Opção Salvar
			tr.appendChild(this.td);
			var btnSalvar = document.createElement('input');

			btnSalvar.setAttribute('type', 'button');
			btnSalvar.setAttribute('value', 'Salvar');
			// Definindo ID do botão oculto
			btnSalvar.setAttribute('id', 'Salvar' + i);
			btnSalvar.setAttribute('style', 'display:none;');
			btnSalvar.setAttribute('onclick', 'crudClientes.salvar(this)'); // Evento
																			// onclick
			this.td.appendChild(btnSalvar);

			// *** Opção Editar.
			tr.appendChild(this.td);
			var btnEditar = document.createElement('input');

			btnEditar.setAttribute('type', 'button');
			btnEditar.setAttribute('value', 'Editar');
			btnEditar.setAttribute('id', 'Editar' + i);
			btnEditar.setAttribute('style', 'background-color:#44CCEB;');
			btnEditar.setAttribute('onclick', 'crudClientes.editar(this)'); // Evento
																			// onclick.
			this.td.appendChild(btnEditar);

			// *** Opção Excluir.
			this.td = document.createElement('td');
			tr.appendChild(this.td);
			var btnExcluir = document.createElement('input');
			btnExcluir.setAttribute('type', 'button');
			btnExcluir.setAttribute('value', 'Excluir'); 
			btnExcluir.setAttribute('style', 'background-color:#ED5650;');
			btnExcluir.setAttribute('onclick', 'crudClientes.excluir(this)'); // Evento
																				// onclick
			this.td.appendChild(btnExcluir);
		}

		var div = document.getElementById('container');
		div.innerHTML = '';
		div.appendChild(table); // adicionando a tabela à página.
	};

	// ****** Início das funções do CRUD.

	// Função Cancelar
	this.cancelar = function(btnAcao) {

		// Ocultar o botão
		btnAcao.setAttribute('style', 'display:none; float:none;');

		var linhaAtiva = btnAcao.parentNode.parentNode.rowIndex;

		// Ocultar o botão Salvar
		var btnSalvar = document.getElementById('Salvar' + (linhaAtiva - 1));
		btnSalvar.setAttribute('style', 'display:none;', 'color:blue;');

		// Mostrar botão Editar novamente
		var btnEditar = document.getElementById('Editar' + (linhaAtiva - 1));
		btnEditar.setAttribute('style',
				'display:block; margin:0 auto; background-color:#44CCEB;');

		var tab = document.getElementById('tabelaClientes').rows[linhaAtiva];

		for (i = 0; i < this.col.length; i++) {
			var td = tab.getElementsByTagName("td")[i];
			td.innerHTML = this.tabelaClientes[(linhaAtiva - 1)][this.col[i]];
		}
	};

	this.getOptions = function(key) {
		var options;
		if(key == 'cidade') {
			options = storage.getCidades();
		}
		if(key == 'estado') {
			options = storage.getEstados();
		}
		
		return options;
	};

	// Função Editar.
	this.editar = function(btnAcao) {
		var linhaAtiva = btnAcao.parentNode.parentNode.rowIndex;
		var tab = document.getElementById('tabelaClientes').rows[linhaAtiva];
		var cells = tab.cells;		

		// Mostrar select com cidades e estados		
		for (var i = 0; i < cells.length-2; i++) {
			var key = cells[i].getAttribute('data-key');
			if (key == 'cidade' || key == 'estado') {
				var td = tab.getElementsByTagName("td")[i];
				var ele = document.createElement('select'); // incluir select.
				ele.innerHTML = '<option value="' + td.innerText + '">'
						+ td.innerText + '</option>';
				var options = this.getOptions(key);
				for (k = 0; k < options.length; k++) {
					ele.innerHTML = ele.innerHTML + '<option value="'
							+ options[k] + '">' + options[k]
							+ '</option>';
				}
				td.innerText = '';
				td.appendChild(ele);
			} else {
				var td = tab.getElementsByTagName("td")[i];
				var ele = document.createElement('input');
				ele.setAttribute('type', 'text');
				ele.setAttribute('value', td.innerText);
				td.innerText = '';
				td.appendChild(ele);
			}
		}

		var lblCancelar = document.getElementById('lbl' + (linhaAtiva - 1));
		lblCancelar
				.setAttribute('style','cursor:pointer; display:block; width:20px; float:left; position: absolute;');

		var btnSalvar = document.getElementById('Salvar' + (linhaAtiva - 1));
		btnSalvar
				.setAttribute('style',
						'display:block; margin-left:30px; float:left; background-color:#2DBF64;');

		// Ocultar botão oculto
		btnAcao.setAttribute('style', 'display:none;');
	};

	// Função Excluir
	this.excluir = function(btnAcao) {
		var r = confirm('Tem certeza que deseja excluir esse cliente?');

		if(r == true) {
			var linhaAtiva = btnAcao.parentNode.parentNode.rowIndex;
			// Exclui a linha atual 
			// Exclui do indice linhaAtiva desconsiderando o cabeçalho (-1), um item por vez
			this.tabelaClientes.splice((linhaAtiva-1), 1);
			
			// Altera o local storage com a nova lista
			localStorage.setItem('listaCliente', JSON.stringify(this.tabelaClientes));			
			this.criarTabela(); // Recria a tabela			
		}
	
	};

	// Função Salvar
	this.salvar = function(btnAcao) {
		var linhaAtiva = btnAcao.parentNode.parentNode.rowIndex;
		var tab = document.getElementById('tabelaClientes').rows[linhaAtiva];
		var cells = tab.cells;

		// Atualizar o array tabelaClientes
		for (i = 0; i < cells.length - 2; i++) {
			var td = cells[i];
			var key = cells[i].getAttribute('data-key');
			if (td.childNodes[0].getAttribute('type') == 'text'
					|| td.childNodes[0].tagName == 'SELECT') { // verifica se o
																// elemento é um
																// select ou um
																// input
				this.tabelaClientes[(linhaAtiva - 1)][key] = td.childNodes[0].value;// Salva o valor
			}
		}
		// Altera o local storage com a nova lista
		localStorage.setItem('Cliente', JSON.stringify(this.tabelaClientes));	
		this.criarTabela(); // Recria a tabela
	};

	// ****** Fim das funções do CRUD

	

	
}

crudClientes.criarTabela();



function pesquisa(){

let clientesCadastrados = JSON.parse(localStorage.getItem('listaCliente'));
let pesquisa = document.getElementById("buscar").value;

let encontrado = false;

for (let i=0; i < clientesCadastrados.length; i++){
	let cliente = clientesCadastrados[i];
	let nomeCliente = cliente.nome.toLowerCase();
	let busca = pesquisa.toLowerCase();
	if (nomeCliente.search(busca) != -1){
		console.log(nomeCliente + ' no indice ' + i);
		encontrado = true;
		console.log(cliente.nome + ' ' + cliente.cpf);
		document.write('Nome: '+ '  ' + cliente.nome + '  '+'CPF: ' + cliente.cpf);
		alert('OK,  '+cliente.nome+'  já existe! Cliente Cadastrado!')
	}
	
	
}
if(!encontrado){
alert('Cliente Não localizado!');
}
}*/