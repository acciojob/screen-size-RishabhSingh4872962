const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");


window.onresize =  () =>{
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
	console.log("l")
}
;
