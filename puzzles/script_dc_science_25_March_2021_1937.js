
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "photosynthesis-(7)",
	 answer: "प्रकाशसंश्लेषण",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "firstaid-(6)",
	 answer: "प्रथमोपचार",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 1
},
{
	 clue: "light-(3)",
	 answer: "प्रकाश",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "condition-(4)",
	 answer: "परिस्थिती",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 4,
	 starty: 1
},
{
	 clue: "compound-(3)",
	 answer: "संयुक्त",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 1,
	 starty: 4
},
{
	 clue: "potential-(3)",
	 answer: "स्थितिज",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 4,
	 starty: 3
},
{
	 clue: "blood-(2)",
	 answer: "रक्त",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 6,
	 starty: 1
},
{
	 clue: "hydrosphere-(5)",
	 answer: "जलावरण",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 6,
	 starty: 3
},
{
	 clue: "type-(3)",
	 answer: "प्रकार",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 4,
	 starty: 6
},
{
	 clue: "reproduction-(4)",
	 answer: "प्रजनन",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 4,
	 starty: 6
},
{
	 clue: "research-(4)",
	 answer: "संशोधन",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 9
},
{
	 clue: "condensation-(4)",
	 answer: "संघनन",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 1,
	 starty: 9
},
{
	 clue: "wearing-(2)",
	 answer: "झीज",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 3,
	 starty: 7
},
{
	 clue: "weathering-(2)",
	 answer: "झीज",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 3,
	 starty: 7
},
{
	 clue: "circle-(3)",
	 answer: "वर्तुळ",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 6,
	 starty: 5
},
{
	 clue: "melting-(4)",
	 answer: "वितळणे",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 8,
	 starty: 3
},
{
	 clue: "toxic-(3)",
	 answer: "विषारी",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 8,
	 starty: 3
},
{
	 clue: "poisonous-(3)",
	 answer: "विषारी",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 8,
	 starty: 3
},
{
	 clue: "torso-(2)",
	 answer: "धड",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 3,
	 starty: 9
},
{
	 clue: "renewable-(6)",
	 answer: "नवीकरणीय",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 1,
	 starty: 12
},
{
	 clue: "transparent-(5)",
	 answer: "पारदर्शक",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 4,
	 starty: 11
},
{
	 clue: "organic-(3)",
	 answer: "सेंद्रीय",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 6,
	 starty: 10
},
{
	 clue: "solution-(3)",
	 answer: "द्रावण",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 2,
	 starty: 14
},
{
	 clue: "pole-(2)",
	 answer: "ध्रुव",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 1,
	 starty: 15
},
{
	 clue: "classification-(5)",
	 answer: "वर्गीकरण",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 2,
	 starty: 15
},
{
	 clue: "universal-(3)",
	 answer: "वैश्विक",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 1,
	 starty: 17
},
{
	 clue: "cereal-(4)",
	 answer: "तृणधान्य",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 6,
	 starty: 14
},
{
	 clue: "pulses-(4)",
	 answer: "कडधान्य",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 3,
	 starty: 17
},
{
	 clue: "hardness-(5)",
	 answer: "कठीणपणा",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 3,
	 starty: 17
},
{
	 clue: "grass-(2)",
	 answer: "तृण",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 6,
	 starty: 14
},
{
	 clue: "property-(4)",
	 answer: "गुणधर्म",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 2,
	 starty: 19
},
{
	 clue: "stimulus-(3)",
	 answer: "प्रेरणा",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 1,
	 starty: 21
},
{
	 clue: "grain-(2)",
	 answer: "धान्य",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 6,
	 starty: 16
},
{
	 clue: "thread-(2)",
	 answer: "धागा",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 5,
	 starty: 17
},
{
	 clue: "chemical-(4)",
	 answer: "रसायन",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 2,
	 starty: 21
},
{
	 clue: "density-(3)",
	 answer: "घनता",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 1,
	 starty: 24
},
{
	 clue: "component-(3)",
	 answer: "घटक",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 1,
	 starty: 24
},
{
	 clue: "tension-(2)",
	 answer: "ताण",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 3,
	 starty: 24
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
