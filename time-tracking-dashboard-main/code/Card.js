export default function Card(act,period,timestamps){
    const $card = document.createElement("article");

    let actLower = act.toLowerCase()
    if(actLower.includes(' ')){
        actLower = actLower.replace(' ','-')
    }
    let tiemframe = period==='daily'?'day':period.slice(0,period.length-2)
    tiemframe = tiemframe[0].toUpperCase()+tiemframe.slice(1,tiemframe.length)

    $card.classList.add("data-box");
    $card.classList.add("act");
    $card.classList.add(`act--${actLower}`);
    

    $card.innerHTML = `<div class="act-bgr">
    <img src="./images/icon-${actLower}.svg" alt="" />
    </div>
    <div class="act-content">
    <h3 class="act-title">${act}</h3>
    <div class="act-menu">
    <img src="./images/icon-ellipsis.svg" />
    </div>
    <p class="act-hours">${timestamps.current}hrs</p>
    <small>Last ${tiemframe}-${timestamps.previous}</small>
    </div>`;

    return $card
}
