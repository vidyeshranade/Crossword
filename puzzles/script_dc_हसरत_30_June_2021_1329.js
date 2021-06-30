
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "चले जाना ज़रा ठहरो किसी का दम निकलता है X XXX XX XX XX-(10)",
	 answer: "येमंज़रदेखकरजाना",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 2,
	 starty: 3
},
{
	 clue: "ये आँखें उफ़ युम्मा X XXX XX XX-(8)",
	 answer: "येसूरतउफ़युम्मा",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 2,
	 starty: 3
},
{
	 clue: "आसमान से आया फरिश्ता XX X XXX XXXX-(10)",
	 answer: "प्यारकासबकसिखलाने",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 6
},
{
	 clue: "भंवरे की गुंजन है मेरा दिल XX X XXX XX X XX-(11)",
	 answer: "कबसेसंभालेरखाहैदिल",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 5,
	 starty: 5
},
{
	 clue: "कौन है जो सपनों में आया XX X X XX X XXX-(10)",
	 answer: "कौनहैजोदिलमेंसमाया",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 3,
	 starty: 13
},
{
	 clue: "धीरे धीरे चल चाँद गगन में XX XX X XX XX, XX X XX XXX-(17)",
	 answer: "कहींढलनाजाएरातटूटनाजाएसपनें",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 8,
	 starty: 10
},
{
	 clue: "जाना तुम्हारे प्यार में XXX XX XX X-(8)",
	 answer: "शैतानबनगयाहूँ",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 12,
	 starty: 7
},
{
	 clue: "जाऊँ कहाँ बता ऐ दिल XXX XX X XXXX-(10)",
	 answer: "दुनियाबड़ीहैसंगदिल",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 5,
	 starty: 17
},
{
	 clue: "तुम मेरी हो मेरे सिवा किसी की नहीं खाती हो कसम X XX X, XX XX XX X XX, XX X XXX-(19)",
	 answer: "मैंतेरीहूँतेरेसिवाकिसीकीनहींखातीहूँकसम",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 3,
	 starty: 20
},
{
	 clue: "चाँद कँवल मेरे चाँद कँवल XXXX X X X X XXX-(11)",
	 answer: "चुपचापसोजायूँनामचल",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 11,
	 starty: 15
},
{
	 clue: "जिया ओ जिया ओ जिया कुछ बोल दो XX X XX X XX XX X-(11)",
	 answer: "अरेओदिलकापर्दाखोलदो",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 2,
	 starty: 25
},
{
	 clue: "सायोनारा सायोनारा XX XXXX XXXX-(10)",
	 answer: "वादानिभाऊँगीसायोनारा",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 3,
	 starty: 27
},
{
	 clue: "ऐ गुलबदन ऐ गुलबदन XX X XXX, XX X XXX-(12)",
	 answer: "फूलोंकीमहककाँटोंकीचुभन",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 30
},
{
	 clue: "अकेले अकेले कहाँ जा रहे हो XX XX X X XX X XX X-(12)",
	 answer: "हमेंसाथलेलोजहाँजारहेहो",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 5,
	 starty: 30
},
{
	 clue: "आजा सनम XXX XXX X XX XX XX X XXX X X X XXX XXX-(26)",
	 answer: "मधुरचाँदनीमेंहमतुममिलेतोवीरानेमेंभीआजाएगीबहार",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 3,
	 starty: 38
},
{
	 clue: "जाने कहाँ गये वो दिन कहते थे तेरी राह में XXX X XX XXXX-(10)",
	 answer: "नज़रोंकोहमबिछायेंगे",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 12,
	 starty: 30
},
{
	 clue: "जाने ना नज़र पहचाने जिगर ये कौन जो दिल पर छाया XX XX XX XXX-(9)",
	 answer: "मेराअंगअंगमुस्काया",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 1,
	 starty: 41
},
{
	 clue: "खो गया है मेरा प्यार XXX X X XX XX-(9)",
	 answer: "ढूँढ़ताहूँमैंमेराप्यार",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 9,
	 starty: 34
},
{
	 clue: "कहाँ चल दिए इधर तो आओ XX XX X X XXXX-(10)",
	 answer: "मेरेदिलकोनठुकराओ",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 7,
	 starty: 39
},
{
	 clue: "तुम तो प्यार हो सजना XX XX X XX XX X XX-(12)",
	 answer: "मुझेतुमसेप्याराऔरनाकोई",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 1,
	 starty: 47
},
{
	 clue: "दाग़ न लग जाए कहीं दाग़ न लग जाए XX XX X XXX XXX-(11)",
	 answer: "प्यारकियातोकरकेनिभाना",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 9,
	 starty: 41
},
{
	 clue: "काश्मिर की कली हूँ मैं XX X X XX XXX-(9)",
	 answer: "मुझसेनारुठोबाबूजी",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 5,
	 starty: 45
},
{
	 clue: "ऐ फूलों की रानी बहारों की मलिका XX XXXX, XXX X XX-(12)",
	 answer: "तेरामुस्कुरानागजबहोगया",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 1,
	 starty: 51
},
{
	 clue: "मेरी मोहब्बत पाक मोहब्बत XX XX X XX XXXX-(11)",
	 answer: "औरजहाँकीखांकमोहब्बत",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 7,
	 starty: 50
},
{
	 clue: "अजी रूठकर अब कहाँ जाईयेगा XX XXXX, XX XXXX-(12)",
	 answer: "जहाँजाईयेगाहमेंपाईयेगा",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 1,
	 starty: 58
},
{
	 clue: "अजी हमसे बचकर कहाँ जाईयेगा XX XXXX XX XXXX-(12)",
	 answer: "जहाँजाईयेगाहमेपाईयेगा",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 5,
	 starty: 54
},
{
	 clue: "इब्तिदाएइश्क़ में हम सारी रात जागे XXX XX X XX XX-(10)",
	 answer: "अल्लाहजानेक्याहोगाआगे",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 12,
	 starty: 51
},
{
	 clue: "आँसू भरी हैं ये जीवन की राहें XX XXX XX X XX XX XX-(14)",
	 answer: "कोईउनसेकहदेहमेंभूलजाए",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 10,
	 starty: 57
},
{
	 clue: "फ़ल्सफ़ा प्यार का तुम क्या जानो XXX XX XX X XX-(10)",
	 answer: "तुमनेकभीप्यारनाकिया",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 7,
	 starty: 61
},
{
	 clue: "तेरी प्यारी प्यारी सूरत को किसीकी नज़र ना लगे XX-X-XXX-(6)",
	 answer: "चश्मएबद्दूर",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 2,
	 starty: 67
},
{
	 clue: "ज़िन्दगी एक सफ़र है सुहाना XX XX X X XXX XX-(11)",
	 answer: "यहाँकलक्याहोकिसनेजाना",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 1,
	 starty: 69
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
