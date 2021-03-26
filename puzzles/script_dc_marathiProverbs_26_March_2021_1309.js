
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
	 clue: "स्वत: ची पत सर्वां समोर उघड केली नाही तर अधिक मान मिळेल-(10)",
	 answer: "झाकलीमुठसव्वालाखाची",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 3,
	 starty: 3
},
{
	 clue: "कितीही श्रम वा इलाज वा उपदेश केला तरी काही परीणाम नाही-(11)",
	 answer: "सारेउलथ्याघड्यावरपाणी",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 8,
	 starty: 1
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
	 clue: "साता समुद्रा पलि कडे सिता ने केला भात , भांडे खाल्ले, आतला भात फेकुन दिला  ऊत्तर  ?:-(3)",
	 answer: "खारीक",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 3,
	 starty: 11
},
{
	 clue: "सर सर जातो साप नव्हे, गर गर जातो गाडा नव्हे , नव्हे ईंद्र , नव्हे चंद्र , नव्हे जळी चा मासा , वेड्याने घातला ऊखाणा, शहाण्याला पडला फासा?-(3)",
	 answer: "रहाट",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 5,
	 starty: 9
},
{
	 clue: "जास्त  भिती किंवा काळजी केली तर ती घटना आपणच ओढवून घेतो-(9)",
	 answer: "भित्यापाठीब्रम्हराक्षस",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 3,
	 starty: 13
},
{
	 clue: "राखणदाराला देखील राखत असलेल्या गोष्टीचा मोह होतो. One who guards the pond will definitely drink from it.You can protect everything from outsiders but not from its very watchmen.-(9)",
	 answer: "तळेराखीतोपाणीचाखी",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 19
},
{
	 clue: "एखाद्या ची गरज संपल्यावर त्याची विचारपूस देखील कधी करू नये-(11)",
	 answer: "गरजसरोअनवैद्यमरो",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 22
},
{
	 clue: "एवढीशी बीबी चुल्या शी उभी ऊत्तर ?-(3)",
	 answer: "फूंकणी",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 7,
	 starty: 17
},
{
	 clue: "अग्गर नाचे,  टग्गर नाचे , टगरी चे फुल नाचे, फूल नाचे , बाबू नाचे,  बाबू ची शेंडी नाचे ऊत्तर ?-(2)",
	 answer: "रवी",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 24
},
{
	 clue: "तीन पायांची ञिंबक राणी,  खाते लाकुड पिते पाणि ऊत्तर?-(3)",
	 answer: "सहाण",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 4,
	 starty: 22
},
{
	 clue: "इतके वाटोळे की त्यातून सुटका कठिण-(7)",
	 answer: "अष्टकोनीवाटोळे",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 6,
	 starty: 22
},
{
	 clue: "मोठ्या प्रतिष्ठित व्यक्ति बरोबर छोट्या व्यक्ति ला फायदा मिळणे-(12)",
	 answer: "गाडग्याबरोबरनळाचीयाञा",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 11,
	 starty: 18
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
