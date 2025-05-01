//your JS code here. If required.


// button.addEventListener("click", fxn(msg,dly));

// document.getElementById("output").textContent = "";
async function fxn(){
document.getElementById("output").textContent = "";
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