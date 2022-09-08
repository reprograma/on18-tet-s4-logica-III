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
  if(valor >= 200.0) {
    descontoAplicado.push(valor * 0.5)
  } else if (valor >= 100.0) {
    descontoAplicado.push(valor * 0.2)
  } else if (valor >= 60.0) {
    descontoAplicado.push(valor * 0.1)
  }
}

function calcularDescontoExtra(formaPagamento) {
  if(formaPagamento == "pix" || formaPagamento == "a vista") {
    let desconto = valorFinal * 0.05
    valorFinal -= desconto
    descontoAplicado += desconto
  }
}

// f(x) = x + 5
// f(1) = 1 + 5
// f(6) = 6 + 5

function imprimirNota(quantidadeDeProdutos) {
  let dataDaCompra = new Date()

  let notaFiscal = {
    'Valor Total': `R$${valorTotal.toFixed(2).replace('.', ',')}`,
    'Desconto Aplicado': `R$${descontoAplicado.toFixed(2).replace('.', ',')}`,
    'Valor à pagar': `R$${valorFinal.toFixed(2).replace('.', ',')}`,
    'Data da Compra': dataDaCompra.toLocaleDateString('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  }

  if(quantidadeDeProdutos > 10 || valorFinal > 800.0) {
    notaFiscal['Bônus'] = 'Você ganhou um CUPOM de R$50,00 para sua próxima compra'
  }

  console.table(notaFiscal)
}

function realizarCompra(compra) {
  let quantidadeDeProdutos = compra.carrinho.length

  compra.carrinho.forEach((item) => {
    valorTotal.push(item.valor)
    calcularDescontoPorProduto(item.valor)
  })

  // console.log(valorTotal, descontoAplicado)

  valorTotal = valorTotal.reduce((acumulador, valorAtual) => acumulador + valorAtual)
  descontoAplicado = descontoAplicado.reduce((acumulador, valorAtual) => acumulador + valorAtual)
  valorFinal = valorTotal - descontoAplicado
  
  console.log(valorTotal, descontoAplicado, valorFinal)

  calcularDescontoExtra(compra.pagamento)

  console.log(valorTotal, descontoAplicado, valorFinal)

  imprimirNota(quantidadeDeProdutos)
}

realizarCompra(clienteLilit)
