function displaynum(n1){
  calculadora.display.value = calculadora.display.value + n1;

}

const salvar = (a) =>{
  const anotacao = a;
  const anotacao_salva = localStorage.getItem('anotacao');
  if(anotacao_salva == null){
    localStorage.setItem('anotacao',anotacao);
  }
  else{
    localStorage.setItem('anotacao',anotacao_salva + ' ./new ' + anotacao);
  }
  lista_salva();
}

const lista_salva = () =>{
  const anotacoes_salvas = localStorage.getItem('anotacao');
  const lista = document.getElementById('lista_anotacoes_salvas');
  const listas_separadas = anotacoes_salvas.split(' ./new ');
  lista.innerHTML = '';
  for (let value of listas_separadas){
    const li = document.createElement('li');
    // li.innerText = value;
    li.appendChild(document.createTextNode(value));
    lista.appendChild(li);
  }
  // lista.innerHTML = anotacoes_salvas;
}