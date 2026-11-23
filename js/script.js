// Dados prontos — não precisa mudar.
const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

// TODO 1: escreva a função render(filtro) que preenche a #lista com um <li>
//         para cada curso cujo NOME contenha o filtro (use filter + map).
//         Se nenhum curso passar, mostre um <li> com "Nada encontrado".
//
// TODO 2: chame render() ao carregar a página e a cada evento "input" na busca.

// escreva seu código aqui
function render(filtro) {
  var texto = filtro.toLowerCase();

  var filtrados = cursos.filter(function(curso) {
    return curso.nome.toLowerCase().includes(texto);
  });

  if (filtrados.length === 0) {
    lista.innerHTML = "<li>Nada encontrado</li>";
  } else {
    lista.innerHTML = filtrados.map(function(curso) {
      return "<li>" + curso.nome + "</li>";
    }).join("");
  }
}

render("");

busca.addEventListener("input", function() {
  render(busca.value);
});