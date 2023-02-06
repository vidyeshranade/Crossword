
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "मेरे तुम्हारे बीच में अब तो X XXXX X XXX-(9)",
	 answer: "नापरबतनासागर",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 3,
	 starty: 7
},
{
	 clue: "आ जानएजां X XX X XX XX, XX, XX-(12)",
	 answer: "आमेरायेहुस्नजवांजवांजवां",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 5,
	 starty: 5
},
{
	 clue: "दुनिया में ऐसा कहाँ सबका नसीब है XX XX XXX XX X XXX X-(14)",
	 answer: "कोईकोईअपनेपियाकेकरीबहै",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 7,
	 starty: 3
},
{
	 clue: "एक तू ना मिला सारी दुनिया मिले भी तो क्या है XX XX X XX, XX XXX XX X X X X-(18)",
	 answer: "मेरादिलनाखिलासारीबगियाखिलेभीतोक्याहै",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 11,
	 starty: 2
},
{
	 clue: "आसमां के नीचे हम आज अपने पीछे XX X XX XX X XX-(10)",
	 answer: "प्यारकाजहांबसाकेचले",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 2,
	 starty: 15
},
{
	 clue: "छूने ना दूँगी मैं हाथ रे XXXX X XX XX XX-(11)",
	 answer: "नजरियोंसेदिलभरदूँगी",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 4,
	 starty: 17
},
{
	 clue: "ओ मेरे सनम ओ मेरे सनम X XX XXX XX XX X XX-(13)",
	 answer: "दोजिस्ममगरएकजानहैंहम",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 6,
	 starty: 17
},
{
	 clue: "चले आओ चले आओ चले आओ XXX X XX XX XX X-(11)",
	 answer: "अकेलेहैंचलेआओजहाँहो",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 9,
	 starty: 14
},
{
	 clue: "ये दिल की लगी कम क्या होगी X XX XX XX X XX-(10)",
	 answer: "येईश्कभलाकमक्याहोगा",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 24
},
{
	 clue: "मेरी दास्तां मुझे ही मेरा दिल सुना के रोये XX X X XXXX, XX XXXX XX-(16)",
	 answer: "कभीरोकेमुस्कुरायेकभीमुस्कुराकेरोये",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 2,
	 starty: 28
},
{
	 clue: "तेरी राहों में खड़े हैं दिल थाम के XX X XXX XX XX X-(11)",
	 answer: "हमहैंदीवानेतेरेनामके",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 6,
	 starty: 28
},
{
	 clue: "नैनोंवाली ने हाय मेरा दिल लूटा XXXX, XXXX, XX XXXX X XX XX XX XX-(23)",
	 answer: "नैनोंवालीभोलीभालीएकमतवालीनेहायमेरादिललूटा",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 8,
	 starty: 28
},
{
	 clue: "दिन सारा गुज़ारा तोरे अंगना XX XX X XX XX XXX-(12)",
	 answer: "अबजानेदेमुझेमोरेसजना",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 11,
	 starty: 27
},
{
	 clue: "एक बार ज़रा फिर कह दो XX XX X XX XXX-(10)",
	 answer: "मुझेशर्माकेतुमदीवाना",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 2,
	 starty: 38
},
{
	 clue: "सायोनारा सायोनारा XX XXXX XXXX-(10)",
	 answer: "वादानिभाऊँगीसायोनारा",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 10,
	 starty: 38
},
{
	 clue: "मैं तो तुम संग नैन मिला के हार गई सजना X XX X XX XXX-(9)",
	 answer: "क्योंझूठेसेप्रीतलगाई",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 2,
	 starty: 48
},
{
	 clue: "बिखरा के जुल्फें चमन में ना जाना X-(1)",
	 answer: "क्यों",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 2,
	 starty: 48
},
{
	 clue: "कैसे कहूं कैसे कहूं XX XX X X XXX-(9)",
	 answer: "तोसेजियाकीमैंबतियां",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 5,
	 starty: 47
},
{
	 clue: "डाल भी दे पलकों की छाँव जलिमा धूप चढ़ी जाये X X XXX XXX X XX, XX X XX XX XX-(20)",
	 answer: "लोनासनमपलकोंकानामप्रीतमेप्रीतबढ़ीजाये",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 3,
	 starty: 51
},
{
	 clue: "मेहताब तेरा चेहरा XX XX X XX X-(8)",
	 answer: "किसख्वाबमेंदेखाथा",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 2,
	 starty: 53
},
{
	 clue: "साथिया नहीं जाना के जी ना लगे XXX X XXX X X X XX-(12)",
	 answer: "मौसमहैसुहानाकेजीनालगे",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 1,
	 starty: 61
},
{
	 clue: "इस दुनिया में जीना हो तो सुन लो मेरी बात XX XX X XXX XXXX-(12)",
	 answer: "ग़मछोड़केमनाओरंगरेली",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 7,
	 starty: 55
},
{
	 clue: "आज की मुलाकात बस इतनी XX XX XX XX XX XXX-(13)",
	 answer: "करलेनाबातेकलचाहेजितनी",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 11,
	 starty: 54
},
{
	 clue: "तुम्हारी नज़र क्यों खफा हो गई XX XX X XX XX X XX-(12)",
	 answer: "ख़ताबख़्शदोगरख़ताहोगई",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 1,
	 starty: 67
},
{
	 clue: "पिया तोसे नैना लागे रे नैना लागे रे XX X X XX XX X-(9)",
	 answer: "जानेक्याहोअबआगेरे",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 3,
	 starty: 69
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
