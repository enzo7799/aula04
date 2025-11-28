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

  let cepUsuario = {
    logradouro: resposta.logradouro,
    bairro: resposta.bairro,
    localidade: resposta.localidade,
    estado: resposta.estado,
    regiao: resposta.regiao,

  };

  enderecoUsuario.rua.innerText = cepUsuario.logradouro;
  enderecoUsuario.bairro.innerText = cepUsuario.bairro;
  enderecoUsuario.localidade.innerText = cepUsuario.localidade;
  enderecoUsuario.estado.innerText = cepUsuario.estado;
  enderecoUsuario.regiao.innerText = cepUsuario.regiao;
  console, log(cepUsuario);

  // //   return  resposta
}

consultaCEP(enderecoUsuario.cep);

const objetoTeste = {
  nome: "",
};
console.log(typeof objetoTeste);
