function addResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

//* Recordar ARREGLAR
function showResult() {
  const result = document.getElementById("result");
  if (result.value < 0) {
    result.value = eval(result.value);
  } else {
    result.value = "Sin negativos";
    setTimeout(() => {
      result.value = "";
    }, 2000);
  }
}
