
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "हमको तो यारा तेरी यारी जान से प्यारी X XX XX X-(6)",
	 answer: "तूचाहेतोड़दे",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 6,
	 starty: 1
},
{
	 clue: "एक तेरा साथ हम को दो जहां से प्यारा है X X X XX XXX X-(9)",
	 answer: "तूहैतोहरसहाराहै",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 4,
	 starty: 4
},
{
	 clue: "ये मेरा जीवन तेरे लिए है XXX X XXX XX XX X-(12)",
	 answer: "जीवनकासपनातेरेलिएहै",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 2,
	 starty: 7
},
{
	 clue: "सुन सुन सुन सुन जालिमा XX XX X XX X X XX-(11)",
	 answer: "प्यारहमकोतुमसेहोगया",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 8,
	 starty: 3
},
{
	 clue: "हम आज कहीं दिल खो बैठे X XXX XX X X XX-(10)",
	 answer: "यूँसमझोकिसीकेहोबैठे",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 1,
	 starty: 11
},
{
	 clue: "ना तुम हमें जानो X XX XX XX-(7)",
	 answer: "नाहमतुम्हेंजाने",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 5,
	 starty: 8
},
{
	 clue: "आजा पिया तोहे प्यार दूँ गोरी बैयाँ तोपे वार दूँ XXXX X XXX XXX, XX XX XX, XXX X XX-(23)",
	 answer: "किसलिएतूइतनाउदाससुखेंसुखेंहोंठअँखियोंमेंप्यास",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 5,
	 starty: 11
},
{
	 clue: "जवां हो यारों ये तुमको हुआ क्या XX XXX XX XX-(9)",
	 answer: "अजीहमकोदेखोज़रा",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 11,
	 starty: 13
},
{
	 clue: "जा जा जा जा बेवफ़ा XX XX XX XX X-(9)",
	 answer: "कैसाप्यारकैसीप्रीतरे",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 8,
	 starty: 23
},
{
	 clue: "इन बहारों में अकेले ना फिरो XX X XX XX XX X X-(11)",
	 answer: "राहमेंकालीघटारोकनाले",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 11,
	 starty: 21
},
{
	 clue: "आँचल में सजा लेना कलियाँ XX X XXX XX XX-(10)",
	 answer: "ज़ुल्फ़ोंमेंसितारेभरलेना",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 3,
	 starty: 31
},
{
	 clue: "यार चुलबुला है हसीन दिलरुबा है XX XXX X XXX XX XX-(13)",
	 answer: "झूठबोलताहैमगरज़राज़रा",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 3,
	 starty: 34
},
{
	 clue: "जाऊँ तो कहाँ जाऊँ XXXX XX X-(7)",
	 answer: "सबकुछयहींहै",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 5,
	 starty: 33
},
{
	 clue: "मिले नहीं तो फिर झुके नहीं नज़र वही प्यार की XXX XX XX X XXX-(11)",
	 answer: "नादानदिलतुझेक्यामालूम",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 12,
	 starty: 31
},
{
	 clue: "यारा ओ यारा इश्क ने मारा X XX X X XXX XXX-(11)",
	 answer: "होगयामैंतोतुझमेंतमाम",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 2,
	 starty: 41
},
{
	 clue: "चढ़ती जवानी मेरी चाल मस्तानी XX XXX X XX XX-(10)",
	 answer: "तूनेकदरनाजानीरामा",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 1,
	 starty: 42
},
{
	 clue: "जब चाहा यारा तुमने XX X XX XXX-(8)",
	 answer: "आँखोंसेमारातुमने",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 7,
	 starty: 36
},
{
	 clue: "चल री सजनी अब क्या सोचे XXX X XX XX XX-XX-(12)",
	 answer: "कजरानाबहजाएरोतेरोते",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 1,
	 starty: 44
},
{
	 clue: "आजा रे मेरे प्यार के राही XX XXX XX XX X-(10)",
	 answer: "राहनिहारूँबड़ीदेरसे",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 3,
	 starty: 46
},
{
	 clue: "जब दिल ही टूट गया XX X X X XXX-(8)",
	 answer: "हमजीकेक्याकरेंगे",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 4,
	 starty: 46
},
{
	 clue: "तौबा ये मतवाली चाल XX XX XX X XX-(9)",
	 answer: "झुकजाएफूलोंकीडाल",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 3,
	 starty: 51
},
{
	 clue: "होठों में ऐसी बात मैं दबा के चली आई XX XX XX XX X XXX X XXX-(16)",
	 answer: "खुलजाएवोहीबाततोदुहाईहैदुहाई",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 6,
	 starty: 48
},
{
	 clue: "यादों की बारात निकली है आज दिल के द्वारे XXX X XXXX XX XX X XXX-(16)",
	 answer: "सपनोंकीशहनाईबीतेदिनोंकोपुकारे",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 9,
	 starty: 48
},
{
	 clue: "हमदम मेरे मान भी जाओ कहना मेरे प्यार का XXX XXX, XX XX X, XX X X XXXX X-(20)",
	 answer: "हलकाहलकासुर्खलबोंपेरंगतोहैइकरारका",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 11,
	 starty: 50
},
{
	 clue: "बचपन के दिन भी क्या दिन थे XXX XXX XXX XX X-(12)",
	 answer: "उड़तेफिरतेतितलीबनके",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 4,
	 starty: 57
},
{
	 clue: "चुनरी सम्भाल गोरी XX XX XX X-(7)",
	 answer: "उड़ीचलीजाएरे",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 1,
	 starty: 65
},
{
	 clue: "कैसा जादू बलम तूने डारा XX XX XX XX X XX X XX XX-(11)",
	 answer: "खोगयानन्हासादिलहमारा",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 1,
	 starty: 67
},
{
	 clue: "ना जा ओ मेरे हमदम XX XX X XXX-(8)",
	 answer: "सुनोवफ़ाकीपुकार",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 5,
	 starty: 69
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
