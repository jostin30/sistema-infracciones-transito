function validar() {
let cedula = document.getElementById("cedula").value;
let placa = document.getElementById("placa").value;
if (cedula == "" || placa == "") {
alert("Por favor completa cédula y placa");
return false;
}
alert("Infracción registrada correctamente");
return true;
}
