function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

     // se campoPesquisa for uma string sem nada

    if (!campoPesquisa) {
        section.innerHTML = "<p> Digite um nome valido</p>"
        return
    }
     
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let descricao = "";
    let rota = "";
    let classe = "";
    let tag = "";
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        rota = dado.rota.toLowerCase()
        classe = dado.classe.toLowerCase()
        tag = dado.tag.toLowerCase()
         // se titulo includes campoPesquisa
        if (nome.includes(campoPesquisa) || 
            descricao.includes(campoPesquisa) || 
            rota.includes(campoPesquisa) ||
            classe.includes(campoPesquisa) ||
            tag.includes(campoPesquisa)) {
                // cria um novo elemento
                resultados += `
                  <div class="item-resultado">
                    <h2>
                        ${dado.nome}
                    </h2>
                    <img src="${dado.imagem}" alt="${dado.nome}">
                    <p class="descricao-meta">${dado.descricao}</p>
                    <h3 class="extras">extras</h3>
                    <p class="rotas">Rotas:${dado.rota}</p>
                    <p class="classe">Classe:${dado.classe}</p>
                </div>
                `;
        }
    }
    
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}