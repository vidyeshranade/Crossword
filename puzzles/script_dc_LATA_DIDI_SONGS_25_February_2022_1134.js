
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "तेरी चमकती आँखों के आगे ये सितारें कुछ भी नहीं X X XX X XX XX XXX X XXX XX X XX-(21)",
	 answer: "तूजोबढ़ादेहाथज़रादुनियाकेसहारेकुछभीनहीं",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 3,
	 starty: 8
},
{
	 clue: "दूरी ना रहे कोई XX XXX XXX XX-(10)",
	 answer: "आजइतनेकरीबआओ",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 10,
	 starty: 1
},
{
	 clue: "बाली उमर ने मेरा हाल वो किया XX XX X XX XX X XX-(12)",
	 answer: "जानछुड़ालीमैंनेदिलदेदिया",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 5,
	 starty: 13
},
{
	 clue: "मैं पिया तेरी तू माने या ना माने XXX XX, X XX X X XX-(12)",
	 answer: "दुनियाजानेतूजानेयानाजाने",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 19
},
{
	 clue: "तेरे मेरे बीच में कैसा है ये बंधन अन्जाना XX XX XX, XX XX XX-(12)",
	 answer: "मैनेनहींजानातूनेनहींजाना",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 8,
	 starty: 12
},
{
	 clue: "खेलो ना मेरे दिल से X XX XXX, X XXX, X XXX-(14)",
	 answer: "ओमेरेसाजनाओसाजनाओसाजना",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 10,
	 starty: 10
},
{
	 clue: "दिल दीवाना बिन सजना के माने ना X XXX X, XXXX X XXX X-(14)",
	 answer: "येपगलाहैसमझानेसेसमझेना",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 12,
	 starty: 11
},
{
	 clue: "भोली सी सूरत आँखों में मस्ती XX XX-(4)",
	 answer: "आयहाए",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 22
},
{
	 clue: "इस मोड़ से जाते हैं XX XX XXX XX-(9)",
	 answer: "कुछसुस्तकदमरस्ते",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 2,
	 starty: 25
},
{
	 clue: "जिया लागे ना तेरे बिना जैसे प्रीतम XXX XX XX X XX-(10)",
	 answer: "चांदनीबिनारातनाभाए",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 7,
	 starty: 24
},
{
	 clue: "ना बोले ना बोले ना बोले रे XXX X XX X XX X-(10)",
	 answer: "घूँघटकेपटनाखोलेरे",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 1,
	 starty: 31
},
{
	 clue: "तेरी मेरी ज़िन्दगी XX XX XXX-(7)",
	 answer: "प्यारभरीज़िन्दगी",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 9,
	 starty: 24
},
{
	 clue: "आवाज़ देके हमें तुम बुलाओ XXXX X XXX X XXX XXX-(15)",
	 answer: "मोहब्बतमेंइतनानहमकोसताओ",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 1,
	 starty: 33
},
{
	 clue: "मेरी आँखों में बस गया कोई रे XX XX X XX X X XX-(11)",
	 answer: "मोहेनींदनाआएमैंकाकरूँ",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 1,
	 starty: 33
},
{
	 clue: "आजा रे मेरे प्यार के राही XX XXX XX XX X-(10)",
	 answer: "राहनिहारूँबड़ीदेरसे",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 11,
	 starty: 29
},
{
	 clue: "जादूगर सैयाँ छोडो मोरी बैयाँ X XX XX XX XX XX XX X-(14)",
	 answer: "होगईआधीरातअबघरजानेदो",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 5,
	 starty: 36
},
{
	 clue: "आती रहेंगी बहारें जाती रहेंगी बहारें XX X XXX X XXX X XX, XXX XX X XX X-(22)",
	 answer: "दिलकीनजरसेदुनियाकोदेखोदुनियासदाहीहसींहै",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 7,
	 starty: 35
},
{
	 clue: "तुम आ गए हो नूर आ गया है XX X XXX X X X XX X-(12)",
	 answer: "नहींतोचरागोंसेलौजारहीथी",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 1,
	 starty: 41
},
{
	 clue: "ये वादा करो चाँद के सामने XX X X XX XX XX X-(11)",
	 answer: "भूलातोनादोगेमेरेप्यारको",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 3,
	 starty: 39
},
{
	 clue: "परदेसीयों से ना अँखियाँ मिलाना XXXXX X X XX XX XX-(13)",
	 answer: "परदेसीयोंकोहैएकदिनजाना",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 10,
	 starty: 40
},
{
	 clue: "दिल था अकेला अकेला XX XX XXXX-(8)",
	 answer: "साथीमिलाअलबेला",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 12,
	 starty: 40
},
{
	 clue: "तुम जाओ कहीं तुमको इख्तियार XX XX XX XXX-(9)",
	 answer: "हमजायेकहाँसजना",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 1,
	 starty: 51
},
{
	 clue: "मेरे प्यार की आवाज़ पे चली आना ओ चली आना XX XXX XXX-XXX X-(12)",
	 answer: "देखोमौसमगहरागहराहै",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 1,
	 starty: 54
},
{
	 clue: "नैना ये बरसे मिलने को तरसे XX XX X XXX X-(9)",
	 answer: "सहीजाएनाजुदाईहो",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 4,
	 starty: 54
},
{
	 clue: "जागो  XX XX-(4)",
	 answer: "जागोजागो",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 2,
	 starty: 56
},
{
	 clue: "चंदा रे मेरे भैया से कहना XXX XX X-(6)",
	 answer: "बहनायादरे",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 2,
	 starty: 58
},
{
	 clue: "सूरज से जो किरन का नाता XXX X X XXX X-(9)",
	 answer: "सागरसेजोलहरोंका",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 9,
	 starty: 53
},
{
	 clue: "मेरे घर आयी एक नन्ही परी XXX X XXX XXX XXX-(13)",
	 answer: "चांदनीकेहसीनरथपेसवार",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 6,
	 starty: 57
},
{
	 clue: "बेलिया अब के ये बहार कोई गुल नया खिलाएगी XX XX XX XXX-(9)",
	 answer: "तेरामेराहोगामिलन",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 11,
	 starty: 53
},
{
	 clue: "ये क्या हो गया XXX XX XX X XX-(10)",
	 answer: "सपनामेरासचहोगया",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 1,
	 starty: 67
},
{
	 clue: "चढ़ती जवानी मेरी चाल मस्तानी XX XXX X XX XX-(10)",
	 answer: "तूनेकदरनाजानीरामा",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 2,
	 starty: 69
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
