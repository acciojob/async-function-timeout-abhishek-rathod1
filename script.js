//your JS code here. If required.


// button.addEventListener("click", fxn(msg,dly));

	document.getElementById("output").innerHTML = "";
async function fxn(){
	const msg = document.getElementById("text").value;
	const dly = document.getElementById("delay").value;
	const button = document.getElementById("btn");
	// console.log("message: ", msg);
	// console.log("Delay: ", dly);
	await setTimeout(()=>{
		// console.log("message: ", msg);
		// console.log("Delay: ", dly);
		document.getElementById("output").textContent = msg;
		// console.log(document.getElementById("output").textContent);
	},dly*1000)
}

//dd dd