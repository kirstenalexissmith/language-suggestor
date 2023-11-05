window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", surveyAnswers);
  const refresh = document.getElementById("refresh");
  refresh.addEventListener("click", function () {
    location.reload();
  })
})

function surveyAnswers(e) {
  e.preventDefault();

  const typed = document.querySelector('input[name="typed"]:checked').value;
  const interest = document.querySelector('input[name="interest"]:checked').value;
  const mobile = document.querySelector('input[name="mobile"]:checked').value;
  const experience = document.querySelector('input[name="experience"]:checked').value;
  const muffin = document.querySelector('input[name="muffin"]:checked').value;

  let results;
  if (typed === "dynamically" && interest === "front" && mobile === "yes") {
    results = "JavaScript"
  }
  if (typed === "dynamically" && interest === "front" && mobile === "no") {
    results = "JavaScript"
  }
  else if (typed === "dynamically" && interest === "data") {
    results = "Python"
  }
  else if (typed === "statically") {
    results = "C#(C Sharp)"
  }
  document.getElementById("output").innerText = results

  const userNameInput = document.getElementById("userNameInput").value;
  document.getElementById("userNameOutput").innerText = userNameInput
}
