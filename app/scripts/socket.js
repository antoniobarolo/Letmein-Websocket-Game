var ws = new WebSocket("ws://localhost:8181");
var nickname = "";

ws.onopen = function(e) {
  console.log('Connection to server opened');
}

function appendLog(nickname, message) {
  var messages = document.getElementById('messages');
  var messageElem = document.createElement("li");
  var preface_label;
  if(nickname==='*') {
      preface_label = "<span class=\"label label-info\">*</span>";
  } else {
      preface_label = "<span class=\"label label-success\">" + nickname + "</span>";
  }
  var message_text = "<h2>" + preface_label + "&nbsp;&nbsp;" + message + "</h2>";
  messageElem.innerHTML = message_text;
  messages.appendChild(messageElem);
}

ws.onmessage = function(e) {
  var data = JSON.parse(e.data);
  nickname = data.nickname;
  appendLog(data.nickname, data.message);
  console.log("ID: [%s] = %s", data.id, data.message);
}

ws.onclose = function(e) {
  appendLog("*", "Connection closed");
  console.log("Connection closed");
}

function sendMessage() {
  var messageField = document.getElementById('message');
   if(ws.readyState === WebSocket.OPEN) {
       ws.send(messageField.value);
   }
   messageField.value = '';
   messageField.focus();
}

function disconnect() {
  ws.close();
}
