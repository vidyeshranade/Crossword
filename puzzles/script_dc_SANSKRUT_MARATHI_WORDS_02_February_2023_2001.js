
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "खूप छान-(7)",
	 answer: "बहुसमीचीनम्",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 7,
	 starty: 7
},
{
	 clue: "अंक -  २७-(6)",
	 answer: "सप्तविंशति:",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 7,
	 starty: 9
},
{
	 clue: "अंक -  २६-(6)",
	 answer: "षड़्विंशति:",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 12,
	 starty: 4
},
{
	 clue: "पाऊणे तीन वाजले-(8)",
	 answer: "पादोनत्रिवादनम्",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 5,
	 starty: 12
},
{
	 clue: "अंक -  ३६-(4)",
	 answer: "षट्त्रिंशत्",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 10,
	 starty: 7
},
{
	 clue: "अंक -  ६०-(2)",
	 answer: "षष्टिः",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 10,
	 starty: 7
},
{
	 clue: "येऊन गेलेला-(2)",
	 answer: "गत",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 6,
	 starty: 14
},
{
	 clue: "मंगळवार-(7)",
	 answer: "मंङ्गलवासर:",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 5,
	 starty: 16
},
{
	 clue: "ते फळ.-(4)",
	 answer: "तत्फलम्",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 7,
	 starty: 14
},
{
	 clue: "वेळ दाखविण्यासाठी-(4)",
	 answer: "वादनम्",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 9,
	 starty: 12
},
{
	 clue: "परत-(6)",
	 answer: "पुनर्मिलाम:",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 11,
	 starty: 11
},
{
	 clue: "पुन्हा भेटूया-(6)",
	 answer: "पुनर्मिलाम:",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 11,
	 starty: 11
},
{
	 clue: "अंक -  ४८-(7)",
	 answer: "अष्टचत्वारिंशत्",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 6,
	 starty: 19
},
{
	 clue: "अंक -  ४७-(7)",
	 answer: "सप्तचत्वारिंशत्",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 9,
	 starty: 16
},
{
	 clue: "स्वागत असो-(4)",
	 answer: "स्वागतम्",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 1,
	 starty: 24
},
{
	 clue: "आज-(2)",
	 answer: "अद्य",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 6,
	 starty: 19
},
{
	 clue: "अंक -  ८-(2)",
	 answer: "अष्ट",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 6,
	 starty: 19
},
{
	 clue: "अंक -  ७-(2)",
	 answer: "सप्त",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 9,
	 starty: 16
},
{
	 clue: "अंक -  ४६-(6)",
	 answer: "षट्चत्वारिंशत्",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 5,
	 starty: 21
},
{
	 clue: "हे पुस्तक.-(6)",
	 answer: "एतत्पुस्तकम्",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 3,
	 starty: 23
},
{
	 clue: "अंक -  ५६-(5)",
	 answer: "षट्पञ्चाशत्",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 5,
	 starty: 21
},
{
	 clue: "घड्याळ वेळ ३.५९-(10)",
	 answer: "एकन्यूनंचतुर्वादनम्",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 2,
	 starty: 27
},
{
	 clue: "६.५० - सहा वाजून पन्नास मिनिटे किंवा ७ वाजायला १० मिनिटे कमी-(10)",
	 answer: "दशन्यूनंसप्तवादनम्",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 11,
	 starty: 18
},
{
	 clue: "शुभरात्री-(5)",
	 answer: "शुभरात्रि:",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 2,
	 starty: 29
},
{
	 clue: "अंक -  ४४-(7)",
	 answer: "चतुश्चत्वारिंशत्",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 7,
	 starty: 26
},
{
	 clue: "अंक -  ४५-(7)",
	 answer: "पञ्चचत्वारिंशत्",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 4,
	 starty: 29
},
{
	 clue: "धन्यवाद-(5)",
	 answer: "धन्यवाद:",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 8,
	 starty: 25
},
{
	 clue: "अंक -  ४३-(6)",
	 answer: "त्रिचत्वारिंशत्",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 2,
	 starty: 32
},
{
	 clue: "अंक -  ३८-(5)",
	 answer: "अष्टात्रिंशत्",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 1,
	 starty: 34
},
{
	 clue: "अंक -  ४-(3)",
	 answer: "चत्वारि",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 6,
	 starty: 29
},
{
	 clue: "ठीक आहे-(2)",
	 answer: "अस्तु",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 1,
	 starty: 34
},
{
	 clue: "हां-(2)",
	 answer: "अस्तु",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 1,
	 starty: 34
},
{
	 clue: "होय-(2)",
	 answer: "अस्तु",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 1,
	 starty: 34
},
{
	 clue: "घड्याळ वेळ ३.५९-(13)",
	 answer: "नवपञ्चाशताधिकंत्रिवादनम्",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 10,
	 starty: 27
},
{
	 clue: "११ ला ५ कमी-(12)",
	 answer: "पञ्चन्यूनंएकादशवादनम्",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 1,
	 starty: 37
},
{
	 clue: "अंक -  ५५-(6)",
	 answer: "पञ्चपञ्चाशत्",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 1,
	 starty: 37
},
{
	 clue: "अंक -  ५ (याचा उच्चार पंच असा होतो)-(2)",
	 answer: "पञ्च",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 1,
	 starty: 37
},
{
	 clue: "पंधरवडा-(3)",
	 answer: "पक्ष:",
	 attempt: "", 
	 position: 31,
	 orientation: "across",
	 startx: 10,
	 starty: 29
},
{
	 clue: "अंक -  ३०-(3)",
	 answer: "त्रिंशत्",
	 attempt: "", 
	 position: 32,
	 orientation: "across",
	 startx: 9,
	 starty: 31
},
{
	 clue: "काल-(2)",
	 answer: "ह्य:",
	 attempt: "", 
	 position: 33,
	 orientation: "down",
	 startx: 12,
	 starty: 28
},
{
	 clue: "साडेचार वाजले-(8)",
	 answer: "सार्धचतुर्वादनम्",
	 attempt: "", 
	 position: 34,
	 orientation: "across",
	 startx: 3,
	 starty: 39
},
{
	 clue: "अंक -  ३३-(5)",
	 answer: "त्रयस्त्रिंशत्",
	 attempt: "", 
	 position: 35,
	 orientation: "down",
	 startx: 8,
	 starty: 34
},
{
	 clue: "ती नर्तिका.-(4)",
	 answer: "सानर्तिका",
	 attempt: "", 
	 position: 36,
	 orientation: "down",
	 startx: 3,
	 starty: 39
},
{
	 clue: "साडे तीन वाजले-(7)",
	 answer: "सार्धत्रिवादनम्",
	 attempt: "", 
	 position: 37,
	 orientation: "down",
	 startx: 12,
	 starty: 31
},
{
	 clue: "अर्ध / अर्धा भाग-(2)",
	 answer: "सार्ध",
	 attempt: "", 
	 position: 37,
	 orientation: "down",
	 startx: 12,
	 starty: 31
},
{
	 clue: "विक्रेता-(5)",
	 answer: "विक्रयिक:",
	 attempt: "", 
	 position: 38,
	 orientation: "down",
	 startx: 2,
	 starty: 43
},
{
	 clue: "१०.१० - दहा वाजून दहा मिनिटे-(10)",
	 answer: "दशाधिकंदशवादनम्",
	 attempt: "", 
	 position: 39,
	 orientation: "down",
	 startx: 8,
	 starty: 39
},
{
	 clue: "अंक -  ४९-(7)",
	 answer: "नवचत्वारिंशत्",
	 attempt: "", 
	 position: 40,
	 orientation: "down",
	 startx: 6,
	 starty: 41
},
{
	 clue: "अंक -  ४१-(7)",
	 answer: "एकचत्वारिंशत्",
	 attempt: "", 
	 position: 41,
	 orientation: "across",
	 startx: 1,
	 starty: 46
},
{
	 clue: "उद्या-(3)",
	 answer: "श़्व:",
	 attempt: "", 
	 position: 42,
	 orientation: "across",
	 startx: 5,
	 starty: 42
},
{
	 clue: "अंक -  ४२-(6)",
	 answer: "द्विचत्वारिंशत्",
	 attempt: "", 
	 position: 43,
	 orientation: "across",
	 startx: 4,
	 starty: 44
},
{
	 clue: "आपले नाव काय (स्त्रियांना)?-(8)",
	 answer: "भवत्या:नामकिम्",
	 attempt: "", 
	 position: 44,
	 orientation: "across",
	 startx: 1,
	 starty: 48
},
{
	 clue: "आपले नाव काय (पुरुषांना)?-(8)",
	 answer: "भवत:नामकिम्",
	 attempt: "", 
	 position: 44,
	 orientation: "down",
	 startx: 1,
	 starty: 48
},
{
	 clue: "पाऊण भाग-(3)",
	 answer: "पादोन",
	 attempt: "", 
	 position: 45,
	 orientation: "down",
	 startx: 11,
	 starty: 42
},
{
	 clue: "पाव भाग-(2)",
	 answer: "पाद",
	 attempt: "", 
	 position: 45,
	 orientation: "across",
	 startx: 11,
	 starty: 42
},
{
	 clue: "माझे-(2)",
	 answer: "मम",
	 attempt: "", 
	 position: 46,
	 orientation: "across",
	 startx: 1,
	 starty: 53
},
{
	 clue: "अंक -  ३९-(5)",
	 answer: "नवत्रिंशत्",
	 attempt: "", 
	 position: 47,
	 orientation: "across",
	 startx: 8,
	 starty: 47
},
{
	 clue: "अंक -  २९-(6)",
	 answer: "नवविंशति:",
	 attempt: "", 
	 position: 48,
	 orientation: "down",
	 startx: 11,
	 starty: 44
},
{
	 clue: "काय-(2)",
	 answer: "किम्",
	 attempt: "", 
	 position: 49,
	 orientation: "down",
	 startx: 7,
	 starty: 48
},
{
	 clue: "अंक -  ९-(2)",
	 answer: "नव",
	 attempt: "", 
	 position: 50,
	 orientation: "across",
	 startx: 10,
	 starty: 45
},
{
	 clue: "महिना-(3)",
	 answer: "मास:",
	 attempt: "", 
	 position: 51,
	 orientation: "across",
	 startx: 9,
	 starty: 49
},
{
	 clue: "हा नर्तक.-(7)",
	 answer: "एष:नर्तक:",
	 attempt: "", 
	 position: 52,
	 orientation: "across",
	 startx: 5,
	 starty: 53
},
{
	 clue: "शेतकरी-(4)",
	 answer: "कृषक:",
	 attempt: "", 
	 position: 53,
	 orientation: "down",
	 startx: 6,
	 starty: 52
},
{
	 clue: "मच्छिमार-(4)",
	 answer: "धीवर:",
	 attempt: "", 
	 position: 54,
	 orientation: "across",
	 startx: 3,
	 starty: 55
},
{
	 clue: "अंक -  १९-(4)",
	 answer: "नवदश",
	 attempt: "", 
	 position: 55,
	 orientation: "down",
	 startx: 4,
	 starty: 54
},
{
	 clue: "सव्वा भाग-(3)",
	 answer: "सपाद",
	 attempt: "", 
	 position: 56,
	 orientation: "down",
	 startx: 10,
	 starty: 49
},
{
	 clue: "सव्वा वाजला-(9)",
	 answer: "सपादएकवादनम्",
	 attempt: "", 
	 position: 56,
	 orientation: "down",
	 startx: 10,
	 starty: 49
},
{
	 clue: "अंक -  १८-(4)",
	 answer: "अष्टादश",
	 attempt: "", 
	 position: 57,
	 orientation: "across",
	 startx: 8,
	 starty: 51
},
{
	 clue: "अंक -  १६-(3)",
	 answer: "षोडश",
	 attempt: "", 
	 position: 58,
	 orientation: "across",
	 startx: 2,
	 starty: 57
},
{
	 clue: "अंक -  १०-(2)",
	 answer: "दश",
	 attempt: "", 
	 position: 59,
	 orientation: "across",
	 startx: 10,
	 starty: 51
},
{
	 clue: "हे फुल.-(5)",
	 answer: "इदम्पुष्पम्",
	 attempt: "", 
	 position: 60,
	 orientation: "across",
	 startx: 6,
	 starty: 57
},
{
	 clue: "ही बालिका.-(5)",
	 answer: "इयम्बालिका",
	 attempt: "", 
	 position: 60,
	 orientation: "down",
	 startx: 6,
	 starty: 57
},
{
	 clue: "अंक -  १३-(4)",
	 answer: "त्रयोदश",
	 attempt: "", 
	 position: 61,
	 orientation: "across",
	 startx: 8,
	 starty: 55
},
{
	 clue: "चित्रकार-(5)",
	 answer: "चित्रकार:",
	 attempt: "", 
	 position: 62,
	 orientation: "across",
	 startx: 4,
	 starty: 61
},
{
	 clue: "अंक -  १४-(4)",
	 answer: "चतुर्दश",
	 attempt: "", 
	 position: 63,
	 orientation: "across",
	 startx: 2,
	 starty: 63
},
{
	 clue: "रविवार-(6)",
	 answer: "रविवासर:",
	 attempt: "", 
	 position: 64,
	 orientation: "down",
	 startx: 7,
	 starty: 61
},
{
	 clue: "शनिवार-(6)",
	 answer: "शनिवासर:",
	 attempt: "", 
	 position: 65,
	 orientation: "across",
	 startx: 5,
	 starty: 63
},
{
	 clue: "आचारी-(4)",
	 answer: "पाचक:",
	 attempt: "", 
	 position: 66,
	 orientation: "across",
	 startx: 9,
	 starty: 59
},
{
	 clue: "शिक्षक-(5)",
	 answer: "अध्यापक:",
	 attempt: "", 
	 position: 67,
	 orientation: "across",
	 startx: 3,
	 starty: 66
},
{
	 clue: "चांभार-(5)",
	 answer: "चर्मकार:",
	 attempt: "", 
	 position: 68,
	 orientation: "down",
	 startx: 10,
	 starty: 59
},
{
	 clue: "चर्मकार-(5)",
	 answer: "चर्मकार:",
	 attempt: "", 
	 position: 68,
	 orientation: "down",
	 startx: 10,
	 starty: 59
},
{
	 clue: "नट/ अभिनेता-(3)",
	 answer: "नट:",
	 attempt: "", 
	 position: 69,
	 orientation: "down",
	 startx: 12,
	 starty: 57
},
{
	 clue: "ओझे वाहणारा-(5)",
	 answer: "भारवाह:",
	 attempt: "", 
	 position: 70,
	 orientation: "across",
	 startx: 1,
	 starty: 69
},
{
	 clue: "परवा (उद्या नंतरचा येणारा दिवस)-(4)",
	 answer: "परश़्व:",
	 attempt: "", 
	 position: 71,
	 orientation: "down",
	 startx: 5,
	 starty: 66
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
