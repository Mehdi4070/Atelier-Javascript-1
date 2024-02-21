function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
const listeItems = document.querySelectorAll("#liste li");

  listeItems.forEach(item => {
    item.addEventListener('click', () => {

      item.style.backgroundColor = randomColor();
    });
  });


// this doesn't work (with for loop) i think there's a problem related to the for loop or the index i idk
/*
  let i;
  for (i = 0; i < listeItems.length; i++) {
      listeItems[i].addEventListener("click", () => {
          listeItems[i].style.backgroundColor = randomColor();
    });
  }
*/