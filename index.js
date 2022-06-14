comeco();

function comeco() {
    let cartas = prompt("Com quantas cartas você quer jogar?");
    cartas = Number(cartas);

    if (cartas % 2 !== 0 && cartas < 4 && cartas > 14) {
        alert("Favor inserir um número par entre 4 a 14.")
        comeco();
    }

}

