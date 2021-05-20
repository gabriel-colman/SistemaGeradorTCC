function gerarJSON(){

  var nomeGrupo = document.querySelector('#nomeGrupo').value;
  var textoBemVindo = document.querySelector('#textoBemVindo').value;
  var missao = document.querySelector('#missao').value;
  var interessesDePesquisa = document.querySelector('#interessesDePesquisa').value;
  var image = document.querySelector('#imgpos').value;

  var myObj = { "Nome do Grupo":nomeGrupo, "Testo de Bem Vindo":textoBemVindo, "Missao":missao, "Interesse de Pesquisa":interessesDePesquisa, "Imagem":image};

  var myJSON = JSON.stringify(myObj);

  console.log(myJSON);   

  desabilitaBtn = false;
  let btnJson = document.querySelector("#exibir");
  btnJson.disabled = desabilitaBtn;

  alert('JSON gerado e exibido no console.log. Pronto para exibir na tela.')

  
};



function exibirJSON(){


  var nomeGrupo = document.querySelector('#nomeGrupo').value;
  var textoBemVindo = document.querySelector('#textoBemVindo').value;
  var missao = document.querySelector('#missao').value;
  var interessesDePesquisa = document.querySelector('#interessesDePesquisa').value;
  var image = document.querySelector('#imgpos').value;

  var myObj = { "Nome do Grupo":nomeGrupo, "Testo de Bem Vindo":textoBemVindo, "Missao":missao, "Interesse de Pesquisa":interessesDePesquisa, "Imagem":image};
    
  var myJSON2 = JSON.stringify(myObj);

  console.log(typeof(myJSON2));
  console.log(myJSON2);

  document.getElementById("demo2").innerHTML = "O JSON criado foi :" + myJSON2;

  

}


