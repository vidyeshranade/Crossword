
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "राजा की आयेगी बारात रंगीली होगी रात मगन मैं नाचूंगी XX X XX XXX XXX, XX X XX XXX-(19)",
	 answer: "राजाकेमाथेतिलकलगेगारानीकेमाँगसिंदूर",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 3,
	 starty: 6
},
{
	 clue: "अंधे जहान के अंधे रास्ते जाये तो जाये कहाँ XXX X XXX, X X XXX, XX XX X XX-(19)",
	 answer: "दुनियातोदुनियातूभीपरायाहमयहाँनावहाँ",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 1,
	 starty: 8
},
{
	 clue: "जाओ रे जोगी तुम जाओ रे X X XXX X XXX, XX XX X X XX-(17)",
	 answer: "येहैप्रेमिओंकीनगरीयहाँप्रेमहीहैपूजा",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 8,
	 starty: 6
},
{
	 clue: "ऐ दिल न मुझसे छुपा सच बता क्या हुआ XX X X XXXX, X XX X XX-(14)",
	 answer: "जानेभीदोदिलरुबाजोहुआसोहुआ",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 5,
	 starty: 9
},
{
	 clue: "है आग हमारे सीने में हम आग से खेलते आते हैं XXXX X X XX XXX X X XX X XX XX X-(21)",
	 answer: "टकरातेहैंजोइसताक़तसेवोमिट्टीमेंमिलजातेहैं",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 11,
	 starty: 4
},
{
	 clue: "मेरे तुम्हारे बीच में अब तो X XXXX X XXX-(9)",
	 answer: "नापरबतनासागर",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 1,
	 starty: 24
},
{
	 clue: "साँझ ढली दिल की लगी थक चली पुकार के XX, XX, X X X-(7)",
	 answer: "आजाआजाआभीजा",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 5,
	 starty: 22
},
{
	 clue: "याद न जाए बीते दिनों की X X X XX X XX-(8)",
	 answer: "जाकेनाआएँजोदिन",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 6,
	 starty: 22
},
{
	 clue: "मनमोहना बड़े झूठे XX X XX XX XX-(9)",
	 answer: "हारकेहारनहींमाने",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 29
},
{
	 clue: "तुम जो हमारे मीत ना होते XX X XX XX X XX-(10)",
	 answer: "गीतयेमेरेगीतनाहोते",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 3,
	 starty: 32
},
{
	 clue: "जा जा रे जा बालमवा XXX X XX XX XXX-(11)",
	 answer: "सौतनकेसंगरातबिताई",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 2,
	 starty: 33
},
{
	 clue: "दुनिया की सैर कर लो XX X XX XXXX-(9)",
	 answer: "इन्सांकेदोस्तबनकर",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 5,
	 starty: 31
},
{
	 clue: "दिल अपना और प्रीत पराई XX X X X XX XXX-(10)",
	 answer: "किसनेहैयेरीतबनाई",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 9,
	 starty: 27
},
{
	 clue: "ओ बसंती पवन पागल X X X X X, XX XX-(9)",
	 answer: "नाजारेनाजारोकोकोई",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 12,
	 starty: 25
},
{
	 clue: "जा जा जा मेरे बचपन XX X X XX XX-(8)",
	 answer: "कहींजाकेछुपनादाँ",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 5,
	 starty: 38
},
{
	 clue: "तेरे ख़यालों मे तेरे ही ख़्वाबों में XX XX XX XX X-(9)",
	 answer: "दिनजाएरैनाजाएरे",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 7,
	 starty: 36
},
{
	 clue: "तेरे बिना आग ये चाँदनी तू आजा तू आजा XX XX XXX XXX, X XX XXX, XX X XXX, X XX-(25)",
	 answer: "तेरेबिनाबेसुरीबाँसुरीयेमेरीज़िन्दगीदर्दकीरागिनीतूआजा",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 3,
	 starty: 41
},
{
	 clue: "बोल री कठपुतली डोरी कौन संग बाँधी XX XXX X XX XXX XX-(13)",
	 answer: "सचबतलातूनाचेकिसकेलिए",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 5,
	 starty: 43
},
{
	 clue: "दिल में प्यार का तूफ़ान X XXX XX XXX-(9)",
	 answer: "नासमझेकोईनादान",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 11,
	 starty: 38
},
{
	 clue: "नैन मिले चैन कहाँ दिल है वही तू है जहाँ X X XX XX XXX-(9)",
	 answer: "येक्याकियासैय्यासाँवरे",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 3,
	 starty: 51
},
{
	 clue: "जोगी जब से तू आया मेरे द्वारे XX XX XX XX XXX-(11)",
	 answer: "मेरेरंगगयेसाँझसकारे",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 9,
	 starty: 45
},
{
	 clue: "मुझे तुम से कुछ भी ना चाहिए XX XX XX X XX X-(10)",
	 answer: "मुझेमेरेहालपेछोड़दो",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 11,
	 starty: 48
},
{
	 clue: "ओ शमा मुझे फूँक दे X X X XX, X X X XX-(10)",
	 answer: "मैंनमैंरहूँतूनतूरहे",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 1,
	 starty: 58
},
{
	 clue: "रुक जा ओ जाने वाली रुक जा X X XX XX XXX X-(10)",
	 answer: "मैंतोराहीतेरीमंज़िलका",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 1,
	 starty: 60
},
{
	 clue: "खोया खोया चाँद खुला आसमां XX X XX XX XXX-(10)",
	 answer: "आँखोंमेंसारीरातजाएगी",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 6,
	 starty: 56
},
{
	 clue: "एक सवाल मैं करूँ एक सवाल तुम करो XX XXX X XXX X XXX X-(14)",
	 answer: "हरसवालकासवालहीजवाबहो",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 9,
	 starty: 56
},
{
	 clue: "छोटी सी ये ज़िंदगानी रे XX XX X XXX XX-(10)",
	 answer: "चारदिनकीजवानीतेरी",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 3,
	 starty: 67
},
{
	 clue: "मनभावन के घर जाए गोरी XXX X XXXX XX-(10)",
	 answer: "घूँघटमेंशरमाएगोरी",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 12,
	 starty: 58
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
