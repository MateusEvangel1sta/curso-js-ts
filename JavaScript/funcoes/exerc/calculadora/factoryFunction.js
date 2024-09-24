// Factory Function.
function criaCalculadora() {
  // Returns an object.
  return {
    // Capture of the element responsible for data entry.
    display: document.querySelector('.display'),

    // Method responsible for the initialization of our calculator
    inicia() {
      this.cliqueBotoes();
      this.pressionaBackSpace();
      this.pressionaEnter();
    },

    // Method responsible for deleting `display` contents is the user presses the Backspace key (code 8).
    pressionaBackSpace() {
      // adding `keydown` event to the `display`. 
      // The `keydown` event is triggered when the key is pressed.
      this.display.addEventListener('keydown', e => {
        // If the pressed key has the `keycode` attribute equal to 8, an event will occur.
        if (e.keyCode === 8) {
          // Method responsible for canceling the default event
          e.preventDefault();
          // After cancellation of the default event, the function responsible for cleaning the display is triggered.
          this.clearDisplay();
        }
      });
    },

    // Method responsible for call to perform operations.
    pressionaEnter() {
      // adding `keyup` event to the `display`.
      // The `keypress` event is triggered when the key is released.
      this.display.addEventListener('keyup', e => {
        // If the pressed key has the `keycode` attribute equal to 8, an event will occur.
        if (e.keyCode === 13) {
          // Here is the function responsible for performing mathmatical operations.
          this.realizaConta();
        }
      });
    },

    // Method responsible for pergorming mathematical operations.
    realizaConta() {
      // We recover the value of the display attribute.
      let conta = this.display.value;
      
      // Block of code responsible for "trying" operations. If an erros occurs, the code is directed to `catch`, where it will handled.
      try {
        // The `eval` function is responsible for capturing mathematival expression and returning its results. If the user types in the "2 + 2" input (valeu received as STRING), the `eval` function is responsible for converting this STTING into a mathematical expresseion and returning its value.
        conta = eval(conta);
        console.log(conta);
 
        // Check if the value of then account variable is valid. If it is valid, fo not enter the block. If it is invalid, enter the block.
        if(!conta) {
          alert('Conta inválida');

          return
        }

        // If it has come here, ir is a sign that the value informed in the variable `accout` is valid. Now the type conversion is made. With the use of te `eval` function, a mathematical operation was performed and the value returned to the `account` variable was a NUMBER. In the code line below the type o the `account` variable is transformed again into a STRING and passed as a value for our attribute `display`.
        this.display.value = String(conta);
      } catch(e) {
        // In case of errors with the block `try` aboce, the actions are performed.
        alert('Conta inválida');
        
        return
      }
    },

    // Methos responsible for cleaning our attribute `display`.
    clearDisplay() {
      this.display.value = '';
    },

    // Methos resposible for delete one value in our attribue `display`.
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    // Method responsible for buttons clicks
    cliqueBotoes() {
      document.addEventListener('click', e => {
        // Element HTML where the click event was generated
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          console.log('Apagou!');
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        // After the click event occurs, the `display` attribute receives the focus. 
        this.display.focus();
      });
    },

    // Method responsible for taking the value of clicked button and adding to our `display` attribute.
    btnParaDisplay(valor) {
      this.display.value += valor;
    }

  };
}

// Variable responsible for starting the factory function.
const calculadora = criaCalculadora();

// Hete the method `inicia()` of our objetct is used. 
calculadora.inicia();