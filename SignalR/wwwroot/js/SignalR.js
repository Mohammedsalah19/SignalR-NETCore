var conn = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

// send data to chathub
$("#btnSend").click(function () {

    var fromUser = $("#userName").val();
    var message = $("#message").val();
    conn.invoke("SendMessage", fromUser, message);
});

//recieve data from chathub
conn.on("reciveMsg", function (fromUser, message) {
    var msg = fromUser + "-> " + message;
    var li = document.createElement("li");
    li.textContent = msg;
    $("#chatList").prepend(li);
});

// start conn
conn.start();

// enter key

$("#message").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#btnSend").click();
        $("#message").val("");


    }
});

