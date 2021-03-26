
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "कुछ भी कर लो एक दिन तुमको मेरी होना होगा-(26)",
	 answer: "हमारातुम्हाराओदिलबरदिलारानहोगागुज़ारा..अरेहोगा",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "हर तरफ हुस्न है जवानी है-(10)",
	 answer: "आजकीरातक्यासुहानीहै",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 5,
	 starty: 1
},
{
	 clue: "बुझा दिए हैं खुद अपने हाथों-(10)",
	 answer: "मोहब्बतोंकेदीयेजलाके",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 3,
	 starty: 4
},
{
	 clue: "दिन हैं बहार के तेरे मेरे इकरार के-(12)",
	 answer: "दिलकेसहारेआजाप्यारकरें",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 8
},
{
	 clue: "हम जब चलें तो ये जहान झूमें-(12)",
	 answer: "आरज़ूहमारीआसमाँकोचूमें",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 7,
	 starty: 2
},
{
	 clue: "इन हवाओं में इन फिजाओं में-(10)",
	 answer: "तुझकोमेराप्यारपुकारे",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 9,
	 starty: 3
},
{
	 clue: "इन हवाओं में इन फिजाओं में-(10)",
	 answer: "तुझकोमेराप्यारपुकारे",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 9,
	 starty: 3
},
{
	 clue: "तेरे चेहरे से नज़र नहीं हटती-(8)",
	 answer: "नज़ारेहमक्यादेखें",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 1,
	 starty: 15
},
{
	 clue: "रात के रही थक मत जाना सुबह की मंज़िल दूर नहीं-(15)",
	 answer: "थकमतजानाओराहीथकमतजाना",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 11,
	 starty: 7
},
{
	 clue: "चंदा रे मेरे भैया से कहना-(6)",
	 answer: "बहनायादरे",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 4,
	 starty: 14
},
{
	 clue: "संसार से भागे फिरते हो-(11)",
	 answer: "भगवानकोतुमक्यापाओगे",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 6,
	 starty: 17
},
{
	 clue: "यह देश है वीर जवानों का-(9)",
	 answer: "अलबेलोंकामस्तानोंका",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 1,
	 starty: 23
},
{
	 clue: "तेरी दुनिया में जीने से-(11)",
	 answer: "तोबेहतरहैकेमरजाएँ",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 3,
	 starty: 22
},
{
	 clue: "बस्ती बस्ती परबत परबत गाता जाए बंजारा-(10)",
	 answer: "लेकरदिलकाएकतारा",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 9,
	 starty: 18
},
{
	 clue: "आज की रात पिया दिल ना तोडो-(10)",
	 answer: "मनकीबातपियामानलो",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 3,
	 starty: 29
},
{
	 clue: "जाने क्या तूने कही-(7)",
	 answer: "जानेक्यामैनेसुनी",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 3,
	 starty: 31
},
{
	 clue: "फ़ैली हुई हैं सपनों की बाहें-(9)",
	 answer: "आजाचलदेकहींदूर",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 2,
	 starty: 36
},
{
	 clue: "ऐ मेरी ज़िन्दगी-(7)",
	 answer: "आजरातझूमले",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 2,
	 starty: 36
},
{
	 clue: "ऐ मेरी टोपी पलट के आ-(10)",
	 answer: "नअपनेफंटूशकोसता",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 11,
	 starty: 29
},
{
	 clue: "कच्ची है उमरिया कोरी है चुनरिया-(8)",
	 answer: "मोहेभीरंगदेताजा",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 5,
	 starty: 38
},
{
	 clue: "ज़िन्दगी इत्तिफ़ाक़ है-(8)",
	 answer: "कलभीइत्तिफ़ाक़थी",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 7,
	 starty: 36
},
{
	 clue: "आज किसी के हाथों ने दिल के तारों को छेड़ दिया-(19)",
	 answer: "गहरीनींदमेंसोयेसाज़कीझंकारोंकोछेड़दिया",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 9,
	 starty: 38
},
{
	 clue: "आसमां पे है ख़ुदा और ज़मीं पे हम-(17)",
	 answer: "आजकलवहइसतरफ़देखताहैकम",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 5,
	 starty: 44
},
{
	 clue: "इतनी हसीन इतनी जवाँ रात क्या करें-(15)",
	 answer: "जागेहैंकुछअजीबसेजज़्बातक्याकरें",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 12,
	 starty: 38
},
{
	 clue: "दिल लेके दग़ा देंगे-(8)",
	 answer: "यारहैंमतलबके",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 1,
	 starty: 52
},
{
	 clue: "जीवन के सफ़र में राही-(10)",
	 answer: "मिलतेहैंबिछड़जानेको",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 1,
	 starty: 54
},
{
	 clue: "जीवन के सफ़र में राही-(10)",
	 answer: "मिलतेहैंबिछड़जानेको",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 1,
	 starty: 54
},
{
	 clue: "मेरी सुन ले अरज बनवारी-(10)",
	 answer: "तेरेद्वारखड़ीदुखियारी",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 1,
	 starty: 56
},
{
	 clue: "गैरों पे करम अपनों पे सितम-(12)",
	 answer: "ऐजानएवफ़ायेज़ुल्मनकर",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 3,
	 starty: 58
},
{
	 clue: "उलझन सुलझे ना रस्ता सूझे ना-(10)",
	 answer: "जाऊँकहाँमैंजाऊँकहाँ?",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 3,
	 starty: 59
},
{
	 clue: "ये हवा ये हवा ये हवा-(9)",
	 answer: "येफिज़ायेफिज़ायेफिज़ा",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 3,
	 starty: 64
},
{
	 clue: "मौत कभी भी मिल सकती है-(12)",
	 answer: "लेकिनजीवनकलनामिलेगा",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 1,
	 starty: 67
},
{
	 clue: "पिघला है सोना दूर गगन पर-(10)",
	 answer: "फैलरहेहैंशामकेसाये",
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
