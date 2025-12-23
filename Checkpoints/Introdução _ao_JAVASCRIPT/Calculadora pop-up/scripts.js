function calculadora() {
    const operacao = Number(prompt("Escolha uma Operação:\n 1 - Adição(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão(/)\n 5 - Resto da Divisão(//)\n 6 - Potenciação(**) "));

    let n1 = Number(prompt("Insera o primeiro valor:"));
    let n2 = Number(prompt("Insira o segundo valor:"));
    let resultado;
    
    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaoperacao()
    };

        function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaoperacao()
    };

        function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaoperacao()
    };

        function divisao() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaoperacao()
    };

        function restoDivisao() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`)
        novaoperacao()
    };

        function potencia() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}a é igual a ${resultado}`)
        novaoperacao()
    };
    
if (operacao == 1) {
    soma();
} else if (operacao == 2) {
    subtracao();
} else if (operacao == 3) {
    multiplicacao();
} else if (operacao == 4) {
    divisao();
} else if (operacao == 5) {
    restoDivisao()
}else if (operacao == 6) {
    potencia();
}

function novaoperacao() {
  let opcao = prompt ("Deseja realizar uma nova operação?\n 1 - Sim\n 2 - Não");
  if (opcao == 1) {
    calculadora()
  } else if (opcao == 2) {
    alert("Até mais!")
}
}
}
calculadora();