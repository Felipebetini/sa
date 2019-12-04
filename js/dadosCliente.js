// JavaScript source code
function Cliente(nome, cpf, nascimento, nome_mae, rua, numero, bairro, tel, cel, email, estado, cidade, cep, complemento) {
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
function comboCliente() {
    let input = document.getElementById("nome_cliente");
    let cliente = input.options[input.selectedIndex].value;
    let option;
    option.value = listaCliente[index].nome;
}

function AbrirPagina(link) {
    document.getElementById("form1").action = link;
    document.getElementById("form1").submit();
}

function salvarCliente() {
    let input = document.getElementById("nome_cliente");
    let nome = input.value.trim();
    input = document.getElementById("cpf");
    let cpf = input.value.trim();
    input = document.getElementById("nascimento");
    let nascimento = input.value.trim();
    input = document.getElementById("nome_mae");
    let nome_mae = input.value.trim();
    input = document.getElementById("rua");
    let rua = input.value.trim();
    input = document.getElementById("numero");
    let numero = input.value.trim();
    input = document.getElementById("bairro");
    let bairro = input.value.trim();
    input = document.getElementById("tel");
    let tel = input.value.trim;
    input = document.getElementById("cel");
    let cel = input.value.trim();
    input = document.getElementById("email");
    let email = input.value.trim();
    input = document.getElementById("comboEstado");
    let estado = input.value.trim();
    input = document.getElementById("comboCidade");
    let cidade = input.value.trim();
    input = document.getElementById("cep");
    let cep = input.value.trim();
    input = document.getElementById("complemento");
    let complemento = input.value.trim();


    let cliente = new Cliente(nome, cpf, nascimento, nome_mae, rua, numero, bairro, tel, cel, email, estado, cidade, cep, complemento);

    let listaClienteStr = localStorage.getItem("listaCliente");
    let listaCliente = [];
    if (listaClienteStr != null) {
        listaCliente = JSON.parse(listaClienteStr);
    }
    listaCliente.push(cliente);

    listaClienteStr = JSON.stringify(listaCliente);

    localStorage.setItem("listaCliente", listaClienteStr);
    //Abrir página para Novo Cadastro
    let javascript = AbrirPagina('../html/dadosCliente.html');
    alert("Cliente Salvo!");
}


//função para carregar lista de clientes e atributos da lista
function carregarCliente() {
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
    if (listaCliente != null) {
        listaCliente = JSON.parse(listaClienteStr);
    }
    let comboCliente = document.getElementById("comboCliente");
    let option;
    for (let index = 0; index < listaCliente.length; index++) {
        option = document.createElement('option');
        option.text = listaCliente[index].nome;
        option.value = listaCliente[index].nome;
        comboCliente.add(option);
    }
}

//checagem dos dados para permissão de gravação
function checkform() {
    var f = document.getElementById('form1').elements;
    var cansubmit = true;
    for (var i = 0; i < f.length; i++) {
        if (f[i].value !== "") {
            cansubmit;
        } else {
            cansubmit = false;
        }

        var chkButton = document.getElementById('button_name').disabled = !cansubmit;
    }

}
//inform ao usuário sobre os dados digitados
function colorForm() {
    var getForm = [];
    getForm = document.getElementById('form1').elements;
    for (var k = 0; k < getForm.length; k++) {
        if (getForm[k].value !== "") {
            var inputForm = document.getElementById(getForm[k].id).style.borderColor = "blue";
        } if (getForm[k].value === "") {
            inputForm = document.getElementById(getForm[k].id).style.borderColor = "red";
        }
    }


}

function vCliente() {

    this.clientesCadastrados = JSON.parse(localStorage.getItem('listaCliente'));
    var encontrado = false;

    for (var i = 0; i < clientesCadastrados.length; i++) {
        var cliente = clientesCadastrados[i];
        var cpfCliente = cliente.cpf;
        var busca = document.getElementById('cpf').value;
        if (cpfCliente.search(busca) != -1) {
            encontrado = true;

            alert('CPF: ' + busca + ' já está no cadastro');

            busca.value = document.getElementById('cpf').value = "";
            break;


        }


    }
    //busca logradouro em sistema Jquery na web, retornando o nome do logradouro e seus componentes
} function buscaCep() {
    $("#cep").focusout(function () {
        //Início do Comando AJAX
        $.ajax({
            //O campo URL diz o caminho de onde virá os dados
            //É importante concatenar o valor digitado no CEP
            url: 'https://viacep.com.br/ws/' + $(this).val() + '/json/unicode/',
            //Aqui você deve preencher o tipo de dados que será lido,
            //no caso, estamos lendo JSON.
            dataType: 'json',
            //SUCESS é referente a função que será executada caso
            //ele consiga ler a fonte de dados com sucesso.
            //O parâmetro dentro da função se refere ao nome da variável
            //que você vai dar para ler esse objeto.
            success: function (resposta) {
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

//executa as funções selecionadas para salvamento, carregamento verificação e complementos
var pCliente;
pCliente = function () {
    buscaCep();
    checkform();
    //colorForm ();
    //carregarCliente();
    carregarEstados();
    carregarCidade();
    carregarPais();
};
function validar() {
    let nome = document.getElementById('nome');
    if (!nome.value.trim()) {
        nome.classList.add('erro-validacao');
    } else {
        nome.classList.remove('erro-validacao');
        alert('Problemas em Validar!');
    }
}
//mascaras para CPF e Telefones 
function mascaras() {
    for (var o = document.getElementsByTagName("input"), e = 0; e < o.length; e++)"text" == o[e].type && (o[e].style.backgroundColor = "", o[e].style.borderColor = "")
}
function coresMask(o) {
    var e = o.value, r = e.length,
        t = o.maxLength; 0 == r ? (o.style.borderColor = "", o.style.backgroundColor = "") : r < t ? (o.style.borderColor = corIncompleta, o.style.backgroundColor = corIncompleta) : (o.style.borderColor = corCompleta, o.style.backgroundColor = corCompleta)
}
function mascara(o, e, r, t) {
    var l = e.selectionStart, a = e.value; a = a.replace(/\D/g, "");
    var s = a.length, c = o.length; window.event ? id = r.keyCode : r.which && (id = r.which), cursorfixo = !1, l < s && (cursorfixo = !0);
    var n = !1;
    if ((16 == id || 19 == id || id >= 33 && id <= 40) && (n = !0), ii = 0, mm = 0, !n) {
        if (8 != id) for (e.value = "", j = 0, i = 0; i < c && ("#" == o.substr(i, 1) ? (e.value += a.substr(j, 1), j++) : "#" != o.substr(i, 1) && (e.value += o.substr(i, 1)), 8 == id || cursorfixo || l++ , j != s + 1); i++);
        t && coresMask(e)
    } cursorfixo && !n && l-- , e.setSelectionRange(l, l)
}
var corCompleta = "#99ff8f", corIncompleta = "#eff70b";


function mascararTel() {
    tel = tel.replace(/\D/g, "");
    tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2");
    tel = tel.replace(/(\d)(\d{4})$/, "$1-$2");
    return tel;
}
var corCompleta = "#99ff8f"
var corIncompleta = "#eff70b"

function ResetCampos() {
    var textFields = document.getElementsByTagName("input");
    for (var i = 0; i < textFields.length; i++) {
        if (textFields[i].type == "text") {
            textFields[i].style.backgroundColor = "";
            textFields[i].style.borderColor = "";
        }
    }
}

function coresMask(t) {
    var l = t.value;
    var m = l.length;
    var x = t.maxLength;
    if (m == 0) {
        t.style.borderColor = "";
        t.style.backgroundColor = "";
    }
    else if (m < x) {
        t.style.borderColor = corIncompleta;
        t.style.backgroundColor = corIncompleta;
    } else {
        t.style.borderColor = corCompleta;
        t.style.backgroundColor = corCompleta;
    }
}

function mascara(m, t, e, c) {
    var cursor = t.selectionStart;
    var texto = t.value;
    texto = texto.replace(/\D/g, '');
    var l = texto.length;
    var lm = m.length;
    if (window.event) {
        id = e.keyCode;
    } else if (e.which) {
        id = e.which;
    }
    cursorfixo = false;
    if (cursor < l) cursorfixo = true;
    var livre = false;
    if (id == 16 || id == 19 || (id >= 33 && id <= 40)) livre = true;
    ii = 0;
    mm = 0;
    if (!livre) {
        if (id != 8) {
            t.value = "";
            j = 0;
            for (i = 0; i < lm; i++) {
                if (m.substr(i, 1) == "#") {
                    t.value += texto.substr(j, 1);
                    j++;
                } else if (m.substr(i, 1) != "#") {
                    t.value += m.substr(i, 1);
                }
                if (id != 8 && !cursorfixo) cursor++;
                if ((j) == l + 1) break;

            }
        }
        if (c) coresMask(t);
    }
    if (cursorfixo && !livre) cursor--;
    t.setSelectionRange(cursor, cursor);
}
