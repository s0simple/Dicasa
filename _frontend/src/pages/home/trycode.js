var hst = document.getElementById("highscores");

var highScores = [
  { id: "1", name: "Maximillian", score: 1000 },
  { id: "2", name: "The second guy", score: 700 },
  { id: "3", name: "The newbie!", score: 50 },
];

localStorage.setItem("highscores", JSON.stringify(highScores));
//  1. creates a local storage with kay name "highscores"
//  2. then stores the array[highscores] into the created local storage
//  3. turns it into string

var retrievedScores = JSON.parse(localStorage.getItem("highscores"));
//  1. gets the items from the local storage
//  2. changes it back from string to object

var deleteById = function (self) {
  retrievedScores = retrievedScores.filter(function (elem) {
    return elem.id !== self.id;
  });

  localStorage.setItem("highscores", JSON.stringify(retrievedScores));
  self.parentNode.parentNode.removeChild(self.parentNode);
};

for (var i = 0; i < retrievedScores.length; i++) {
  hst.innerHTML +=
    "<li >" +
    "<a id=" +
    retrievedScores[i].id +
    " href='#' onclick='deleteById(this)'>x</a>" +
    retrievedScores[i].name +
    " -- " +
    retrievedScores[i].score +
    "</li>";
}
