
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "जब हम जवां होंगे जाने कहाँ होंगे-(22)",
	 answer: "लेकिनजहाँहोंगेवहाँफ़र्यादकरेंगेतुझेयादकरेंगे",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "अपने दिल से बड़ी दुश्मनी थी-(12)",
	 answer: "किसलिएमैनेतुमसेदोस्तीकी",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 2
},
{
	 clue: "यहाँ वहाँ सारे जहां में तेरा राज है-(12)",
	 answer: "जवानीओदीवानीतूज़िंदाबाद",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 1,
	 starty: 4
},
{
	 clue: "एक न एक दिन ये कहानी बनेगी-(12)",
	 answer: "तूमेरेसपनोंकीरानीबनेगी",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 8,
	 starty: 4
},
{
	 clue: "मुझसे भला ये काजल तेरा-(13)",
	 answer: "नैनबसेदिनरैन.नीसोनिये",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 3,
	 starty: 10
},
{
	 clue: "भीगी भीगी रातों में मीठी मीठी बातों में-(13)",
	 answer: "ऐसीबरसातोंमेंकैसालगताहै",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 5,
	 starty: 9
},
{
	 clue: "आने से उसके आए बहार-(11)",
	 answer: "जानेसेउसकेजाएबहार",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 10,
	 starty: 6
},
{
	 clue: "कभी सोचता हूँ के मैं कुछ कहूँ-(12)",
	 answer: "कभीसोचताहूँकेमैंचूपरहूँ",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 20
},
{
	 clue: "ज़ुबां पे दर्दभरी दास्तां चली आई-(15)",
	 answer: "बहारआनेसेपहलेखिज़ाचलीआई",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 10,
	 starty: 14
},
{
	 clue: "मेरे दोस्त किस्सा ये क्या हो गया-(11)",
	 answer: "सुनाहैकेतूबेवफ़ाहोगया",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 7,
	 starty: 17
},
{
	 clue: "माता जिनको याद करे-(9)",
	 answer: "वोलोगनिरालेहोतेहैं",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 1,
	 starty: 25
},
{
	 clue: "तेरी शादी पे दूँ तुझ को तोहफा मैं क्या-(14)",
	 answer: "पेशकरताहूँदिलएकटूटाहुआ",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 12,
	 starty: 15
},
{
	 clue: "तुम आये तो आया मुझे याद-(10)",
	 answer: "गलीमेंआजचांदनिकला",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 3,
	 starty: 25
},
{
	 clue: "भोली सी सूरत आँखों में मस्ती-(4)",
	 answer: "आयहाए",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 3,
	 starty: 28
},
{
	 clue: "कांची रे कांची रे प्रीत मेरी सांची-(10)",
	 answer: "रुकजानजादिलतोड़के",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 2,
	 starty: 33
},
{
	 clue: "ज़िन्दगी इम्तिहान लेती है-(8)",
	 answer: "लोगोंकीजानलेतीहै",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 6,
	 starty: 30
},
{
	 clue: "कुछ कहता है ये सावन-(5)",
	 answer: "क्याकहताहै",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 2,
	 starty: 37
},
{
	 clue: "कोई सहरी बाबू-(10)",
	 answer: "दिललहरीबाबूहायरे",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 8,
	 starty: 32
},
{
	 clue: "सुनोकहो-(4)",
	 answer: "कहासुना",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 3,
	 starty: 37
},
{
	 clue: "आओ झूमें गाएं-(8)",
	 answer: "मिलकेधूममचाएं",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 11,
	 starty: 31
},
{
	 clue: "बड़ा नटखट है रे कृष्ण कन्हैया-(8)",
	 answer: "काकरेयशोदामैय्या",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 5,
	 starty: 40
},
{
	 clue: "मदहोश दिल की धड़कन-(9)",
	 answer: "चुपसीयहतनहाई",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 4,
	 starty: 43
},
{
	 clue: "आँखें खुली हो या हो बंद-(9)",
	 answer: "दीदारउनकाहोताहै",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 10,
	 starty: 39
},
{
	 clue: "मुझे कुछ कहना है-(9)",
	 answer: "मुझेभीकुछकहनाहै",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 2,
	 starty: 47
},
{
	 clue: "कुछ मेरे दिल ने कहा-(9)",
	 answer: "कुछतेरेदिलनेकहा",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 6,
	 starty: 46
},
{
	 clue: "बार बार दिन ये आये-(9)",
	 answer: "बारबारदिलयेगाये",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 1,
	 starty: 51
},
{
	 clue: "ज़रा सा झूम लूँ मैं-(7)",
	 answer: "अरेनारेनारेना",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 3,
	 starty: 49
},
{
	 clue: "दुनिया में ऐसा कहाँ सबका नसीब है-(14)",
	 answer: "कोईकोईअपनेपियाकेकरीबहै",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 12,
	 starty: 42
},
{
	 clue: "आशाओं के सावन में-(8)",
	 answer: "उमंगोंकीबहारमें",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 1,
	 starty: 54
},
{
	 clue: "जींद ले गया वो दिल का जानी-(10)",
	 answer: "येबुतबेजानरहगया",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 9,
	 starty: 51
},
{
	 clue: "ये समा समा है ये प्यार का-(8)",
	 answer: "किसीकेइंतज़ारका",
	 attempt: "", 
	 position: 31,
	 orientation: "across",
	 startx: 3,
	 starty: 57
},
{
	 clue: "छुपा के रखना मोहब्बत को इस ज़माने से-(14)",
	 answer: "किआजसांसभीलेनाकिसीबहानेसे",
	 attempt: "", 
	 position: 31,
	 orientation: "down",
	 startx: 3,
	 starty: 57
},
{
	 clue: "साथिया नहीं जाना के जी ना लगे-(12)",
	 answer: "मौसमहैसुहानाकेजीनालगे",
	 attempt: "", 
	 position: 32,
	 orientation: "down",
	 startx: 1,
	 starty: 59
},
{
	 clue: "चिट्ठी ना कोई संदेस जाने वो कौन सा देस-(8)",
	 answer: "जहाँतुमचलेगये",
	 attempt: "", 
	 position: 33,
	 orientation: "across",
	 startx: 3,
	 starty: 59
},
{
	 clue: "ये दर्द भरा अफसाना-(12)",
	 answer: "सुनलेअन्जानज़मानाज़माना",
	 attempt: "", 
	 position: 34,
	 orientation: "across",
	 startx: 1,
	 starty: 63
},
{
	 clue: "और नहीं कुछ तुमसे कहना-(10)",
	 answer: "जीवनसाथीजीवनसाथी",
	 attempt: "", 
	 position: 35,
	 orientation: "down",
	 startx: 6,
	 starty: 61
},
{
	 clue: "साँझ सवेरे अधरों पे मेरे-(12)",
	 answer: "बसतुम्हराहैनामसांवरिया",
	 attempt: "", 
	 position: 36,
	 orientation: "down",
	 startx: 12,
	 starty: 57
},
{
	 clue: "ये ना होगा-(6)",
	 answer: "नहीहोगाहोगा",
	 attempt: "", 
	 position: 37,
	 orientation: "across",
	 startx: 6,
	 starty: 68
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
