function subscribe() {
  var subscribe = document.getElementById("email");

  var r = new XMLHttpRequest();

  r.onreadystatechange = function () {
    if (r.readyState == 4) {
      var t = r.responseText;
      if (t == "Success") {
        alert("Newsletter has sent to your email. Please check your inbox");
        window.location.reload();
      } else {
        alert(t);
      }
    }
  };

  r.open("GET", "newsProcess.php?e=" + email.value, true);
  r.send();
}
