
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "जब नामएमोहब्बत ले के XX XXX X XXX XXX-(12)",
	 answer: "किसीनादाननेदामनफैलाया",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 2
},
{
	 clue: "मिले नहीं तो फिर झुके नहीं नज़र वही प्यार की XXX XX XX X XXX-(11)",
	 answer: "नादानदिलतुझेक्यामालूम",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 4
},
{
	 clue: "ना तुम हमें जानो X XX XX XX-(7)",
	 answer: "नाहमतुम्हेंजाने",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 6,
	 starty: 1
},
{
	 clue: "हाय रे हाय रे हाय रे XX X XX X X XX X XX X XXX X XXX-(20)",
	 answer: "अबजोमिलेहैंतोबाहोंकोबाहोंमेंरहनेदेसाजना",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 3,
	 starty: 8
},
{
	 clue: "होगा तुम से प्यारा कौन XX X X XX X X, X XXX XX-(14)",
	 answer: "हमकोतोतुमसेहैहेकंचनप्यार",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 11,
	 starty: 3
},
{
	 clue: "लिखा है तेरी आँखों में किसका अफ़साना XXX XX XXX XX, XX X XXXX-(17)",
	 answer: "अगरइसेसमझसकोमुझेभीसमझाना",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 8,
	 starty: 6
},
{
	 clue: "अकेले हैं तो क्या ग़म है XX X XXX XX X X XX-(12)",
	 answer: "चाहेतोहमारेबसमेंक्यानहीं",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 1,
	 starty: 14
},
{
	 clue: "जब तक रहे तन में जिया वादा रहा ओ साथिया XX XXX XX, XX XXX XX-(14)",
	 answer: "हमतुम्हारेलिएतुमहमारेलिए",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 6,
	 starty: 10
},
{
	 clue: "बचपन के दिन भी क्या दिन थे XXX XXX XXX XX X-(12)",
	 answer: "उड़तेफिरतेतितलीबनके",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 1,
	 starty: 20
},
{
	 clue: "तुझे क्या सुनाऊँ मैं दिलरुबा XX XXX XX XX X-(10)",
	 answer: "तेरेसामनेमेराहालहै",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 25
},
{
	 clue: "मेरे बिछड़े साथी सुनता जा XX XX X XX XX-(9)",
	 answer: "मेरेगीतहैंतेरेलिए",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 6,
	 starty: 25
},
{
	 clue: "ओ घटा सांवरी थोड़ी थोड़ी बावरी X XX X XXXX XX-(10)",
	 answer: "होगयीहैबरसातक्या?",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 10,
	 starty: 22
},
{
	 clue: "क़िस्मत से तुम हमको मिले हो कैसे छोड़ेंगे X XX XX X XXX-(9)",
	 answer: "येहाथहमनाछोड़ेंगे",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 8,
	 starty: 24
},
{
	 clue: "चुनरी सम्भाल गोरी XX XX XX X-(7)",
	 answer: "उड़ीचलीजाएरे",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 33
},
{
	 clue: "हम हैं मताएकूचाओबाजार की तरह XXX X XX XXX XXXX X XXX-(17)",
	 answer: "उठतीहैहरनिगाहख़रीदारकीतरह",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 1,
	 starty: 33
},
{
	 clue: "अगर सुन ले तो एक नग़्मा हुज़ूरएयार लाया हूँ X XX XXX X XX XX, XX XX XXX XX X-(21)",
	 answer: "वोकलीचटकीकिदिलटूटापरएकझंकारलायाहूँ",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 4,
	 starty: 31
},
{
	 clue: "आसमां के नीचे हम आज अपने पीछे XX X XX XX X XX-(10)",
	 answer: "प्यारकाजहांबसाकेचले",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 3,
	 starty: 43
},
{
	 clue: "हम आज कहीं दिल खो बैठे X XXX XX X X XX-(10)",
	 answer: "यूँसमझोकिसीकेहोबैठे",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 10,
	 starty: 37
},
{
	 clue: "जवां हो यारों ये तुमको हुआ क्या XX XXX XX XX-(9)",
	 answer: "अजीहमकोदेखोज़रा",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 6,
	 starty: 46
},
{
	 clue: "कितने सपने कितने अरमान XX X X, XX X, XX X-(10)",
	 answer: "लायाहूँमैंदेखोनादेखोना",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 2,
	 starty: 51
},
{
	 clue: "दिल लेना खेल है दिलदार का XX X XX X X XX X-(10)",
	 answer: "भूलेसेनामनालोप्यारका",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 8,
	 starty: 46
},
{
	 clue: "जीवन के दिन छोटे सही XX X XX XXXX-(9)",
	 answer: "हमभीबड़ेदिलवाले",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 3,
	 starty: 54
},
{
	 clue: "कैसा जादू बलम तूने डारा XX XX XX XX X XX X XX XX-(11)",
	 answer: "खोगयानन्हासादिलहमारा",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 10,
	 starty: 51
},
{
	 clue: "मेरी भीगी भीगी सी पलकों पे रह गए XX XX XXX XXX X-(11)",
	 answer: "जैसेमेरेसपनेबिखरके",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 5,
	 starty: 56
},
{
	 clue: "गज़ब का है दिन सोचो ज़रा X XXXXX XX XX-(10)",
	 answer: "येदीवानापनदेखोज़रा",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 1,
	 starty: 61
},
{
	 clue: "ओ मेरी जां ओ मेरी जां XX XX XXX XX XX-(11)",
	 answer: "अबनहींरहनातेरेबिना",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 1,
	 starty: 65
},
{
	 clue: "आयो कहाँ से घनश्याम XX XXX XX XX-(9)",
	 answer: "रैनाबिताईकिसधाम",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 3,
	 starty: 63
},
{
	 clue: "जाऊँ तो कहाँ जाऊँ XXXX XX X-(7)",
	 answer: "सबकुछयहींहै",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 2,
	 starty: 64
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
