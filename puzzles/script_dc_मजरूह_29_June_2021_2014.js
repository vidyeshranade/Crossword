
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "आँचल में सजा लेना कलियाँ XX X XXX XX XX-(10)",
	 answer: "ज़ुल्फ़ोंमेंसितारेभरलेना",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 2,
	 starty: 1
},
{
	 clue: "जे हम तुम चोरी से XX XX XX X-(7)",
	 answer: "बँधेएकडोरीसे",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 6,
	 starty: 4
},
{
	 clue: "रात कली एक ख्वाब में आई XX XX X XX XX-(9)",
	 answer: "औरगलेकाहारहुई",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 8,
	 starty: 4
},
{
	 clue: "बैयाँ ना धरो ओ बलमा X XX XX XX-(7)",
	 answer: "नाकरोमोसेरार",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 2,
	 starty: 10
},
{
	 clue: "भूल जा भूल जा X XX XX XX XX X-(10)",
	 answer: "जोचलागयाउसेभूलजा",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 1,
	 starty: 13
},
{
	 clue: "मैं हूँ झूम झूम झूम झूम झुमरू XXX XX XXX XXX-(11)",
	 answer: "फक्कड़घुमूँबनकेघुमरू",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 12,
	 starty: 3
},
{
	 clue: "हम हैं मताएकूचाओबाजार की तरह XXX X XX XXX XXXX X XXX-(17)",
	 answer: "उठतीहैहरनिगाहख़रीदारकीतरह",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 3,
	 starty: 13
},
{
	 clue: "आयो कहाँ से घनश्याम XX XXX XX XX-(9)",
	 answer: "रैनाबिताईकिसधाम",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 4,
	 starty: 12
},
{
	 clue: "छाई बरखा बहार पड़े अंगना फुहार XX XX XX XX X, XX X-(12)",
	 answer: "सैय्याँआकेगलेलगजालगजा",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 5,
	 starty: 14
},
{
	 clue: "क्या हुआ तेरा वादा वो कसम वो इरादा XXX XX XX XX XX-(11)",
	 answer: "भूलेगादिलजिसदिनतुम्हें",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 20
},
{
	 clue: "जब नामएमोहब्बत ले के XX XXX X XXX XXX-(12)",
	 answer: "किसीनादाननेदामनफैलाया",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 9,
	 starty: 12
},
{
	 clue: "कान्हा कान्हा आन पड़ी मैं तेरे द्वार XX XXX XXX XXX XX-(13)",
	 answer: "मोहेचाकरसमझनिहारकान्हा",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 7,
	 starty: 15
},
{
	 clue: "दिल बेक़रार सा है हमको खुमार सा है XX X XX XX XXX-(10)",
	 answer: "जबसेतुम्हेंदेखासनम",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 11,
	 starty: 16
},
{
	 clue: "छलकाये जाम आईये आप की आँखों के नाम होठों के नाम XX XX XX X XXX X XX-X-X X-(16)",
	 answer: "फूलजैसेतनपेजलवेयेरंगओबूके",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 1,
	 starty: 29
},
{
	 clue: "हम थे वो थी.  वो थी हम थे. XX X X X XX XX XXX XXX XX X-(18)",
	 answer: "हमथेवोथीऔरसमारंगीनसमझगएना",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 3,
	 starty: 29
},
{
	 clue: "जीवन के दिन छोटे सही XX X XX XXXX-(9)",
	 answer: "हमभीबड़ेदिलवाले",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 3,
	 starty: 29
},
{
	 clue: "अच्छा जी मैं हारी चलो मान जाओ ना XX XX X XX, XX XX XXX X-(15)",
	 answer: "देखीसबकीयारीमेरादिलजलाओना",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 5,
	 starty: 31
},
{
	 clue: "लाखों हैं निगाहों में ज़िन्दगी की राह में सनम हसीन जवां XX X XXX X, XX X XXX X, XXX X XX XXX-(23)",
	 answer: "होठोंमेंगुलाबहैआँखोंमेंशराबहैलेकिनवोबातकहाँ?",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 12,
	 starty: 26
},
{
	 clue: "नजर लागी राजा तोरे बंगले पर X X XX XX XX X XXXX-(13)",
	 answer: "जोमैंहोतीराजाबनकीकोयलिया",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 7,
	 starty: 31
},
{
	 clue: "उधर तुम हसीं हो इधर दिल जवां है X XXX XX X XX XX X-(12)",
	 answer: "येरंगीनरातोंकीएकदास्तांहै",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 1,
	 starty: 39
},
{
	 clue: "हमें तुमसे प्यार कितना ये हम नहीं जानते XXX X XX XXX XXX XX-(14)",
	 answer: "मगरजीनहींसकतेतुम्हारेबिना",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 9,
	 starty: 32
},
{
	 clue: "ओ घटा सांवरी थोड़ी थोड़ी बावरी X XX X XXXX XX-(10)",
	 answer: "होगयीहैबरसातक्या?",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 3,
	 starty: 48
},
{
	 clue: "कजरा लगा के रे बिन्दिया सजा के X XX X X XX X XX-(10)",
	 answer: "होआईमैंतोआईरेआई",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 3,
	 starty: 48
},
{
	 clue: "चुरा लिया है तुमने जो दिल को XXX XX XXX XXX-(11)",
	 answer: "नजरनहींचुरानासनम",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 8,
	 starty: 46
},
{
	 clue: "सुन मेरे बंधू रे सुन मेरे मितवा XX XX XX X-(7)",
	 answer: "सुनमेरेसाथीरे",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 5,
	 starty: 52
},
{
	 clue: "बूझ मेरा क्या नाव रे XX XXX XX X-(8)",
	 answer: "नदीकिनारेगांवरे",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 5,
	 starty: 53
},
{
	 clue: "ओ हंसिनी मेरी हंसिनी कहाँ उड़ चली XX XXXX X XX XX X XX XX XX-(18)",
	 answer: "मेरेअरमानोंकेपंखलगाकेकहाँउड़चली",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 12,
	 starty: 52
},
{
	 clue: "तस्वीर तेरी दिल में XX XX X XXX X-(9)",
	 answer: "जिसदिनसेउतारीहै",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 7,
	 starty: 58
},
{
	 clue: "हम तो मोहब्बत करेगा XXX X XX XXX-(9)",
	 answer: "दुनियासेनहींडरेगा",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 4,
	 starty: 62
},
{
	 clue: "पिया तू अब तो आजा XXX-(3)",
	 answer: "मोनिका",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 5,
	 starty: 61
},
{
	 clue: "हाल कैसा है जनाब का X XXX X XXX-(8)",
	 answer: "क्याख़यालहैआपका",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 3,
	 starty: 66
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
