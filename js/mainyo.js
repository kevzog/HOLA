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
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  console.log(m,s);

  if (messageInTime[m][s]) {
    var msg = document.createElement("div");
    msg.classList.add("msg");
    var chat = document.createElement("p");
    chat.classList.add("chat");
    var time = document.createElement("p");
    time.classList.add("time");
    time.innerHTML = h + ":" + m;
    chat.innerHTML = messageInTime[m][s];
    msg.appendChild(chat);
    msg.appendChild(time);
    document.body.appendChild(msg);
  }

}, 1000);

/*
 websocket<-----
interpretar qr
acceso de ambos
*/
