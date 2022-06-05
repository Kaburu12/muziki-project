//	mouseover function
function mouseOverImg(x) {
    x.style.height = "250px";
    x.style.width = "250px";
    x.style.cursor="pointer"
  }
  
  function standardImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
  }
  
  //alert message onclick  subscription button
  const input = document.getElementById('button');
  
  function onClickAlert() {
    alert("Thank You For Subscribing with Us");
  }
  
  input.addEventListener('click', onClickAlert);