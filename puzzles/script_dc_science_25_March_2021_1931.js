
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "स्थितिक विद्युत-(17)",
	 answer: "staticelectricity",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "परिसर-(12)",
	 answer: "surroundings",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 1
},
{
	 clue: "आकर्षण-(10)",
	 answer: "attraction",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 3
},
{
	 clue: "अपृष्ठवंशीय-(12)",
	 answer: "invertebrate",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 1,
	 starty: 5
},
{
	 clue: "हवाबंद-(8)",
	 answer: "airtight",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 5,
	 starty: 3
},
{
	 clue: "भूचर-(11)",
	 answer: "terrestrial",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 3,
	 starty: 7
},
{
	 clue: "पृथ्वी-(5)",
	 answer: "earth",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 1,
	 starty: 9
},
{
	 clue: "स्थितीस्थापकता-(10)",
	 answer: "elasticity",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 7,
	 starty: 5
},
{
	 clue: "वायू-(3)",
	 answer: "gas",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 5,
	 starty: 8
},
{
	 clue: "कबबोदक-(12)",
	 answer: "carbohydrate",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 14
},
{
	 clue: "तपांबर-(12)",
	 answer: "thermosphere",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 12,
	 starty: 3
},
{
	 clue: "खोड-(4)",
	 answer: "stem",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 9,
	 starty: 7
},
{
	 clue: "अपुष्प-(13)",
	 answer: "non-flowering",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 5,
	 starty: 13
},
{
	 clue: "संवर्धन-(12)",
	 answer: "conservation",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 9,
	 starty: 9
},
{
	 clue: "उल्का-(12)",
	 answer: "meteorshower",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 19
},
{
	 clue: "अशनीपात-(12)",
	 answer: "meteorshower",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 19
},
{
	 clue: "मृत-(4)",
	 answer: "dead",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 2,
	 starty: 18
},
{
	 clue: "सपुष्प-(9)",
	 answer: "flowering",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 5,
	 starty: 17
},
{
	 clue: "धूलीकण-(12)",
	 answer: "dustparticle",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 1,
	 starty: 22
},
{
	 clue: "रोग-(7)",
	 answer: "disease",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 2,
	 starty: 21
},
{
	 clue: "अशास्त्रीय-(12)",
	 answer: "unscientific",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 1,
	 starty: 23
},
{
	 clue: "परिपक्व-(6)",
	 answer: "mature",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 7,
	 starty: 17
},
{
	 clue: "कीटक-(6)",
	 answer: "insect",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 3,
	 starty: 21
},
{
	 clue: "पुनरुत्पादन-(12)",
	 answer: "reproduction",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 12,
	 starty: 16
},
{
	 clue: "प्रजनन-(12)",
	 answer: "reproduction",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 12,
	 starty: 16
},
{
	 clue: "अपरिवर्तनीय-(12)",
	 answer: "irreversible",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 1,
	 starty: 30
},
{
	 clue: "भूपृष्ठ-(12)",
	 answer: "earthsurface",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 3,
	 starty: 28
},
{
	 clue: "संघनन-(12)",
	 answer: "condensation",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 6,
	 starty: 26
},
{
	 clue: "स्रोत-(6)",
	 answer: "source",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 5,
	 starty: 27
},
{
	 clue: "तंतू-(5)",
	 answer: "fibre",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 10,
	 starty: 23
},
{
	 clue: "अर्घपारदर्शक-(11)",
	 answer: "translucent",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 8,
	 starty: 26
},
{
	 clue: "पूर्व-(4)",
	 answer: "east",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 1,
	 starty: 33
},
{
	 clue: "धूप-(7)",
	 answer: "erosion",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 2,
	 starty: 35
},
{
	 clue: "आंदोलन-(11)",
	 answer: "oscillation",
	 attempt: "", 
	 position: 31,
	 orientation: "down",
	 startx: 1,
	 starty: 37
},
{
	 clue: "खुरटे-(7)",
	 answer: "stunted",
	 attempt: "", 
	 position: 32,
	 orientation: "across",
	 startx: 6,
	 starty: 32
},
{
	 clue: "वर्धनीयता-(12)",
	 answer: "malleability",
	 attempt: "", 
	 position: 33,
	 orientation: "down",
	 startx: 11,
	 starty: 28
},
{
	 clue: "रासायनिक-(8)",
	 answer: "chemical",
	 attempt: "", 
	 position: 34,
	 orientation: "across",
	 startx: 1,
	 starty: 39
},
{
	 clue: "रसायन-(8)",
	 answer: "chemical",
	 attempt: "", 
	 position: 34,
	 orientation: "across",
	 startx: 1,
	 starty: 39
},
{
	 clue: "जीवसृष्टी-(11)",
	 answer: "livingworld",
	 attempt: "", 
	 position: 35,
	 orientation: "across",
	 startx: 1,
	 starty: 42
},
{
	 clue: "हवा-(3)",
	 answer: "air",
	 attempt: "", 
	 position: 36,
	 orientation: "down",
	 startx: 5,
	 starty: 38
},
{
	 clue: "रस-(3)",
	 answer: "sap",
	 attempt: "", 
	 position: 37,
	 orientation: "down",
	 startx: 7,
	 starty: 38
},
{
	 clue: "बरगडी-(3)",
	 answer: "rib",
	 attempt: "", 
	 position: 38,
	 orientation: "across",
	 startx: 10,
	 starty: 35
},
{
	 clue: "अपारंपारिक-(16)",
	 answer: "non-conventional",
	 attempt: "", 
	 position: 39,
	 orientation: "down",
	 startx: 5,
	 starty: 42
},
{
	 clue: "दंश-(4)",
	 answer: "bite",
	 attempt: "", 
	 position: 40,
	 orientation: "across",
	 startx: 9,
	 starty: 38
},
{
	 clue: "वातावरण-(11)",
	 answer: "atomosphere",
	 attempt: "", 
	 position: 41,
	 orientation: "down",
	 startx: 3,
	 starty: 45
},
{
	 clue: "धुके-(3)",
	 answer: "fog",
	 attempt: "", 
	 position: 42,
	 orientation: "down",
	 startx: 8,
	 starty: 41
},
{
	 clue: "छिद्र-(4)",
	 answer: "hole",
	 attempt: "", 
	 position: 43,
	 orientation: "down",
	 startx: 10,
	 starty: 40
},
{
	 clue: "वाहकता-(12)",
	 answer: "conductivity",
	 attempt: "", 
	 position: 44,
	 orientation: "down",
	 startx: 7,
	 starty: 44
},
{
	 clue: "कुपोषण-(12)",
	 answer: "malnutrition",
	 attempt: "", 
	 position: 45,
	 orientation: "down",
	 startx: 1,
	 starty: 50
},
{
	 clue: "पारंपरिक-(12)",
	 answer: "conventional",
	 attempt: "", 
	 position: 46,
	 orientation: "down",
	 startx: 5,
	 starty: 46
},
{
	 clue: "ध्वनी-(5)",
	 answer: "sound",
	 attempt: "", 
	 position: 47,
	 orientation: "across",
	 startx: 6,
	 starty: 45
},
{
	 clue: "उपांग-(12)",
	 answer: "appendicular",
	 attempt: "", 
	 position: 48,
	 orientation: "across",
	 startx: 1,
	 starty: 51
},
{
	 clue: "एकपेशीय-(11)",
	 answer: "unicellular",
	 attempt: "", 
	 position: 49,
	 orientation: "down",
	 startx: 9,
	 starty: 44
},
{
	 clue: "विस्थापन-(12)",
	 answer: "displacement",
	 attempt: "", 
	 position: 50,
	 orientation: "down",
	 startx: 11,
	 starty: 46
},
{
	 clue: "ज्ञानेंद्रीय-(12)",
	 answer: "sensoryorgan",
	 attempt: "", 
	 position: 51,
	 orientation: "down",
	 startx: 3,
	 starty: 57
},
{
	 clue: "प्रतिमा-(5)",
	 answer: "image",
	 attempt: "", 
	 position: 52,
	 orientation: "across",
	 startx: 7,
	 starty: 53
},
{
	 clue: "रेशीम-(4)",
	 answer: "silk",
	 attempt: "", 
	 position: 53,
	 orientation: "across",
	 startx: 3,
	 starty: 57
},
{
	 clue: "अंतर-(8)",
	 answer: "distance",
	 attempt: "", 
	 position: 54,
	 orientation: "down",
	 startx: 1,
	 starty: 63
},
{
	 clue: "सूक्मजीव-(14)",
	 answer: "micro-organism",
	 attempt: "", 
	 position: 55,
	 orientation: "down",
	 startx: 8,
	 starty: 57
},
{
	 clue: "अतिनील-(11)",
	 answer: "ultraviolet",
	 attempt: "", 
	 position: 56,
	 orientation: "down",
	 startx: 5,
	 starty: 60
},
{
	 clue: "हात-(4)",
	 answer: "hand",
	 attempt: "", 
	 position: 57,
	 orientation: "across",
	 startx: 9,
	 starty: 56
},
{
	 clue: "भेसळ-(12)",
	 answer: "adulteration",
	 attempt: "", 
	 position: 58,
	 orientation: "down",
	 startx: 10,
	 starty: 58
},
{
	 clue: "मृदा-(4)",
	 answer: "soil",
	 attempt: "", 
	 position: 59,
	 orientation: "across",
	 startx: 7,
	 starty: 61
},
{
	 clue: "दीप्तिीहीन-(12)",
	 answer: "non-luminous",
	 attempt: "", 
	 position: 60,
	 orientation: "across",
	 startx: 1,
	 starty: 68
},
{
	 clue: "असंतुलित-(4)",
	 answer: "bone",
	 attempt: "", 
	 position: 61,
	 orientation: "across",
	 startx: 7,
	 starty: 63
},
{
	 clue: "हाड-(4)",
	 answer: "bone",
	 attempt: "", 
	 position: 61,
	 orientation: "across",
	 startx: 7,
	 starty: 63
},
{
	 clue: "हरितलवक-(11)",
	 answer: "chloroplast",
	 attempt: "", 
	 position: 62,
	 orientation: "down",
	 startx: 12,
	 starty: 59
},
{
	 clue: "दीप्तिमान-(8)",
	 answer: "luminous",
	 attempt: "", 
	 position: 63,
	 orientation: "across",
	 startx: 5,
	 starty: 68
},
{
	 clue: "अवयव-(4)",
	 answer: "part",
	 attempt: "", 
	 position: 64,
	 orientation: "across",
	 startx: 7,
	 starty: 66
},
{
	 clue: "वाफ-(5)",
	 answer: "steam",
	 attempt: "", 
	 position: 65,
	 orientation: "across",
	 startx: 4,
	 starty: 70
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
