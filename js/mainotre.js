var d;
var m;
var s;

console.log(messageInTime.length);

setInterval(function(){

  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  console.log(m,s);

  if (messageInTime[m][s] == change) {
    console.log("change");
    var newchat = document.createElement("HR");
    newchat.classList.add("newchat");
    document.body.appendChild(newchat);
  } else if (messageInTime[m][s]) {
    var msg = document.createElement("div");
    msg.classList.add("msg");
    var chat = document.createElement("p");
    chat.classList.add("chat");
    var time = document.createElement("p");
    time.classList.add("time");
    chat.innerHTML = messageInTime[m][s];

    //arregla el tiempo cuando hay un solo digito
    if (m < 10 && h > 9) {
      time.innerHTML = h + ":0" + m;
    } else if (m < 10 && h < 10) {
      time.innerHTML = "0" + h + ":0" + m;
    } else if (m > 9 && h < 10) {
      time.innerHTML = "0" + h + ":" + m;
    } else {
      time.innerHTML = h + ":" + m;
    }

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
