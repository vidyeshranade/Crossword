
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "जिया जले जाँ जले नैनो तले धुआँ चले धुआँ चले XXXX XX XX, XX X XX X XX X, XX X-(20)",
	 answer: "रातभरधुआँचलेजानूँनाजानूँनाजानूँनासखीरे",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "उम्मीद होगी कोई XX XX XX XX XX XX-(12)",
	 answer: "रातढलेवर्नाकोईआतानहीं",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 1
},
{
	 clue: "कोई अटका हुआ है पल शायद XX X XX XX X XX XXX-(13)",
	 answer: "वक़्तमेंपड़गयाहैबलशायद",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 5,
	 starty: 1
},
{
	 clue: "घुंघटा गिरा है ज़रा घुंघटा उठा दे XX XX XX X XXX XX X X-(14)",
	 answer: "कोईमेरेमाथेकीबिंदीयासजादेरे",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 7,
	 starty: 1
},
{
	 clue: "शाम से आँख में नमीं नमीं सी है XX XX XX X XX XX X X-(13)",
	 answer: "आजफिरआपकीकमीकमीसीहै",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 9,
	 starty: 1
},
{
	 clue: "जब भी ये दिल उदास होता है XX XX XXXX XX X-(11)",
	 answer: "जानेकौनआसपासहोताहै",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 1,
	 starty: 15
},
{
	 clue: "कई बार यूँ भी देखा है X X XX X XX XX X-(10)",
	 answer: "येजोमनकीसीमारेखाहै",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 11,
	 starty: 6
},
{
	 clue: "शाम से आँख में नमीं सी है XX XX XX X XX X X-(11)",
	 answer: "आजफिरआपकीकमीसीहै",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 5,
	 starty: 15
},
{
	 clue: "एक सुबह एक मोड़ पर XX XX XX XX XX-(10)",
	 answer: "मैंनेकहाउसेरोककर",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 3,
	 starty: 22
},
{
	 clue: "हीर हीर ना आखो अड़ियों X X XXX XX-(7)",
	 answer: "मैंतेसाहिबांहोई",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 3,
	 starty: 22
},
{
	 clue: "कतरा कतरा मिलती है XXX XXX XX X-(9)",
	 answer: "कतराकतराजीनेदो",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 10,
	 starty: 19
},
{
	 clue: "गुज़र जाए दिन दिन दिन X XX XX XX XX XX-(11)",
	 answer: "किहरपलगिनगिनगिन",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 12,
	 starty: 20
},
{
	 clue: "सौ दर्द हैं सौ राहतें XX XX XXXX-(8)",
	 answer: "सबमिलादिलनशीं",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 8,
	 starty: 25
},
{
	 clue: "रजनीगंधा फूल तुम्हारे महके यूँ ही जीवन में X X XXX XX XX X XX XXXX XX X-(19)",
	 answer: "यूँहीमहकेप्रीतपियाकीमेरेअनुरागीमनमें",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 5,
	 starty: 28
},
{
	 clue: "तुम हो मेरे दिल की धड़कन XX XX XX X XX-(9)",
	 answer: "तुमबिनलगेनामन",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 4,
	 starty: 30
},
{
	 clue: "चली रे चली रे जुनूं को लिए XXX XXX, XX X XX-(11)",
	 answer: "कतराकतरालम्होंकोपिए",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 34
},
{
	 clue: "जाने दो मुझे जाने दो XXX X XX, XX X XX-(11)",
	 answer: "रंजिशेंयागिलेवफ़ाकेसिले",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 2,
	 starty: 36
},
{
	 clue: "पहचान तो थी पहचाना नहीं XX XXX XXX XX XX-(12)",
	 answer: "मैंनेअपनेआपकोजानानहीं",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 2,
	 starty: 39
},
{
	 clue: "आजा माही मेरे आजा माही मेरे आजा माही मेरे आ X XX XX X XX XX X-(11)",
	 answer: "आधूपमलूँमैंतेरेहाथोंमें",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 2,
	 starty: 44
},
{
	 clue: "साथिया साथिया XXX, XXX, XX XX XX-(12)",
	 answer: "मद्धममद्धमतेरीगीलीहँसी",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 8,
	 starty: 38
},
{
	 clue: "बस एक चुप सी लगी है XX XXX XX-(7)",
	 answer: "नहींउदासनहीं",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 1,
	 starty: 50
},
{
	 clue: "तुम्हे ज़िंदगी के उजाले मुबारक XXX XX XX XX X XX X-(13)",
	 answer: "अंधेरेहमेंआजरासआगएहैं",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 12,
	 starty: 40
},
{
	 clue: "ज़िहालएमस्कीं मकुन बारंजिश XXX-X-XX XXX XX X-(12)",
	 answer: "बहालएहिज्राबेचारादिलहै",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 10,
	 starty: 43
},
{
	 clue: "न बोले तुम ना मैंने कुछ कहा XXX X XX XX X XX-(11)",
	 answer: "मगरनजानेऐसाक्योंलगा",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 1,
	 starty: 53
},
{
	 clue: "थोड़ी सी जमीं थोड़ा आसमां XXX X XX XX XXX-(11)",
	 answer: "तिनकोंकाबसएकआशियां",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 4,
	 starty: 52
},
{
	 clue: "जाग के काटी सारी रैना XX X XX XX XX X-(10)",
	 answer: "नैनोंमेंकलओसगिरीथी",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 1,
	 starty: 59
},
{
	 clue: "छल्ला की लभदा फिरे XX XX XX XX-(8)",
	 answer: "यारओदाघरकेडा",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 6,
	 starty: 57
},
{
	 clue: "मुझे जाँ ना कहो मेरी जाँ XX X, XX X-(6)",
	 answer: "मेरीजाँमेरीजाँ",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 9,
	 starty: 58
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
