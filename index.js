let nCartas;
let cartas = [`pap1`, `pap2`, `pap3`, `pap4`, `pap5`, `pap6`, `pap7`];
let valorCarta1 = [];
let valorCarta2 = [];

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

    for (let i = 0; i < nCartas; i++) {
        board.innerHTML += `<div class="carta" onclick="virarCarta(this)">
        <div class="cartaFrente"><img src="./Imagens/front.png" alt=""></div>
        <div class="cartaVerso"><img src="./Imagens/${cartasNoJogo[i]}.gif" alt=""></div>
    </div>`
    }
}

function virarCarta(elemento) {
    let jaTemVirada = document.querySelectorAll(`.vira`);
    elemento.classList.add(`vira`);

    if (jaTemVirada !== null) {
        let qualCarta = `${document.querySelector(`.vira`).querySelector(`.cartaVerso`).querySelector(`img`)}`;
        valorCarta1.push(qualCarta);
        console.log(valorCarta1);

    } else {
        let qualCarta = `${document.querySelector(`.vira`).querySelector(`.cartaVerso`).querySelector(`img`)}`;
        valorCarta2.push(qualCarta);
        console.log(valorCarta2);

        if (valorCarta1 === valorCarta2) {
            jaTemVirada.classList.add(`naoMexe`);
            jaTemVirada.classList.remove(`vira`);

        } else {
            setTimeout(desvirarDuasCartas, 1000)
        }
        valorCarta1 = [];
        valorCarta2 = [];
    }
}

function desvirarDuasCartas() {
    jaTemVirada.classList.remove(`vira`);
}