
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
	 clue: "संशोधन-(8)",
	 answer: "research",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 3,
	 starty: 1
},
{
	 clue: "तपांबर-(12)",
	 answer: "thermosphere",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 1,
	 starty: 4
},
{
	 clue: "कबबोदक-(12)",
	 answer: "carbohydrate",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 6
},
{
	 clue: "वाहकता-(12)",
	 answer: "conductivity",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 1,
	 starty: 10
},
{
	 clue: "बाह्यत्वचा-(9)",
	 answer: "epidermis",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 8,
	 starty: 3
},
{
	 clue: "धूलीकण-(12)",
	 answer: "dustparticle",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 5,
	 starty: 9
},
{
	 clue: "तृणधान्य-(6)",
	 answer: "cereal",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 12,
	 starty: 3
},
{
	 clue: "जड-(5)",
	 answer: "heavy",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 3,
	 starty: 12
},
{
	 clue: "अपृष्ठवंशीय-(12)",
	 answer: "invertebrate",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 15
},
{
	 clue: "वैश्विक-(9)",
	 answer: "universal",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 10,
	 starty: 8
},
{
	 clue: "खनिज-(7)",
	 answer: "mineral",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 7,
	 starty: 12
},
{
	 clue: "एकपेशीय-(11)",
	 answer: "unicellular",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 2,
	 starty: 18
},
{
	 clue: "अशास्त्रीय-(12)",
	 answer: "unscientific",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 1,
	 starty: 20
},
{
	 clue: "पुनरुत्पादन-(12)",
	 answer: "reproduction",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 3,
	 starty: 20
},
{
	 clue: "प्रजनन-(12)",
	 answer: "reproduction",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 3,
	 starty: 20
},
{
	 clue: "रस-(3)",
	 answer: "sap",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 1,
	 starty: 22
},
{
	 clue: "अपरिवर्तनीय-(12)",
	 answer: "irreversible",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 12,
	 starty: 12
},
{
	 clue: "मानवनिर्मित-(8)",
	 answer: "man-made",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 6,
	 starty: 21
},
{
	 clue: "बाहू-(3)",
	 answer: "arm",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 6,
	 starty: 22
},
{
	 clue: "अपारंपारिक-(16)",
	 answer: "non-conventional",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 10,
	 starty: 20
},
{
	 clue: "सूक्मजीव-(14)",
	 answer: "micro-organism",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 8,
	 starty: 22
},
{
	 clue: "प्रकार-(4)",
	 answer: "type",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 3,
	 starty: 28
},
{
	 clue: "संघनन-(12)",
	 answer: "condensation",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 1,
	 starty: 31
},
{
	 clue: "आंदोलन-(11)",
	 answer: "oscillation",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 2,
	 starty: 31
},
{
	 clue: "पारंपरिक-(12)",
	 answer: "conventional",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 10,
	 starty: 24
},
{
	 clue: "अशनीपात-(12)",
	 answer: "meteorshower",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 5,
	 starty: 30
},
{
	 clue: "उल्का-(12)",
	 answer: "meteorshower",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 5,
	 starty: 30
},
{
	 clue: "समुद्र-(5)",
	 answer: "ocean",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 8,
	 starty: 28
},
{
	 clue: "महासागर-(5)",
	 answer: "ocean",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 8,
	 starty: 28
},
{
	 clue: "सागर-(5)",
	 answer: "ocean",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 8,
	 starty: 28
},
{
	 clue: "ताण-(7)",
	 answer: "tension",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 4,
	 starty: 33
},
{
	 clue: "लघवी-(5)",
	 answer: "urine",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 12,
	 starty: 25
},
{
	 clue: "भूकंप-(10)",
	 answer: "earthquake",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 1,
	 starty: 37
},
{
	 clue: "लोलक-(5)",
	 answer: "prism",
	 attempt: "", 
	 position: 31,
	 orientation: "across",
	 startx: 4,
	 starty: 35
},
{
	 clue: "बरगडी-(3)",
	 answer: "rib",
	 attempt: "", 
	 position: 32,
	 orientation: "across",
	 startx: 1,
	 starty: 39
},
{
	 clue: "दीप्तिीहीन-(12)",
	 answer: "non-luminous",
	 attempt: "", 
	 position: 33,
	 orientation: "down",
	 startx: 12,
	 starty: 31
},
{
	 clue: "पोषण-(9)",
	 answer: "nutrition",
	 attempt: "", 
	 position: 34,
	 orientation: "across",
	 startx: 2,
	 starty: 41
},
{
	 clue: "तंतू-(5)",
	 answer: "fibre",
	 attempt: "", 
	 position: 35,
	 orientation: "across",
	 startx: 1,
	 starty: 43
},
{
	 clue: "उभयचर-(9)",
	 answer: "amphibian",
	 attempt: "", 
	 position: 36,
	 orientation: "down",
	 startx: 8,
	 starty: 37
},
{
	 clue: "धागा-(6)",
	 answer: "thread",
	 attempt: "", 
	 position: 37,
	 orientation: "down",
	 startx: 4,
	 starty: 41
},
{
	 clue: "अपुष्प-(13)",
	 answer: "non-flowering",
	 attempt: "", 
	 position: 38,
	 orientation: "down",
	 startx: 1,
	 starty: 45
},
{
	 clue: "दीप्तिमान-(8)",
	 answer: "luminous",
	 attempt: "", 
	 position: 39,
	 orientation: "down",
	 startx: 12,
	 starty: 35
},
{
	 clue: "नैकरेषीय-(10)",
	 answer: "non-linear",
	 attempt: "", 
	 position: 40,
	 orientation: "down",
	 startx: 10,
	 starty: 39
},
{
	 clue: "भेसळ-(12)",
	 answer: "adulteration",
	 attempt: "", 
	 position: 41,
	 orientation: "down",
	 startx: 3,
	 starty: 47
},
{
	 clue: "हरितलवक-(11)",
	 answer: "chloroplast",
	 attempt: "", 
	 position: 42,
	 orientation: "down",
	 startx: 6,
	 starty: 44
},
{
	 clue: "सपुष्प-(9)",
	 answer: "flowering",
	 attempt: "", 
	 position: 43,
	 orientation: "down",
	 startx: 1,
	 starty: 49
},
{
	 clue: "रेषीय-(6)",
	 answer: "linear",
	 attempt: "", 
	 position: 44,
	 orientation: "down",
	 startx: 10,
	 starty: 43
},
{
	 clue: "क्षेत्र-(4)",
	 answer: "area",
	 attempt: "", 
	 position: 45,
	 orientation: "across",
	 startx: 5,
	 starty: 48
},
{
	 clue: "भूपृष्ठ-(12)",
	 answer: "earthsurface",
	 attempt: "", 
	 position: 46,
	 orientation: "across",
	 startx: 1,
	 starty: 53
},
{
	 clue: "कुपोषण-(12)",
	 answer: "malnutrition",
	 attempt: "", 
	 position: 47,
	 orientation: "down",
	 startx: 8,
	 starty: 47
},
{
	 clue: "कणा-(5)",
	 answer: "spine",
	 attempt: "", 
	 position: 48,
	 orientation: "across",
	 startx: 5,
	 starty: 50
},
{
	 clue: "चेतारज्जू-(10)",
	 answer: "nervefibre",
	 attempt: "", 
	 position: 49,
	 orientation: "down",
	 startx: 12,
	 starty: 44
},
{
	 clue: "उपांग-(12)",
	 answer: "appendicular",
	 attempt: "", 
	 position: 50,
	 orientation: "down",
	 startx: 5,
	 starty: 55
},
{
	 clue: "कालावधी-(12)",
	 answer: "periodoftime",
	 attempt: "", 
	 position: 51,
	 orientation: "down",
	 startx: 1,
	 starty: 59
},
{
	 clue: "गुडघा-(4)",
	 answer: "knee",
	 attempt: "", 
	 position: 52,
	 orientation: "across",
	 startx: 2,
	 starty: 58
},
{
	 clue: "पारदर्शक-(11)",
	 answer: "transparent",
	 attempt: "", 
	 position: 53,
	 orientation: "down",
	 startx: 3,
	 starty: 60
},
{
	 clue: "संवर्धन-(12)",
	 answer: "conservation",
	 attempt: "", 
	 position: 54,
	 orientation: "down",
	 startx: 11,
	 starty: 53
},
{
	 clue: "बल-(5)",
	 answer: "force",
	 attempt: "", 
	 position: 55,
	 orientation: "across",
	 startx: 7,
	 starty: 57
},
{
	 clue: "विस्थापन-(12)",
	 answer: "displacement",
	 attempt: "", 
	 position: 56,
	 orientation: "across",
	 startx: 1,
	 starty: 64
},
{
	 clue: "संरक्षण-(10)",
	 answer: "protection",
	 attempt: "", 
	 position: 57,
	 orientation: "down",
	 startx: 7,
	 starty: 59
},
{
	 clue: "रक्षण-(10)",
	 answer: "protection",
	 attempt: "", 
	 position: 57,
	 orientation: "down",
	 startx: 7,
	 starty: 59
},
{
	 clue: "भक्षण-(11)",
	 answer: "consumption",
	 attempt: "", 
	 position: 58,
	 orientation: "down",
	 startx: 9,
	 starty: 59
},
{
	 clue: "हवा-(3)",
	 answer: "air",
	 attempt: "", 
	 position: 59,
	 orientation: "across",
	 startx: 3,
	 starty: 66
},
{
	 clue: "त्वचा-(4)",
	 answer: "skin",
	 attempt: "", 
	 position: 60,
	 orientation: "across",
	 startx: 9,
	 starty: 62
},
{
	 clue: "यादृच्छिक-(6)",
	 answer: "random",
	 attempt: "", 
	 position: 61,
	 orientation: "across",
	 startx: 5,
	 starty: 68
},
{
	 clue: "छाती-(6)",
	 answer: "thorax",
	 attempt: "", 
	 position: 62,
	 orientation: "across",
	 startx: 3,
	 starty: 70
},
{
	 clue: "तणाव-(7)",
	 answer: "tendril",
	 attempt: "", 
	 position: 63,
	 orientation: "down",
	 startx: 12,
	 starty: 64
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
