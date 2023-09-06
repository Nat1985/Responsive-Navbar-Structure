let windowWidth = window.innerWidth;
console.log(windowWidth);

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
})

// Catturo il div menu chiuso
const closedMenu = document.getElementById('closed-menu');

// Catturo il div del menu aperto e il tasto di chiusura
const openedMenu = document.getElementById('opened-menu');
const closeButton = document.getElementById('close-up');

// Associo l'aggiunta della classe hidden al click ai due tasti
closedMenu.addEventListener("click", () => {
  let closedHiddenClass = closedMenu.classList.add('hidden');
  openedMenu.classList.remove('hidden');
})
closeButton.addEventListener("click", () => {
  let openedHiddenClass = openedMenu.classList.add('hidden');
  closedMenu.classList.remove('hidden');
})
