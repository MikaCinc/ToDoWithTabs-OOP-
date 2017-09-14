window.onload = function() {
	add()
}

function List_Constructor(klasa) {
	var input_e;
	var ol_e;
	var button_e;
	var div_e;
	this.input = function() {
		input_e = document.createElement("input")
		input_e.type = "text"
		input_e.className = "default_input"
		div_e.appendChild(input_e)
	}
	this.button = function() {
		button_e = document.createElement("button")
		button_e.innerHTML = "Potvrdi"
		button_e.className = "button_blue"
		button_e.addEventListener("click", function () {
			var li = document.createElement("li")
			var txt = document.createTextNode(input_e.value)
			li.appendChild(txt)
			ol_e.appendChild(li)
			// ----span "x"
			var span = document.createElement("span")
			var span_X = document.createTextNode("X")
			span.appendChild(span_X)
			span.className = "close"
			li.appendChild(span)
			span.addEventListener("click", function () {
					this.parentElement.style.display = "none"
				}, false)			
		})
		div_e.appendChild(button_e)
	}
	this.ol = function() {
		ol_e = document.createElement("ol")
		div_e.appendChild(ol_e)
	}
	this.div = function () {
		div_e = document.createElement("div")
		div_e.className = "list"
		document.getElementById("listee").appendChild(div_e)
	}
	this.klasa = klasa
	this.ask_name = function askName() {
		var name_prompt = prompt("Upiši ime liste: ")
		this.name = name_prompt
		if(this.name == null){
			return "Lista"
		} else {
			return this.name
		}
	} 
	this.create = function () {
		var p = document.createElement("p")
		// ----span "x"
		var span = document.createElement("span")
		span.innerHTML = "X"
		span.className = "close"
		span.addEventListener("click", function () {
				this.parentElement.style.display = "none"
				div_e.style.display = "none"
			})	
		// PEN (EDIT)
		var pen = document.createElement("span")
		pen.innerHTML = "🖉"
		pen.className = "edit"
		pen.addEventListener("click", function () {
				p.innerHTML = prompt("Upiši novo ime liste: ")
				p.appendChild(span)
				p.appendChild(pen)
			})	
		p.innerHTML = this.ask_name()
		p.appendChild(span)
		p.appendChild(pen)
		p.className = klasa
		p.addEventListener("click", function() {
			var x = document.getElementsByClassName("list")
			for(var i=0; i<x.length; i++){
				x[i].style.display = "none"
				div_e.style.display = "block"
			}
		})
		document.getElementById("tabovi").appendChild(p)
	}
	this.hide_show = function() {
		var x = document.getElementsByClassName("list")
		for(var i=0; i<x.length; i++){
			x[i].style.display = "none"
			div_e.style.display = "block"
		}
	}
}

function add() {
	var list = new List_Constructor("tab")
	list.div()
	list.input()
	list.button()
	list.ol()
	list.create()
	list.hide_show()
}


// Rađeni su prvo posebno zbog testiranja; na kraju su svi Constructori spojeni
// u jedan List_Constructor...

/*
function Tab_Constructor(klasa, ) {
	this.klasa = klasa
	this.ask_name = function() {
		var name_prompt = prompt("Upiši ime liste: ")
		this.name = name_prompt
		if(this.name == null){
			return "Lista"
		} else {
			return this.name
		}
	} 
	this.create = function () {
		var p = document.createElement("p")
		p.innerHTML = this.ask_name()
		p.className = klasa
		//p.addEventListener("click", alert("clicked"))
		document.getElementById("tabovi").appendChild(p)
	}
	this.clicked
}
*/


/*
function Li_Constructor(input) {
	this.input = input
	this.add = function () {
		var li = document.createElement("li")
		var txt = document.createTextNode(input)
		li.appendChild(txt)
		document.getElementById("ol").appendChild(li)
	}
}

function potvrdi() {
	var li = new Li_Constructor(document.getElementById("input").value)
	li.add()
}
*/