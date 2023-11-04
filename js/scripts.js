window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", surveyAnswers);
})

function surveyAnswers(e) {
  e.preventDefault();
  const typed = document.querySelector('input[name="typed"]:checked').value;

  let results;
  if (typed === "statically") {
    results = "C#"
  }

  document.getElementById("output").innerText = results
}
