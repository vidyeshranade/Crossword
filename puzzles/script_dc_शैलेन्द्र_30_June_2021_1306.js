
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "कहाँ जा रहा है तू ऐ जानेवाले XXX X XX X XX X XX X-(13)",
	 answer: "अंधेराहैमनकादियातोजलाले",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 3,
	 starty: 2
},
{
	 clue: "चलत मुसाफ़िर मोह लिया रे पिजड़े वाली मुनिया XX XX XX XXXX XXXX-(14)",
	 answer: "उड़उड़बैठीहलवैयादोकनिया",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 5,
	 starty: 1
},
{
	 clue: "मेरा नाम राजू घराना आनाम XXX X XX XX XX XX-(12)",
	 answer: "बहतीहैगंगाजहाँमेराधाम",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 7,
	 starty: 3
},
{
	 clue: "ये वादा करो चाँद के सामने XX X X XX XX XX X-(11)",
	 answer: "भूलातोनादोगेमेरेप्यारको",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 11
},
{
	 clue: "दुनिया की सैर कर लो XX X XX XXXX-(9)",
	 answer: "इन्सांकेदोस्तबनकर",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 10,
	 starty: 3
},
{
	 clue: "मैं आशिक हूँ बहारों का नज़ारों का फिजाओं का इशारों का X XXX XXXX X-(9)",
	 answer: "मैंमस्तानामुसाफिरहूँ",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 1,
	 starty: 13
},
{
	 clue: "प्यार हुआ इकरार हुआ है XX X XX X XXX X XX-(12)",
	 answer: "प्यारसेफिरक्योंडरताहैदिल",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 9,
	 starty: 11
},
{
	 clue: "तेरा मेरा प्यार अमर XX X XXX XXX X XX-(12)",
	 answer: "फिरक्योंमुझकोलगताहैडर",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 19
},
{
	 clue: "घड़ी घड़ी मोरा दिल धड़के XX XXX, X XXX-(9)",
	 answer: "हाएधड़केक्योंधड़के",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 4,
	 starty: 16
},
{
	 clue: "लाल छड़ी मैदान खड़ी X XX XX, X XX XX-(10)",
	 answer: "क्याखूबलड़ीक्याखूबलड़ी",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 22
},
{
	 clue: "जाने कहाँ गई जाने कहाँ गई XX XX X XX, X XX X-(11)",
	 answer: "दिलमेरालेगईलेगईवो",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 4,
	 starty: 21
},
{
	 clue: "याद आई आधी रात को कल रात की तौबा XX XXX X XXX XX XX X XX-(16)",
	 answer: "दिलपूछताहैझूमकेकिसबातकीतौबा",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 9,
	 starty: 21
},
{
	 clue: "मेरी जां मेरी जां XX XX X X X XX X-(10)",
	 answer: "प्यारकिसीसेहोहीगयाहै",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 12,
	 starty: 18
},
{
	 clue: "कैसे दिन बीते कैसे बीती रतिया पिया जाने ना XX XX X X XXXX-(10)",
	 answer: "नेहालगाकेमैंपछताई",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 2,
	 starty: 32
},
{
	 clue: "जा जा रे जा बालमवा XXX X XX XX XXX-(11)",
	 answer: "सौतनकेसंगरातबिताई",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 7,
	 starty: 28
},
{
	 clue: "दिल की गिरह खोल दो XX X XX, XX XX XX-(11)",
	 answer: "चुपनाबैठोकोईगीतगाओ",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 1,
	 starty: 38
},
{
	 clue: "मेरा दिल अब तेरा ओ साजना XX XX XX, X XXX-(10)",
	 answer: "कैसाजादूफेराओसाजना",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 11,
	 starty: 32
},
{
	 clue: "तेरे बिन सूने नैन हमारे XX XXX XX XX XXX-(12)",
	 answer: "बाटतक़तगएसाँझसकारे",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 9,
	 starty: 36
},
{
	 clue: "नैन मिले चैन कहाँ दिल है वही तू है जहाँ X X XX XX XXX-(9)",
	 answer: "येक्याकियासैय्यासाँवरे",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 3,
	 starty: 43
},
{
	 clue: "कर गया रे कर गया मुझ पे जादू XXXX XX XX XX X XX-(13)",
	 answer: "साँवरियाकरगयामुझपेजादू",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 6,
	 starty: 40
},
{
	 clue: "अपनी तो हर आह एक तूफ़ान है X XX X XX XX XXXX X-(13)",
	 answer: "क्याकरेवोजानकरअनजानहै",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 4,
	 starty: 43
},
{
	 clue: "तेरे बिना आग ये चाँदनी तू आजा तू आजा XX XX XXX XXX, X XX XXX, XX X XXX, X XX-(25)",
	 answer: "तेरेबिनाबेसुरीबाँसुरीयेमेरीज़िन्दगीदर्दकीरागिनीतूआजा",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 11,
	 starty: 42
},
{
	 clue: "आ जा री आ निंदिया तू आ XXXX XXX X XXX-(11)",
	 answer: "झिलमिलसितारोंसेउतर",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 8,
	 starty: 48
},
{
	 clue: "खोया खोया चाँद खुला आसमां XX X XX XX XXX-(10)",
	 answer: "आँखोंमेंसारीरातजाएगी",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 2,
	 starty: 57
},
{
	 clue: "घर आया मेरा परदेसी XX XX XX XXXX X-(11)",
	 answer: "प्यासबुझीमेरीअखियनकी",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 1,
	 starty: 60
},
{
	 clue: "हरी गुण गा XX X, XX X XX X-(9)",
	 answer: "मनरेहरीकेगुणगा",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 2,
	 starty: 62
},
{
	 clue: "साँझ ढली दिल की लगी थक चली पुकार के XX, XX, X X X-(7)",
	 answer: "आजाआजाआभीजा",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 4,
	 starty: 62
},
{
	 clue: "जीना हम को रास ना आया XX XX X XX X-(8)",
	 answer: "हमजानेक्योंजीतेहैं",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 2,
	 starty: 65
},
{
	 clue: "पतली कमर है तिरछी नजर है XX XX X XX XXX-(10)",
	 answer: "खिलेफूलसीतेरीजवानी",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 8,
	 starty: 60
},
{
	 clue: "जागो  XX XX-(4)",
	 answer: "जागोजागो",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 4,
	 starty: 68
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
