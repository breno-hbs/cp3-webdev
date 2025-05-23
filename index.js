const form = document.getElementById("form");
const inputProduto = document.getElementById("produto");
const inputPreco = document.getElementById("preco");
const inputCategoria = document.getElementById("categoria");
const btnCadastrar = document.getElementById("btnCadastrar");
const produtosCadastro = document.getElementById("produtosCadastrados");
const mensagemErro = document.getElementById("mensagemErro");

btnCadastrar.addEventListener("click", function (event) {
  event.preventDefault();

  let produto = inputProduto.value;
  let preco = inputPreco.value;
  let categoria = inputCategoria.value;

  if (produto === "" || categoria === "") {
    mensagemErro.textContent = "Preencha os campos vazios!";
    mensagemErro.style.color = "red";
    return
  }
  else if (preco < 0){
    mensagemErro.textContent = "Digite número maior que zero!";
    mensagemErro.style.color = "red";

    return
  }

  const cardProduto = document.createElement("ul");
  cardProduto.innerHTML = `
    <div style="${categoria === "Tecnologia" ? "font-weight: bold" : ""} ${categoria === "Alimentos" ? "background-color: yellow" : ""}">
        Produto: ${produto} - R$ ${preco} - Categoria: ${categoria}
    </div>
    `;
  produtosCadastro.append(cardProduto);
  form.reset();
});
