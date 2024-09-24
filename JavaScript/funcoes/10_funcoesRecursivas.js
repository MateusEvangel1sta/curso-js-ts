// Funções Recursivas -> Função que se chama. Você pode fazer algo similar ao que as estruturas de repetição fazem.
function recursiva(max) {
  if (max >= 10) return
  max++;
  console.log(max);

  // Vai se chamar novamente até a verificação acima ser atendida.
  recursiva(max);
}

recursiva(1);