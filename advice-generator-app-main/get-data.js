const $btn = document.getElementById("get-advice"),
  $h3 = document.getElementById("advice-name"),
  $p = document.getElementById("advice");
  
async function getAdvice(cb) {
  await fetch("	https://api.adviceslip.com/advice")
    .then((res) => (res.ok ? res.json() : Promise.reject))
    .then((json) => cb(json.slip))
    .catch((err) => console.log(err));
}

async function printText() {
  await getAdvice((slip) => {
    $h3.innerText = `ADVICE ${slip.id}`;
    $p.innerText = slip.advice;
  });
}

document.addEventListener("DOMContentLoaded", async (e) => await printText());

$btn.addEventListener("click", async (e) => await printText());
