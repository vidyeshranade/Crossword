
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "तस्वीर तेरी दिल में XX XX X XXX X-(9)",
	 answer: "जिसदिनसेउतारीहै",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 14
},
{
	 clue: "ओ मेरी जां ओ मेरी जां XX XX XXX XX XX-(11)",
	 answer: "अबनहींरहनातेरेबिना",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 4,
	 starty: 12
},
{
	 clue: "जवां हो यारों ये तुमको हुआ क्या XX XXX XX XX-(9)",
	 answer: "अजीहमकोदेखोज़रा",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 4,
	 starty: 12
},
{
	 clue: "हमको तो यारा तेरी यारी जान से प्यारी X XX XX X-(6)",
	 answer: "तूचाहेतोड़दे",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 9,
	 starty: 7
},
{
	 clue: "मेरी भीगी भीगी सी पलकों पे रह गए XX XX XXX XXX X-(11)",
	 answer: "जैसेमेरेसपनेबिखरके",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 20
},
{
	 clue: "कोई नहीं है फिर भी है मुझको X XX XXX XXXX-(10)",
	 answer: "क्याजानेकिसकाइंतजार",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 7,
	 starty: 18
},
{
	 clue: "यार चुलबुला है हसीन दिलरुबा है XX XXX X XXX XX XX-(13)",
	 answer: "झूठबोलताहैमगरज़राज़रा",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 2,
	 starty: 23
},
{
	 clue: "ओ घटा सांवरी थोड़ी थोड़ी बावरी X XX X XXXX XX-(10)",
	 answer: "होगयीहैबरसातक्या?",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 10,
	 starty: 15
},
{
	 clue: "दिलबर दिल से प्यारे दिलबर XX X XXX X X XXXX-(12)",
	 answer: "दिलकीसुनताजारेदिलबर",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 26
},
{
	 clue: "मेरा प्यार भी तू है ये बहार भी तू है X X XXX X XX-X-XXX, X X XXX X-(18)",
	 answer: "तूहीनज़रोंमेंजानएतमन्नातूहीनज़ारोंमें",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 5,
	 starty: 24
},
{
	 clue: "उसको नहीं देखा हमने कभी XX XXX XXXX X XX-(12)",
	 answer: "परइसकीज़रूरतक्याहोगी",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 12,
	 starty: 19
},
{
	 clue: "ओ हसीना ज़ुल्फोंवाली जानएजहां XXX X XXX XX XXX XX-(14)",
	 answer: "ढूंढतीहैंकाफ़िरआँखेंकिसकानिशां",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 7,
	 starty: 29
},
{
	 clue: "कजरा लगा के रे बिन्दिया सजा के X XX X X XX X XX-(10)",
	 answer: "होआईमैंतोआईरेआई",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 3,
	 starty: 37
},
{
	 clue: "बाजू XX XXX XXX-(8)",
	 answer: "बाबूसमझोइशारे",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 9,
	 starty: 31
},
{
	 clue: "बूझ मेरा क्या नाव रे XX XXX XX X-(8)",
	 answer: "नदीकिनारेगांवरे",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 5,
	 starty: 38
},
{
	 clue: "अकेला हूँ मैं इस दुनिया में XX XX X X XX XX-(10)",
	 answer: "कोईसाथीहैतोमेरासाया",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 2,
	 starty: 43
},
{
	 clue: "मैंने कुछ खोया है मैंने कुछ पाया है ओ तेरे प्यार में XX XX XX X, XX XX XXX X, XX XX XXX X-(23)",
	 answer: "मेरेकुछवादेहैंमेरेकुछअरमाहैंमेरेकुछसपनेहैं",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 12,
	 starty: 37
},
{
	 clue: "दिल जो न कह सका XX XX-X-XX XXX X XX XX-(15)",
	 answer: "वोहीराज़एदिलकहनेकीरातआई",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 9,
	 starty: 41
},
{
	 clue: "क्या हुआ तेरा वादा वो कसम वो इरादा XXX XX XX XX XX-(11)",
	 answer: "भूलेगादिलजिसदिनतुम्हें",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 5,
	 starty: 45
},
{
	 clue: "मेरे जीवन साथी कली थी मैं तो प्यासी X X XX XX XX X XXX-(12)",
	 answer: "तूनेदेखाहुईखिलकेबहार",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 1,
	 starty: 51
},
{
	 clue: "बता दूँ क्या लाना XX XX X X XX-(8)",
	 answer: "तुमलौटकेआजाना",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 7,
	 starty: 45
},
{
	 clue: "ओ मेरे सोना रे सोना रे सोना रे X XX XX XX XX XX X-(12)",
	 answer: "देदूँगीजानजुदामतहोनारे",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 1,
	 starty: 53
},
{
	 clue: "मेरे बिछड़े साथी सुनता जा XX XX X XX XX-(9)",
	 answer: "मेरेगीतहैंतेरेलिए",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 3,
	 starty: 51
},
{
	 clue: "मिले नहीं तो फिर झुके नहीं नज़र वही प्यार की XXX XX XX X XXX-(11)",
	 answer: "नादानदिलतुझेक्यामालूम",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 7,
	 starty: 52
},
{
	 clue: "जब चाहा यारा तुमने XX X XX XXX-(8)",
	 answer: "आँखोंसेमारातुमने",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 4,
	 starty: 60
},
{
	 clue: "जब दिल ही टूट गया XX X X X XXX-(8)",
	 answer: "हमजीकेक्याकरेंगे",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 10,
	 starty: 59
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
