var d;
var m;
var s;
var messageSec = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "diecieis", "diecisiete", "dieciocho", "diecinueve", "veinte", "veintiuno", "veintidos", "veintitres", "veinticuatro", "veinticinco", "veintiseis", "veintisiete", "veintiocho", "veintinueve", "treinta", "treintaiuno", "treintaidos", "treintaitres", "treintaicuatro", "treintaicinco", "treintaiseis", "treintaisiete", "treintaiocho", "treintainueve", "cuarenta", "cuarentaiuno", "cuarentaidos", "cuarentaitres", "cuarentaicuatro", "cuarentaicinco", "cuarentaiseis", "cuarentaisiete", "cuarentaiocho", "cuarentainueve", "cincuenta", "cincuentaiuno", "cincuentaidos", "cincuentaitres", "cincuentaicuatro", "cincuentaicinco", "cincuentaiseis", "cincuentaisiete", "cincuentaiocho", "cincuentainueve"];

console.log(messageSec.length);
/*
var frasesPorHora = [
  ["hola"],
  [null],
  ["chau"],
  [null]
];
*/

/*frasesPorHora[hora][minuto]
frasesPorHora[m][s]*/

setInterval(function(){

  d = new Date();
  m = d.getMinutes();
  s = d.getSeconds();
  console.log(m,s);

  if (messageSec[s]) {
    var msg = document.createElement("div");
    msg.innerHTML = messageSec[s];
    document.body.appendChild(msg);
  }

}, 1000);

/*
 websocket<-----
interpretar qr
acceso de ambos
*/
