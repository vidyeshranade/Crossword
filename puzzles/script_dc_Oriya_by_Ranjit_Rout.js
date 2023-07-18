
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "XXXXX district is famous as missile city of Odisha …-(5)",
	 answer: "ବାଲେଶ୍ୱର",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 4,
	 starty: 28
},
{
	 clue: "XXXXX district is known as Powerhouse of Odisha and  …-(5)",
	 answer: "ଝାରସୁଗୁଡ଼ା",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 3,
	 starty: 32
},
{
	 clue: "XXXX district is famous for Kharakhai waterfall and the Sunabeda wildlife sanctuary-(4)",
	 answer: "ନୂଆପଡ଼ା",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 7,
	 starty: 29
},
{
	 clue: "XXXXX district is famous for Asias one of biggest Cattle Fair-(5)",
	 answer: "ସୁବର୍ଣ୍ଣପୁର",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 5,
	 starty: 32
},
{
	 clue: "XXXX district is famous for Saptasajya Temple, and the Kapilash Temple-(4)",
	 answer: "କଳାହାଣ୍ଡି",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 2,
	 starty: 35
},
{
	 clue: "XXX district is famous for Bali Jatra-(3)",
	 answer: "କଟକ",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 2,
	 starty: 35
},
{
	 clue: "XXX district is famous for Akhandalamani Temple and Kali Puja-(3)",
	 answer: "ଭଦ୍ରକ",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 3,
	 starty: 38
},
{
	 clue: XXXXX district is famous for Hirakud Dam-(5)",
	 answer: "ସମ୍ବଲପୁର",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 2,
	 starty: 41
},
{
	 clue: "XXXXXX district is largest district of Odisha by area…-(6)",
	 answer: "ନବରଙ୍ଗପୁର",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 4,
	 starty: 40
},
{
	 clue: "XXXX district is famous for Bhim Kund and Hadagarh-(4)",
	 answer: "କେନ୍ଦୁଝର",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 7,
	 starty: 37
},
{
	 clue: "XXXX district is famous for Dokra, Terra-Cotta, Cane, and Bamboo-(4)",
	 answer: "କନ୍ଧମାଳ",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 6,
	 starty: 38
},
{
	 clue: "XXXX district is famous for Ranipur-Jharial archaeological site-(4)",
	 answer: "ବଲାଙ୍ଗୀର",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 2,
	 starty: 43
},
{
	 clue: "XXXX district is famous for Satkosia Gorge Wildlife Sanctuary and the Ansupa Lake-(4)",
	 answer: "ଅନୁଗୋଳ",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 10,
	 starty: 35
},
{
	 clue: "XXXX district is famous for Bhitarkanika National Park-(4)",
	 answer: "କେନ୍ଦ୍ରାପଡ଼ା",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 2,
	 starty: 45
},
{
	 clue: "XXXXX district is famous for Rourkela Steel Plant-(5)",
	 answer: "ସୁନ୍ଦରଗଡ଼",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 46
},
{
	 clue: "XX district is famous for Lord Jagannath-(2)",
	 answer: "ପୁରୀ",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 6,
	 starty: 41
},
{
	 clue: "XXXXXX district is famous for …-(6)",
	 answer: "ମାଲକାନଗିରି",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 9,
	 starty: 38
},
{
	 clue: "XXXX district is famous for Bauxite reserves and Dongria Kondh tribe-(4)",
	 answer: "ରାୟଗଡ଼ା",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 2,
	 starty: 48
},
{
	 clue: "XXXX district is famous for Satkosia Tiger Reserve-(4)",
	 answer: "ନୟାଗଡ଼",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 9,
	 starty: 41
},
{
	 clue: "XXXX district is famous for Pradhanpat Waterfall-(4)",
	 answer: "ଦେବଗଡ଼",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 11,
	 starty: 39
},
{
	 clue: "XXX district is famous for Chilika Lake-(3)",
	 answer: "ଗଞ୍ଜାମ",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 4,
	 starty: 48
},
{
	 clue: "XXXXX district is famous for Simplipal National Park-(5)",
	 answer: "ମୟୂରଭଞ୍ଜ",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 4,
	 starty: 51
},
{
	 clue: "XXXX district is famous as Bhata Handi-(4)",
	 answer: "ବରଗଡ଼",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 6,
	 starty: 50
},
{
	 clue: "XXXX district is famous for Biraja Temple-(4)",
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
