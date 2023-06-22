//your JS code here. If required.
let element=document.getElementById('level');
let level=0;
if(element){
	let currelement=element;
	while(currelement.parentNode){
		currelement=currelement.parentNode;
		level++;
	}
}
alert("The level of the element is: "+ level);

