function calcular() {
  var lado1 = parseFloat(document.getElementById("lado1").value);
  var lado2 = parseFloat(document.getElementById("lado2").value);
  var lado3 = parseFloat(document.getElementById("lado3").value);

  if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2) {
    var semiperimetro = (lado1 + lado2 + lado3) / 2;
    var area = Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3));
    document.getElementById("resultado").innerHTML = "Área: " + area.toFixed(2);
  } else {
    document.getElementById("resultado").innerHTML = "No es posible calcular el área";
  }
}
function calcularPerimetro(){

  var lado1 = parseFloat(document.getElementById("lado1").value);
  var lado2 = parseFloat(document.getElementById("lado2").value);
  var lado3 = parseFloat(document.getElementById("lado3").value);
  if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2) {
    document.getElementById("resultado").innerHTML = "Perímetro: " + (lado1 + lado2 + lado3);
  } else {
    document.getElementById("resultado").innerHTML = "No es posible calcular el perimetro";
  }
 
}
function calcularTipo(){

  var lado1 = parseFloat(document.getElementById("lado1").value);
  var lado2 = parseFloat(document.getElementById("lado2").value);
  var lado3 = parseFloat(document.getElementById("lado3").value);
  if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2) {
    if (lado1 === lado2 && lado2 === lado3) {
      tipoTriangulo = "Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      tipoTriangulo = "Isósceles";
    } else {
      tipoTriangulo = "Escaleno";
    }
    if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2) {
    document.getElementById("resultado").innerHTML = "Tipo de triángulo: " + tipoTriangulo;
  } 
}else {
  document.getElementById("resultado").innerHTML = "No existe este tipo de triangulo";
}
}
