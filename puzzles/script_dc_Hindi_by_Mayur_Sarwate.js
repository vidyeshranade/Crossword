
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "This district is famous for White Gold -(3)",
	 answer: "झाबुआ",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 5,
	 starty: 21
},
{
	 clue: "This district is famous for University-(3)",
	 answer: "सागर",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 8,
	 starty: 20
},
{
	 clue: "This district name starts with: Fire-(3)",
	 answer: "आगर",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 7,
	 starty: 21
},
{
	 clue: "This district is famous for Devi Chamunda temple-(3)",
	 answer: "देवास",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 5,
	 starty: 23
},
{
	 clue: "This district is famous for उदयगिरि की गुफाओं-(3)",
	 answer: "विदिशा",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 2,
	 starty: 28
},
{
	 clue: "This district is famous for राजा महाराजा रतन सिंह-(4)",
	 answer: "रतलाम",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 8,
	 starty: 22
},
{
	 clue: "This district is famous for चित्रकूट धाम और मैहर -(3)",
	 answer: "सतना",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 7,
	 starty: 23
},
{
	 clue: "This district is famous for Bhuteshwar Temple-(3)",
	 answer: "सीहोर",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 1,
	 starty: 29
},
{
	 clue: "This district is famous for Security Paper Mills (Note paper Printing press)-(5)",
	 answer: "होशंगाबाद",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 30
},
{
	 clue: "This district is famous for Raj-Rajeshwari Templte built in 10th century-(4)",
	 answer: "शाजापुर",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 4,
	 starty: 28
},
{
	 clue: "This district is famous for Mahankamleshewar-(3)",
	 answer: "उज्जैन",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 7,
	 starty: 25
},
{
	 clue: "This district is famous for Coal Mines-(4)",
	 answer: "उमरिया",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 7,
	 starty: 25
},
{
	 clue: "This district is famous for Jain Temple-(3)",
	 answer: "दतिया",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 10,
	 starty: 23
},
{
	 clue: "This district name starts with: Man-Lion-Pur-(6)",
	 answer: "नरसिंहपुर",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 7,
	 starty: 27
},
{
	 clue: "This district is City in English -(3)",
	 answer: "नगर",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 7,
	 starty: 27
},
{
	 clue: "This district is famous for मैंगनीज एवं तांबा (एशिया महाद्वीप का सबसे बड़ा फेरो मैंगनीज प्लांट भरवेली में लगाया गया )-(4)",
	 answer: "बालाघाट",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 4,
	 starty: 30
},
{
	 clue: "This district is famous for जटाशंकर मंदिर,  रानी दमयंती संग्रहालय-(3)",
	 answer: "दमोह",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 5,
	 starty: 30
},
{
	 clue: "This district is famous for Capital of energy, Coal City-(4)",
	 answer: "सिंगरौली",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 7,
	 starty: 29
},
{
	 clue: "This district is famous for Limestone City-(3)",
	 answer: "कटनी",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 3,
	 starty: 33
},
{
	 clue: "This district is famous for Khandesh sultanate-(6)",
	 answer: "बुरहानपुर",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 6,
	 starty: 32
},
{
	 clue: "This district is famous for लकड़ी की नक्काशी-(6)",
	 answer: "अलीराजपुर",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 4,
	 starty: 36
},
{
	 clue: "This district is famous for Tansen handicrafts-(4)",
	 answer: "ग्वालियर",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 11,
	 starty: 29
},
{
	 clue: "This district is famous for hills and forests-(5)",
	 answer: "अनूपपुर",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 4,
	 starty: 36
},
{
	 clue: "This district is famous for Sethani ghat-(6)",
	 answer: "नर्मदापुरम",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 9,
	 starty: 32
},
{
	 clue: "This district is famous for Pashupatinath (Parellel Temple in Nepal)-(4)",
	 answer: "मंदसौर",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 1,
	 starty: 40
},
{
	 clue: "This district is famous for Kanha National Park-(3)",
	 answer: "मंडला",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 1,
	 starty: 40
},
{
	 clue: "This district is famous for Nabhi Kund-(3)",
	 answer: "हरदा",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 7,
	 starty: 34
},
{
	 clue: "This district is famous for Shrinath temple (river Nevaj)-(4)",
	 answer: "राजगढ़",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 6,
	 starty: 36
},
{
	 clue: "This district is famous for Diamond Mines-(2)",
	 answer: "पन्ना",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 4,
	 starty: 38
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
