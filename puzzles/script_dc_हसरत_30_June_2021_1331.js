
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "ओ तुमसे अच्छा कौन है XX X, XXX X, XX X-(10)",
	 answer: "दिललोजिगरलोजानलो",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 2,
	 starty: 1
},
{
	 clue: "मुझे रात दिन ये ख्याल है X XXX X XXX XX X X-(12)",
	 answer: "वोनज़रसेमुझकोगिरानदे",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 5,
	 starty: 2
},
{
	 clue: "जनम जनम का साथ है निभाने को X X XX XX XXX XX-(11)",
	 answer: "सौसौबारमैनेजनमलिये",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 7,
	 starty: 1
},
{
	 clue: "जाने कहाँ गये वो दिन कहते थे तेरी राह में XXX X XX XXXX-(10)",
	 answer: "नज़रोंकोहमबिछायेंगे",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 2,
	 starty: 9
},
{
	 clue: "दिन सारा गुज़ारा तोरे अंगना XX XX X XX XX XXX-(12)",
	 answer: "अबजानेदेमुझेमोरेसजना",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 1,
	 starty: 13
},
{
	 clue: "तू कहाँ ये बता इस नशीली रात में XX X, XX XX XXX-(10)",
	 answer: "मानेनामेरादिलदीवाना",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 12,
	 starty: 4
},
{
	 clue: "ऐ बादल झूम के चल XX X XX X XX-(8)",
	 answer: "ज़मींकोचूमकेचल",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 2,
	 starty: 15
},
{
	 clue: "प्यार का साज़ भी है दिल की आवाज़ भी है XX XX X XX XX X, XX XX X X-(16)",
	 answer: "मेरेगीतोंमेंतुम्हीतुमहोमुझेनाज़भीहै",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 1,
	 starty: 20
},
{
	 clue: "कहाँ चल दिए इधर तो आओ XX XX X X XXXX-(10)",
	 answer: "मेरेदिलकोनठुकराओ",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 9,
	 starty: 12
},
{
	 clue: "जो गुजर रही है मुझ पर उसे कैसे मैं बताऊँ X XX XX X XXX X XX X XX X XX-(18)",
	 answer: "वोख़ुशीमिलीहैमुझकोमैंख़ुशीसेमरनाजाऊँ",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 5,
	 starty: 18
},
{
	 clue: "तुम मुझे यूँ भुला ना पाओगे XX XX X XXX XX XX-(12)",
	 answer: "जबकभीभीसुनोगेगीतमेरे",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 11,
	 starty: 13
},
{
	 clue: "आ जाओ तड़पते हैं अरमां अब रात गुजरनेवाली है X XX XX, XX XX X XX, XX XX XXXXXX X-(23)",
	 answer: "मैंरोऊँयहाँतुमचुपहोवहाँअबरातगुजरनेवालीहै",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 3,
	 starty: 25
},
{
	 clue: "सायोनारा सायोनारा XX XXXX XXXX-(10)",
	 answer: "वादानिभाऊँगीसायोनारा",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 7,
	 starty: 21
},
{
	 clue: "तुम तो प्यार हो सजना XX XX X XX XX X XX-(12)",
	 answer: "मुझेतुमसेप्याराऔरनाकोई",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 30
},
{
	 clue: "अजहूँ न आए बालमा सावन बिता जाए हाए रे XX X XXXX XX X XX-(12)",
	 answer: "नींदभीअंखियनद्वारनाआए",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 9,
	 starty: 22
},
{
	 clue: "अब मेरा कौन सहारा XX XXX XXX X XXX-(12)",
	 answer: "मेरेबलममुझकोनाभुलाना",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 11,
	 starty: 23
},
{
	 clue: "ज़िन्दगी एक सफ़र है सुहाना XX XX X X XXX XX-(11)",
	 answer: "यहाँकलक्याहोकिसनेजाना",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 2,
	 starty: 36
},
{
	 clue: "जाने ना नज़र पहचाने जिगर ये कौन जो दिल पर छाया XX XX XX XXX-(9)",
	 answer: "मेराअंगअंगमुस्काया",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 2,
	 starty: 39
},
{
	 clue: "चेहरे पे गिरी ज़ुल्फ़ें कह दो तो हटा दूँ मैं XXX XX, XXX XX-(10)",
	 answer: "गुस्ताख़ीमाफ़गुस्ताख़ीमाफ़",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 3,
	 starty: 41
},
{
	 clue: "दाग़ न लग जाए कहीं दाग़ न लग जाए XX XX X XXX XXX-(11)",
	 answer: "प्यारकियातोकरकेनिभाना",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 2,
	 starty: 43
},
{
	 clue: "जानेवाले कभी नहीं आते XXXX X XX XX X-(10)",
	 answer: "जानेवालोंकीयादआतीहै",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 1,
	 starty: 45
},
{
	 clue: "कौन है जो सपनों में आया XX X X XX X XXX-(10)",
	 answer: "कौनहैजोदिलमेंसमाया",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 1,
	 starty: 47
},
{
	 clue: "ओ मोरा नादान बालमा न जाने जी की बात X XX X XX X X XX-(10)",
	 answer: "नजानेकीमानेजीकीबात",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 2,
	 starty: 47
},
{
	 clue: "एहसान तेरा होगा मुझ पर XX XXX X X XXX X-(11)",
	 answer: "दिलचाहताहैवोकहनेदो",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 5,
	 starty: 47
},
{
	 clue: "मेरी मोहोब्बत जवाँ रहेगी XX XX X, XX XXX-(10)",
	 answer: "सदारहीहैसदारहेगी",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 8,
	 starty: 47
},
{
	 clue: "हम छोड़ चले हैं महफ़िल को XX XX XX X XX XX-(11)",
	 answer: "यादआयेकभीतोमतरोना",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 10,
	 starty: 47
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
