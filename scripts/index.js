function addResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

//* Recordar ARREGLAR
function showResult() {
  const result = document.getElementById("result");
  result.value = eval(result.value);
}
