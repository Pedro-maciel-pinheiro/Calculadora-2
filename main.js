function contar() {
  let ini = document.querySelector("#txti");
  let fim = document.querySelector("#txtf");
  let passo = document.querySelector("#txtp");
  let res = document.querySelector("#res");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert("ERRO-Preencha todos os campos abaixo");
  } else {
    res.innerHTML = "contando:";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (p <= 0){
        alert('Passo invalido! Considerando Passo como 1')
        p = 1
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} `;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} `;
      }
    }
  }
}
