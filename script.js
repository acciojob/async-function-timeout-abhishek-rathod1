//your JS code here. If required.


// button.addEventListener("click", fxn(msg,dly));

async function fxn(){
	const msg = document.getElementById("text").value;
	const dly = document.getElementById("delay").value;
	const button = document.getElementById("btn");
	console.log("message: ", msg);
	console.log("Delay: ", dly);
	await setTimeout(()=>{
		console.log("message: ", msg);
		console.log("Delay: ", dly);
		document.getElementById("output").innerHTML = `<p>${msg}</p>`;
		
	},dly*1000)
}

//dd dd