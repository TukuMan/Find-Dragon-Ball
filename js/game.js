const WIDTH = 550;
const HEIGHT = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGHT),
};
let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let click = 0;

$map.addEventListener("click", function (e) {
    click++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 20){
    alert(`Found the Dragon Ball in ${click} clicks!!`);
    location.reload();
  }
});
