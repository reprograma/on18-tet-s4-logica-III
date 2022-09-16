let clienteLilit = {
    pagamento: 'pix',
    carrinho: [
      {produto: 'Bolsa pequena', valor: 49.0}, 
      {produto: 'Cinto preto', valor: 62.0}, 
      {produto: 'Jaqueta Jeans', valor: 350.0}, 
      {produto: 'Calça preta', valor: 290.0}, 
      {produto: 'Blusa simples', valor: 35.0}, 
      {produto: 'Calça jeans clara', valor: 130.0}, 
      {produto: 'Blusa preta gola alta', valor: 60.0}, 
      {produto: 'Short verde canelado', valor: 80.0}, 
      {produto: 'Salto agulha 39', valor: 250.0}, 
      {produto: 'Tênis casual preto', valor: 120.0}, 
      {produto: 'meia calça transparente', valor: 80.0}
    ]
  }

  let valorTotal = []
  let descontoAplicado=[]
  let valorFinal

  function calcularDescontoPorPruduto (valor){
    if(valor >= 200.0){
        descontoAplicado.push(valor * 0.5)}
    else if (valor >= 100.0){
        descontoAplicado.push(valor * 0.2)
    }else if (valor >=60.0){
        descontoAplicado.push(valor * 0.1)
    }
    }

  function calcularValorDesconto (formaPagamento,totalPagar ){
    if(formaPagamento == "pix" || formaPagamento == "a vista"){
    let desconto = totalPagar * 0.05
    valorFinal -= desconto
    descontoAplicado += desconto
    }
  }

  function realizarCompra(compra) {
    let quantidadeDeProdutos = compra.carrinho.length
    compra.carrinho.forEach(item => { 
        valorTotal.push(item.valor)
        calcularDescontoPorPruduto(item.valor)     
    })
    valorTotal = valorTotal.reduce((acumulador, valorAtual) => acumulador + valorAtual)
    descontoAplicado = descontoAplicado.reduce((acumulador, valorAtual) => acumulador + valorAtual)
    valorFinal = valorTotal- descontoAplicado
    console.log(valorTotal, descontoAplicado)
  }
realizarCompra(clienteLilit)