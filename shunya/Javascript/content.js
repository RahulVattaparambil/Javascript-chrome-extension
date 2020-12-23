console.log('Chrome extension go?');


chrome.runtime.onMessage.addListener(gotMessage);
var url = window.location.href;
var check = document.createElement("INPUT").setAttribute("type", "checkbox");
const customerData = [
  { ssn: "444-44-4444", name: url, age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];

function gotMessage(message, sender, sendResponse) 
{
  const dbName = "the_name";

	var request = indexedDB.open(dbName, 2);
	localStorage.setItem('name', url)

	request.onerror = function(event) {
  
	};
	request.onupgradeneeded = function(event) {
  	var db = event.target.result;
  	var objectStore = db.createObjectStore("usersurl");


 	 //objectStore.createIndex("name", "name", { unique: false });

  
  	//objectStore.createIndex("email", "email", { unique: true });

  
  	objectStore.transaction.oncomplete = function(event) {
    
    	var userObjectStore = db.transaction("usersurl", "readwrite").objectStore("usersurl");
    	
      	userObjectStore.add(url,"urlname");
    	
  	};
	};
  console.log(message.txt);
  if (message.txt === 'hello') 
  {
  		var md = document.addEventListener("mouseover",onmousedown);
  		var mo = document.addEventListener("mouseout", mouseOut);
  		var contentDiv;

		var eDepth = 1
		var tID = 1000;
		var eID = 0;
		
    		const newElement = document.createElement('input');
    		newElement.type = "checkbox";

    	let paragraphs = document.getElementsByTagName('*');
    	for (elt of paragraphs)
    	{
    		
    		
    			elt.id = 'setElementid' + tID; tID++;
      			//elt.style['background-color'] = '#FF00FF';
      			console.log("hello")
      		
    	}


		function onmousedown(md){
   
   			var pageX = md.clientX;
    		var pageY = md.clientY;
    		var parent = document.elementFromPoint(pageX, pageY);
   
    		console.log("target Element",md.target.tagName);
    		createElement(md,pageX,pageY,parent);
		}


		function createElement(md,pageX,pageY,parent){
    		
    		
    		newElement.id = 'newElement' + eID; eID++;
    
    		appendElement(md,newElement,parent);  
    
		}
		function appendElement(md,newElement,parent){
     
   		    contentDiv = document.getElementById(parent.id);
   
    		contentDiv.appendChild(newElement);
    		const parentBox = parent.getBoundingClientRect();
    		const newElementBox = newElement.getBoundingClientRect();
   
		}
		function mouseOut(mo){
    		if(newElement.checked == false){
    			contentDiv.removeChild(newElement)

    		}
    		console.log("heheheh");
    		
		}

  }
}
