
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "ବାଲେଶ୍ୱର district is famous for …-(5)",
	 answer: "ବାଲେଶ୍ୱର",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 4,
	 starty: 28
},
{
	 clue: "ଝାରସୁଗୁଡ଼ା district is famous for …-(5)",
	 answer: "ଝାରସୁଗୁଡ଼ା",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 3,
	 starty: 32
},
{
	 clue: "ନୂଆପଡ଼ା district is famous for …-(4)",
	 answer: "ନୂଆପଡ଼ା",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 7,
	 starty: 29
},
{
	 clue: "ସୁବର୍ଣ୍ଣପୁର district is famous for …-(7)",
	 answer: "ସୁବର୍ଣ୍ଣପୁର",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 5,
	 starty: 32
},
{
	 clue: "କଳାହାଣ୍ଡି district is famous for …-(5)",
	 answer: "କଳାହାଣ୍ଡି",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 2,
	 starty: 35
},
{
	 clue: "କଟକ district is famous for …-(3)",
	 answer: "କଟକ",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 2,
	 starty: 35
},
{
	 clue: "ଭଦ୍ରକ district is famous for …-(4)",
	 answer: "ଭଦ୍ରକ",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 3,
	 starty: 38
},
{
	 clue: "ସମ୍ବଲପୁର district is famous for …-(6)",
	 answer: "ସମ୍ବଲପୁର",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 2,
	 starty: 41
},
{
	 clue: "ନବରଙ୍ଗପୁର district is famous for …-(7)",
	 answer: "ନବରଙ୍ଗପୁର",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 4,
	 starty: 40
},
{
	 clue: "କେନ୍ଦୁଝର district is famous for …-(5)",
	 answer: "କେନ୍ଦୁଝର",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 7,
	 starty: 37
},
{
	 clue: "କନ୍ଧମାଳ district is famous for …-(5)",
	 answer: "କନ୍ଧମାଳ",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 6,
	 starty: 38
},
{
	 clue: "ବଲାଙ୍ଗୀର district is famous for …-(5)",
	 answer: "ବଲାଙ୍ଗୀର",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 2,
	 starty: 43
},
{
	 clue: "ଅନୁଗୋଳ district is famous for …-(4)",
	 answer: "ଅନୁଗୋଳ",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 10,
	 starty: 35
},
{
	 clue: "କେନ୍ଦ୍ରାପଡ଼ା district is famous for …-(6)",
	 answer: "କେନ୍ଦ୍ରାପଡ଼ା",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 2,
	 starty: 45
},
{
	 clue: "ସୁନ୍ଦରଗଡ଼ district is famous for …-(6)",
	 answer: "ସୁନ୍ଦରଗଡ଼",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 46
},
{
	 clue: "ପୁରୀ district is famous for …-(2)",
	 answer: "ପୁରୀ",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 6,
	 starty: 41
},
{
	 clue: "ମାଲକାନଗିରି district is famous for …-(6)",
	 answer: "ମାଲକାନଗିରି",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 9,
	 starty: 38
},
{
	 clue: "ରାୟଗଡ଼ା district is famous for …-(4)",
	 answer: "ରାୟଗଡ଼ା",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 2,
	 starty: 48
},
{
	 clue: "ନୟାଗଡ଼ district is famous for …-(4)",
	 answer: "ନୟାଗଡ଼",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 9,
	 starty: 41
},
{
	 clue: "ଦେବଗଡ଼ district is famous for …-(4)",
	 answer: "ଦେବଗଡ଼",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 11,
	 starty: 39
},
{
	 clue: "ଗଞ୍ଜାମ district is famous for …-(4)",
	 answer: "ଗଞ୍ଜାମ",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 4,
	 starty: 48
},
{
	 clue: "ମୟୂରଭଞ୍ଜ district is famous for …-(6)",
	 answer: "ମୟୂରଭଞ୍ଜ",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 4,
	 starty: 51
},
{
	 clue: "ବରଗଡ଼ district is famous for …-(4)",
	 answer: "ବରଗଡ଼",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 6,
	 starty: 50
},
{
	 clue: "ଯାଜପୁର district is famous for …-(4)",
	 answer: "ଯାଜପୁର",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 9,
	 starty: 50
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
