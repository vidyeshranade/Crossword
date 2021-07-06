
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "चिट्ठी ना कोई संदेस जाने वो कौन सा देस XX XX XX XX-(8)",
	 answer: "जहाँतुमचलेगये",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 2,
	 starty: 5
},
{
	 clue: "समय ओ धीरे चलो XX XX XX X XX-(9)",
	 answer: "बुझगईराहसेछाँव",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 4,
	 starty: 9
},
{
	 clue: "ये क्या हुआ कैसे हुआ X XX XX, X XX-(8)",
	 answer: "येकबहुआक्यापता",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 2,
	 starty: 12
},
{
	 clue: "कभी चाँद की तरह टपकी XX XX X XX XX-(9)",
	 answer: "कभीराहमेंपड़ीपाई",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 2,
	 starty: 13
},
{
	 clue: "तनहाई तनहाई तनहाई XX X XX X XX-(8)",
	 answer: "दोनोंकोपासलेआई",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 10,
	 starty: 6
},
{
	 clue: "ये क्या हो गया XXX XX XX X XX-(10)",
	 answer: "सपनामेरासचहोगया",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 7,
	 starty: 12
},
{
	 clue: "बहुत प्यार करते हैं तुमको सनम XXX XX X X XX X XXX-(13)",
	 answer: "क़समचाहेलेलोख़ुदाकीक़सम",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 3,
	 starty: 20
},
{
	 clue: "चाक जिगर के सी लेते हैं XX X X X XX X-(8)",
	 answer: "जैसेभीहोजीलेतेहैं",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 4,
	 starty: 19
},
{
	 clue: "दैरओहरम में बसने वालों XXXX X XX X XX-(10)",
	 answer: "मयख़ारोंमेंफूटनाडालो",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 3,
	 starty: 22
},
{
	 clue: "सोचो ना ज़रा ये सोचो ना XX X XXX XX XX X-(11)",
	 answer: "बोलोनासनमकुछबोलोना",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 12,
	 starty: 13
},
{
	 clue: "तू ही रे तू ही रे XX XX X XX XX-(9)",
	 answer: "तेरेबिनामैंकैसेजिऊँ",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 10,
	 starty: 19
},
{
	 clue: "कह दो एक बार सजना इतना क्यो प्यार सजना X XX X XX X X XX-(10)",
	 answer: "हैमुझमेंऐसाभीक्यारे?",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 5,
	 starty: 27
},
{
	 clue: "दिल है छोटासा छोटीसी आशा XXXX XXX XXX XX-(12)",
	 answer: "मस्तीभरेमनकीभोलीसीआशा",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 3,
	 starty: 32
},
{
	 clue: "बेदर्दी तेरे प्यार ने दीवाना कर दिया XX XXX XX XX-(9)",
	 answer: "मुझेदीवानाकरदिया",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 7,
	 starty: 28
},
{
	 clue: "धीरे धीरे से मेरी ज़िन्दगी में आना XX XX X XX X XXX-(11)",
	 answer: "धीरेधीरेसेदिलकोचुराना",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 2,
	 starty: 35
},
{
	 clue: "कुछ ना कहो कुछ भी ना कहो X XXX X, X XXX X-(10)",
	 answer: "क्याकहनाहैक्यासुननाहै",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 12,
	 starty: 27
},
{
	 clue: "दीवाना मैं चला उसे ढूँढने बड़े प्यार से XX X XX X XX, X XX X XX-(14)",
	 answer: "उसकेघरकापताऐहवातूबता",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 1,
	 starty: 40
},
{
	 clue: "गरज बरस प्यासी धरती पर फिर पानी दे मौला XXX X XX, XX X XXXX X XX-(16)",
	 answer: "चिड़ियोंकोदानेबच्चोंकोगुड़धानीदेमौला",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 9,
	 starty: 32
},
{
	 clue: "जब कोई बात बिगड़ जाये XX XX XXX XX XX-(11)",
	 answer: "जबकोईमुश्किलपडजाये",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 7,
	 starty: 38
},
{
	 clue: "भोली सी सूरत आँखों में मस्ती XX XX-(4)",
	 answer: "आयहाए",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 3,
	 starty: 42
},
{
	 clue: "पाखी पाखी परदेसी XX XX XXXX-(8)",
	 answer: "पाखीपाखीपरदेसी",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 3,
	 starty: 45
},
{
	 clue: "एक लड़की को देखा तो ऐसा लगा XX XXX XXX, XX XXX X XX-(16)",
	 answer: "जैसेखिलतागुलाबजैसेशायरकाख़्वाब",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 12,
	 starty: 37
},
{
	 clue: "वो खत के पुर्ज़े उड़ा रहा था XXX X XX XX XX X-(11)",
	 answer: "हवाओंकारुख़दिखारहाथा",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 1,
	 starty: 49
},
{
	 clue: "सुन री सखी मेरी प्यारी सखी X XX XX XX X XX-(10)",
	 answer: "येदिलकहींखोयाहैमेरा",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 7,
	 starty: 48
},
{
	 clue: "चाँद छुपा बादल में शर्मा के मेरी जाना XX X XX X X XXXX XX XX-(15)",
	 answer: "सीनेसेलगजातूबलखाकेमेरीजाना",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 2,
	 starty: 54
},
{
	 clue: "ऐसी दीवानगी देखी नहीं कहीं XX XXXX-(6)",
	 answer: "मैंनेइसलिए",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 1,
	 starty: 55
},
{
	 clue: "दर्द से मेरा दामन भर दे या अल्लाह XX XX XXX XX X X XXX-(14)",
	 answer: "फिरचाहेदीवानाकरदेयाअल्लाह",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 9,
	 starty: 48
},
{
	 clue: "भारत हमको जान से प्यारा है XXX XX XXX XXX X-(12)",
	 answer: "सबसेन्यारागुलिस्ताँहमाराहै",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 1,
	 starty: 61
},
{
	 clue: "मैं ना हिन्दू ना मुसलमान मुझे जीने दो XX X XX XXX XX XX X-(13)",
	 answer: "दोस्तीहैमेराईमानमुझेजीनेदो",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 5,
	 starty: 57
},
{
	 clue: "सावन बरसे तरसे दिल क्यों ना निकले घर से दिल XXX X X XX XX X, X XX XX X X X-(18)",
	 answer: "बरखामेंभीदिलप्यासाहैयेप्यारनहींतोक्याहै",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 12,
	 starty: 52
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
