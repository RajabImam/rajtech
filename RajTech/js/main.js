var newItemCounter = 1;
var list = document.getElementById("list");
var btn = document.getElementById("btn");
var heading = document.getElementById("headline");
var listItems = document.getElementById("list").getElementsByTagName("li");

for (i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", activateItem);
}

//list.addEventListener("click", activateItem);

function activateItem(){
	heading.innerHTML = this.innerHTML; 
}

/*function activateItem(e){
	//alert("Click detected!")
	
	if (e.target.nodeName == "LI ") {

		heading.innerHTML = e.target.innerHTML;	
	for (i = 0; i < e.target.parentNode.children.length; i++) {
	e.target.parentNode.children[i].classList.remove("current");
	}
	e.target.classList.add("current");

	}
}*/

btn.addEventListener("click", createNewItem);

function createNewItem(){
	list.innerHTML += "<li>New Item " + newItemCounter + "</li>";
	newItemCounter++;
}