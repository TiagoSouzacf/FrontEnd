var cpf = document.getElementById("inputCpf").value;

document.getElementById("consultar").onclick = pesquisar;

async function pesquisar ()  {
    var resposta = await fetch("https://6333633c433198e79dc444a9.mockapi.io/cadastro/" + cpf);
    var pessoa = await resposta.json();
    document.getElementById("inputNome").value = pessoa.nome;
    console.log(pessoa.nome);
    evento.preventDefault()
}

// document.getElementById("consultar").addEventListener('focusout', pesquisar);
