const numeroInput = document.getElementById('numero');
    const rangeInput = document.getElementById('range');
    const btnMais = document.getElementById('btnMais');
    const btnMenos = document.getElementById('btnMenos');

   
    function atualizarRange() {
      rangeInput.value = numeroInput.value;
    }


    function aumentarValor() {
      if (parseInt(numeroInput.value) < parseInt(numeroInput.max)) {
        numeroInput.value = parseInt(numeroInput.value) + 1;
        atualizarRange();
      }
    }

 
    function diminuirValor() {
      if (parseInt(numeroInput.value) > parseInt(numeroInput.min)) {
        numeroInput.value = parseInt(numeroInput.value) - 1;
        atualizarRange();
      }
    }

    
    numeroInput.addEventListener('input', atualizarRange);

  
    btnMais.addEventListener('click', aumentarValor);

  
    btnMenos.addEventListener('click', diminuirValor);

  
    atualizarRange();