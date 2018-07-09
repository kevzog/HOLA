var d;
var m;
var s;
var frases = ["hola", "chau", "che", "todo", "bien?", "bueno", "me", "voy"];
var index = 0;
var frasesPorHora = [
  ["hola"],
  [null],
  ["chau"],
  [null]
];

/*frasesPorHora[hora][minuto]
frasesPorHora[m][s]*/

setInterval(function(){

  d = new Date();
  m = d.getMinutes();
  s = d.getSeconds();
  console.log(m,s);

  if (frasesPorHora[m][s]) {
    var palabra = document.createElement("div");
    palabra.innerHTML = frasesPorHora[m][s];
    document.body.appendChild(palabra);
  }

}, 1000);

/*
 websocket<-----
interpretar qr
acceso de ambos
*/
