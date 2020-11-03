let check_basket_btn = document.getElementsByClassName('check_basket')[0];	// Button in sendform
let basket_btns = document.querySelectorAll('.to_basket_btn');				// Buttons in menu
basket_btns = Array.prototype.slice.call(basket_btns, 0);					// Collection to array
basket_btns.push(check_basket_btn);

for (let btn of basket_btns) {
	btn.onmousedown = function() {
		// Color fill effect for the only 200ms after mouse click
		this.style.transition = "0.2s";
		this.style.boxShadow = "inset 0 0 0 2px #fff, inset 0 0 0 20px #D93646";
		let timer = setTimeout((btn = this) => {
			btn.style.boxShadow = "none";
		}, 200);
	}

	btn.onmouseover = function() {
		// Hover effect - creating the second border - after mouse over this element
		this.style.transition = "0.5s";
		this.style.boxShadow = "inset 0 0 0 2px #fff, inset 0 0 0 4px #D93646";
	}

	btn.onmouseout = function() {
		// Clear effects
		btn.style.boxShadow = "none";
	}
}

check_basket_btn.onmousedown = function() {
	// Deleting timet from previous effect
	this.style.transition = "0.2s";
	this.style.boxShadow = "inset 0 0 0 2px #fff, inset 0 0 0 20px #D93646";
}
check_basket_btn.onmouseup = function() {
	// Return transition after end of click
	this.style.transition = "0.5s";
	btn.style.boxShadow = "none";
}

let link_btns = [													// Button-links and send button in form
	...document.getElementsByClassName('link_to_another_page'),
	document.getElementsByClassName('submit_btn')[0]
];

for (let btn of link_btns) {
	btn.onmousedown = function() {
		// Fast change color after click
		this.style.backgroundColor = "#B12C39";
		this.style.transition = '0';;
	}

	btn.onmouseup = function() {
		// Return transition and change color back after end of click
		btn.style.backgroundColor = "#D93646";
		this.style.transition = '0.5s';
	}

	btn.onmouseover = function() {
		// Hover effect - creating the second border - after mouse over this element
		this.style.boxShadow = "inset 0 0 0 2px #fff";
	}

	btn.onmouseout = function() {
		// Deleting the second border and change color back after end of click
		btn.style.boxShadow = "none";
		btn.style.backgroundColor = "#D93646";
	}
}