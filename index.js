let nCartas;
const cartas = [`./Imagens/bobrossparrot.gif`, `./Imagens/bobrossparrot.gif`,
    `./Imagens/explodyparrot.gif`, `./Imagens/explodyparrot.gif`,
    `./Imagens/fiestaparrot.gif`, `./Imagens/fiestaparrot.gif`,
    `./Imagens/metalparrot.gif`, `./Imagens/metalparrot.gif`,
    `./Imagens/revertitparrot.gif`, `./Imagens/revertitparrot.gif`,
    `./Imagens/tripletsparrot.gif`, `./Imagens/tripletsparrot.gif`,
    `./Imagens/unicornparrot.gif`, `./Imagens/unicornparrot.gif`]
comeco();

function comeco() {
    nCartas = prompt(`Com quantas cartas você quer jogar?`);

    if ((nCartas % 2 !== 0) || (nCartas < 4) || (nCartas > 15)) {
        alert(`Favor inserir um número par entre 4 e 14`);
        nCartas = 0;
        comeco();
    } else {
        distribuindoCartas(nCartas);
    }
}

function distribuindoCartas() {
    let contador = 0;
    const board = document.querySelector(`.board`);

    while (contador < nCartas) {
        board.innerHTML += `<div class="carta" onclick="virarCarta(this)">
    <div class="cartaImagem" onclick="virarCarta()">
        <img src="./Imagens/front.png" alt="" class="escondido">
        <img src="${cartas[contador]}" alt="">
    </div>
</div>`
        contador++
    }
}

function comparador() {
    return Math.random() - 0.5;
}
