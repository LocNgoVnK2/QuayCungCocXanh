var step=30; // change this to different step value
document.addEventListener('keyup', (e) => {
  if (e.code === "ArrowUp") {
	x -= 10
	var x=document.getElementById('i1').offsetTop;
	x= x - step;
	document.getElementById('i1').style.top= x + "px";
	}
  else if (e.code === "ArrowDown"){
	x -= 10
	var x=document.getElementById('i1').offsetTop;
	x= x + step;
	document.getElementById('i1').style.top= x + "px";
	}
  else if (e.code === "ArrowLeft"){
	x -= 10
	var x=document.getElementById('i1').offsetLeft;
	x= x - step;
	document.getElementById('i1').style.left= x + "px";
	}
  else if (e.code === "ArrowRight") {
	x -= 10
	var x=document.getElementById('i1').offsetLeft;
	x= x + step;
	document.getElementById('i1').style.left= x + "px";
	}

});
function myFunction() {
	
  var x = document.createElement("img");
  x.setAttribute("src", "https://i.gifer.com/3nRK.gif");
  x.setAttribute("width", "5%");
  x.setAttribute("height", "10%");
  x.setAttribute("id", "food");
  x.setAttribute("style","position:absolute; left: "+(Math.random() * 1400)+"; top: "+(Math.random() * 550)+";")
  document.body.appendChild(x);
}
