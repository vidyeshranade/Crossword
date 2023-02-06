
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "घड्याळ वेळ ३.५९-(10)",
	 answer: "एकन्यूनंचतुर्वादनम्",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 23
},
{
	 clue: "ही विद्यार्थिनी.-(4)",
	 answer: "एषाछात्रा",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 23
},
{
	 clue: "महिना-(3)",
	 answer: "मास:",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 8,
	 starty: 19
},
{
	 clue: "नट/ अभिनेता-(3)",
	 answer: "नट:",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 10,
	 starty: 17
},
{
	 clue: "अंक -  ९-(2)",
	 answer: "नव",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 10,
	 starty: 17
},
{
	 clue: "अंक -  ४४-(7)",
	 answer: "चतुश्चत्वारिंशत्",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 27
},
{
	 clue: "अंक -  ४८-(7)",
	 answer: "अष्टचत्वारिंशत्",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 3,
	 starty: 25
},
{
	 clue: "अंक -  ४७-(7)",
	 answer: "सप्तचत्वारिंशत्",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 9,
	 starty: 19
},
{
	 clue: "ठीक आहे-(2)",
	 answer: "अस्तु",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 3,
	 starty: 25
},
{
	 clue: "होय-(2)",
	 answer: "अस्तु",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 3,
	 starty: 25
},
{
	 clue: "हां-(2)",
	 answer: "अस्तु",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 3,
	 starty: 25
},
{
	 clue: "अंक -  ८-(2)",
	 answer: "अष्ट",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 3,
	 starty: 25
},
{
	 clue: "अंक -  ४३-(6)",
	 answer: "त्रिचत्वारिंशत्",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 5,
	 starty: 24
},
{
	 clue: "अंक -  ४२-(6)",
	 answer: "द्विचत्वारिंशत्",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 7,
	 starty: 22
},
{
	 clue: "अंक -  ४०-(5)",
	 answer: "चत्वारिंशत्",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 7,
	 starty: 23
},
{
	 clue: "अंक -  ५६-(5)",
	 answer: "षट्पञ्चाशत्",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 11,
	 starty: 19
},
{
	 clue: "अंक -  ६०-(2)",
	 answer: "षष्टिः",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 11,
	 starty: 19
},
{
	 clue: "घड्याळ वेळ ३.५९-(13)",
	 answer: "नवपञ्चाशताधिकंत्रिवादनम्",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 31
},
{
	 clue: "अंक -  ५२-(5)",
	 answer: "द्विपञ्चाशत्",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 3,
	 starty: 30
},
{
	 clue: "६.५० - सहा वाजून पन्नास मिनिटे किंवा ७ वाजायला १० मिनिटे कमी-(10)",
	 answer: "दशन्यूनंसप्तवादनम्",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 5,
	 starty: 30
},
{
	 clue: "अंक -  ३०-(3)",
	 answer: "त्रिंशत्",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 2,
	 starty: 33
},
{
	 clue: "११ ला ५ कमी-(12)",
	 answer: "पञ्चन्यूनंएकादशवादनम्",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 11,
	 starty: 25
},
{
	 clue: "खूपच छान-(4)",
	 answer: "साधुसाधु",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 7,
	 starty: 29
},
{
	 clue: "अंक -  ५ (याचा उच्चार पंच असा होतो)-(2)",
	 answer: "पञ्च",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 11,
	 starty: 25
},
{
	 clue: "साडे तीन वाजले-(7)",
	 answer: "सार्धत्रिवादनम्",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 9,
	 starty: 29
},
{
	 clue: "अर्ध / अर्धा भाग-(2)",
	 answer: "सार्ध",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 9,
	 starty: 29
},
{
	 clue: "अंक -  ३७-(5)",
	 answer: "सप्तत्रिंशत्",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 4,
	 starty: 35
},
{
	 clue: "परवा नंतर येणारा दिवस-(6)",
	 answer: "प्रपरश़्व:",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 1,
	 starty: 38
},
{
	 clue: "अंक -  ३६-(4)",
	 answer: "षट्त्रिंशत्",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 7,
	 starty: 33
},
{
	 clue: "पाऊणे तीन वाजले-(8)",
	 answer: "पादोनत्रिवादनम्",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 3,
	 starty: 38
},
{
	 clue: "आचारी-(4)",
	 answer: "पाचक:",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 3,
	 starty: 38
},
{
	 clue: "पाऊण भाग-(3)",
	 answer: "पादोन",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 3,
	 starty: 38
},
{
	 clue: "उद्या-(3)",
	 answer: "श़्व:",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 1,
	 starty: 41
},
{
	 clue: "अंक -  १९-(4)",
	 answer: "नवदश",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 9,
	 starty: 34
},
{
	 clue: "पाव भाग-(2)",
	 answer: "पाद",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 8,
	 starty: 37
},
{
	 clue: "१०.१० - दहा वाजून दहा मिनिटे-(10)",
	 answer: "दशाधिकंदशवादनम्",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 8,
	 starty: 38
},
{
	 clue: "अंक -  ४५-(7)",
	 answer: "पञ्चचत्वारिंशत्",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 3,
	 starty: 43
},
{
	 clue: "अंक -  ४६-(6)",
	 answer: "षट्चत्वारिंशत्",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 6,
	 starty: 41
},
{
	 clue: "अंक -  ६-(2)",
	 answer: "षट्",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 6,
	 starty: 41
},
{
	 clue: "अंक -  ३३-(5)",
	 answer: "त्रयस्त्रिंशत्",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 3,
	 starty: 45
},
{
	 clue: "अंक -  २३-(6)",
	 answer: "त्रयोविंशति:",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 3,
	 starty: 45
},
{
	 clue: "अंक -  २२-(5)",
	 answer: "द्वाविंशति:",
	 attempt: "", 
	 position: 31,
	 orientation: "across",
	 startx: 1,
	 starty: 48
},
{
	 clue: "हा नर्तक.-(7)",
	 answer: "एष:नर्तक:",
	 attempt: "", 
	 position: 32,
	 orientation: "across",
	 startx: 1,
	 starty: 50
},
{
	 clue: "अंक -  ११-(4)",
	 answer: "एकादश",
	 attempt: "", 
	 position: 32,
	 orientation: "down",
	 startx: 1,
	 starty: 50
},
{
	 clue: "काल-(2)",
	 answer: "ह्य:",
	 attempt: "", 
	 position: 33,
	 orientation: "down",
	 startx: 5,
	 starty: 47
},
{
	 clue: "अंक -  ५१-(6)",
	 answer: "एकपञ्चाशत्",
	 attempt: "", 
	 position: 34,
	 orientation: "down",
	 startx: 11,
	 starty: 42
},
{
	 clue: "अंक -  ३९-(5)",
	 answer: "नवत्रिंशत्",
	 attempt: "", 
	 position: 35,
	 orientation: "across",
	 startx: 8,
	 starty: 46
},
{
	 clue: "काय-(2)",
	 answer: "किम्",
	 attempt: "", 
	 position: 36,
	 orientation: "across",
	 startx: 7,
	 starty: 47
},
{
	 clue: "अंक -  २१-(6)",
	 answer: "एकविंशति:",
	 attempt: "", 
	 position: 37,
	 orientation: "down",
	 startx: 6,
	 starty: 49
},
{
	 clue: "अंक -  २९-(6)",
	 answer: "नवविंशति:",
	 attempt: "", 
	 position: 38,
	 orientation: "across",
	 startx: 3,
	 starty: 52
},
{
	 clue: "तेरवा / येऊन गेलेल्या परवाच्या आधीचा दिवस-(5)",
	 answer: "प्रपरह्य:",
	 attempt: "", 
	 position: 39,
	 orientation: "across",
	 startx: 2,
	 starty: 54
},
{
	 clue: "रविवार-(6)",
	 answer: "रविवासर:",
	 attempt: "", 
	 position: 40,
	 orientation: "down",
	 startx: 4,
	 starty: 54
},
{
	 clue: "मंगळवार-(6)",
	 answer: "भौमवासर:",
	 attempt: "", 
	 position: 41,
	 orientation: "across",
	 startx: 2,
	 starty: 56
},
{
	 clue: "अंक -  १-(3)",
	 answer: "एकम्",
	 attempt: "", 
	 position: 42,
	 orientation: "down",
	 startx: 1,
	 starty: 57
},
{
	 clue: "कर्मचारी-(5)",
	 answer: "कर्मकर:",
	 attempt: "", 
	 position: 43,
	 orientation: "across",
	 startx: 1,
	 starty: 58
},
{
	 clue: "तो बालक.-(6)",
	 answer: "स:बालक:",
	 attempt: "", 
	 position: 44,
	 orientation: "down",
	 startx: 7,
	 starty: 55
},
{
	 clue: "अंक -  १७-(4)",
	 answer: "सप्तदश",
	 attempt: "", 
	 position: 44,
	 orientation: "across",
	 startx: 7,
	 starty: 55
},
{
	 clue: "अंक -  १५-(4)",
	 answer: "पञ्चदश",
	 attempt: "", 
	 position: 45,
	 orientation: "down",
	 startx: 10,
	 starty: 52
},
{
	 clue: "अंक -  ७-(2)",
	 answer: "सप्त",
	 attempt: "", 
	 position: 46,
	 orientation: "across",
	 startx: 7,
	 starty: 55
},
{
	 clue: "अंक -  १०-(2)",
	 answer: "दश",
	 attempt: "", 
	 position: 47,
	 orientation: "down",
	 startx: 9,
	 starty: 55
},
{
	 clue: "पंधरवडा-(3)",
	 answer: "पक्ष:",
	 attempt: "", 
	 position: 48,
	 orientation: "across",
	 startx: 5,
	 starty: 60
},
{
	 clue: "अंक -  ५५-(6)",
	 answer: "पञ्चपञ्चाशत्",
	 attempt: "", 
	 position: 48,
	 orientation: "down",
	 startx: 5,
	 starty: 60
},
{
	 clue: "अंक -  ५४-(6)",
	 answer: "चतुःपञ्चाशत्",
	 attempt: "", 
	 position: 49,
	 orientation: "down",
	 startx: 3,
	 starty: 62
},
{
	 clue: "कधी-(2)",
	 answer: "कदा",
	 attempt: "", 
	 position: 50,
	 orientation: "across",
	 startx: 7,
	 starty: 59
},
{
	 clue: "अंक -  ५३-(5)",
	 answer: "त्रिपञ्चाशत्",
	 attempt: "", 
	 position: 51,
	 orientation: "across",
	 startx: 2,
	 starty: 64
},
{
	 clue: "अंक -  ३२-(4)",
	 answer: "द्वात्रिंशत्",
	 attempt: "", 
	 position: 52,
	 orientation: "across",
	 startx: 1,
	 starty: 66
},
{
	 clue: "अंक -  ३५-(5)",
	 answer: "पञ्चत्रिंशत्",
	 attempt: "", 
	 position: 53,
	 orientation: "across",
	 startx: 5,
	 starty: 62
},
{
	 clue: "अंक -  १२-(3)",
	 answer: "द्वादश",
	 attempt: "", 
	 position: 54,
	 orientation: "down",
	 startx: 1,
	 starty: 66
},
{
	 clue: "शनिवार-(6)",
	 answer: "शनिवासर:",
	 attempt: "", 
	 position: 55,
	 orientation: "down",
	 startx: 8,
	 starty: 62
},
{
	 clue: "वेळ दाखविण्यासाठी-(4)",
	 answer: "वादनम्",
	 attempt: "", 
	 position: 56,
	 orientation: "across",
	 startx: 8,
	 starty: 64
},
{
	 clue: "India-(5)",
	 answer: "भारतवर्ष",
	 attempt: "", 
	 position: 57,
	 orientation: "across",
	 startx: 7,
	 starty: 66
},
{
	 clue: "वर्ष-(3)",
	 answer: "वर्षम्",
	 attempt: "", 
	 position: 58,
	 orientation: "down",
	 startx: 10,
	 starty: 66
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
