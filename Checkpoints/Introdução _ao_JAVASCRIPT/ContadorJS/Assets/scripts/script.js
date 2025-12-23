class contador {
    constructor(displayID) {
        this.valor = 0;
        this.display = document.getElementById(displayID);
    }


    updateDisplay() {
    if (this.display) {
        this.display.textContent = this.valor;
     }
    }

    Aumentar() {
    this.valor++;
    this.updateDisplay() ;
    }

    Diminuir() {
    this.valor--;
    this.updateDisplay();
    }
    
    Zerar() {
        this.valor = 0;
        this.updateDisplay();
    }
}
const meuContador = new  contador('valor');

document.querySelector('.Controles').addEventListener('click', (e) => {
    const action = e.target.dataset.action;
    if (action && typeof meuContador[action] === 'function') {
        meuContador[action]();
    }
});
