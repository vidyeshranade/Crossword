
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "मन गाए वो तराना XX XX X X XX-(8)",
	 answer: "जिसेसुनकेआजाना",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 5,
	 starty: 1
},
{
	 clue: "एक बेवफा से प्यार किया XX XXX X XX XX-(10)",
	 answer: "उसेनज़रकोचारकिया",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 3,
	 starty: 4
},
{
	 clue: "अपने रुख़ पर निगाह करने दो XXXXX XXX XXX X-(12)",
	 answer: "खूबसूरतगुनाहकरनेदो",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 1,
	 starty: 9
},
{
	 clue: "मेरी मोहोब्बत जवाँ रहेगी XX XX X, XX XXX-(10)",
	 answer: "सदारहीहैसदारहेगी",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 10,
	 starty: 2
},
{
	 clue: "जानेवाले कभी नहीं आते XXXX X XX XX X-(10)",
	 answer: "जानेवालोंकीयादआतीहै",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 3,
	 starty: 11
},
{
	 clue: "तुम्हें और क्या दूँ मैं दिल के सिवाय XXX XXX XXX XX XX-(13)",
	 answer: "तुमकोहमारीउमरलगजाए",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 8,
	 starty: 6
},
{
	 clue: "जाऊँ कहाँ बता ऐ दिल XXX XX X XXXX-(10)",
	 answer: "दुनियाबड़ीहैसंगदिल",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 1,
	 starty: 16
},
{
	 clue: "यहाँ कोई नहीं तेरा मेरे सिवा XXX X XXX XX XX-(11)",
	 answer: "कहतीहैंझूमतीगातीहवा",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 19
},
{
	 clue: "तुम मेरी हो मेरे सिवा किसी की नहीं खाती हो कसम X XX X, XX XX XX X XX, XX X XXX-(19)",
	 answer: "मैंतेरीहूँतेरेसिवाकिसीकीनहींखातीहूँकसम",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 11,
	 starty: 12
},
{
	 clue: "दिल ढूँढता है सहारे सहारे XX XXX XXX XX XX XX-(14)",
	 answer: "लुटेदिलकेअरमांबुझेनैनतारे",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 2,
	 starty: 21
},
{
	 clue: "ये तनहाई हाय रे हाय जाने फिर आये ना आये XX X XX, XX X XX-(10)",
	 answer: "थामलोबाहेंथामलोबाहें",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 6,
	 starty: 18
},
{
	 clue: "रात का समा झूमे चंद्रमा XX XX XX X, XX XXXX-(13)",
	 answer: "तनमोरानाचेरेजैसेबिजुरियाँ",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 8,
	 starty: 22
},
{
	 clue: "बनवारी रे जीने का सहारा तेरा नाम रे XX XXXXX X X XX X-(12)",
	 answer: "मुझेदुनियावालोंसेक्याकामरे",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 1,
	 starty: 30
},
{
	 clue: "एक घर बनाऊंगा तेरे घर के सामने XXX XXXX, XX XX X XXX-(15)",
	 answer: "दुनियाबसाऊंगातेरेघरकेसामने",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 5,
	 starty: 28
},
{
	 clue: "याद किया दिल ने कहाँ हो तुम XXX XXX X, XX X XX-(12)",
	 answer: "झूमतीबहारहैकहाँहोतुम",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 3,
	 starty: 35
},
{
	 clue: "मेरी मोहब्बत पाक मोहब्बत XX XX X XX XXXX-(11)",
	 answer: "औरजहाँकीखांकमोहब्बत",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 1,
	 starty: 37
},
{
	 clue: "आजा सनम XXX XXX X XX XX XX X XXX X X X XXX XXX-(26)",
	 answer: "मधुरचाँदनीमेंहमतुममिलेतोवीरानेमेंभीआजाएगीबहार",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 11,
	 starty: 30
},
{
	 clue: "झनक झनक तोरी बाजे पायलिया XX X XX XXX XXXX-(12)",
	 answer: "प्रीतकेगीतसुनायेपायलिया",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 7,
	 starty: 39
},
{
	 clue: "गर तुम भूला ना दोगे सपने ये सच ही होंगे XX XX XX X XX-(9)",
	 answer: "हमतुमजुदानाहोंगे",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 1,
	 starty: 45
},
{
	 clue: "तुम मुझे यूँ भुला ना पाओगे XX XX X XXX XX XX-(12)",
	 answer: "जबकभीभीसुनोगेगीतमेरे",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 9,
	 starty: 38
},
{
	 clue: "तुम मुझे यूँ भुला ना पाओगे XX XX X XXX XX XX-(12)",
	 answer: "जबकभीभीसुनोगेगीतमेरे",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 9,
	 starty: 38
},
{
	 clue: "उनकी पहली नज़र क्या असर कर गई XXX X X XX X XX XX-(12)",
	 answer: "मुझकोक्याहोगयाहैखुदाजाने",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 1,
	 starty: 50
},
{
	 clue: "आजकल तेरे मेरे प्यार के चर्चे हर ज़बान पर XXX XXX X XX XXX XXX X XX-(18)",
	 answer: "सबकोमालूमहैऔरसबकोखबरहोगई",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 3,
	 starty: 48
},
{
	 clue: "तुम तो प्यार हो सजना XX XX X XX XX X XX-(12)",
	 answer: "मुझेतुमसेप्याराऔरनाकोई",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 1,
	 starty: 50
},
{
	 clue: "आजा रे अब मेरा दिल पुकारा X-X X XX X XX-(8)",
	 answer: "रोरोकेग़मभीहारा",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 5,
	 starty: 54
},
{
	 clue: "जिया ओ जिया ओ जिया कुछ बोल दो XX X XX X XX XX X-(11)",
	 answer: "अरेओदिलकापर्दाखोलदो",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 5,
	 starty: 56
},
{
	 clue: "फ़ल्सफ़ा प्यार का तुम क्या जानो XXX XX XX X XX-(10)",
	 answer: "तुमनेकभीप्यारनाकिया",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 8,
	 starty: 56
},
{
	 clue: "जापान लव इन टोकियो X XX XX XXX XXX X-(12)",
	 answer: "लेगईदिलगुड़ियाजापानकी",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 1,
	 starty: 65
},
{
	 clue: "जनम जनम का साथ है निभाने को X X XX XX XXX XX-(11)",
	 answer: "सौसौबारमैनेजनमलिये",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 11,
	 starty: 58
},
{
	 clue: "तुम ने पुकारा और हम चले आये XX XXX XX X XX X-(11)",
	 answer: "दिलहथेलीपरलेआयेरे",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 2,
	 starty: 68
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
