const form = document.querySelector('#update');

export function habilitarBoton() {
    const inputElements = form.querySelectorAll('input');
  
    inputElements.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        const areAllInputsFilled = Array.from(inputElements).every(
          (input) => input.value.trim() !== ''
        );
  
        const submitButton = form.querySelector('.button');
        if (areAllInputsFilled) {
          submitButton.removeAttribute('disabled');
        } else {
          submitButton.setAttribute('disabled', '');
        }
      });
    });
  }
