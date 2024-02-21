function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
game();
function game() {
  let randomVar = getRandomInt(0, 100);
  let i = 1;
  let x;
  while (i <= 10) {
    x = prompt("Enter a number between 0 and 100: ");
    if (isNaN(x) || x < 0 || x > 100) {
      alert("Enter a valid input !");
      continue;
    }

    if (x == null) {
      alert("Game interrupted !");
      break;
    }

    if (x == randomVar) {
      alert(`Good job u did ${i} attempts`);
      break;
    } else {
      let message = x < randomVar ? "Bigger !" : "Smaller !";
      alert(` ${message}, u still got ${11 - i} attempts`);
      i++;
    }
  }

  if (i == 11) {
    alert("Sorry u lost ! ");
  }
}

if (confirm("Do u wanna play again ?")) {
  game();
}
