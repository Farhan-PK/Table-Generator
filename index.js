// *********************Table Genrator Function*******************************
function call() {
  var numTable = document.getElementById("inputNumber").value;
  // numTable convert to Number because input feild send string value
  numTable = Number(numTable); /*Using Number() method*/

  for (var i = 1; i <= 10; i++) {
    var div = document.getElementById("table_footer");
    div.innerHTML +=
      numTable +
      "&nbsp;&nbsp;&#215;&nbsp;&nbsp;" +
      i +
      "&nbsp;&nbsp;&#61;&nbsp;&nbsp;" +
      numTable * i +
      "<br/>";
  }
}
// ******************Page Reload Function***********************************
function reloadPage() {
  window.location.reload();
}
