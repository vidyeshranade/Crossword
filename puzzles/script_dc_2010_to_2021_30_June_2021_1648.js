
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "आज रो लेने दे वे जी भर के XX XX X XX XX X-(10)",
	 answer: "मेरीसाँसोंसेदग़ाकरके",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 1
},
{
	 clue: "दिन परेशां है रात भारी है XXX X X XX X XX X-(11)",
	 answer: "ज़िन्दगीहैकेफिरभीप्यारीहै",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 6
},
{
	 clue: "रास्ते भागे पाँव से आगे XXX X XX, XX XX X XX-(13)",
	 answer: "ज़िन्दगीसेचलकुछऔरभीमाँगे",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 1,
	 starty: 6
},
{
	 clue: "मन तेरा जो रोग है मोहे समझ ना आये XX X X XX XX X, XX X XX XXX-(17)",
	 answer: "पासहैजोसबछोड़केदूरकोपासबुलाये",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 4,
	 starty: 4
},
{
	 clue: "कैसे कैसे धागों से बुनी है ये दुनिया XX XX XX XXX X X XXX-(14)",
	 answer: "कभीधूपकभीबादलोंकीयेलड़ियाँ",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 8,
	 starty: 1
},
{
	 clue: "मिला हूँ अब जो तुम से X XX X XX XXX X XXX XX-(15)",
	 answer: "हैदिलकोमेरेकसमसेसुकूनमिला",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 11,
	 starty: 6
},
{
	 clue: "क्या कभी सवेरा लाता है अंधेरा XX XXX XX X XXX-(11)",
	 answer: "सूखीसियाहीदेतीहैगवाही",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 2,
	 starty: 21
},
{
	 clue: "बूँद बूँद में गुम सा है X XXX X X XXX X-(10)",
	 answer: "येसावनभीतोतुमसाहै",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 4,
	 starty: 20
},
{
	 clue: "कभी जो बादल बरसे X XX XX XX XX X-(10)",
	 answer: "मैंदेखूँतुझेआँखेंभरके",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 26
},
{
	 clue: "एक दिन कभी जो खुद को तराशे मेरी नज़र से तू ज़रा हाए रे XX X XX X X XX X XXX XXX X XX, XX X-(22)",
	 answer: "आँखोंसेतेरीक्याक्याछुपाहैतुझकोदिखाऊँमैंज़राहाएरे",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 6,
	 starty: 26
},
{
	 clue: "अगर ज़िंदगी हो खुद में कहीं XX X XX XX X XX-(10)",
	 answer: "फिरक्योंरहेंकिसीकीकमी",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 9,
	 starty: 25
},
{
	 clue: "सुखी ज़मीं है दे दे जमीं को XX XX XXX XX-(9)",
	 answer: "एकबूँदबारिशख़ुदा",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 11,
	 starty: 28
},
{
	 clue: "मुझ में तू तू ही तू बसा XX X XX XX X-(8)",
	 answer: "नैनोंमेंजैसेख़्वाबसा",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 2,
	 starty: 41
},
{
	 clue: "दहलीज पे मेरे दिल की X XX X XX XXX-(9)",
	 answer: "जोरक्खेहैंतूनेकदम",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 4,
	 starty: 40
},
{
	 clue: "दिलों की मोहब्बत को बांधे क्यों हाय रे XXX, XXX, XXX, XXX-(12)",
	 answer: "दायरेदाएरेदाएरेदाएरे",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 11,
	 starty: 36
},
{
	 clue: "जो भी मैं कहना चाहूँ XXX XX XXX XX-(10)",
	 answer: "बर्बादकरेअल्फ़ाज़मेरे",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 2,
	 starty: 47
},
{
	 clue: "रज के रुलाया रज के हँसाया XX XX X X XX XXX-(11)",
	 answer: "मैंनेदिलखोकेइश्क़कमाया",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 2,
	 starty: 51
},
{
	 clue: "दर्द दिलों के कम हो जाते X XX XX XX XX X XX-(12)",
	 answer: "मैंऔरतुमगरहमहोजाते",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 2,
	 starty: 51
},
{
	 clue: "न बोलू मैं तो कलेजा फूँके X XX X X XXX XX X-(11)",
	 answer: "जोबोलदूंतोज़बानजलेहै",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 5,
	 starty: 49
},
{
	 clue: "मेरी रूह करेगी फ़रियाद XX XX XX X XXX-(10)",
	 answer: "मेरीसांसेकहींखोजाएँगी",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 10,
	 starty: 47
},
{
	 clue: "कोई दिल बेक़ाबू कर गया XX XX XX X XX XX-(11)",
	 answer: "औरइश्क़ादिलमेंभरगया",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 8,
	 starty: 49
},
{
	 clue: "साथिया साथिया पगले से दिल ने यह क्या किया XX XX,XX XX, XXX XXX X XX XX-(19)",
	 answer: "चुनलियाचुनलियातुझकोदीवानेनेचुनलिया",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 12,
	 starty: 48
},
{
	 clue: "तेरे बिन तेरे बिन XX XX XXX XX-(9)",
	 answer: "तेरेबिनामरनानहीं",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 2,
	 starty: 62
},
{
	 clue: "हम तेरे बिन अब रह नहीं सकते XX XX X XXX XX-(10)",
	 answer: "तेरेबिनाक्यावजूदमेरा",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 4,
	 starty: 60
},
{
	 clue: "छल्ला की लभदा फिरे XX XX XX XX-(8)",
	 answer: "यारओदाघरकेडा",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 7,
	 starty: 61
},
{
	 clue: "कैसे जिऊँगा कैसे बता दे मुझको तेरे बिना XX XX XX-(6)",
	 answer: "तेरामेराजहां",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 1,
	 starty: 69
},
{
	 clue: "ऐसी क्या चली हवा X X XX-(4)",
	 answer: "केलेगई",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 7,
	 starty: 67
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
