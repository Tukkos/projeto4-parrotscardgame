let nCartas;
let cartas = [`pap1`, `pap2`, `pap3`, `pap4`, `pap5`, `pap6`, `pap7`]
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

function mix() {
    return 0.5 - Math.random();
}

function distribuindoCartas() {
    const board = document.querySelector(`.board`);
    let cartasNoJogo = [];

    cartas.sort(mix);

    for (let i = 0; i < nCartas / 2; i++) {
        cartasNoJogo.push(cartas[i]);
        cartasNoJogo.push(cartas[i]);
    }

    cartasNoJogo.sort(mix);

    // REVER CONSTRUIÇAO DO HTML!!!!!
    for (let i = 0; i < nCartas; i++) {
        board.innerHTML += `<div class="carta" onclick="virarCarta(this)">
        <div class="cartaFrente"><img src="./Imagens/front.png" alt=""></div>
        <div class="cartaVerso"><img src="./Imagens/${cartasNoJogo[i]}.gif" alt=""></div>
    </div>`
    }
}

function virarCarta(elemento) {
    elemento.classList.add(`vira`);
}