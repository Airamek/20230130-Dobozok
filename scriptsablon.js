/*
Ha rákattintunk homályosodjon el, újra rákattintva élesedjen vissza.
*/

// belső állapot meghatározása
let isBlurred = false;
// action
document.getElementById("element-one").onclick = function() {
	// állapot változás
	isBlurred = !isBlurred;
	// render
	if (isBlurred)
		document.getElementById("element-one").classList.add("blur");
	else
		document.getElementById("element-one").classList.remove("blur");
}


// 2.doboz Ha ráhúzzuk az egeret legyen piros a háttérszíne
document.getElementById("element-two").onmouseover = function() {
	document.getElementById("element-two").style.backgroundColor = "red";
}
document.getElementById("element-two").onmouseout = function() {
	document.getElementById("element-two").style.backgroundColor = "orange";
}

// 3.doboz Dupla kattintással sorsolja ki a jackpot nyerőszámokat 1 és 50 között és módosítsa a kapott számmal a doboz tartalmát, az éppen kisorolt számmal

function getRandom(min, max)
{
	return Math.round(Math.random()*(max-min)+min);
}

document.getElementById("element-three").ondblclick = function() {
	document.getElementById("element-three").firstElementChild.innerHTML = getRandom(1,90);
}

// 4.doboz formázása

document.getElementById("element-four").onclick = function() {
	document.getElementById("element-four").style.display = "none";
	setTimeout(function() {
		document.getElementById("element-four").style.display = "block";
	}, 1000)
	
}

// 5.doboz

let isRound = false

document.getElementById("element-five").onclick = function() {
	isRound = !isRound;
	if(isRound) {
		boxes = document.querySelectorAll(".shape");
		for(const box of boxes)
		{
			box.style.borderRadius = "50%";
		}
	}
	else {
		boxes = document.querySelectorAll(".shape");
		for(const box of boxes)
		{
			box.style.borderRadius = "3px";
		}
	}
}

// 6.doboz
document.getElementById("element-six").onsubmit = function(event) {
	event.preventDefault();
	document.getElementById("element-six").firstElementChild.innerHTML = event.target.elements.boxNumber.value;
}

//7.doboz

document.getElementById("box-7").firstElementChild.onkeyup = function(event) {
	document.getElementById("element-seven").firstElementChild.innerHTML = event.key;
}

// 8.doboz
document.onmousemove = function(event) {
	document.getElementById("element-eight").firstElementChild.innerHTML = `X: ${event.clientX}, Y: ${event.clientY}`
}

//9.doboz

document.getElementById("box-9").onsubmit = function(event) {
	event.preventDefault();
	let operator = event.target.elements.operator.value;
	let operand =  parseInt(event.target.elements.operand.value);

	let state = parseInt(szam.innerHTML);
	document.getElementById("element-nine").firstElementChild.innerHTML = eval(`state ${operator} ${operand}`);
}

//10.doboz
document.getElementById("element-ten").onclick = function () {
	alert("Igyál vizet!")
}

//11.doboz
let vissza = false;
document.getElementById("element-eleven").onclick = function () {
	vissza = !vissza;
	if (vissza)
		document.getElementById("element-eleven").parentElement.style.flexDirection = "row-reverse";
	else
		document.getElementById("element-eleven").parentElement.style.flexDirection = "row";
}

//12.doboz
document.getElementById("element-twelve").onclick = function () {
	document.body.innerHTML="kappa";
}
