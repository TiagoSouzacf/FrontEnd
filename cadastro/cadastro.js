'use strict';

const limparFormulario = (endereco) =>{
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}


const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
     
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);



document.getElementById("cadastrar").onclick = cadastrar;


async function cadastrar ()  {

    var main = document.getElementById("load");

       main.innerHTML += `
        <div class="load">
            <div class="clearfix">
            <div class="spinner-border float-end" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>
        </div>
        `;

    var nome = document.getElementById("inputNome").value;
    var cpf = document.getElementById("inputCpf").value;
    var email = document.getElementById("inputEmail").value;
    var telefone = document.getElementById("inputTelefone").value;
    var cep = document.getElementById("cep").value;
    var endereco = document.getElementById("endereco").value;
    var numero = document.getElementById("numero").value;
    var bairro = document.getElementById("bairro").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;


let data =  {
    "nome": nome,
    "cpf": "123456",
    "email": email,
    "telefone": telefone,
    "cep": cep,
    "endereco": endereco,
    "numeroendereco": numero,
    "bairro": bairro,
    "cidade": cidade,
    "uf": estado,
    "status": "Em análise",
   };

   fetch("https://6333633c433198e79dc444a9.mockapi.io/cadastro", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
   })
     .then((response) => response.json())
     .then((data) => {
       console.log("Success:", data);
       main.remove(); 
       alert("Cadastro realizado com sucesso :)");
     })
     .catch((error) => {
        alert("Erro ao cadastrar usuário :(");
     });

    }
    