
const receitas = [
    {
        titulo: "Brigadeiro",
        imagem: "img/brigadeiro.jpg", 
        preparo: "Em uma panela, misture o leite condensado, o chocolate em pó e a manteiga. Cozinhe em fogo médio, mexendo sempre, até desgrudar do fundo da panela. Coloque em um prato untado e deixe esfriar. Modele em bolinhas e passe no granulado.",
        ingredientes: ["1 lata de leite condensado", "7 colheres de sopa de chocolate em pó", "1 colher de sopa de manteiga", "Granulado para cobrir"]
    },
    {
        titulo: "Bolo de Chocolate",
        imagem: "img/bolo de chocolate.jpg", 
        preparo: "Misture a farinha, o açúcar, o chocolate, o fermento e o sal. Em outro recipiente, misture os ovos, o leite e a manteiga. Junte as misturas, mexendo até ficar homogêneo. Despeje em uma forma untada e asse em forno pré-aquecido a 180°C por cerca de 35 minutos.",
        ingredientes: ["2 xícaras de farinha de trigo", "1 xícara de açúcar", "1 xícara de chocolate em pó", "1 colher de sopa de fermento em pó", "1/2 colher de chá de sal", "2 ovos", "1 xícara de leite", "1/2 xícara de manteiga derretida"]
    },
  
    {
        titulo: "Coxinha de Frango",
        imagem: "img/coxinha de frango.jpg", 
        preparo: "Cozinhe o peito de frango e desfie. Refogue a cebola e o alho, adicione o frango desfiado, azeitonas e temperos. Prepare a massa com água, farinha e manteiga, cozinhe até desgrudar da panela. Modele as coxinhas, recheie com o frango, empane e frite.",
        ingredientes: ["500g de peito de frango", "1 cebola picada", "2 dentes de alho picados", "1/2 xícara de azeitonas picadas", "1/2 xícara de manteiga", "2 xícaras de farinha de trigo", "1 xícara de água", "Farinha de rosca para empanar", "Óleo para fritar"]
    }
];


function getListaIngredientes(ingredientes) {
    let listaHTML = "<ul>";
    ingredientes.map(ingrediente => {
        listaHTML += `<li>${ingrediente}</li>`;
    });
    listaHTML += "</ul>";
    return listaHTML;
}


function getCard(receita) {
    return `
        <div class="card m-3" style="width: 250px;">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
                <h5 class="card-title">${receita.titulo}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita.ingredientes)}
                    <hr>
                    <p>${receita.preparo}</p>
                </div>
            </div>
        </div>
    `;
}


function preencheCatalogo() {
    const pnlCatalogo = document.getElementById('pnlCatalogo');
    pnlCatalogo.innerHTML = receitas.map(getCard).join('');
}


window.onload = preencheCatalogo;
