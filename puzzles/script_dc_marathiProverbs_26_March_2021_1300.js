
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
	 clue: "जास्त  भिती किंवा काळजी केली तर ती घटना आपणच ओढवून घेतो-(9)",
	 answer: "भित्यापाठीब्रम्हराक्षस",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 5
},
{
	 clue: "दुष्ट अथवा कपटी प्रव्रुत्तिच्या व्यक्ति ला त्या च्या हुन अधिक लबाड व्यक्ति ने धडा शिकवणे-(7)",
	 answer: "ठकासमहाठक",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 4,
	 starty: 3
},
{
	 clue: "काळु बाई : कात, लाजू बाई : पान, आजोबा : चुना, आत्या बाई ?-(3)",
	 answer: "सुपारी",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 3,
	 starty: 4
},
{
	 clue: "The owner remains hungry while the guests are fed ghee-(14)",
	 answer: "मालकउपाशीअनपाहुणेतुपाशी",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 10,
	 starty: 1
},
{
	 clue: "घाई केली नाही तर अशक्य काम पण करून दाखविन-(10)",
	 answer: "थांबटकल्याभांगपाडतो",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 3,
	 starty: 9
},
{
	 clue: "स्वत: ची पत सर्वां समोर उघड केली नाही तर अधिक मान मिळेल-(10)",
	 answer: "झाकलीमुठसव्वालाखाची",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 6,
	 starty: 8
},
{
	 clue: "एवढेसे पोर पण मार खाण्यात थोर ऊत्तर ?-(6)",
	 answer: "तांदुळसडणे",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 3,
	 starty: 13
},
{
	 clue: "चोर चोरी करून  भित नाहीच, वर धाक दाखवतो किंवा मालकालाच दोषी ठरवतो-(13)",
	 answer: "चोरतोचोरअनवरशिरजोर",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 12,
	 starty: 7
},
{
	 clue: "राखणदाराला देखील राखत असलेल्या गोष्टीचा मोह होतो.  One who guards the pond will definitely drink from it.  You can protect everything from outsiders but not from its very watchmen.-(9)",
	 answer: "तळेराखीतोपाणीचाखी",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 19
},
{
	 clue: "मालक बदल ला तरी परीस्थितीत काही बदल नाही-(10)",
	 answer: "रावगेलेअनपंतआले",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 3,
	 starty: 19
},
{
	 clue: "साता समुद्रा पलि कडे सिता ने केला भात , भांडे खाल्ले, आतला भात फेकुन दिला  ऊत्तर  ?:-(3)",
	 answer: "खारीक",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 6,
	 starty: 16
},
{
	 clue: "काळी काळु बाई , हिरवी लाजू बाई , पांढरा आजोबा, बोडकी आत्या बाई ऊत्तर ?-(4)",
	 answer: "पानपट्टी",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 6,
	 starty: 19
},
{
	 clue: "अग्गर नाचे,  टग्गर नाचे , टगरी चे फुल नाचे, फूल नाचे , बाबू नाचे,  बाबू ची शेंडी नाचे ऊत्तर ?-(2)",
	 answer: "रवी",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 24
},
{
	 clue: "तार तार तार शी डोळ्या पुढे आरशी , माझा उखाणा झिंकशील तर घटकेत मरशील ऊत्तर ?-(2)",
	 answer: "झोप",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 5,
	 starty: 21
},
{
	 clue: "रोजच जो दु:ख करत बसतो त्याला फार काळ लोकांची सहानुभूती मिळत नाही-(10)",
	 answer: "रोजमरेत्यालाकोणरडे",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 5,
	 starty: 23
},
{
	 clue: "एखाद्या च्या श्रमाचा फायदा , शाबासकी, कौतुक दुसर्याने घेणे-(10)",
	 answer: "आयत्याबिळावरनागोबा",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 3,
	 starty: 27
},
{
	 clue: "काही औषधे व इलाज असर करण्यास वेळ घेतात .झटपट परीणामा ची अपेक्षा करू नये-(9)",
	 answer: "पीहळदअनहोगोरी",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 11,
	 starty: 20
},
{
	 clue: "सुप भर कण्या , तुला नाही मोजवत, मला नाही मोजवत : ऊत्तर ?-(3)",
	 answer: "चांदण्या",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 10,
	 starty: 23
},
{
	 clue: "अबोल किंवा अती लाजरा  भिडस्त स्वभाव  असला  तर स्वत: चे नुकसान होते-(10)",
	 answer: "भिडेभिडेपणपोटवाढे",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 2,
	 starty: 32
},
{
	 clue: "याचकाला मदत करायची सोडून उलट ञास देणे वा अपमानीत करणे-(11)",
	 answer: "भिकनकोपणकुञाआवर",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 4,
	 starty: 32
},
{
	 clue: "तीन पायांची ञिंबक राणी,  खाते लाकुड पिते पाणि ऊत्तर?-(3)",
	 answer: "सहाण",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 2,
	 starty: 37
},
{
	 clue: "आपले दु:ख आपल्या लाच माहीत , दुसर्याना त्याची तीव्रता कळत नाही-(8)",
	 answer: "परदु:खेशितल",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 4,
	 starty: 36
},
{
	 clue: "एवढेसे पोर, पण घर राखण्यात थोर ऊत्तर ?-(3)",
	 answer: "कुलुप",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 4,
	 starty: 38
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
