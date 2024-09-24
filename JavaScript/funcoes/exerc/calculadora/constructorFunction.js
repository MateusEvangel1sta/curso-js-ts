// Factory Function.
function CriaCalculadora() {
    // Capture of the element responsible for data entry.
    const display = document.querySelector('.display');

    // Method responsible for the initialization of our calculator
    this.inicia = () => {
      cliqueBotoes();
      pressionaBackSpace();
      pressionaEnter();
    }

    // Method responsible for deleting `display` contents is the user presses the Backspace key (code 8).
    const pressionaBackSpace = () => {
      // adding `keydown` event to the `display`. 
      // The `keydown` event is triggered when the key is pressed.
      display.addEventListener('keydown', e => {
        // If the pressed key has the `keycode` attribute equal to 8, an event will occur.
        if (e.keyCode === 8) {
          // Method responsible for canceling the default event
          e.preventDefault();
          // After cancellation of the default event, the function responsible for cleaning the display is triggered.
          clearDisplay();
        }
      });
    }

    // Method responsible for call to perform operations.
    const pressionaEnter = () => {
      // adding `keyup` event to the `display`.
      // The `keypress` event is triggered when the key is released.
      display.addEventListener('keyup', e => {
        // If the pressed key has the `keycode` attribute equal to 8, an event will occur.
        if (e.keyCode === 13) {
          // Here is the function responsible for performing mathmatical operations.
          realizaConta();
        }
      });
    }

    // Method responsible for pergorming mathematical operations.
    const realizaConta = () => {
      // We recover the value of the display attribute.
      let conta = display.value;
      
      // Block of code responsible for "trying" operations. If an erros occurs, the code is directed to `catch`, where it will handled.
      try {
        // The `eval` function is responsible for capturing mathematival expression and returning its results. If the user types in the "2 + 2" input (valeu received as STRING), the `eval` function is responsible for converting this STTING into a mathematical expresseion and returning its value.
        conta = eval(conta);
 
        // Check if the value of then account variable is valid. If it is valid, fo not enter the block. If it is invalid, enter the block.
        if(!conta) {
          alert('Conta inválida');

          return
        }

        // If it has come here, ir is a sign that the value informed in the variable `accout` is valid. Now the type conversion is made. With the use of te `eval` function, a mathematical operation was performed and the value returned to the `account` variable was a NUMBER. In the code line below the type o the `account` variable is transformed again into a STRING and passed as a value for our attribute `display`.
        display.value = String(conta);
      } catch(e) {
        // In case of errors with the block `try` aboce, the actions are performed.
        alert('Conta inválida');
        
        return
      }
    }

    // Methos responsible for cleaning our attribute `display`.
    const clearDisplay = () => {
      display.value = '';
    }
    // Methos resposible for delete one value in our attribue `display`.
    const apagaUm = () => {
      display.value = display.value.slice(0, -1);
    }

    // Method responsible for buttons clicks
    const cliqueBotoes = () => {
      document.addEventListener('click', e => {
        // Element HTML where the click event was generated
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          console.log('Apagou!');
          apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          realizaConta();
        }

        // After the click event occurs, the `display` attribute receives the focus. 
        display.focus();
      });
    }

    // Method responsible for taking the value of clicked button and adding to our `display` attribute.
    const btnParaDisplay = valor => {
      display.value += valor;
    }
}

// Variable responsible for starting the factory function.
const calculadora = new CriaCalculadora();

// Hete the method `inicia()` of our objetct is used. 
calculadora.inicia();