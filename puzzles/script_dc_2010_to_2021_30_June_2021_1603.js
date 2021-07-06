
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "धूप से निकल के छाँव से फिसल के XX XX XXXX XX XX XX-(14)",
	 answer: "हममिलेजहाँपरलम्हाथमगया",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 2,
	 starty: 5
},
{
	 clue: "सजदा तेरा कर ना सकूँ X XXX X XXX-(8)",
	 answer: "तोबन्दगीक्याबन्दगी",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 5,
	 starty: 2
},
{
	 clue: "बावरा मन राह ताके तरसे रे XX X XXX XXX XXX X-(13)",
	 answer: "नैनाभीमल्हारबनकेबरसेरे",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 7,
	 starty: 4
},
{
	 clue: "तुम जो एक पल को मुड़ जाते X XX XX XX XX-(9)",
	 answer: "क्यापतारस्तेजुड़जाते",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 9,
	 starty: 2
},
{
	 clue: "तेरी मेरी मेरी तेरी प्रेम कहानी है मुश्किल X XX X XX XX X X XX-(12)",
	 answer: "दोलफ़्ज़ोंमेंयहबयांनाहोपाए",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 1,
	 starty: 13
},
{
	 clue: "ताकते रहते तुझको सांझ सवेरे XX X XXX XX XX XX XX-(14)",
	 answer: "नैनोंमेंबसियाजैसेनैनयहतेरे",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 4,
	 starty: 11
},
{
	 clue: "ऊँगली पकड़ के तूने चलना सिखाया था ना XXXX XX X X XX XX X-(13)",
	 answer: "दहलीज़ऊँचीहैयेपारकरादे",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 11,
	 starty: 5
},
{
	 clue: "हम तेरे बिन अब रह नहीं सकते XX XX X XXX XX-(10)",
	 answer: "तेरेबिनाक्यावजूदमेरा",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 9,
	 starty: 10
},
{
	 clue: "बोलो ना बोलो ना बोलो ना बोलो ना XXX X XX X XXXX X X-(13)",
	 answer: "ऋतुओंकोघरसेनिकलनेतोदो",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 6,
	 starty: 19
},
{
	 clue: "तेरे बिन तेरे बिन XX XX XXX XX-(9)",
	 answer: "तेरेबिनामरनानहीं",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 4,
	 starty: 23
},
{
	 clue: "मरहमी सा चाँद है तू XXXX X X XXX-(9)",
	 answer: "दिलजलासामैंअँधेरा",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 2,
	 starty: 26
},
{
	 clue: "तुम मेरे हो इस पल मेरे हो XX XXX X XXX X XX-(12)",
	 answer: "कलशायदयेआलमनारहे",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 8,
	 starty: 22
},
{
	 clue: "झूठा जग रैनबसेरा XX XX XX-(6)",
	 answer: "साँचादर्दमेरा",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 10,
	 starty: 20
},
{
	 clue: "बूँद बूँद में गुम सा है X XXX X X XXX X-(10)",
	 answer: "येसावनभीतोतुमसाहै",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 30
},
{
	 clue: "एक बार कभी यूँ भी एक रात गुज़ारो तुम XX X XX X XX X XX XX X XX-(16)",
	 answer: "आँखोंमेंतेरीखोकरहोजाऊँकहींमैंग़ुम",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 12,
	 starty: 20
},
{
	 clue: "ये लम्हा जो ठहरा है XX X X XX X-(7)",
	 answer: "मेराहैयेतेराहै",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 10,
	 starty: 24
},
{
	 clue: "और फिर यूँ हुआ XX XX XX X XX XX-(11)",
	 answer: "रातएकख़्वाबनेजगादिया",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 2,
	 starty: 34
},
{
	 clue: "दहलीज पे मेरे दिल की X XX X XX XXX-(9)",
	 answer: "जोरक्खेहैंतूनेकदम",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 4,
	 starty: 35
},
{
	 clue: "तुझको मैं रख लूँ वहाँ XX X XX X XX XX-(10)",
	 answer: "जहाँपेकहींहैमेरायकीं",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 2,
	 starty: 41
},
{
	 clue: "मल दे सूरज के मुँह पे मलाई XXXX XXX X XX X XXX-(14)",
	 answer: "बुड़बकबादलपेकरदेचढाई",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 5,
	 starty: 38
},
{
	 clue: "जो दिल से लगे XX XX X XX XX XX XX-(13)",
	 answer: "उसेकहदोहायहायहायहाय",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 10,
	 starty: 33
},
{
	 clue: "दिन परेशां है रात भारी है XXX X X XX X XX X-(11)",
	 answer: "ज़िन्दगीहैकेफिरभीप्यारीहै",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 7,
	 starty: 38
},
{
	 clue: "रंग बदल बदल के क्यों चहक रहें हैं दिन दोपहरियाँ X XX X XX X XX X-(10)",
	 answer: "मैंजानूँनाजानूँनाजानूँना",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 1,
	 starty: 48
},
{
	 clue: "कुछ रिश्तों का नमक ही दूरी होता है X XXX X XXX XXX XX X-(14)",
	 answer: "नामिलनाभीबहोतज़रूरीहोताहै",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 12,
	 starty: 42
},
{
	 clue: "मिला हूँ अब जो तुम से X XX X XX XXX X XXX XX-(15)",
	 answer: "हैदिलकोमेरेकसमसेसुकूनमिला",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 7,
	 starty: 48
},
{
	 clue: "दिलों में तुम अपनी बेताबियाँ लेके चल रहे हो तो ज़िंदा हो तुम XXX X XX X XXXX XX XX XX X, X XX X XX-(24)",
	 answer: "नज़रमेंख्वाबोंकीबिजलियाँलेकेचलरहेहोतोज़िंदाहोतुम",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 10,
	 starty: 46
},
{
	 clue: "अरे अभी अभी प्यारा सा चेहरा दिखा है XX X XX XXX X XX X-(12)",
	 answer: "जानेक्याकहूँउसपेक्यालिखाहै",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 1,
	 starty: 55
},
{
	 clue: "जनम जनम जनम साथ चलना यूँही XXX XX XXX XX XXX XX-(15)",
	 answer: "कसमतुम्हेंकसमआकेमिलनायहीं",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 4,
	 starty: 55
},
{
	 clue: "हालएदिल हालएदिल XXX XX XX-(7)",
	 answer: "तुमसेकैसेकहूँ",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 3,
	 starty: 57
},
{
	 clue: "चोरी से चोरी से XX XX X XX-(7)",
	 answer: "छुपछुपकेमैंने",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 2,
	 starty: 62
},
{
	 clue: "तू जो कह दे अगर X X XX XX X-(7)",
	 answer: "तोमैंजीनाछोड़दूँ",
	 attempt: "", 
	 position: 31,
	 orientation: "across",
	 startx: 1,
	 starty: 67
},
{
	 clue: "ऐसी क्या चली हवा X X XX-(4)",
	 answer: "केलेगई",
	 attempt: "", 
	 position: 32,
	 orientation: "across",
	 startx: 4,
	 starty: 64
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
