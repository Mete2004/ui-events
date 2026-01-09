/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...
let scaleLink = document.querySelector('a[href="#frontend"]')

// Stap 2: addEventListener
// scaleLink.addEventListener...
scaleLink.addEventListener('click', groei)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...
function groei() {
  scaleLink.classList.toggle('grow')
}


let translateLink = document.querySelector('a[href="#and"]')

translateLink.addEventListener('click', schuif)

function schuif() {
  translateLink.classList.toggle('move')
}


let shakeLink = document.querySelector('a[href="#development"]')

shakeLink.addEventListener('dblclick', schud)

function schud() {
  shakeLink.classList.toggle('shake')
}



let aandachtLink = document.querySelector('a[href="#sprint-5"]')

aandachtLink.addEventListener('focus', veranderkleur)

function veranderkleur() {
  aandachtLink.classList.toggle('changecolor')
}


let hoverLink = document.querySelector('a[href="#fix"]')

hoverLink.addEventListener('mouseover', verandertekst);

hoverLink.addEventListener('mouseout', veranderTerug);

function verandertekst() {
  hoverLink.textContent = 'Gevonden!';
}

function veranderTerug() {
  hoverLink.textContent = 'Fix';
}


let draaiLink = document.querySelector('a[href="#the"]')

draaiLink.addEventListener('mouseout', draaiknop);

function draaiknop() {
  draaiLink.classList.toggle('turnbutton')
}


let flipLink = document.querySelector('a[href="#flow"]')

flipLink.addEventListener('mousedown', flipknop);

flipLink.addEventListener('mouseup', flipterugknop)

function flipknop() {
  flipLink.classList.toggle('flipbutton')
}

function flipterugknop() {
  flipLink.classList.toggle('flipbackbutton')
}


let keyUpLink = document.querySelector('a[href="#user"]')

keyUpLink.addEventListener('keyup', kleurveranderen);

function kleurveranderen(event) {
  if (event.key === 'a') {
    keyUpLink.style.backgroundColor = 'red';
  }
}


let blowupLink = document.querySelector('a[href="#interface"]')

blowupLink.addEventListener('keydown', opblazen);

function opblazen () {
  blowupLink.classList.add('blowup')
  blowupLink.classList.remove('deflate')
}

blowupLink.addEventListener('keyup', leeglopen);

function leeglopen () {
  blowupLink.classList.add('deflate')
  blowupLink.classList.remove('blowup')
}


let tekstLink = document.querySelector('a[href="#events"]')

let fontSize = 32

tekstLink.addEventListener('wheel', scrollGroterOfKleiner);

function scrollGroterOfKleiner(event) {
  if (event.deltaY < 0) {   
    fontSize += 1
  } else {                   
    fontSize -= 1
  }
  tekstLink.style.fontSize = fontSize + 'px'
}


let interactionLink = document.querySelector('a[href="#interaction"]')

interactionLink.addEventListener('mousemove', volgmuis) 

function volgmuis(event) {
  let x = event.offsetX
  let y = event.offsetY
  interactionLink.style.setProperty(
    'background',
    `radial-gradient(circle at ${x}px ${y}px, #ff0, #000)`
  )
}