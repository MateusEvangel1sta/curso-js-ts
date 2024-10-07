document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute("href");
  
  // com async await
  try {
    const res = await fetch(href);
    if (res.status !== 200) throw new Error('Erro 404');
    const html = await res.text();
    carregaResultado(html);
  } catch(e) {
    console.log(e);
  }

  // com then
  // fetch(href)
  //   .then((res) => {
  //     if (res.status != 200) throw new Error('Erro 404');
  //     return res.text();
  //   }).then((html) => {
  //     carregaResultado(html);
  //   }).catch((e) => {
  //     console.error(e);
  //   });
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
