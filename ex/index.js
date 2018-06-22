const produto = {
	nome: "Caneta",
	preco: 1.90,
	deconto: 0.05
}

function clone(objeto) {
	return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = "awdaw"

console.log(produto, novoProduto)