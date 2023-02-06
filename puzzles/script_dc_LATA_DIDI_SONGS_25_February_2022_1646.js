
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "आवारा ऐ मेरे दिल XX XX X XX XXX-(10)",
	 answer: "जानेकहाँहैतेरीमंज़िल",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 3,
	 starty: 3
},
{
	 clue: "चंदा है तू मेरा सूरज है तू X XX XX X XX X X-(10)",
	 answer: "ओमेरीआँखोंकाताराहैतू",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 9
},
{
	 clue: "हो मैंने प्यार किया XX XX X XX XX-(9)",
	 answer: "ओयहोयक्याजुर्मकिया",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 1,
	 starty: 9
},
{
	 clue: "कभी तो मिलेगी कहीं तो मिलेगी XXX X XXX XX-(9)",
	 answer: "बहारोंकीमंज़िलराही",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 8,
	 starty: 2
},
{
	 clue: "मेरे मेहबूब में क्या नहीं X X XX X X XX XX-(10)",
	 answer: "वोतोलाखोंमेंहैएकहसीं",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 5,
	 starty: 6
},
{
	 clue: "आज कल में ढल गया दिन हुआ तमाम X X X X, X XX XXXX XX-(13)",
	 answer: "तूभीसोजासोगईरंगभरीशाम",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 10,
	 starty: 9
},
{
	 clue: "कोई प्यार की देखे जादूगरी XXXX X XX XX XXXX-(13)",
	 answer: "गुलफ़ामकोमिलगईसब्ज़परी",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 7,
	 starty: 12
},
{
	 clue: "मैं तो तुम संग नैन मिला के हार गई सजना X XX X XX XXX-(9)",
	 answer: "क्योंझूठेसेप्रीतलगाई",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 1,
	 starty: 18
},
{
	 clue: "तुम ही हो माता पिता तुम ही हो XX X X XX, XX XX X X-(12)",
	 answer: "तुमहीहोबंधूसखातुमहीहो",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 21
},
{
	 clue: "रहते थे कभी जिनके दिल में XX XX X X XX X XXX-(12)",
	 answer: "हमजानसेभीप्यारोंकीतरह",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 2,
	 starty: 20
},
{
	 clue: "मुझे कितना प्यार है तुमसे अपने ही दिल से पूछो तुम XX XX XX X X XX X, XX XXX XXX X-(20)",
	 answer: "जिसेदिलदियाहैवोतुमहोमेरीज़िन्दगीतुम्हारीहै",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 12,
	 starty: 11
},
{
	 clue: "आसमां के नीचे हम आज अपने पीछे XX X XX XX X XX-(10)",
	 answer: "प्यारकाजहांबसाकेचले",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 2,
	 starty: 26
},
{
	 clue: "कल के सपने आज भी आना XXX X X XX X XX-(10)",
	 answer: "प्रीतमकोभीसाथमेंलाना",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 29
},
{
	 clue: "दिल अपना और प्रीत पराई XX X X X XX XXX-(10)",
	 answer: "किसनेहैयेरीतबनाई",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 2,
	 starty: 35
},
{
	 clue: "अब और न कुछ भी याद रहा X XXX XX, X XX XX-(11)",
	 answer: "नाअपनीज़फ़ानातेरीवफ़ा",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 10,
	 starty: 29
},
{
	 clue: "अगर मुझसे मोहब्बत है मुझे सब अपने ग़म दे दो XX XX X XX XX XX, XX XX XXX X X-(20)",
	 answer: "इनआँखोंकाहरएकआँसूमुझेमेरीकसमदेदो",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 1,
	 starty: 38
},
{
	 clue: "तस्वीर तेरी दिल में XX XX X XXX X-(9)",
	 answer: "जिसदिनसेउतारीहै",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 3,
	 starty: 37
},
{
	 clue: "लागे ना मोरा जिया XXX XX XXXXXXX-(9)",
	 answer: "सजनानहींआयेहाय",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 4,
	 starty: 37
},
{
	 clue: "तुम जाओ कहीं तुमको इख्तियार XX XX XX XXX-(9)",
	 answer: "हमजायेकहाँसजना",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 1,
	 starty: 43
},
{
	 clue: "इन्सान किसी से दुनिया में एक बार मोहब्बत करता है XX XX X XXX XX X, XX XX X XXX XXX X-(23)",
	 answer: "इसदर्दकोलेकरजीताहैइसदर्दकोलेकरमरताहै",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 7,
	 starty: 42
},
{
	 clue: "जुर्मएउल्फ़त पे हमें लोग सज़ा देते हैं XX XXX X, XX X XX XX X-(14)",
	 answer: "कैसेनादानहैंशोलोंकोहवादेतेहैं",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 9,
	 starty: 41
},
{
	 clue: "तेरा मेरा प्यार अमर XX X XXX XXX X XX-(12)",
	 answer: "फिरक्योंमुझकोलगताहैडर",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 4,
	 starty: 52
},
{
	 clue: "हाय .. बलमा अनाड़ी मन भाये X XX XXX X XX-(9)",
	 answer: "काकरूँसमझनाआये",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 12,
	 starty: 47
},
{
	 clue: "बिन्दिया चमकेगी चूड़ी खनकेगी XX XX XX X XX XX-(11)",
	 answer: "तेरीनींदउड़ेतेउड़जाए",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 2,
	 starty: 58
},
{
	 clue: "रात भी है कुछ भीगीभीगी XX X X XX XXX-XXX-(12)",
	 answer: "चाँदभीहैकुछमद्धममद्धम",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 1,
	 starty: 61
},
{
	 clue: "छोड़कर तेरे प्यार का दामन X XX X X XX XXX XX-(12)",
	 answer: "येबतादेकेहमकिधरजाये",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 10,
	 starty: 55
},
{
	 clue: "ये दिल की लगी कम क्या होगी X XX XX XX X XX-(10)",
	 answer: "येईश्कभलाकमक्याहोगा",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 12,
	 starty: 55
},
{
	 clue: "ओ बसंती पवन पागल X X X X X, XX XX-(9)",
	 answer: "नाजारेनाजारोकोकोई",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 1,
	 starty: 67
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
