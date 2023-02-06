
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "ऐ मेरी ज़िन्दगी XX XX XX X-(7)",
	 answer: "आजरातझूमले",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 4,
	 starty: 4
},
{
	 clue: "जाने कैसे बीतेगी ये बरसातें XX XX XX X, XX XX XX-(13)",
	 answer: "माँगेहुएदिनहैंमाँगीहुईरातें",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 1,
	 starty: 7
},
{
	 clue: "चिट्ठी ना कोई संदेस जाने वो कौन सा देस XX XX XX XX-(8)",
	 answer: "जहाँतुमचलेगये",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 9,
	 starty: 1
},
{
	 clue: "पतझड़ सावन बसंत बहार XX XXX X XXX XX-(11)",
	 answer: "एकबरसकेमौसमचार",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 10
},
{
	 clue: "ओ होली आई होली आई देखो होली आई रे XX XX XX X-(7)",
	 answer: "खेलोखेलोरंगहै",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 4,
	 starty: 7
},
{
	 clue: "लहराती हुईं राहें खोले हुए हैं बाहें X XX X XX X XX-(9)",
	 answer: "येहमआगएहैंकहाँ",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 9,
	 starty: 8
},
{
	 clue: "बेलिया अब के ये बहार कोई गुल नया खिलाएगी XX XX XX XXX-(9)",
	 answer: "तेरामेराहोगामिलन",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 4,
	 starty: 14
},
{
	 clue: "देखो मौसम क्या बहार है XX XXX, XXXX X-(10)",
	 answer: "साराआलमबेकरारहै",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 3,
	 starty: 15
},
{
	 clue: "दिल पुकारे आ रे आ रे आ रे XX X X XX XX-(8)",
	 answer: "अभीनाजामेरेसाथी",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 6,
	 starty: 17
},
{
	 clue: "पलकों के पीछे से क्या तुम ने कह डाला XX X X XXX-(7)",
	 answer: "फिरसेतोफर्माना",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 11,
	 starty: 14
},
{
	 clue: "तेरे चेहरे से नज़र नहीं हटती XXX XX X XX-(8)",
	 answer: "नज़ारेहमक्यादेखें",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 4,
	 starty: 22
},
{
	 clue: "गया अँधेरा हुआ उजारा XXX XXX XXX X XX-(12)",
	 answer: "चमकाचमकासुबहकातारा",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 8,
	 starty: 21
},
{
	 clue: "कोई नहीं है फिर भी है मुझको X XX XXX XXXX-(10)",
	 answer: "क्याजानेकिसकाइंतजार",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 3,
	 starty: 26
},
{
	 clue: "दिन सारा गुज़ारा तोरे अंगना XX XX X XX XX XXX-(12)",
	 answer: "अबजानेदेमुझेमोरेसजना",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 2,
	 starty: 29
},
{
	 clue: "आजा रे मेरे प्यार के राही XX XXX XX XX X-(10)",
	 answer: "राहनिहारूँबड़ीदेरसे",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 3,
	 starty: 28
},
{
	 clue: "तेरी राहों में खड़े हैं दिल थाम के XX X XXX XX XX X-(11)",
	 answer: "हमहैंदीवानेतेरेनामके",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 4,
	 starty: 28
},
{
	 clue: "ऐसा समाँ न होता कुछ भी यहाँ न होता XX XXXX X XX X XX-(12)",
	 answer: "मेरेहमराहीजोतुमनहोते",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 1,
	 starty: 37
},
{
	 clue: "मेरे घर आयी एक नन्ही परी XXX X XXX XXX XXX-(13)",
	 answer: "चांदनीकेहसीनरथपेसवार",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 10,
	 starty: 31
},
{
	 clue: "कुछ भी कर लो एक दिन तुमको मेरी होना होगा XXX XXX X XXXX XXX X XX XXXXXXX XX-(26)",
	 answer: "हमारातुम्हाराओदिलबरदिलारानहोगागुज़ारा..अरेहोगा",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 8,
	 starty: 34
},
{
	 clue: "ज़िन्दगी प्यार का गीत है XX XX XX X XX XXX-(12)",
	 answer: "इसेहरदिलकोगानापड़ेगा",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 4,
	 starty: 40
},
{
	 clue: "आवारा ऐ मेरे दिल XX XX X XX XXX-(10)",
	 answer: "जानेकहाँहैतेरीमंज़िल",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 12,
	 starty: 32
},
{
	 clue: "झूमता मौसम मस्त महीना XX X XX XX XXX-(10)",
	 answer: "चांदसीगोरीएकहसीना",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 2,
	 starty: 42
},
{
	 clue: "ये दिल की लगी कम क्या होगी X XX XX XX X XX-(10)",
	 answer: "येईश्कभलाकमक्याहोगा",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 6,
	 starty: 41
},
{
	 clue: "कुछ ना कहो कुछ भी ना कहो X XXX X, X XXX X-(10)",
	 answer: "क्याकहनाहैक्यासुननाहै",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 1,
	 starty: 48
},
{
	 clue: "ये वादा करो चाँद के सामने XX X X XX XX XX X-(11)",
	 answer: "भूलातोनादोगेमेरेप्यारको",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 1,
	 starty: 57
},
{
	 clue: "मन क्यों बहका री बहका आधी रात को XX XXX X XXX XX XX X-(14)",
	 answer: "बेलामहकारीमहकाआधीरातको",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 2,
	 starty: 56
},
{
	 clue: "ये दिल दीवाना है दिल तो दीवाना है XXX XX X X, XX XXX-(12)",
	 answer: "दीवानादिलहैयेदिलदीवाना",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 4,
	 starty: 55
},
{
	 clue: "दुआ कर ग़मएदिल ख़ुदा से दुआ कर XXX X XXXX XXX XXXX-(15)",
	 answer: "वफ़ाओंकामजबूरदामनबिछाकर",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 10,
	 starty: 50
},
{
	 clue: "ए मैने कसम ली ए तू ने कसम ली XX XX XX, XX-(8)",
	 answer: "नहीहोंगेजुदाहम",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 6,
	 starty: 54
},
{
	 clue: "दो अकेले चल रह हैं XX XXX, XX XXX-(10)",
	 answer: "रातअकेलीचाँदअकेला",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 1,
	 starty: 68
},
{
	 clue: "मोरा गोरा अंग लईले XX XX XX XXX-(9)",
	 answer: "मोहेश्यामरंगदईदे",
	 attempt: "", 
	 position: 31,
	 orientation: "down",
	 startx: 7,
	 starty: 62
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
