
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "साँसों से नहीं क़दमों से नहीं XXXX X XXX X XXX-(12)",
	 answer: "मोहब्बतसेचलतीहैदुनिया",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 3,
	 starty: 2
},
{
	 clue: "सपनों के शहर हम बनायेंगे घर XX XX X X XX, X XX-(11)",
	 answer: "पलभरमेंयेबनायेगिरा",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 6,
	 starty: 3
},
{
	 clue: "नीले नीले अंबर पर चाँद जब आए XX XXXX, XX X XXXX-(13)",
	 answer: "प्यारबरसाएहमकोतरसाए",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 8,
	 starty: 3
},
{
	 clue: "तुम सामने बैठे रहो XXX XX XX XX-(9)",
	 answer: "पलकेंमेरीजमजाएँ",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 1,
	 starty: 10
},
{
	 clue: "किसी नज़र को तेरा इंतज़ार आज भी है XX X XX X X XX XXXX XX X X-(17)",
	 answer: "कहाँहोतुमकेयेदिलबेक़रारआजभीहै",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 10,
	 starty: 2
},
{
	 clue: "मुस्कुराता हुआ गुल खिलाता हुआ मेरा यार XX XX, XX XX, XX XX-(12)",
	 answer: "मेरायारमेरायारमेरायार",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 1,
	 starty: 13
},
{
	 clue: "दिल से मिले दिल दिल से मिले दिल XX XX XXX, XX XX XXX, XX X XX X XX-(22)",
	 answer: "मिलगईमंज़िलदूरहुईमुश्किलदिलसेमिलेहैंदिल",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 12,
	 starty: 5
},
{
	 clue: "धीरे धीरे सुबह हुई XX XX XXX-(7)",
	 answer: "जागउठीज़िंदगी",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 17
},
{
	 clue: "ये नैना ये काजल ये ज़ुल्फ़ें ये आँचल XXXXX X X XX XXX-(12)",
	 answer: "खूबसुरतसीहोतुमग़ज़ल",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 26
},
{
	 clue: "आओ तुम्हे चाँद पे ले जाएं XX XX XXX XXX-(10)",
	 answer: "प्यारभरेसपनेसजाएं",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 4,
	 starty: 25
},
{
	 clue: "रात बाकी बात बाकी XX X X, X XX X-(8)",
	 answer: "होनाहैजोहोजानेदो",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 7,
	 starty: 22
},
{
	 clue: "क्या ख़बर क्या पता X XX X XX X X-(8)",
	 answer: "क्याख़ुशीहैग़महैक्या",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 9,
	 starty: 21
},
{
	 clue: "नैना ये बरसे मिलने को तरसे XX XX X XXX X-(9)",
	 answer: "सहीजाएनाजुदाईहो",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 2,
	 starty: 33
},
{
	 clue: "ज़िद न करो अब तो रुको ये रात नहीं आयेगी XX XXX XXX XX XXX XX X XXX-(19)",
	 answer: "मानाअगरकहनामेरातुमकोवफ़ाआजायेगी",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 6,
	 starty: 32
},
{
	 clue: "ज़िद न करो अब तो रुको ये रात नहीं आयेगी XX XXX XXX XX XXX XX X XXX-(19)",
	 answer: "मानाअगरकहनामेरातुमकोवफ़ाआजायेगी",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 6,
	 starty: 32
},
{
	 clue: "जवानी जानएमन हसीन दिलरुबा XX X XX XX XXX X XX-(13)",
	 answer: "मिलेतोदिलजवाँनिसारहोगया",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 4,
	 starty: 36
},
{
	 clue: "प्यार कभी कम नहीं करना XX XXX XX XX-(9)",
	 answer: "कोईसितमकरलेना",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 9,
	 starty: 32
},
{
	 clue: "आवाज दी है आज एक नजर ने X X X XX X XXX-(9)",
	 answer: "याहैयेदिलकोगुमान",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 1,
	 starty: 40
},
{
	 clue: "जीवन मिटाना है दीवानापन XX XX XXX X XX XX-(12)",
	 answer: "कोईप्यारजीवनसेप्यारानहीं",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 1,
	 starty: 45
},
{
	 clue: "None-(8)",
	 answer: "हुस्नवालेकमनहीं",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 12,
	 starty: 38
},
{
	 clue: "माना हो तुम बेहद हसीं XX XX XX X XX-(9)",
	 answer: "ऐसेबुरेहमभीनहीं",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 8,
	 starty: 44
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
