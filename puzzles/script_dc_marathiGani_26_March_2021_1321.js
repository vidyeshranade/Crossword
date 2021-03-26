
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "झुंजूर मुंजूर पाऊस माऱ्यानं अंग माझं ओलंचिंब झालं रं XXX XXX XXX XXX XXX XXX XXXX XX X-(25)",
	 answer: "टिपूरटिपूरपाण्याचीघुंगरंहिरव्याहिरव्याधरेवरीआलीरं",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "हा महाल कसला रानझाडी ही दाट XXX XXX XX XXX XX-(13)",
	 answer: "अंधाररातीचाकुठंदिसनावाट",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 3,
	 starty: 3
},
{
	 clue: "अजब सोहळा अजब सोहळा XX XXX XXX-(8)",
	 answer: "मातीभिडलीआभाळा",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 5,
	 starty: 2
},
{
	 clue: "आला रे आला गणपती आला XXXX XX XXX XX-(11)",
	 answer: "पार्वतीच्याबाळापायातवाळा",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 7
},
{
	 clue: "शालू हिरवा पाचू नि मरवा वेणी तिपेडी घाला XXX XX XXX XXX XX-(13)",
	 answer: "साजणीबाईयेणारसाजणमाझा",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 5,
	 starty: 4
},
{
	 clue: "इथे आलो होतो मागाया जोगवा XXXX XX XX XX-(10)",
	 answer: "आयुष्याचाठेवातुझ्यादारी",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 10,
	 starty: 2
},
{
	 clue: "ते नयन बोलले काहीतरी मी खुळी हासले खुळ्यापरी XXX XXXX XXX XXXX-(14)",
	 answer: "निळयानभापरीकिंचितनिळसर",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 8,
	 starty: 5
},
{
	 clue: "हसणार कधी? XXXX XXX-(7)",
	 answer: "बोलणारकधी?",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 5,
	 starty: 18
},
{
	 clue: "तुम्हासाठी केले मी सोळा शृंगार XX XX XX XXX XXX-(12)",
	 answer: "आजमनीनाचेसुखाचीबहार",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 23
},
{
	 clue: "प्रिया आज आले मैफलीत माझ्या XX XX XX XXX-(9)",
	 answer: "रंगसूरल्यालीपश्चिमा",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 25
},
{
	 clue: "पांडुरंगकांती दिव्य तेज झळकती । XXXX XXX XX X-(10)",
	 answer: "रत्नकीळफांकतीप्रभा।",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 4,
	 starty: 25
},
{
	 clue: "नकळत सारे घडले X XXX XXX XXX-(10)",
	 answer: "मीवळतापाऊलअडले",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 2,
	 starty: 28
},
{
	 clue: "बांधले मी बांधले XXX XXX XXX-(9)",
	 answer: "इंद्राचेतोरणबांधले",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 12,
	 starty: 19
},
{
	 clue: "माझा छकुला माझा सोनुला XX XXX XX XX-(9)",
	 answer: "कितीकरिशीखोड्याभारी",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 3,
	 starty: 31
},
{
	 clue: "हुकुमाची राणी माझी XX X XX XXX-(8)",
	 answer: "रायामीडावजिंकला",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 5,
	 starty: 35
},
{
	 clue: "सोन सकाळी सर्जा सजला हसलं हिरवं रान XX XX XXXXX XX XXX XX-(16)",
	 answer: "राघूमैनारानपाखरंगाऊलागलीगान",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 5,
	 starty: 35
},
{
	 clue: "लक्षदीप हे उजळले घरी XX XXX XX XXX-(10)",
	 answer: "दारीशोभलीकणारांगोळी",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 11,
	 starty: 30
},
{
	 clue: "वृंदावनात माझ्या ही तुळस डोलते X XXXXXX XXXX XXX-(14)",
	 answer: "मीप्रीतभावभोळीपतिदेवपूजिते",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 7,
	 starty: 35
},
{
	 clue: "मागते मन एक काही XX XXX XXXX-(9)",
	 answer: "दैवदुसरेघडविते",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 9,
	 starty: 34
},
{
	 clue: "रूप तुझे देवा दाखवी केशवा XXX XXX XXXX-(10)",
	 answer: "मुकुंदामाधवानारायणा",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 3,
	 starty: 45
},
{
	 clue: "गणनायका शुभदायका XX XX XXXXX-(9)",
	 answer: "यावेतुम्हीगिरीकंदरा",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 1,
	 starty: 48
},
{
	 clue: "कधी तू दिसशील डोळ्यापुढे XXXXX XX X XX-(10)",
	 answer: "तुझ्यावाचूनसुचेनकाही",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 1,
	 starty: 50
},
{
	 clue: "खरा तो प्रेमा ना धरी लोभ मनी XX XXXXXX XXX XXX-(14)",
	 answer: "नभिजनहितरतभास्करतापत",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 8,
	 starty: 50
},
{
	 clue: "हे गर्द निळे मेघ XXXX XX XX-(8)",
	 answer: "बिलगूनजशीवीज",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 5,
	 starty: 53
},
{
	 clue: "सुर मागु तुला मी कसा XXX X XX X XX-(9)",
	 answer: "जीवनातूतसामीअसा",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 4,
	 starty: 57
},
{
	 clue: "या कातरवेळी पाहिजेस तू जवळी XXX XX XXX XX-(10)",
	 answer: "दिवसजायबुडुनपार",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 1,
	 starty: 60
},
{
	 clue: "सजणा का धरिला परदेस XXX X XXX XXXX-(11)",
	 answer: "सजणाकाधरिलापरदेस",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 1,
	 starty: 62
},
{
	 clue: "नमो गुरु शुभांकरा XX XX XX XX-(8)",
	 answer: "नमोगुरुकृपाकरा",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 1,
	 starty: 67
},
{
	 clue: "कमोदिनी काय जाणे तो परिमळ XXX XXX XXXX-(10)",
	 answer: "भ्रमरसकळभोगितसे",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 11,
	 starty: 59
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
