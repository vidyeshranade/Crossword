
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "गीला गीला पानी पानी सुरीला पानी पानी XX XX XX XX XXX-(11)",
	 answer: "हुमहुमहुमहुमबरसे",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 2,
	 starty: 1
},
{
	 clue: "कभी चाँद की तरह टपकी XX XX X XX XX-(9)",
	 answer: "कभीराहमेंपड़ीपाई",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 4,
	 starty: 1
},
{
	 clue: "ओ दिल बंजारे जा रे XX XXX XX XX X-(10)",
	 answer: "खोलडोरियांसबखोलदे",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 7,
	 starty: 1
},
{
	 clue: "जब कोई बात बिगड़ जाये XX XX XXX XX XX-(11)",
	 answer: "जबकोईमुश्किलपडजाये",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 9
},
{
	 clue: "पानी पानी रे खारे पानी रे XX X XX X-(6)",
	 answer: "नैनोंमेंभरजा",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 10,
	 starty: 4
},
{
	 clue: "जिनके सर हो इश्क़ की छाँव XX X XX XXX XX-(10)",
	 answer: "पाँवकेनीचेजन्नतहोगी",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 3,
	 starty: 13
},
{
	 clue: "तुझसे बिछड़ के ज़िंदा हैं XX XXX XXX X-(9)",
	 answer: "जानबहोतशर्मिन्दाहैं",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 10,
	 starty: 9
},
{
	 clue: "शायराना सी है जिन्दगी की फजा XX X XXX X XX XXX-(12)",
	 answer: "आपभीजिन्दगीकामजालीजिये",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 12,
	 starty: 8
},
{
	 clue: "चाक जिगर के सी लेते हैं XX X X X XX X-(8)",
	 answer: "जैसेभीहोजीलेतेहैं",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 3,
	 starty: 17
},
{
	 clue: "तेरे दर पर सनम चले आये X X XX X XX XX XX-(11)",
	 answer: "तूनाआयातोहमचलेआये",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 2,
	 starty: 19
},
{
	 clue: "तेरे दर पर सनम चले आये X X XX X XX XX XX-(11)",
	 answer: "तूनाआयातोहमचलेआये",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 2,
	 starty: 19
},
{
	 clue: "चिट्ठी ना कोई संदेस जाने वो कौन सा देस XX XX XX XX-(8)",
	 answer: "जहाँतुमचलेगये",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 2,
	 starty: 23
},
{
	 clue: "मुझको जब ऐसे देखती हो तुम रंग भर जाते हैं फिजाओं में XXXXX X XXX XX X, XX XX XX X XXX X-(23)",
	 answer: "कसमसातीहैआरजूदिलमेंगीतघूलजातेहैंहवाओंमें",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 5,
	 starty: 21
},
{
	 clue: "संदेसे आते हैं हमें तड़पाते हैं X XX XX X X XX XX X-(12)",
	 answer: "जोचिट्ठीआतीहैवोपूछेजातीहै",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 1,
	 starty: 25
},
{
	 clue: "आदमी आदमी को क्या देगा X X XX XX XX XX-(10)",
	 answer: "जोभीदेगावहीखुदादेगा",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 1,
	 starty: 25
},
{
	 clue: "यारा सीली सीली बिरहा के रात का जलना X X XX XX X, X X XX XXX-(14)",
	 answer: "येभीकोईजीनाहैयेभीकोईमरना",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 12,
	 starty: 19
},
{
	 clue: "मुदद्तों ग़म पे ग़म उठाये हैं XX XX XX XXXX X-(11)",
	 answer: "तबकहींजाकेमुस्कुरायेहैं",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 10,
	 starty: 21
},
{
	 clue: "बहुत प्यार करते हैं तुमको सनम XXX XX X X XX X XXX-(13)",
	 answer: "क़समचाहेलेलोख़ुदाकीक़सम",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 7,
	 starty: 28
},
{
	 clue: "हमारी ही मुठ्ठी में आकाश सारा XX X XXX XXXX XX-(12)",
	 answer: "जबभीखुलेगीचमकेगातारा",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 3,
	 starty: 35
},
{
	 clue: "हमारी ही मुठ्ठी में आकाश सारा XX X XXX XXXX XX-(12)",
	 answer: "जबभीखुलेगीचमकेगातारा",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 3,
	 starty: 35
},
{
	 clue: "सुरमई शाम इस तरह आए XX XX X XX XXX XX-(12)",
	 answer: "सांसलेतेहैंजिसतरहसाए",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 1,
	 starty: 39
},
{
	 clue: "पागल दिल मेरा तुमसे ये कह रहा XX X XX XX XX XX X-(12)",
	 answer: "अबतोतेरेबिनारहाजाएना",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 9,
	 starty: 32
},
{
	 clue: "घोड़े जैसी चल हाथी जैसी तुम X XXX XX XX X XX XX-(13)",
	 answer: "ओसावनराजाकहाँसेआएतुम",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 11,
	 starty: 38
},
{
	 clue: "तुम ये कैसे जुदा हो गए XX XXX XX XXX X XX-(13)",
	 answer: "हरतरफ़हरजगहहोगए",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 1,
	 starty: 48
},
{
	 clue: "सुनिए तो रुकिए तो X X XX XX XXX X-(10)",
	 answer: "क्योंहैंख़फ़ाअरेकहिएतो",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 3,
	 starty: 48
},
{
	 clue: "बेसबब बात बढाने की ज़रूरत क्या है XX XX XX X XXX X XXXX X X-(17)",
	 answer: "हमख़फ़ाकबथेमनानेकीज़रूरतक्याहै",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 5,
	 starty: 46
},
{
	 clue: "कोई मौसम ऐसा आये XXX XXX XX X XX-(11)",
	 answer: "उसकोअपनेसाथजोलाये",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 7,
	 starty: 45
},
{
	 clue: "सुन री सखी मेरी प्यारी सखी X XX XX XX X XX-(10)",
	 answer: "येदिलकहींखोयाहैमेरा",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 9,
	 starty: 45
},
{
	 clue: "एक वो दिन भी थे एक ये दिन भी है XX X XX X, XX X XX X-(12)",
	 answer: "एकवोरातथीएकयेरातहै",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 1,
	 starty: 60
},
{
	 clue: "ये रात खुशनसिब है जो अपने चाँद को XXX X XXX X XX X-(11)",
	 answer: "कलेजेसेलगाएसोरहीहै",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 2,
	 starty: 60
},
{
	 clue: "जो भी चाहूँ वो मैं पाऊँ XXX X XX XX-(8)",
	 answer: "ज़िन्दगीमेंजीतजाऊँ",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 11,
	 starty: 55
},
{
	 clue: "इस दिल में बसकर देखो तो X XXX XX XXX X-(10)",
	 answer: "येशहरबड़ापुरानाहै",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 9,
	 starty: 60
},
{
	 clue: "ये दिल ये दिल ये दिल X XX XXX-(6)",
	 answer: "येदिलदीवाना",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 7,
	 starty: 63
},
{
	 clue: "ज़रा सा झूम लूँ मैं XX X X X X X-(7)",
	 answer: "अरेनारेनारेना",
	 attempt: "", 
	 position: 31,
	 orientation: "across",
	 startx: 5,
	 starty: 68
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
