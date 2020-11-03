const show_nav_btn = document.getElementsByClassName('show_nav_btn')[0];
const navigation = document.getElementsByClassName('header_navigation')[0];
const navigation_list =document.getElementsByClassName('header_navigation_list')[0];
const row_back = document.getElementsByClassName('row_back')[0];

const MOBILE_NAV_STYLE = {
	position: 'fixed',
	height: '100vh',
	width: '100vw',
	margin: '0',
	backgroundColor: 'rgba(0,0,0,.5)',
	display: 'block',
	top: '0',
	left: '0',
	zIndex: '5'
}

const PC_NAV_STYLE = {
	display: 'block',
	margin: '0',
	width: '50%',
	position: 'static',
	height: '100%',
	backgroundColor: 'transparent'
}


function setStylesForPc() {
	for (let nav_style in PC_NAV_STYLE) {
		navigation.style[nav_style] = PC_NAV_STYLE[nav_style];
	}

	navigation.style.display = 'block';
	show_nav_btn.style.display = 'none';
}


function setStylesForMobile() {
	for (let nav_style in MOBILE_NAV_STYLE) {
		navigation.style[nav_style] = MOBILE_NAV_STYLE[nav_style];
	}

	navigation.style.display = 'none';
	show_nav_btn.style.display = 'block';  
}


show_nav_btn.onclick = function() {
	for (let nav_style in MOBILE_NAV_STYLE) {
		navigation.style[nav_style] = MOBILE_NAV_STYLE[nav_style];
	}

	show_nav_btn.style.display = 'none';

	let timer = setTimeout(() => {
		navigation_list.style.right = '0';
	}, 30);

	let timer2 = setTimeout(() => {
		row_back.style.display = 'block';
	}, 270);

	document.body.style.overflow = 'hidden';
}

row_back.onclick = function() {
	for (let nav_style in PC_NAV_STYLE) {
		navigation.style[nav_style] = PC_NAV_STYLE[nav_style];
	}

	row_back.style.display = 'none';
	let width = navigation_list.offsetWidth;

	let timer = setTimeout(() => {
		navigation_list.style.right = `-${width}px`;
	}, 30);

	let timer2 = setTimeout(() => {
		show_nav_btn.style.display = 'block';
		navigation.style.display = 'none';
	}, 90);

	document.body.style.overflow = 'scroll';
}


window.onresize = function() {
	if (document.body.clientWidth >= 768) {
		setStylesForPc();
	}
	else {
		setStylesForMobile();
	}
}