
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "झूमता मौसम मस्त महीना XX X XX XX XXX-(10)",
	 answer: "चांदसीगोरीएकहसीना",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 3
},
{
	 clue: "यकीन कर लो मुझे मोहब्बत है तुमसे तुमसे XX X XXX XXX XXX X XXX XXX-(19)",
	 answer: "मेरीयेदुनियाहसीनजन्नतहैतुमसेतुमसे",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 5,
	 starty: 2
},
{
	 clue: "आजा सनम XXX XXX X XX XX XX X XXX X X X XXX XXX-(26)",
	 answer: "मधुरचाँदनीमेंहमतुममिलेतोवीरानेमेंभीआजाएगीबहार",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 3,
	 starty: 8
},
{
	 clue: "दाग़ न लग जाए कहीं दाग़ न लग जाए XX XX X XXX XXX-(11)",
	 answer: "प्यारकियातोकरकेनिभाना",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 10,
	 starty: 7
},
{
	 clue: "तुम तो प्यार हो सजना XX XX X XX XX X XX-(12)",
	 answer: "मुझेतुमसेप्याराऔरनाकोई",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 1,
	 starty: 17
},
{
	 clue: "खो गया है मेरा प्यार XXX X X XX XX-(9)",
	 answer: "ढूँढ़ताहूँमैंमेराप्यार",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 7,
	 starty: 11
},
{
	 clue: "अजी हमसे बचकर कहाँ जाईयेगा XX XXXX XX XXXX-(12)",
	 answer: "जहाँजाईयेगाहमेपाईयेगा",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 12,
	 starty: 8
},
{
	 clue: "सुनते थे नाम हम जिनका बहार से XX X XX XX XX XX X-(12)",
	 answer: "देखातोडोलाजियाझूमझूमके",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 21
},
{
	 clue: "फ़ल्सफ़ा प्यार का तुम क्या जानो XXX XX XX X XX-(10)",
	 answer: "तुमनेकभीप्यारनाकिया",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 24
},
{
	 clue: "छूने ना दूँगी मैं हाथ रे XXXX X XX XX XX-(11)",
	 answer: "नजरियोंसेदिलभरदूँगी",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 1,
	 starty: 27
},
{
	 clue: "अजी रूठकर अब कहाँ जाईयेगा XX XXXX, XX XXXX-(12)",
	 answer: "जहाँजाईयेगाहमेंपाईयेगा",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 1,
	 starty: 28
},
{
	 clue: "इब्तिदाएइश्क़ में हम सारी रात जागे XXX XX X XX XX-(10)",
	 answer: "अल्लाहजानेक्याहोगाआगे",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 7,
	 starty: 26
},
{
	 clue: "बनवारी रे जीने का सहारा तेरा नाम रे XX XXXXX X X XX X-(12)",
	 answer: "मुझेदुनियावालोंसेक्याकामरे",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 5,
	 starty: 31
},
{
	 clue: "आँसू भरी हैं ये जीवन की राहें XX XXX XX X XX XX XX-(14)",
	 answer: "कोईउनसेकहदेहमेंभूलजाए",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 10,
	 starty: 27
},
{
	 clue: "ज़िन्दगी एक सफ़र है सुहाना XX XX X X XXX XX-(11)",
	 answer: "यहाँकलक्याहोकिसनेजाना",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 1,
	 starty: 39
},
{
	 clue: "तुम मुझे यूँ भुला ना पाओगे XX XX X XXX XX XX-(12)",
	 answer: "जबकभीभीसुनोगेगीतमेरे",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 3,
	 starty: 37
},
{
	 clue: "तुम मुझे यूँ भुला ना पाओगे XX XX X XXX XX XX-(12)",
	 answer: "जबकभीभीसुनोगेगीतमेरे",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 3,
	 starty: 37
},
{
	 clue: "दीवाना मुझको लोग कहें X XXX XX X XXX-(10)",
	 answer: "मैंसमझूँजगहैदीवाना",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 8,
	 starty: 38
},
{
	 clue: "जिया ओ जिया ओ जिया कुछ बोल दो XX X XX X XX XX X-(11)",
	 answer: "अरेओदिलकापर्दाखोलदो",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 2,
	 starty: 48
},
{
	 clue: "सौ साल पहले मुझे तुम से प्यार था XX X X, XX XX X XXX-(12)",
	 answer: "आजभीहैऔरकलभीरहेगा",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 11,
	 starty: 41
},
{
	 clue: "तुम ने पुकारा और हम चले आये XX XXX XX X XX X-(11)",
	 answer: "दिलहथेलीपरलेआयेरे",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 5,
	 starty: 48
},
{
	 clue: "मेरी मोहोब्बत जवाँ रहेगी XX XX X, XX XXX-(10)",
	 answer: "सदारहीहैसदारहेगी",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 3,
	 starty: 54
},
{
	 clue: "दिल मेरा एक आस का पंछी XXX X XX XXX XX-(11)",
	 answer: "उड़ताहैऊँचेगगनपर",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 7,
	 starty: 51
},
{
	 clue: "दिल का भंवर करे पुकार XX X XX XX-(7)",
	 answer: "प्यारकारागसुनो",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 10,
	 starty: 53
},
{
	 clue: "एक बेवफा से प्यार किया XX XXX X XX XX-(10)",
	 answer: "उसेनज़रकोचारकिया",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 3,
	 starty: 61
},
{
	 clue: "मन गाए वो तराना XX XX X X XX-(8)",
	 answer: "जिसेसुनकेआजाना",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 4,
	 starty: 60
},
{
	 clue: "तू कहाँ ये बता इस नशीली रात में XX X, XX XX XXX-(10)",
	 answer: "मानेनामेरादिलदीवाना",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 2,
	 starty: 67
},
{
	 clue: "मैं पिया तेरी तू माने या ना माने XXX XX, X XX X X XX-(12)",
	 answer: "दुनियाजानेतूजानेयानाजाने",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 12,
	 starty: 59
},
{
	 clue: "आसमान से आया फरिश्ता XX X XXX XXXX-(10)",
	 answer: "प्यारकासबकसिखलाने",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 3,
	 starty: 70
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
