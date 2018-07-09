var d;
var m;
var s;

console.log(messageInTime.length);
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

  if (messageInTime[m][s]) {
    var msg = document.createElement("div");
    msg.innerHTML = messageInTime[m][s];
    document.body.appendChild(msg);
  }

}, 1000);

/*
 websocket<-----
interpretar qr
acceso de ambos
*/
