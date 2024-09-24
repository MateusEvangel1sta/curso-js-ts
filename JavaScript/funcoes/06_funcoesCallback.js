// Funções que são executadas quando uma ação ocorre.
function rand(min = 1000, max = 3000) {
  return Math.random() * (max - min) + min;
}

function f1(callback) {
  setTimeout(function() {
    if (callback) callback();
    console.log('f1');
  }, rand()); // A função passada é uma função de callback
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

// Árvore de natal deitada.
f1(function() {
  f2(function() {
    f3(function() {
      console.log('Olá, mundo!');
    });
  });
});

// Outra forma
f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá, mundo!');
}