//your JS code here. If required.


// button.addEventListener("click", fxn(msg,dly));

// document.getElementById("output").textContent = "";
async function fxn(){
document.getElementById("output").textContent = "";
	const msg = document.getElementById("text").value;
	const dly = document.getElementById("delay").value;
	const button = document.getElementById("btn");
	
	await new Promise(resolve => setTimeout(resolve, dly*1000));
	document.getElementById("output").textContent = msg;
}

//dd dd