const enderecoUsuario = {
  rua: document.querySelector("#rua"),
  bairro: document.querySelector("#bairro"),
  localidade: document.querySelector("#localidade"),
  estado: document.querySelector("#estado"),
  regiao: document.querySelector("#regiao"),
  cep: "06333380",
};

async function consultaCEP(cep) {
  const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resposta = await url.json();

  const dadosCep = {
    rua: resposta.rua,
    bairro: resposta.bairro,
    localidade: resposta.localidade,
    estado: resposta.estado,
    regiao: resposta.regiao,

  }

 inserirEndereco(dadosCep)
  

  // //   return  resposta
}

consultaCEP(enderecoUsuario.cep)

  function inserirEndereco(dadosCep) {
    enderecoUsuario.rua.innerText = dadosCep.rua;
    enderecoUsuario.bairro.innerText = dadosCep.bairro;
    enderecoUsuario.localidade.innerText = dadosCep.localidade;
    enderecoUsuario.estado.innerText = dadosCep.estado;
    enderecoUsuario.regiao.innerText = dadosCep.regiao;
    
}

