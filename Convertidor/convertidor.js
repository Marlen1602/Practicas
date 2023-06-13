function limpiar() {
    document.getElementById("frmconversiones").reset();
    document.getElementById("res").innerHTML = "";
  }
  document.getElementById("frmconversiones").addEventListener("submit", function(event) {
    event.preventDefault();
    var cantidad = parseFloat(document.getElementById("cant").value);
    var tipo = document.getElementById("tipo").value;
    var valor = parseFloat(document.getElementById("valorD").value);
    var result;
    if (tipo === "pesos") {
      result =  cantidad / valor;
      document.getElementById("res").innerHTML =  cantidad + " pesos equivalen a " + result + " dólares.";
    } else {
      result =  cantidad * valor;
      document.getElementById("res").innerHTML =  cantidad + " dólares equivalen a " + result + " pesos.";
    }
  });
