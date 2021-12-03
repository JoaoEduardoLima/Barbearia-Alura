var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    var tdPeso = paciente.querySelector(".info-peso");

    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");

    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValido) {
        console.log("Altura inválida");
        tdImc.textContent = "Altura iválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;        
    }

});

function validaPeso(peso) {
    if (peso > 0 && peso < 500) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2); //fixa duas casas decimais.
}