
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "ओ दिल बंजारे जा रे XX XXX XX XX X-(10)",
	 answer: "खोलडोरियांसबखोलदे",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 2,
	 starty: 4
},
{
	 clue: "एक परवाज़ दिखाई दी है XX XXX XXX X X-(10)",
	 answer: "तेरीआवाज़सुनाईदीहै",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 6
},
{
	 clue: "मेरे ख़्वाबों में जो आए X X XX XX XX-(8)",
	 answer: "आकेमुझेछेडजाए",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 3,
	 starty: 6
},
{
	 clue: "जब कोई बात बिगड़ जाये XX XX XXX XX XX-(11)",
	 answer: "जबकोईमुश्किलपडजाये",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 8,
	 starty: 3
},
{
	 clue: "सीखो ना नैंनों की भाषा पिया XX XX XXX X XXXX-(12)",
	 answer: "कहरहीतुमसेयेखामोशियाँ",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 1,
	 starty: 12
},
{
	 clue: "मेरे दुख की कोई दवा ना करो XXX XXX XX XX X XX-(13)",
	 answer: "मुझकोमुझसेअभीजुदानाकरो",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 5,
	 starty: 9
},
{
	 clue: "ग़म का खज़ाना तेरा भी है मेरा भी X XXXX XX X X XX X-(12)",
	 answer: "येनज़रानातेराभीहैमेराभी",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 1,
	 starty: 19
},
{
	 clue: "रूठ के हम से कहीं जब चले जाओगे तुम X X XX X XX, XXX XX XXX XX-(17)",
	 answer: "येनासोचाथाकभीइतनेयादआओगेतुम",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 8,
	 starty: 13
},
{
	 clue: "मैं एक सदी से बैठी हूँ XX XX X XX XXX XX-(12)",
	 answer: "इसराहसेकोईगुज़रानहीं",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 11,
	 starty: 10
},
{
	 clue: "आज फिर उनका सामना होगा X XX XXX XX X XX-(11)",
	 answer: "क्यापताउसकेबादक्याहोगा",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 24
},
{
	 clue: "पहले प्यार का पहला ग़म XXX XX X XX XX-(10)",
	 answer: "पहलीबारहैंआँखेंनम",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 2,
	 starty: 24
},
{
	 clue: "साँसों की ज़रूरत है जैसे ज़िन्दगी के लिए XX XX XXX XXX, XXX X XX-(16)",
	 answer: "बसएकसनमचाहिएआशिकीकेलिए",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 5,
	 starty: 23
},
{
	 clue: "मैं कोई ऐसा गीत गाऊँ के आरजू जगाऊँ अगर तुम कहो XX X XXX X XXX XXX, XXX XX XX XX XX-(24)",
	 answer: "तुमकोबुलाऊँकीपलकेबिछाऊँकदमतुमजहाँजहाँरखो",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 8,
	 starty: 28
},
{
	 clue: "वक़्त की उम्र क्या बड़ी होगी XX XX XX X XX XX-(11)",
	 answer: "इकतेरेवस्लकीघड़ीहोगी",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 11,
	 starty: 33
},
{
	 clue: "तू ही तू तू ही तू सतरंगी रे X X X, X X X, XXXX X-(11)",
	 answer: "तूहीतूतूहीतूमनरंगीरे",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 2,
	 starty: 43
},
{
	 clue: "हमारी ही मुठ्ठी में आकाश सारा XX X XXX XXXX XX-(12)",
	 answer: "जबभीखुलेगीचमकेगातारा",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 1,
	 starty: 45
},
{
	 clue: "रिश्ता क्या है तेरा मेरा X X XX XX X X XXX-(11)",
	 answer: "मैंहूँशबऔरतूहैसवेरा",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 2,
	 starty: 47
},
{
	 clue: "पागल दिल मेरा तुमसे ये कह रहा XX X XX XX XX XX X-(12)",
	 answer: "अबतोतेरेबिनारहाजाएना",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 1,
	 starty: 50
},
{
	 clue: "सुरमई शाम इस तरह आए XX XX X XX XXX XX-(12)",
	 answer: "सांसलेतेहैंजिसतरहसाए",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 4,
	 starty: 47
},
{
	 clue: "सोचो ना ज़रा ये सोचो ना XX X XXX XX XX X-(11)",
	 answer: "बोलोनासनमकुछबोलोना",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 12,
	 starty: 48
},
{
	 clue: "एक हसीन निगाह का दिल पे साया है XX X, XXX X, XX XX X, X XX X-(16)",
	 answer: "जादूहैजुनूनहैकैसीमायाहैयेमायाहै",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 10,
	 starty: 50
},
{
	 clue: "ये क्या हुआ कैसे हुआ X XX XX, X XX-(8)",
	 answer: "येकबहुआक्यापता",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 1,
	 starty: 60
},
{
	 clue: "मेरी सांसों में बसा है तेरा ही एक नाम XX XX XXXXX XXX XX-(14)",
	 answer: "तेरीयादहमसफ़रसुबहशाम",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 7,
	 starty: 56
},
{
	 clue: "बेदर्दी तेरे प्यार ने दीवाना कर दिया XX XXX XX XX-(9)",
	 answer: "मुझेदीवानाकरदिया",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 4,
	 starty: 61
},
{
	 clue: "कुछ ना कहो कुछ भी ना कहो X XXX X, X XXX X-(10)",
	 answer: "क्याकहनाहैक्यासुननाहै",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 1,
	 starty: 65
},
{
	 clue: "कुछ ना कहो कुछ भी ना कहो X XXX X, X XXX X-(10)",
	 answer: "क्याकहनाहैक्यासुननाहै",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 1,
	 starty: 65
},
{
	 clue: "तेरे दर पर सनम चले आये X X XX X XX XX XX-(11)",
	 answer: "तूनाआयातोहमचलेआये",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 1,
	 starty: 69
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
