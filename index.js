let nCartas;
let cartas = [`pap1`, `pap2`, `pap3`, `pap4`, `pap5`, `pap6`, `pap7`];
let valorCarta1 = [];
let valorCarta2 = [];
let jaVirouTodas;
let contador = 0;
let pontos = 0;

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
    jaVirouTodas = document.querySelectorAll;

    if (elemento.classList.contains('naoMexe')) {
        return;
    }

    // Se não existem cartas viradas, a primeira carta ganha a classe para ser virada e tem o nome do gif "pushado" numa array.
    if (document.querySelector(`.vira`) === null) {
        elemento.classList.add(`vira`, `naoMexe`);
        let qualCarta = `${elemento.querySelector(`.cartaVerso`).querySelector(`img`).src}`;
        valorCarta1.push(qualCarta);
        console.log(valorCarta1);
        contador++;

        // Se ja tem carta viradas, acontece o mesmo com a segunda.
    } else {
        elemento.classList.add(`vira`, `naoMexe`);
        let qualCarta = `${elemento.querySelector(`.cartaVerso`).querySelector(`img`).src}`;
        valorCarta2.push(qualCarta);
        console.log(valorCarta2);
        contador++;

        // As duas cartas são comparadas e se tiver certo elas são travadas.
        if (valorCarta1[0] === valorCarta2[0]) {

            console.log(jaTemVirada);
            jaTemVirada[0].classList.add(`parou`);
            jaTemVirada[0].classList.remove(`vira`);
            elemento.classList.add(`parou`);
            elemento.classList.remove(`vira`);
            pontos++;
            valorCarta1 = [];
            valorCarta2 = [];

            // Se não são iguais elas são resetadas.
        } else {
            setTimeout(desvirarDuasCartas, 1000);
        }
    }

    // 
    if (pontos === nCartas / 2) {
        setTimeout(finalizarOJogo, 1000);
    }
}

function desvirarDuasCartas() {
    document.querySelector(`.vira`).classList.remove(`vira`, `naoMexe`);
    document.querySelector(`.vira`).classList.remove(`vira`, `naoMexe`);
    valorCarta1 = [];
    valorCarta2 = [];
}

function finalizarOJogo() {
    alert(`Você ganhou em ${contador} jogadas`);

    let lsd = prompt(`Você deseja jogar novamente?`)
    if (lsd === `sim`) {
        window.location.reload(true);
    }
}