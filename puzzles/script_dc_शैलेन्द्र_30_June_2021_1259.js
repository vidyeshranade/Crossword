
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "तेरी याद दिल से भूलाने चला हूँ X XX XXX XX XXX XX X-(14)",
	 answer: "केखुदअपनीहस्तीमिटानेचलाहूँ",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 6,
	 starty: 5
},
{
	 clue: "मुन्ना बड़ा प्यारा अम्मी का दुलारा XX XX XX, XX XX X XX-(13)",
	 answer: "कोईकहेचाँदकोईआँखकातारा",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 4,
	 starty: 7
},
{
	 clue: "प्यार हुआ इकरार हुआ है XX X XX X XXX X XX-(12)",
	 answer: "प्यारसेफिरक्योंडरताहैदिल",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 8,
	 starty: 4
},
{
	 clue: "अजी चले आओ अजी चले आओ XX XX X XX X XXX-(11)",
	 answer: "तुम्हेंआँखोंनेदिलमेंबुलाया",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 2,
	 starty: 15
},
{
	 clue: "याद आई आधी रात को कल रात की तौबा XX XXX X XXX XX XX X XX-(16)",
	 answer: "दिलपूछताहैझूमकेकिसबातकीतौबा",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 8,
	 starty: 14
},
{
	 clue: "दिल अपना और प्रीत पराई XX X X X XX XXX-(10)",
	 answer: "किसनेहैयेरीतबनाई",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 2,
	 starty: 20
},
{
	 clue: "घर आया मेरा परदेसी XX XX XX XXXX X-(11)",
	 answer: "प्यासबुझीमेरीअखियनकी",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 10,
	 starty: 13
},
{
	 clue: "भैया मेरे राखी के बंधन की निभाना XX XX, XX XXX X X XXX-(14)",
	 answer: "भैयामेरेछोटीबहनकोनाभुलाना",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 12,
	 starty: 14
},
{
	 clue: "जा जा रे जा बालमवा XXX X XX XX XXX-(11)",
	 answer: "सौतनकेसंगरातबिताई",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 26
},
{
	 clue: "जोगी जब से तू आया मेरे द्वारे XX XX XX XX XXX-(11)",
	 answer: "मेरेरंगगयेसाँझसकारे",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 2,
	 starty: 31
},
{
	 clue: "कर गया रे कर गया मुझ पे जादू XXXX XX XX XX X XX-(13)",
	 answer: "साँवरियाकरगयामुझपेजादू",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 5,
	 starty: 29
},
{
	 clue: "तेरे बिन सूने नैन हमारे XX XXX XX XX XXX-(12)",
	 answer: "बाटतक़तगएसाँझसकारे",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 8,
	 starty: 29
},
{
	 clue: "नैन मिले चैन कहाँ दिल है वही तू है जहाँ X X XX XX XXX-(9)",
	 answer: "येक्याकियासैय्यासाँवरे",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 2,
	 starty: 36
},
{
	 clue: "तेरे बिना आग ये चाँदनी तू आजा तू आजा XX XX XXX XXX, X XX XXX, XX X XXX, X XX-(25)",
	 answer: "तेरेबिनाबेसुरीबाँसुरीयेमेरीज़िन्दगीदर्दकीरागिनीतूआजा",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 10,
	 starty: 35
},
{
	 clue: "छोटी सी ये ज़िंदगानी रे XX XX X XXX XX-(10)",
	 answer: "चारदिनकीजवानीतेरी",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 1,
	 starty: 44
},
{
	 clue: "मनभावन के घर जाए गोरी XXX X XXXX XX-(10)",
	 answer: "घूँघटमेंशरमाएगोरी",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 1,
	 starty: 47
},
{
	 clue: "बोल री कठपुतली डोरी कौन संग बाँधी XX XXX X XX XXX XX-(13)",
	 answer: "सचबतलातूनाचेकिसकेलिए",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 1,
	 starty: 52
},
{
	 clue: "मेरा नाम राजू घराना आनाम XXX X XX XX XX XX-(12)",
	 answer: "बहतीहैगंगाजहाँमेराधाम",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 1,
	 starty: 54
},
{
	 clue: "दिलका हाल सुने दिलवाला XX X XX X XX XXX-(11)",
	 answer: "सीधीसीबातनमिर्चमसाला",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 12,
	 starty: 46
},
{
	 clue: "खोया खोया चाँद खुला आसमां XX X XX XX XXX-(10)",
	 answer: "आँखोंमेंसारीरातजाएगी",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 3,
	 starty: 59
},
{
	 clue: "ये किसने गीत छेड़ा XX XX XX, XXX, XXX-(12)",
	 answer: "दिलमेरानाचेथिरकथिरक",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 8,
	 starty: 56
},
{
	 clue: "पूछो ना कैसे मैने रैन बिताई XX XX XX, XX XX XX-(12)",
	 answer: "एकपलजैसेएकजुगबीता",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 1,
	 starty: 64
},
{
	 clue: "रमैय्या वस्तावैय्या रमैय्या वस्तावैय्या XX XX XXX XX-(9)",
	 answer: "मैंनेदिलतुझकोदिया",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 4,
	 starty: 61
},
{
	 clue: "साथ हो तुम और रात जवां XX XX XX XX XX-(10)",
	 answer: "नींदकिसेअबचैनकहाँ",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 6,
	 starty: 61
},
{
	 clue: "कहाँ जा रहे थे XX X XX XX-(7)",
	 answer: "कहाँआगएहम",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 6,
	 starty: 69
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
