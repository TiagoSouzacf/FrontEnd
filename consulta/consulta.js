document.getElementById("consultar").onclick = pesquisar;

async function pesquisar ()  {
    var cpf = document.getElementById("inputCpf").value;
    var resposta = await fetch("https://6333633c433198e79dc444a9.mockapi.io/cadastro/" + cpf);
    var pessoa = await resposta.json();
    
    document.getElementById("inputNome").value = pessoa.nome;
    document.getElementById("inputTelefone").value = pessoa.telefone;
    document.getElementById("inputEmail").value = pessoa.email;
    document.getElementById("inputStatus").value = pessoa.status;

}

