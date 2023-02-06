
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "छाई बरखा बहार पड़े अंगना फुहार XX XX XX XX X, XX X-(12)",
	 answer: "सैय्याँआकेगलेलगजालगजा",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 3
},
{
	 clue: "कोई प्यार की देखे जादूगरी XXXX X XX XX XXXX-(13)",
	 answer: "गुलफ़ामकोमिलगईसब्ज़परी",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 7,
	 starty: 2
},
{
	 clue: "तेरी दुनिया से दूर चले हो के मजबूर हमें याद रखना XX XX X XXX, XX XXX XXX XX XX XXX-(23)",
	 answer: "जाओकहींभीसनमतुम्हेइतनीकसमहमेंयादरखना",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 9,
	 starty: 3
},
{
	 clue: "तू जहाँ जहाँ चलेगा मेरा साया साथ होगा XX XX, XX XX, XX XX, XX XX-(16)",
	 answer: "मेरासायामेरासायामेरासायामेरासाया",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 4,
	 starty: 9
},
{
	 clue: "बेखुदी में सनम उठ गये जो कदम X XX, X XX, X XX XX XX-(13)",
	 answer: "आगयेआगयेआगयेपासहम",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 11,
	 starty: 2
},
{
	 clue: "तुम ही हो माता पिता तुम ही हो XX X X XX, XX XX X X-(12)",
	 answer: "तुमहीहोबंधूसखातुमहीहो",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 2,
	 starty: 18
},
{
	 clue: "जे हम तुम चोरी से XX XX XX X-(7)",
	 answer: "बँधेएकडोरीसे",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 6,
	 starty: 16
},
{
	 clue: "झिर झिर बरसे सावनी अँखिया XXXX XX X-(7)",
	 answer: "सावरीयाघरआ",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 4,
	 starty: 23
},
{
	 clue: "बता दूँ क्या लाना XX XX X X XX-(8)",
	 answer: "तुमलौटकेआजाना",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 2,
	 starty: 26
},
{
	 clue: "नैना बरसे रिमझिम रिमझिम XX XX XXX X XX-(10)",
	 answer: "पियातोरेआवनकीआस",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 7,
	 starty: 22
},
{
	 clue: "दिल की गिरह खोल दो XX X XX, XX XX XX-(11)",
	 answer: "चुपनाबैठोकोईगीतगाओ",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 2,
	 starty: 30
},
{
	 clue: "तस्वीर तेरी दिल में XX XX X XXX X-(9)",
	 answer: "जिसदिनसेउतारीहै",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 4,
	 starty: 28
},
{
	 clue: "एक तेरा साथ हम को दो जहां से प्यारा है X X X XX XXX X-(9)",
	 answer: "तूहैतोहरसहाराहै",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 12,
	 starty: 20
},
{
	 clue: "अल्ला तेरो नाम ईश्वर तेरो नाम XX X XXX X XXXX-(11)",
	 answer: "सबकोसन्मतीदेभगवान",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 7,
	 starty: 31
},
{
	 clue: "जीवन डोर तुम्ही संग बाँधी X XXX XX XXX X-(10)",
	 answer: "क्यातोड़ेंगेइसबंधनको",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 5,
	 starty: 34
},
{
	 clue: "इस दुनिया में जीना हो तो सुन लो मेरी बात XX XX X XXX XXXX-(12)",
	 answer: "ग़मछोड़केमनाओरंगरेली",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 10,
	 starty: 30
},
{
	 clue: "आजा पिया तोहे प्यार दूँ गोरी बैयाँ तोपे वार दूँ XXXX X XXX XXX, XX XX XX, XXX X XX-(23)",
	 answer: "किसलिएतूइतनाउदाससुखेंसुखेंहोंठअँखियोंमेंप्यास",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 1,
	 starty: 41
},
{
	 clue: "रंग बिरंगी राखी लेके आई बहना X XX XXX X XX XX-(11)",
	 answer: "ओराखीबंधवालेमेरेवीर",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 2,
	 starty: 40
},
{
	 clue: "दिल तोड़नेवाले तुझे दिल ढूँढ रहा है XXX X X XXX XXX X XX X-(15)",
	 answer: "आवाज़देतूकौनसीनगरीमेंछूपाहै",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 3,
	 starty: 42
},
{
	 clue: "मेरे जीवन साथी कली थी मैं तो प्यासी X X XX XX XX X XXX-(12)",
	 answer: "तूनेदेखाहुईखिलकेबहार",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 1,
	 starty: 45
},
{
	 clue: "ओ शमा मुझे फूँक दे X X X XX, X X X XX-(10)",
	 answer: "मैंनमैंरहूँतूनतूरहे",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 12,
	 starty: 37
},
{
	 clue: "सोच के गगन झूमे अभी चाँद निकल आएगा XXXX XXXX XX-(10)",
	 answer: "झिलमिलचमकेंगेतारे",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 8,
	 starty: 42
},
{
	 clue: "कभी तो मिलेगी कहीं तो मिलेगी XXX X XXX XX-(9)",
	 answer: "बहारोंकीमंज़िलराही",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 10,
	 starty: 45
},
{
	 clue: "जोगी हम तो लुट गए तेरे प्यार में XX XXX XXX XX XX-(12)",
	 answer: "जानेतुझकोखबरकबहोगी",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 6,
	 starty: 53
},
{
	 clue: "आसमां के नीचे हम आज अपने पीछे XX X XX XX X XX-(10)",
	 answer: "प्यारकाजहांबसाकेचले",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 1,
	 starty: 62
},
{
	 clue: "मैं तेरी नज़र का सुरूर हूँ XX XX X X X XX X-(10)",
	 answer: "तुझेयादहोकेनायादहो",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 8,
	 starty: 57
},
{
	 clue: "हाय .. बलमा अनाड़ी मन भाये X XX XXX X XX-(9)",
	 answer: "काकरूँसमझनाआये",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 3,
	 starty: 62
},
{
	 clue: "लागे ना मोरा जिया XXX XX XXXXXXX-(9)",
	 answer: "सजनानहींआयेहाय",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 1,
	 starty: 68
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
