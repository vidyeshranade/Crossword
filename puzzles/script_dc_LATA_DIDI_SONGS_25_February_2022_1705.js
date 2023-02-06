
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "बहार बनके वो मुस्कुराए हमारे गुलशन में XX-X-XX X X XX X X-(11)",
	 answer: "बादएसबातूनआएतोक्या",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 3,
	 starty: 4
},
{
	 clue: "ना जा ओ मेरे हमदम XX XX X XXX-(8)",
	 answer: "सुनोवफ़ाकीपुकार",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 5,
	 starty: 4
},
{
	 clue: "बेखुदी में सनम उठ गये जो कदम X XX, X XX, X XX XX XX-(13)",
	 answer: "आगयेआगयेआगयेपासहम",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 5,
	 starty: 6
},
{
	 clue: "उई माँ उई माँ ये क्या हो गया XXX XX X XX X XX-(11)",
	 answer: "उनकीगलीमेंदिलखोगया",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 2,
	 starty: 10
},
{
	 clue: "मेहताब तेरा चेहरा XX XX X XX X-(8)",
	 answer: "किसख्वाबमेंदेखाथा",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 7,
	 starty: 6
},
{
	 clue: "फिर तेरी कहानी याद आयी XX XX XXX XX XX-(11)",
	 answer: "फिरतेराफसानायादआया",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 12,
	 starty: 3
},
{
	 clue: "कोई नहीं है फिर भी है मुझको X XX XXX XXXX-(10)",
	 answer: "क्याजानेकिसकाइंतजार",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 3,
	 starty: 14
},
{
	 clue: "कैसे दिन बीते कैसे बीती रतिया पिया जाने ना XX XX X X XXXX-(10)",
	 answer: "नेहालगाकेमैंपछताई",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 9,
	 starty: 8
},
{
	 clue: "है इसी में प्यार की आबरू X XX XX, X XX XX-(10)",
	 answer: "वोजफ़ाकरेमैंवफ़ाकरूँ",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 5,
	 starty: 19
},
{
	 clue: "आवारा ऐ मेरे दिल XX XX X XX XXX-(10)",
	 answer: "जानेकहाँहैतेरीमंज़िल",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 3,
	 starty: 22
},
{
	 clue: "गैरों पे करम अपनों पे सितम X XX-X-XX, X XX X XX-(12)",
	 answer: "ऐजानएवफ़ायेज़ुल्मनकर",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 1,
	 starty: 25
},
{
	 clue: "बहारों मेरा जीवन भी सँवारो XX XX XX X, X XXX-(11)",
	 answer: "कोईआयेकहींसेयूँपुकारो",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 27
},
{
	 clue: "मैं तो तुम संग नैन मिला के हार गई सजना X XX X XX XXX-(9)",
	 answer: "क्योंझूठेसेप्रीतलगाई",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 12,
	 starty: 16
},
{
	 clue: "बिखरा के जुल्फें चमन में ना जाना X-(1)",
	 answer: "क्यों",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 12,
	 starty: 16
},
{
	 clue: "आज है प्यार का फैसला ऐ सनम XX XX XXXX XXX XXX-(14)",
	 answer: "आजमेरामुकद्दरबदलजाएगा",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 3,
	 starty: 27
},
{
	 clue: "देखो मौसम क्या बहार है XX XXX, XXXX X-(10)",
	 answer: "साराआलमबेकरारहै",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 2,
	 starty: 30
},
{
	 clue: "रहते थे कभी जिनके दिल में XX XX X X XX X XXX-(12)",
	 answer: "हमजानसेभीप्यारोंकीतरह",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 1,
	 starty: 38
},
{
	 clue: "जीना हम को रास ना आया XX XX X XX X-(8)",
	 answer: "हमजानेक्योंजीतेहैं",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 1,
	 starty: 38
},
{
	 clue: "कोई मतवाला आया मेरे द्वारे XXX X XX XX XXX XXX-(14)",
	 answer: "अँखियोसेकरगयाअजबइशारे",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 5,
	 starty: 35
},
{
	 clue: "आजा पिया तोहे प्यार दूँ गोरी बैयाँ तोपे वार दूँ XXXX X XXX XXX, XX XX XX, XXX X XX-(23)",
	 answer: "किसलिएतूइतनाउदाससुखेंसुखेंहोंठअँखियोंमेंप्यास",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 10,
	 starty: 32
},
{
	 clue: "मेरे मेहबूब में क्या नहीं X X XX X X XX XX-(10)",
	 answer: "वोतोलाखोंमेंहैएकहसीं",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 12,
	 starty: 30
},
{
	 clue: "मेरी आँखों से कोई नींद लिये जाता है XX X XX X XXX XX XX X-(14)",
	 answer: "दूरसेप्यारकापैगामदियेजाताहै",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 7,
	 starty: 35
},
{
	 clue: "आप मुझे अच्छे लगने लगे XXX XX XXX XX-(10)",
	 answer: "सपनेसच्चेलगनेलगे",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 4,
	 starty: 50
},
{
	 clue: "एक तो ये बहार XXX XX XX XX-(9)",
	 answer: "उसपेतेरामेराप्यार",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 3,
	 starty: 53
},
{
	 clue: "दिल पुकारे आ रे आ रे आ रे XX X X XX XX-(8)",
	 answer: "अभीनाजामेरेसाथी",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 8,
	 starty: 49
},
{
	 clue: "दिल अपना और प्रीत पराई XX X X X XX XXX-(10)",
	 answer: "किसनेहैयेरीतबनाई",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 2,
	 starty: 57
},
{
	 clue: "छुपा के रखना मोहब्बत को इस ज़माने से X XX XX X XX XX XXX X-(14)",
	 answer: "किआजसांसभीलेनाकिसीबहानेसे",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 2,
	 starty: 57
},
{
	 clue: "मैं चली मैं चली पीछे पीछे जहां X X XX XXX, X X XX XX-(13)",
	 answer: "येनापूछोकिधरयेनापूछोकहाँ",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 10,
	 starty: 56
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
