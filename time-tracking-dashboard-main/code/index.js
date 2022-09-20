import Card from "./Card.js";
import LoadData from "./LoadData.js";

let periodState = "weekly"; //daily, weekly, monthly
const createCards = ()=>{
  const $fragment = document.createDocumentFragment()
  const $main = document.querySelector('main')
  
  LoadData(periodState).then((res) =>{
    res.forEach(e=>{
      const card = Card(e.title,periodState,e.timestamps)
      $fragment.append(card)
    })

    $main.innerHTML = ''
    $main.append($fragment)
  } );
}

document.addEventListener("DOMContentLoaded", (e) => {
  document.getElementById(periodState).classList.add("period-select");
  createCards()
});

document.addEventListener("click", (e) => {
  let target = e.target;
  if (Array.from(target.classList).includes("select-btn")) {
    document.getElementById(periodState).classList.remove("period-select");
    periodState = target.id;
    e.target.classList.add("period-select");
    createCards()
  }
});

