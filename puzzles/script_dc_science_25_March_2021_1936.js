
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "static electricity-(6)",
	 answer: "स्थितिकविद्युत",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 1
},
{
	 clue: "elasticity-(6)",
	 answer: "स्थितीस्थापकता",
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
	 orientation: "across",
	 startx: 1,
	 starty: 4
},
{
	 clue: "soluble-(3)",
	 answer: "विद्राव्य",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 4,
	 starty: 1
},
{
	 clue: "potential-(3)",
	 answer: "स्थितिज",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 3,
	 starty: 4
},
{
	 clue: "tenacity-(3)",
	 answer: "तन्यता",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 6,
	 starty: 1
},
{
	 clue: "tension-(2)",
	 answer: "ताण",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 1,
	 starty: 6
},
{
	 clue: "hydrosphere-(5)",
	 answer: "जलावरण",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 3,
	 starty: 6
},
{
	 clue: "temperature-(4)",
	 answer: "तापमान",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 6,
	 starty: 3
},
{
	 clue: "weather-(4)",
	 answer: "हवामान",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 8,
	 starty: 1
},
{
	 clue: "airtight-(4)",
	 answer: "हवाबंद",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 8,
	 starty: 1
},
{
	 clue: "air-(2)",
	 answer: "हवा",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 8,
	 starty: 1
},
{
	 clue: "wave-(2)",
	 answer: "लाट",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 4,
	 starty: 6
},
{
	 clue: "immovable-(3)",
	 answer: "अचल",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 2,
	 starty: 8
},
{
	 clue: "atom-(2)",
	 answer: "अणू",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 2,
	 starty: 8
},
{
	 clue: "creep-(5)",
	 answer: "सरपटणे",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 6,
	 starty: 5
},
{
	 clue: "marsh-(4)",
	 answer: "दलदल",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 1,
	 starty: 10
},
{
	 clue: "sky-(3)",
	 answer: "खगोल",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 4,
	 starty: 8
},
{
	 clue: "south-(3)",
	 answer: "दक्षिण",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 11,
	 starty: 1
},
{
	 clue: "freezing-(3)",
	 answer: "गोठणे",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 4,
	 starty: 9
},
{
	 clue: "hard-(3)",
	 answer: "टणक",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 6,
	 starty: 8
},
{
	 clue: "source-(2)",
	 answer: "स्रोत",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 2,
	 starty: 12
},
{
	 clue: "non-linear-(5)",
	 answer: "नैकरेषीय",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 8,
	 starty: 7
},
{
	 clue: "thermosphere-(4)",
	 answer: "तपांबर",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 2,
	 starty: 13
},
{
	 clue: "appendicular-(3)",
	 answer: "उपांग",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 1,
	 starty: 14
},
{
	 clue: "viviparous-(4)",
	 answer: "जरायुज",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 5,
	 starty: 11
},
{
	 clue: "mutual-(4)",
	 answer: "परस्पर",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 1,
	 starty: 16
},
{
	 clue: "rotation-(5)",
	 answer: "परिवलन",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 1,
	 starty: 16
},
{
	 clue: "silk-(3)",
	 answer: "रेशीम",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 8,
	 starty: 9
},
{
	 clue: "ionosphere-(5)",
	 answer: "आयनांबर",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 7,
	 starty: 11
},
{
	 clue: "cycle-(4)",
	 answer: "आवर्तन",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 7,
	 starty: 11
},
{
	 clue: "reproduction-(4)",
	 answer: "प्रजनन",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 4,
	 starty: 14
},
{
	 clue: "spread-(3)",
	 answer: "प्रसार",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 4,
	 starty: 14
},
{
	 clue: "snow-(2)",
	 answer: "हिम",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 10,
	 starty: 8
},
{
	 clue: "garment-(2)",
	 answer: "वस्त्र",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 1,
	 starty: 18
},
{
	 clue: "funnel-(4)",
	 answer: "नरसाळे",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 6,
	 starty: 14
},
{
	 clue: "stimulus-(3)",
	 answer: "प्रेरणा",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 11,
	 starty: 10
},
{
	 clue: "similarity-(2)",
	 answer: "साम्य",
	 attempt: "", 
	 position: 31,
	 orientation: "across",
	 startx: 6,
	 starty: 16
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
