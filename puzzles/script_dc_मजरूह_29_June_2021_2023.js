
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "तेरे हमसफ़र गीत हैं तेरे गीत ही तो जीवन मीत हैं तेरे XX XX X X XX X, XX X XX XXXX X-(19)",
	 answer: "नग्मेंप्यारकेतूगायेजागायेजाऔरमुस्कुरायेजा",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "हम तो मोहब्बत करेगा XXX X XX XXX-(9)",
	 answer: "दुनियासेनहींडरेगा",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 3,
	 starty: 2
},
{
	 clue: "छुपा लो यूँ दिल में प्यार मेरा X XX XXX X X XX X-(11)",
	 answer: "केजैसेमंदिरमेंलौदीएकी",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 1,
	 starty: 5
},
{
	 clue: "मिले नहीं तो फिर झुके नहीं नज़र वही प्यार की XXX XX XX X XXX-(11)",
	 answer: "नादानदिलतुझेक्यामालूम",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 5,
	 starty: 2
},
{
	 clue: "तौबा ये मतवाली चाल XX XX XX X XX-(9)",
	 answer: "झुकजाएफूलोंकीडाल",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 10,
	 starty: 2
},
{
	 clue: "हम आज कहीं दिल खो बैठे X XXX XX X X XX-(10)",
	 answer: "यूँसमझोकिसीकेहोबैठे",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 3,
	 starty: 12
},
{
	 clue: "कोई नहीं है फिर भी है मुझको X XX XXX XXXX-(10)",
	 answer: "क्याजानेकिसकाइंतजार",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 7,
	 starty: 9
},
{
	 clue: "छोड़ दो आँचल जमाना क्या कहेगा XX XXX X XXX X X XXX, XXX X XXX X-(22)",
	 answer: "इनअदाओंकाजमानाभीहैदीवानादीवानाक्याकहेगा?",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 4,
	 starty: 15
},
{
	 clue: "दिल पुकारे आ रे आ रे आ रे XX X X XX XX-(8)",
	 answer: "अभीनाजामेरेसाथी",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 4,
	 starty: 17
},
{
	 clue: "ओ निगाहें मस्ताना XX XX X XXX-(8)",
	 answer: "देखसमाहैसुहाना",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 22
},
{
	 clue: "जाता कहाँ है दीवाने सबकुछ यहाँ है सनम XX X XX XXX XX X XX XXX-(16)",
	 answer: "बाकीकेसारेफ़सानेझूठेहैंतेरीक़सम",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 10,
	 starty: 14
},
{
	 clue: "दुःख हो या सुख XX XX XX XX X XX-(11)",
	 answer: "जबसदासंगरहेनाकोए",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 6,
	 starty: 24
},
{
	 clue: "बैयाँ ना धरो ओ बलमा X XX XX XX-(7)",
	 answer: "नाकरोमोसेरार",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 8,
	 starty: 22
},
{
	 clue: "दिल बेक़रार सा है हमको खुमार सा है XX X XX XX XXX-(10)",
	 answer: "जबसेतुम्हेंदेखासनम",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 2,
	 starty: 31
},
{
	 clue: "काली घटा छाए मोरा जिया तरसाए XX X XX XX XX XX-(11)",
	 answer: "ऐसेमेंकहीकोईमिलजाए",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 1,
	 starty: 33
},
{
	 clue: "चुरा लिया है तुमने जो दिल को XXX XX XXX XXX-(11)",
	 answer: "नजरनहींचुरानासनम",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 2,
	 starty: 39
},
{
	 clue: "पूछो ना यार क्या हुआ XX X XXX X XX-(9)",
	 answer: "दिलकाकरारक्याहुआ",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 8,
	 starty: 35
},
{
	 clue: "आयो कहाँ से घनश्याम XX XXX XX XX-(9)",
	 answer: "रैनाबिताईकिसधाम",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 2,
	 starty: 42
},
{
	 clue: "है अपना दिल तो आवारा X XX XX X XXX-(9)",
	 answer: "नाजानेकिसपेआएगा",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 2,
	 starty: 43
},
{
	 clue: "देखो मौसम क्या बहार है XX XXX, XXXX X-(10)",
	 answer: "साराआलमबेकरारहै",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 12,
	 starty: 35
},
{
	 clue: "तस्वीर तेरी दिल में XX XX X XXX X-(9)",
	 answer: "जिसदिनसेउतारीहै",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 1,
	 starty: 48
},
{
	 clue: "एक दिन हँसाना एक दिन रुलाना XXX X XX XXX-(9)",
	 answer: "जीवनकीरीतपुरानी",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 4,
	 starty: 46
},
{
	 clue: "कितनी अकेली कितनी तनहा सी लगी XXX XXX X XX-(9)",
	 answer: "उनसेमिलकेमैंआज",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 6,
	 starty: 48
},
{
	 clue: "प म ग म रे ग प म ग म X X X-(3)",
	 answer: "आआआ",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 6,
	 starty: 55
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
