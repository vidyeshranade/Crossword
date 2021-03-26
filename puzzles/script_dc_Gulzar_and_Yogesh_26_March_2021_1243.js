
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "ऐ ज़िन्दगी गले लगा ले XXX X XX XX XX XX X XX X XXX X,  X X-(22)",
	 answer: "हमनेभीतेरेहरएकग़मकोगलेसेलगायाहैहैना",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "न बोले तुम ना मैंने कुछ कहा XXX X XX XX X XX-(11)",
	 answer: "मगरनजानेऐसाक्योंलगा",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 2
},
{
	 clue: "बस एक चुप सी लगी है XX XXX XX-(7)",
	 answer: "नहींउदासनहीं",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 4,
	 starty: 2
},
{
	 clue: "एक सुबह एक मोड़ पर XX XX XX XX XX-(10)",
	 answer: "मैंनेकहाउसेरोककर",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 6,
	 starty: 1
},
{
	 clue: "जाग के काटी सारी रैना XX X XX XX XX X-(10)",
	 answer: "नैनोंमेंकलओसगिरीथी",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 8,
	 starty: 4
},
{
	 clue: "साथिया साथिया XXX, XXX, XX XX XX-(12)",
	 answer: "मद्धममद्धमतेरीगीलीहँसी",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 1,
	 starty: 12
},
{
	 clue: "जूठे नैना बोले सांची बतियां XX XXXX XX XX XXX-(13)",
	 answer: "नितचमकावेचाँदकालीरतिया",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 4,
	 starty: 9
},
{
	 clue: "जब कभी मुड़ के देखता हूँ मैं XX X XX XXXX X XXX X-(14)",
	 answer: "तुमभीकुछअजनबीसीलगतीहो",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 6,
	 starty: 11
},
{
	 clue: "ऊँगली पकड़ के तूने चलना सिखाया था ना XXXX XX X X XX XX X-(13)",
	 answer: "दहलीज़ऊँचीहैयेपारकरादे",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 10,
	 starty: 10
},
{
	 clue: "कहाँ तक ये मन को अँधेरे छलेंगे XXX XX XX, XX X XXX-(13)",
	 answer: "उदासीभरेदिनकभीतोढलेंगे",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 12,
	 starty: 10
},
{
	 clue: "हीर हीर ना आखो अड़ियों X X XXX XX-(7)",
	 answer: "मैंतेसाहिबांहोई",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 1,
	 starty: 24
},
{
	 clue: "छोटी सी कहानी से बारिशों के पानी से XX XX XX XX-(8)",
	 answer: "सारीवादीभरगयी",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 3,
	 starty: 24
},
{
	 clue: "जीवन से लंबे हैं बंधू ये जीवन के रस्ते XX XX XX X XX XX XX XX XXX XXX-(21)",
	 answer: "एकपलथमकेरोनाहोगाएकपलचलनाहँसके",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 1,
	 starty: 26
},
{
	 clue: "बहोत रात हुई XX XX X-(5)",
	 answer: "थकगयाहूँ",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 30
},
{
	 clue: "बड़ी सूनी सूनी है जिन्दगी ये जिन्दगी X XX X X XX XXXX, XXXX-(15)",
	 answer: "मैंखुदसेहूँयहाँअजनबीअजनबी",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 5,
	 starty: 26
},
{
	 clue: "शाम से आँख में नमीं सी है XX XX XX X XX X X-(11)",
	 answer: "आजफिरआपकीकमीसीहै",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 7,
	 starty: 29
},
{
	 clue: "शाम से आँख में नमीं सी है XX XX XX X XX X X-(11)",
	 answer: "आजफिरआपकीकमीसीहै",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 7,
	 starty: 29
},
{
	 clue: "दिल हूम हूम करे घबराए XX XX XX XX, XXXX-(12)",
	 answer: "घनधमधमकरेगरजाए",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 12,
	 starty: 27
},
{
	 clue: "मेरे सरहाने जलाओ सपने XX XXX X XX XX-(10)",
	 answer: "मुझेजरासीतोनींदआए",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 3,
	 starty: 38
},
{
	 clue: "आदतन तुमने कर दिये वादे XXXX XXX XXXX XX-(13)",
	 answer: "आदतनहमनेऐतबारकिया",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 11,
	 starty: 38
},
{
	 clue: "ये रात ये रात XX X XXXX XX-(9)",
	 answer: "झल्लीकिछिपकलीरात",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 3,
	 starty: 46
},
{
	 clue: "दो दीवाने शहर में XX X X XXXX X-(9)",
	 answer: "रातमेंयादोपहरमें",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 4,
	 starty: 48
},
{
	 clue: "एक अकेला इस शहर में XX X XX XXXX X-(10)",
	 answer: "रातमेंऔरदोपहरमें",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 4,
	 starty: 48
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
