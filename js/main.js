const subjects = document.querySelector(".subjects");
const colors = ["red", "yellow", "green", "blue"];

function button() {
  const button = document.createElement("a");
  button.setAttribute("href", "#");
  button.setAttribute("class", "btn");
  button.textContent = "Continue";
  return button;
}

function subject(data, color) {
  const subject = document.createElement("div");
  subject.setAttribute("class", `subject subject--${color}`);

  const icon = document.createElement("img");
  icon.setAttribute("class", "subject__icon");
  icon.setAttribute("src", data.icon);
  subject.appendChild(icon);

  const title = document.createElement("span");
  title.setAttribute("class", `subject__title subject__title--${color}`);
  title.textContent = data.category;
  subject.appendChild(title);

  const result = document.createElement("div");
  result.setAttribute("class", "subject__result");
  const score = document.createElement("span");
  score.setAttribute("class", "subject__score");
  score.textContent = data.score;
  result.appendChild(score);
  const scoreBase = document.createElement("span");
  scoreBase.setAttribute("class", "subject__score subject__score--secondary");
  scoreBase.textContent = " / 100";
  result.appendChild(scoreBase);
  subject.appendChild(result);
  setTimeout(function () {}, 1000);
  return subject;
}

function createElements(data) {
  for (let i = 0; i <= data.length; i++) {
    if (i === data.length) {
      setTimeout(function () {
        subjects.appendChild(button());
      }, i * 300);
    } else {
      setTimeout(function () {
        subjects.appendChild(subject(data[i], colors[i]));
      }, i * 300);
    }
  }
}

function loadData() {
  const file = "../data.json";
  fetch(file)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createElements(data);
    });
}
