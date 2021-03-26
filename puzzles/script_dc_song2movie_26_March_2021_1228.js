// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "तुम तो दिल के तार छेड़कर हो गये बेख़बर-(10)",
	 answer: "रूपकीरानीचोरोंकाराजा",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 1
},
{
	 clue: "तेरा जलवा जिसने देखा वो तेरा हो गया-(3)",
	 answer: "उजाला",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 1,
	 starty: 3
},
{
	 clue: "आवारा ऐ मेरे दिल-(6)",
	 answer: "रातऔरदिन",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 4,
	 starty: 1
},
{
	 clue: "जागो -(5)",
	 answer: "जागतेरहो",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 4
},
{
	 clue: "मतवाली आँखों वाले ओ अलबेले दिलवाले-(5)",
	 answer: "छोटेनवाब",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 2,
	 starty: 6
},
{
	 clue: "लौट के आ लौट के आ लौट के आ-(6)",
	 answer: "रानीरुपमती",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 9,
	 starty: 1
},
{
	 clue: "वो पास रहें या दूर रहें-(5)",
	 answer: "बड़ीबहेन",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 6,
	 starty: 6
},
{
	 clue: "तुमसे मिलके ऐसा लगा तुमसे मिलके-(3)",
	 answer: "परिंदा",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 9,
	 starty: 4
},
{
	 clue: "मालती गुँधाए केश प्यारे धुंघवारे-(4)",
	 answer: "देवदास",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 11,
	 starty: 2
},
{
	 clue: "हमसफ़र अब ये सफ़र कट जायेगा-(3)",
	 answer: "जुआरी",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 1,
	 starty: 12
},
{
	 clue: "पहले सौ बार इधर और उधर देखा है-(5)",
	 answer: "एकनजर",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 4,
	 starty: 10
},
{
	 clue: "ना तुम बेवफा हो ना हम बेवफा हैं-(7)",
	 answer: "एककलीमुस्काई",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 4,
	 starty: 10
},
{
	 clue: "तुम्हें याद करते करते जाएगी रैन सारी-(4)",
	 answer: "आम्रपाली",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 13
},
{
	 clue: "दीवानों से ये मत पूछो दीवानों पे क्या गुज़री है-(4)",
	 answer: "उपकार",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 8,
	 starty: 7
},
{
	 clue: "दीवाना हुआ बादल-(6)",
	 answer: "कश्मिरकीकली",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 4,
	 starty: 12
},
{
	 clue: "ये ज़ुल्फ़ अगर खुल के बिखर जाए तो अच्छा-(3)",
	 answer: "काजल",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 8,
	 starty: 9
},
{
	 clue: "लिये सपने निगाहों में चला हूँ तेरी राहों में-(3)",
	 answer: "मशाल",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 10,
	 starty: 7
},
{
	 clue: "वो है ज़रा ख़फ़ा ख़फ़ा-(3)",
	 answer: "शागिर्द",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 10,
	 starty: 8
},
{
	 clue: "सुहानी चाँदनी रातें हमें सोने नहीं देती-(2)",
	 answer: "मुक्ती",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 4,
	 starty: 14
},
{
	 clue: "ये रात खुशनसिब है जो अपने चाँद को-(3)",
	 answer: "आईना",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 3,
	 starty: 16
},
{
	 clue: "बाकड़ बम बम बम बम बाजे डमरू-(5)",
	 answer: "कठपुतली",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 8,
	 starty: 12
},
{
	 clue: "तेरे नैना क्यों भर आये-(2)",
	 answer: "गीत",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 7,
	 starty: 15
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
