
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
	 clue: "दो अकेले चल रह हैं XX XXX, XX XXX-(10)",
	 answer: "रातअकेलीचाँदअकेला",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 1
},
{
	 clue: "मेरे सरहाने जलाओ सपने XX XXX X XX XX-(10)",
	 answer: "मुझेजरासीतोनींदआए",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 5,
	 starty: 4
},
{
	 clue: "मुझे जाँ ना कहो मेरी जाँ XX X, XX X-(6)",
	 answer: "मेरीजाँमेरीजाँ",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 7,
	 starty: 4
},
{
	 clue: "जब भी ये दिल उदास होता है XX XX XXXX XX X-(11)",
	 answer: "जानेकौनआसपासहोताहै",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 12
},
{
	 clue: "एक परवाज़ दिखाई दी है XX XXX XXX X X-(10)",
	 answer: "तेरीआवाज़सुनाईदीहै",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 11,
	 starty: 3
},
{
	 clue: "हज़ार राहें मुड़ के देखीं XX X XX XX X XX-(10)",
	 answer: "कहींसेकोईसदानाआई",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 8,
	 starty: 7
},
{
	 clue: "सौ दर्द हैं सौ राहतें XX XX XXXX-(8)",
	 answer: "सबमिलादिलनशीं",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 1,
	 starty: 18
},
{
	 clue: "कोई दिया जले कहीं XXX X XX-(6)",
	 answer: "आवाज़देकोई",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 3,
	 starty: 16
},
{
	 clue: "बस एक चुप सी लगी है XX XXX XX-(7)",
	 answer: "नहींउदासनहीं",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 7,
	 starty: 18
},
{
	 clue: "छल्ला की लभदा फिरे XX XX XX XX-(8)",
	 answer: "यारओदाघरकेडा",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 4,
	 starty: 21
},
{
	 clue: "मैंने कहा फूलों से हँसो तो वो खिलखिलाके हँस दिये XX X XX XXX X XX XX XX XXX X XX-(21)",
	 answer: "औरयेकहाजीवनहैभाईमेरेभाईहँसनेकेलिये",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 5,
	 starty: 20
},
{
	 clue: "रजनीगंधा फूल तुम्हारे महके यूँ ही जीवन में X X XXX XX XX X XX XXXX XX X-(19)",
	 answer: "यूँहीमहकेप्रीतपियाकीमेरेअनुरागीमनमें",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 10,
	 starty: 17
},
{
	 clue: "रोज रोज डाली डाली क्या लिख जाए XXX, XXX, XXX-(9)",
	 answer: "भंवराबावराबावरा",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 1,
	 starty: 26
},
{
	 clue: "कतरा कतरा मिलती है XXX XXX XX X-(9)",
	 answer: "कतराकतराजीनेदो",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 3,
	 starty: 24
},
{
	 clue: "जिनके सर हो इश्क़ की छाँव XX X XX XXX XX-(10)",
	 answer: "पाँवकेनीचेजन्नतहोगी",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 3,
	 starty: 38
},
{
	 clue: "वो शाम कुछ अजीब थी X XX X XXX X-(8)",
	 answer: "येशामभीअजीबहै",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 1,
	 starty: 41
},
{
	 clue: "दिन जा रहे हैं के रातों के साए XXX XXX XX X XXX-(12)",
	 answer: "अपनीसलीबेंआपहीउठाए",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 1,
	 starty: 45
},
{
	 clue: "जिया लागे ना तेरे बिना जैसे प्रीतम XXX XX XX X XX-(10)",
	 answer: "चांदनीबिनारातनाभाए",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 3,
	 starty: 43
},
{
	 clue: "तुम जो आओ तो प्यार आ जाए XXX X XXX X XX-(10)",
	 answer: "ज़िन्दगीमेंबहारआजाए",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 12,
	 starty: 36
},
{
	 clue: "खाली हाथ शाम आई है XX XX XXX-(7)",
	 answer: "खालीहाथजाएगी",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 5,
	 starty: 44
},
{
	 clue: "आकाश के उस पार भी आकाश है XXX X XXX XXX X XXX-(14)",
	 answer: "आकाशपेबहतेसमयकीतरह",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 7,
	 starty: 45
},
{
	 clue: "मीठे बोल बोले  बोले पायलियाँ  XX X XXX XX XXXX XXX-(9)",
	 answer: "बोलेरेबोलेपायलियाँ",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 1,
	 starty: 54
},
{
	 clue: "हीर हीर ना आखो अड़ियों X X XXX XX-(7)",
	 answer: "मैंतेसाहिबांहोई",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 6,
	 starty: 51
},
{
	 clue: "भीनी भीनी भोर भोर आई XX XX XX XXX XX-(11)",
	 answer: "रूपरूपपरछिड़केसोना",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 2,
	 starty: 57
},
{
	 clue: "समय ओ धीरे चलो XX XX XX X XX-(9)",
	 answer: "बुझगईराहसेछाँव",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 12,
	 starty: 48
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
