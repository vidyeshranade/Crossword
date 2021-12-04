
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "झाबुआ district is famous for …-(3)",
	 answer: "झाबुआ",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 5,
	 starty: 21
},
{
	 clue: "सागर district is famous for …-(3)",
	 answer: "सागर",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 8,
	 starty: 20
},
{
	 clue: "सागर district is famous for …-(3)",
	 answer: "सागर",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 8,
	 starty: 20
},
{
	 clue: "आगर district is famous for …-(3)",
	 answer: "आगर",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 7,
	 starty: 21
},
{
	 clue: "देवास district is famous for …-(3)",
	 answer: "देवास",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 5,
	 starty: 23
},
{
	 clue: "विदिशा district is famous for …-(3)",
	 answer: "विदिशा",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 2,
	 starty: 28
},
{
	 clue: "रतलाम district is famous for …-(4)",
	 answer: "रतलाम",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 8,
	 starty: 22
},
{
	 clue: "सतना district is famous for …-(3)",
	 answer: "सतना",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 7,
	 starty: 23
},
{
	 clue: "सीहोर district is famous for …-(3)",
	 answer: "सीहोर",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 1,
	 starty: 29
},
{
	 clue: "This district is famous for SPM Paper Mills-(5)",
	 answer: "होशंगाबाद",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 30
},
{
	 clue: "शाजापुर district is famous for …-(4)",
	 answer: "शाजापुर",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 4,
	 starty: 28
},
{
	 clue: "उज्जैन district is famous for …-(3)",
	 answer: "उज्जैन",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 7,
	 starty: 25
},
{
	 clue: "उज्जैन district is famous for …-(3)",
	 answer: "उज्जैन",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 7,
	 starty: 25
},
{
	 clue: "उमरिया district is famous for …-(4)",
	 answer: "उमरिया",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 7,
	 starty: 25
},
{
	 clue: "दतिया district is famous for …-(3)",
	 answer: "दतिया",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 10,
	 starty: 23
},
{
	 clue: "नरसिंहपुर district is famous for …-(6)",
	 answer: "नरसिंहपुर",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 7,
	 starty: 27
},
{
	 clue: "नगर district is famous for …-(3)",
	 answer: "नगर",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 7,
	 starty: 27
},
{
	 clue: "बालाघाट district is famous for …-(4)",
	 answer: "बालाघाट",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 4,
	 starty: 30
},
{
	 clue: "दमोह district is famous for …-(3)",
	 answer: "दमोह",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 5,
	 starty: 30
},
{
	 clue: "सिंगरौली district is famous for …-(4)",
	 answer: "सिंगरौली",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 7,
	 starty: 29
},
{
	 clue: "कटनी district is famous for …-(3)",
	 answer: "कटनी",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 3,
	 starty: 33
},
{
	 clue: "बुरहानपुर district is famous for …-(6)",
	 answer: "बुरहानपुर",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 6,
	 starty: 32
},
{
	 clue: "अलीराजपुर district is famous for …-(6)",
	 answer: "अलीराजपुर",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 4,
	 starty: 36
},
{
	 clue: "ग्वालियर district is famous for …-(4)",
	 answer: "ग्वालियर",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 11,
	 starty: 29
},
{
	 clue: "ग्वालियर district is famous for …-(4)",
	 answer: "ग्वालियर",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 11,
	 starty: 29
},
{
	 clue: "अनूपपुर district is famous for …-(5)",
	 answer: "अनूपपुर",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 4,
	 starty: 36
},
{
	 clue: "नर्मदापुरम district is famous for …-(6)",
	 answer: "नर्मदापुरम",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 9,
	 starty: 32
},
{
	 clue: "मंदसौर district is famous for …-(4)",
	 answer: "मंदसौर",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 1,
	 starty: 40
},
{
	 clue: "मंडला district is famous for …-(3)",
	 answer: "मंडला",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 1,
	 starty: 40
},
{
	 clue: "हरदा district is famous for …-(3)",
	 answer: "हरदा",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 7,
	 starty: 34
},
{
	 clue: "राजगढ़ district is famous for …-(4)",
	 answer: "राजगढ़",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 6,
	 starty: 36
},
{
	 clue: "पन्ना district is famous for …-(2)",
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
