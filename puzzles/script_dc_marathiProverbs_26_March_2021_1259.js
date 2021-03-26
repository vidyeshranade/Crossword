
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "काही अन्याय , दु:ख , अथवा गार्हाणी कोणालाच सांगता येत नाही-(27)",
	 answer: "पावसानेभिजवलेअननवर्यानेझोडपलेतरसांगणारकोणाला",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "आलेल्या पाहुण्याच्या हातून अवघड काम करून घेणे-(12)",
	 answer: "पाहुण्याच्याहातूनसापमारणे",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 1
},
{
	 clue: "उघड पणे दिसणार्या गोष्टीला इतर पुरावे नको-(13)",
	 answer: "हातच्याकंकणालाअरसाकशाला",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 5,
	 starty: 1
},
{
	 clue: "धाकटे होणे म्हणजे  सगळ्यांचा जाच निमुट सोसणे-(14)",
	 answer: "नकटेव्हावेपणधाकटेहोऊनये",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 7,
	 starty: 1
},
{
	 clue: "साता समुद्रा पलि कडे सिता ने केला भात , भांडे खाल्ले, आतला भात फेकुन दिला  ऊत्तर  ?:-(3)",
	 answer: "खारीक",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 3,
	 starty: 5
},
{
	 clue: "अर्धवट माणसाच्या हाती सत्ता अथवा एखादी खतरनाक वस्तु देणे.  A burning torch in the hands of a monkey-(9)",
	 answer: "माकडाच्याहातीकोलीत",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 10,
	 starty: 1
},
{
	 clue: "तीन पायांची ञिंबक राणी,  खाते लाकुड पिते पाणि ऊत्तर?-(3)",
	 answer: "सहाण",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 9,
	 starty: 5
},
{
	 clue: "अग्गर नाचे,  टग्गर नाचे , टगरी चे फुल नाचे, फूल नाचे , बाबू नाचे,  बाबू ची शेंडी नाचे ऊत्तर ?-(2)",
	 answer: "रवी",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 5,
	 starty: 9
},
{
	 clue: "एवढीशी बीबी चुल्या शी उभी ऊत्तर ?-(3)",
	 answer: "फूंकणी",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 4,
	 starty: 11
},
{
	 clue: "आपले दु:ख आपल्या लाच माहीत , दुसर्याना त्याची तीव्रता कळत नाही-(8)",
	 answer: "परदु:खेशितल",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 17
},
{
	 clue: "राखणदाराला देखील राखत असलेल्या गोष्टीचा मोह होतो.  One who guards the pond will definitely drink from it.You can protect everything from outsiders but not from its very watchmen.-(9)",
	 answer: "तळेराखीतोपाणीचाखी",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 19
},
{
	 clue: "एखाद्या ची गरज संपल्यावर त्याची विचारपूस देखील कधी करू नये-(11)",
	 answer: "गरजसरोअनवैद्यमरो",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 1,
	 starty: 22
},
{
	 clue: "सर सर जातो साप नव्हे, गर गर जातो गाडा नव्हे , नव्हे ईंद्र , नव्हे चंद्र , नव्हे जळी चा मासा , वेड्याने घातला ऊखाणा, शहाण्याला पडला फासा?-(3)",
	 answer: "रहाट",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 24
},
{
	 clue: "इतके वाटोळे की त्यातून सुटका कठिण-(7)",
	 answer: "अष्टकोनीवाटोळे",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 6,
	 starty: 22
},
{
	 clue: "आपल्या जन्मदात्या आई ला विसरून दुसरी कडून आईचे प्रेम मिळावे-(11)",
	 answer: "मायमरोअनमावशीजगो",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 10,
	 starty: 20
},
{
	 clue: "झेपत नाही अशा गोष्टीं चा गमजा मारू नये-(18)",
	 answer: "कानातनाहीकुडीअनम्हणेचंद्रावरतीस्वारी",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 4,
	 starty: 26
},
{
	 clue: "God knows her origins, may be just a centipede !  A lowly person trying to get over familiar or showing great affection.  उगाच जवळीक साधू पाहणारी अपाञ अनोळखी व्यक्ति-(12)",
  	 answer: "कुठलीकोणअन्बिळातलीघोण",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 2,
	 starty: 30
},
{
	 clue: "पेलवणार अथवा परवडणार नाही अशी वस्तू मिरवायला आणणे-(8)",
	 answer: "नाकापेक्षामोताजड",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 4,
	 starty: 29
},
{
	 clue: "दाखवायला सोजवळ पण मनातून नीच-(11)",
	 answer: "खालीमुंडीअनपाताळधुंडी",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 1,
	 starty: 32
},
{
	 clue: "काळी काळु बाई , हिरवी लाजू बाई , पांढरा आजोबा, बोडकी आत्या बाई ऊत्तर ?-(4)",
	 answer: "पानपट्टी",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 9,
	 starty: 25
},
{
	 clue: "स्वत: ची पत सर्वां समोर उघड केली नाही तर अधिक मान मिळेल-(10)",
	 answer: "झाकलीमुठसव्वालाखाची",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 6,
	 starty: 36
},
{
	 clue: "देवाच्या भक्ताला कोणीही मारू शकत नाही-(10)",
	 answer: "देवतारीत्यालाकोणमारी",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 1,
	 starty: 43
},
{
	 clue: "काही औषधे व इलाज असर करण्यास वेळ घेतात .झटपट परीणामा ची अपेक्षा करू नये-(9)",
	 answer: "पीहळदअनहोगोरी",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 10,
	 starty: 35
},
{
	 clue: "घरचे पण आसरा देईना अन बाहेरून पण मदत मिळेना-(12)",
	 answer: "तातसाहीनाअनलग्नहोईना",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 3,
	 starty: 43
},
{
	 clue: "मिळकती च्या जास्त खर्च करू नये-(13)",
	 answer: "पांघरूणबघूनपायपसरावे",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 8,
	 starty: 40
},
{
	 clue: "काळु बाई : कात, लाजू बाई : पान, आजोबा : चुना, आत्या बाई ?-(3)",
	 answer: "सुपारी",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 7,
	 starty: 47
},
{
	 clue: "एवढेसे पोर पण मार खाण्यात थोर ऊत्तर ?-(6)",
	 answer: "तांदुळसडणे",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 5,
	 starty: 50
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
