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
  // Handle errors.
	};
	request.onupgradeneeded = function(event) {
  	var db = event.target.result;

  // Create an objectStore to hold information about our customers. We're
  // going to use "ssn" as our key path because it's guaranteed to be
  // unique - or at least that's what I was told during the kickoff meeting.
  	var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // Create an index to search customers by name. We may have duplicates
  // so we can't use a unique index.
 	 objectStore.createIndex("name", "name", { unique: false });

  // Create an index to search customers by email. We want to ensure that
  // no two customers have the same email, so use a unique index.
  	objectStore.createIndex("email", "email", { unique: true });

  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
  	objectStore.transaction.oncomplete = function(event) {
    // Store values in the newly created objectStore.
    	var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
    	customerData.forEach(function(customer) {
      	customerObjectStore.add(customer);
    	});
  	};
	};
  console.log(message.txt);
  if (message.txt === 'hello') 
  {
  		var md = document.addEventListener("mouseover",onmousedown);
  		var mo = document.addEventListener("mouseout", mouseOut);

		var eDepth = 1
		var eID = 0;
		
    		const newElement = document.createElement('input');
    		newElement.type = "checkbox";

//Triggered by MouseDown
		function onmousedown(md){
   // console.log(pageX,pageY);
   			var pageX = md.clientX;
    		var pageY = md.clientY;
    		var parent = document.elementFromPoint(pageX, pageY);
   // console.log("Clicked on",parent,"mouse position", pageX, pageY)
    		console.log("target Element",md.target.tagName);
    		createElement(md,pageX,pageY,parent);
		}

//Creates an element and passes to Append
		function createElement(md,pageX,pageY,parent){
    
    		newElement.id = 'newElement' + eID; eID++;
    //console.log("newelementId",newElement.id);
    		appendElement(md,newElement,parent);  
    
		}
		function appendElement(md,newElement,parent){
    //console.log(parent); 
   		 var contentDiv = document.getElementById(parent.id);
   // console.log("got parent",contentDiv);
    		contentDiv.appendChild(newElement);
    		const parentBox = parent.getBoundingClientRect();
    		const newElementBox = newElement.getBoundingClientRect();
   
		}
				function mouseOut(mo){
    		if(newElement.checked == false){
    			newElement.removeChild(newElement)

    		}
    		console.log("heheheh mf");
    		//createElement(md,pageX,pageY,parent);
		}


  	let paragraphs = document.getElementsByTagName('*');
    for (elt of paragraphs)
    {
    	//elt.addEventListener("mouseover",mouseOver);
      	elt.style['background-color'] = '#FF00FF';
      	console.log(elt)
    }

  }
}
