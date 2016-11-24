var s = skrollr.init({
		//smoothScrolling: true,
		//smoothScrollingDuration: 200,
		edgeStrategy: 'set',
		easing: {
			WTF: Math.random,
			inverted: function(p) {
				return 1-p;
			}
		}
});
// Auto Scroll
function startScroll() {
window.scrollBy(0,3);
scrolldelay = setTimeout(startScroll,6);
}
function startScrollBack() {
window.scrollBy(0,-3);
scrolldelayBack = setTimeout(startScrollBack,6);
}
// stopScroll
function stopScroll() {
clearTimeout(scrolldelay);
clearTimeout(scrolldelayBack);
}
// Control
document.addEventListener("keydown", function(event) {
console.log(event);
if(event.altKey && (event.keyCode == 65)){ // Alt+A
    startScroll();
}
if(event.altKey && (event.keyCode == 83)){ // Alt+S
    stopScroll();
}
if(event.altKey && (event.keyCode == 66)){ // Alt+B
    startScrollBack();
}         
});