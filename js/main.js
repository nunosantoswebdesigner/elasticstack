// selecionar elemento html
var microphone = document.getElementById('microphone');

// selecionar evento onclick do elemento html
microphone.onclick=function(){
    
    // selecionar elementos de texto a retirar
    document.getElementById("info").style.display = "none"; 
    
    // adicionar uma class ao elemento
    microphone.classList.add("record");
    
    // cria novo objecto SpeechRecognition
	var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

    
    recognition.lang = 'pt-PT';
	recognition.start();
    
    //operations = {"plus":"+",
	//			 "minus":"-",
	//			 "multiply":"*",
	//			 "multiplied":"*",
	//			 "divide":"/",
	//			 "divided":"/",
	//			 "reminder":"%"}
	
	recognition.onresult = function(event){
		var input = event.results[0][0].transcript;
		for(property in operations){
			input= input.replace(property, operations[property]);
        }
        
		document.getElementById("output-value").innerText = input;
		setTimeout(function(){
            evaluate(input);
            console.log(input)
		},2000000);
		microphone.classList.remove("record");
	}
	
}
function evaluate(input){
	try{
		var result = eval(input);
		document.getElementById("output-value").innerText = result;
	}
	catch(e){
		console.log(e);
		document.getElementById("output-value").innerText = "";
	}
}