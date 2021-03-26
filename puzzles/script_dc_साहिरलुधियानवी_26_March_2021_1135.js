
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
	 clue: "दिल कहे रुक जा रे रुक जा यहीं पे कहीं-(15)",
	 answer: "जोबातइसजगहहैकहींपरनहीं",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 4,
	 starty: 4
},
{
	 clue: "दिन हैं बहार के तेरे मेरे इकरार के-(12)",
	 answer: "दिलकेसहारेआजाप्यारकरें",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 1,
	 starty: 8
},
{
	 clue: "हम जब चलें तो ये जहान झूमें-(12)",
	 answer: "आरज़ूहमारीआसमाँकोचूमें",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 7,
	 starty: 2
},
{
	 clue: "इन हवाओं में इन फिजाओं में-(10)",
	 answer: "तुझकोमेराप्यारपुकारे",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 9,
	 starty: 3
},
{
	 clue: "इन हवाओं में इन फिजाओं में-(10)",
	 answer: "तुझकोमेराप्यारपुकारे",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 9,
	 starty: 3
},
{
	 clue: "ऐ मेरी जोहराजबीं तुझे मालूम नहीं-(14)",
	 answer: "तूअभीतकहैहसींऔरमैंजवान",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 11,
	 starty: 4
},
{
	 clue: "संसार से भागे फिरते हो-(11)",
	 answer: "भगवानकोतुमक्यापाओगे",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 6,
	 starty: 17
},
{
	 clue: "यह देश है वीर जवानों का-(9)",
	 answer: "अलबेलोंकामस्तानोंका",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 23
},
{
	 clue: "तेरी दुनिया में जीने से-(11)",
	 answer: "तोबेहतरहैकेमरजाएँ",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 3,
	 starty: 22
},
{
	 clue: "बस्ती बस्ती परबत परबत गाता जाए बंजारा-(10)",
	 answer: "लेकरदिलकाएकतारा",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 9,
	 starty: 18
},
{
	 clue: "वो देखें तो उनकी इनायत न देखें तो रोना क्या-(19)",
	 answer: "जोदिलग़ैरकाहोउसकाहोनाक्याऔरनहोनाक्या",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 11,
	 starty: 19
},
{
	 clue: "मैं जब भी अकेली होती हूँ-(10)",
	 answer: "तुमचुपकेसेआजातेहो",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 2,
	 starty: 29
},
{
	 clue: "जाने क्या तूने कही-(7)",
	 answer: "जानेक्यामैनेसुनी",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 3,
	 starty: 31
},
{
	 clue: "सर जो तेरा चकराए-(7)",
	 answer: "यादिलडूबाजाए",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 2,
	 starty: 34
},
{
	 clue: "माँग के साथ तुम्हारा मैने माँग लिया संसार-(20)",
	 answer: "दिलकहेदिलदारमिलाहमकहेंहमेंप्यारमिला",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 3,
	 starty: 34
},
{
	 clue: "प्रभू तेरो नाम जो ध्याए फल पाए-(8)",
	 answer: "सुखलाएतेरोनाम",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 8,
	 starty: 31
},
{
	 clue: "दिल लेके दग़ा देंगे-(8)",
	 answer: "यारहैंमतलबके",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 5,
	 starty: 38
},
{
	 clue: "लागा चुनरी में दाग़ छुपाऊँ कैसे-(6)",
	 answer: "घरजाऊँकैसे",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 6,
	 starty: 37
},
{
	 clue: "नाज़ों के पले काँटों पे चलें ऐसा भी जहां में होता है-(21)",
	 answer: "तक़दीरकेज़ालिमहाथोंसेदिलख़ूनकेआँसूरोताहै",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 9,
	 starty: 38
},
{
	 clue: "दिल जले तो जले-(7)",
	 answer: "ग़मपलेतोपले",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 2,
	 starty: 45
},
{
	 clue: "चंदा रे मेरे भैया से कहना-(6)",
	 answer: "बहनायादरे",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 11,
	 starty: 38
},
{
	 clue: "आसमां पे है ख़ुदा और ज़मीं पे हम-(17)",
	 answer: "आजकलवहइसतरफ़देखताहैकम",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 1,
	 starty: 50
},
{
	 clue: "ज़िन्दगी हँसने गाने के लिए है पल दो पल-(12)",
	 answer: "इसेखोनानहींखोकेरोनानहीं",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 1,
	 starty: 56
},
{
	 clue: "रेशमी सलवार कुर्ता जाली का-(14)",
	 answer: "रूपसहानहींजाएनख़रेवालीका",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 5,
	 starty: 52
},
{
	 clue: "अल्ला तेरो नाम ईश्वर तेरो नाम-(11)",
	 answer: "सबकोसन्मतीदेभगवान",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 11,
	 starty: 46
},
{
	 clue: "यूँ तो हम ने लाख हसीं देखे हैं तुमसा नहीं देखा-(11)",
	 answer: "उफ़येनज़रउफ़येअदा",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 3,
	 starty: 59
},
{
	 clue: "तेरे चेहरे से नज़र नहीं हटती-(8)",
	 answer: "नज़ारेहमक्यादेखें",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 3,
	 starty: 62
},
{
	 clue: "हाय .. बलमा अनाड़ी मन भाये-(9)",
	 answer: "काकरूँसमझनाआये",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 7,
	 starty: 58
},
{
	 clue: "झुकती घटा गाती हवा सपने जगाए-(15)",
	 answer: "नन्हासादिलमेरामचलमचलजाए",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 11,
	 starty: 56
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
