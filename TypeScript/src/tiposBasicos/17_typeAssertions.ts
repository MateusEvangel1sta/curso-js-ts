// Condicional
const bodyUm = document.querySelector('body');
if (bodyUm) bodyUm.style.background = 'red';

// "!" -> Não pode ser nulo!
// Não recomendado!
const bodyDois = document.querySelector('body')!;
bodyDois.style.background = 'blue';

// Type assertion
const bodyTres = document.querySelector('body') as HTMLBodyElement;
bodyTres.style.background = 'blue';
