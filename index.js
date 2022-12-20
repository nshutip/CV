function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(div) {
  div.css("color", getRandomColor());
}

// document.getElementsById('main-title')[0]
//   .addEventListener('click', function setRandomColor(event) {
//     event.css("color", getRandomColor());
//   });

// const mainTitle = document.getElementById('main-title');

// if (mainTitle) {
//   mainTitle.addEventListener('click', function (event){
//     event.css("color", getRandomColor);
//     console.log(getRandomColor);
//   })
// };
