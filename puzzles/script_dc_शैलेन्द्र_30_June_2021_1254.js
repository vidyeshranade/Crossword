
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "अजी चले आओ अजी चले आओ XX XX X XX X XXX-(11)",
	 answer: "तुम्हेंआँखोंनेदिलमेंबुलाया",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 6
},
{
	 clue: "बरसात में हमसे मिले तुम सजन XXX XX XX XXXX X-(12)",
	 answer: "तुमसेमिलेहमबरसातमें",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 6
},
{
	 clue: "लाल छड़ी मैदान खड़ी X XX XX, X XX XX-(10)",
	 answer: "क्याखूबलड़ीक्याखूबलड़ी",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 7,
	 starty: 3
},
{
	 clue: "झूमती चली हवा याद आ गया कोई XXX XXX XX X XX XX XX XX-(17)",
	 answer: "बुझतीबुझतीयादकोफिरजलागयाकोई",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 9,
	 starty: 3
},
{
	 clue: "जागो  XX XX-(4)",
	 answer: "जागोजागो",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 3,
	 starty: 10
},
{
	 clue: "पिया तोसे नैना लागे रे नैना लागे रे XX X X XX XX X-(9)",
	 answer: "जानेक्याहोअबआगेरे",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 5,
	 starty: 10
},
{
	 clue: "सुर ना सजे क्या गाऊँ मैं XX X XX XXX XX-(10)",
	 answer: "सुरकेबिनाजीवनसूना",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 3,
	 starty: 14
},
{
	 clue: "रात ने क्याक्या ख़्वाब दिखाए XX XX X XX XXX-(10)",
	 answer: "रंगभरेसौजालबिछाए",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 7,
	 starty: 13
},
{
	 clue: "ओ बसंती पवन पागल X X X X X, XX XX-(9)",
	 answer: "नाजारेनाजारोकोकोई",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 3,
	 starty: 18
},
{
	 clue: "दिल में प्यार का तूफ़ान X XXX XX XXX-(9)",
	 answer: "नासमझेकोईनादान",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 11,
	 starty: 13
},
{
	 clue: "जूही की कली मेरी लाडली XX X XX XX XXX-(10)",
	 answer: "नाजोंकीपलीमेरीलाडली",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 3,
	 starty: 23
},
{
	 clue: "तुम जो हमारे मीत ना होते XX X XX XX X XX-(10)",
	 answer: "गीतयेमेरेगीतनाहोते",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 5,
	 starty: 21
},
{
	 clue: "रमैय्या वस्तावैय्या रमैय्या वस्तावैय्या XX XX XXX XX-(9)",
	 answer: "मैंनेदिलतुझकोदिया",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 1,
	 starty: 26
},
{
	 clue: "ये किसने गीत छेड़ा XX XX XX, XXX, XXX-(12)",
	 answer: "दिलमेरानाचेथिरकथिरक",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 1,
	 starty: 28
},
{
	 clue: "साथ हो तुम और रात जवां XX XX XX XX XX-(10)",
	 answer: "नींदकिसेअबचैनकहाँ",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 9,
	 starty: 20
},
{
	 clue: "ओ शमा मुझे फूँक दे X X X XX, X X X XX-(10)",
	 answer: "मैंनमैंरहूँतूनतूरहे",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 11,
	 starty: 25
},
{
	 clue: "तेरे बिना आग ये चाँदनी तू आजा तू आजा XX XX XXX XXX, X XX XXX, XX X XXX, X XX-(25)",
	 answer: "तेरेबिनाबेसुरीबाँसुरीयेमेरीज़िन्दगीदर्दकीरागिनीतूआजा",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 7,
	 starty: 30
},
{
	 clue: "मैं आशिक हूँ बहारों का नज़ारों का फिजाओं का इशारों का X XXX XXXX X-(9)",
	 answer: "मैंमस्तानामुसाफिरहूँ",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 4,
	 starty: 33
},
{
	 clue: "खोया खोया चाँद खुला आसमां XX X XX XX XXX-(10)",
	 answer: "आँखोंमेंसारीरातजाएगी",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 3,
	 starty: 36
},
{
	 clue: "अब के बरस भेज भैया को बाबुल XXX X XX XXX X-(10)",
	 answer: "सावनमेंलीजोबुलायरे",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 4,
	 starty: 38
},
{
	 clue: "आ अब लौट चले XX XXX, XX XXX-(10)",
	 answer: "नैनबिछायेबाहेंपसारे",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 3,
	 starty: 40
},
{
	 clue: "मेरा दिल अब तेरा ओ साजना XX XX XX, X XXX-(10)",
	 answer: "कैसाजादूफेराओसाजना",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 11,
	 starty: 39
},
{
	 clue: "हरी गुण गा XX X, XX X XX X-(9)",
	 answer: "मनरेहरीकेगुणगा",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 5,
	 starty: 51
},
{
	 clue: "घड़ी घड़ी मोरा दिल धड़के XX XXX, X XXX-(9)",
	 answer: "हाएधड़केक्योंधड़के",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 9,
	 starty: 49
},
{
	 clue: "जीना हम को रास ना आया XX XX X XX X-(8)",
	 answer: "हमजानेक्योंजीतेहैं",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 5,
	 starty: 54
},
{
	 clue: "मनमोहना बड़े झूठे XX X XX XX XX-(9)",
	 answer: "हारकेहारनहींमाने",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 3,
	 starty: 56
},
{
	 clue: "कैसे दिन बीते कैसे बीती रतिया पिया जाने ना XX XX X X XXXX-(10)",
	 answer: "नेहालगाकेमैंपछताई",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 2,
	 starty: 59
},
{
	 clue: "रहेगा इश्क़ तेरा ख़ाक में मिलाके मुझे XX X XXX X XX XXX X XX-(15)",
	 answer: "हुयेहैंइब्तिदामेंरंजइन्तिहाकेमुझे",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 12,
	 starty: 52
},
{
	 clue: "मेरे तुम्हारे बीच में अब तो X XXXX X XXX-(9)",
	 answer: "नापरबतनासागर",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 8,
	 starty: 58
},
{
	 clue: "कहाँ जा रहे थे XX X XX XX-(7)",
	 answer: "कहाँआगएहम",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 5,
	 starty: 65
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
