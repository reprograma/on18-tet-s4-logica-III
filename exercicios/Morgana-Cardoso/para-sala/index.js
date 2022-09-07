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
  let descontoAplicado = []
  let valorFinal

  function calcularDescontoPorProduto(valor) {
    if(item.valor >= 200.0) {
      descontoAplicado.push(valor * 0.5)
    } else if (valor)
  }

  function realizarCompra(compra) {
    let quantidadeDeProdutos = compra.carrinho.length

    compra.carrinho.forEach((item)=> {
      valorTotal.push(item.valor)

    })
  }