
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
	 clue: "आप मुझे अच्छे लगने लगे-(10)",
	 answer: "सपनेसच्चेलगनेलगे",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 3,
	 starty: 7
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
	 clue: "आओ झूमें गाएं-(8)",
	 answer: "मिलकेधूममचाएं",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 8,
	 starty: 6
},
{
	 clue: "दिल तो पागल है दिल दीवाना है-(14)",
	 answer: "पहलीपहलीबारमिलाताहैयही",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 5,
	 starty: 10
},
{
	 clue: "आने से उसके आए बहार-(11)",
	 answer: "जानेसेउसकेजाएबहार",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 10,
	 starty: 6
},
{
	 clue: "कभी सोचता हूँ के मैं कुछ कहूँ-(12)",
	 answer: "कभीसोचताहूँकेमैंचूपरहूँ",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 20
},
{
	 clue: "अपने प्यार के सपने सच हुए-(12)",
	 answer: "होठोंपेगीतोंकेफूलखिलगए",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 7,
	 starty: 15
},
{
	 clue: "ज़ुबां पे दर्दभरी दास्तां चली आई-(15)",
	 answer: "बहारआनेसेपहलेखिज़ाचलीआई",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 10,
	 starty: 14
},
{
	 clue: "चिट्ठी ना कोई संदेस जाने वो कौन सा देस-(8)",
	 answer: "जहाँतुमचलेगये",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 25
},
{
	 clue: "चिट्ठी ना कोई संदेस जाने वो कौन सा देस-(8)",
	 answer: "जहाँतुमचलेगये",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 25
},
{
	 clue: "तेरी शादी पे दूँ तुझ को तोहफा मैं क्या-(14)",
	 answer: "पेशकरताहूँदिलएकटूटाहुआ",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 12,
	 starty: 15
},
{
	 clue: "कोयल बोली दुनिया डोली-(8)",
	 answer: "समझोदिलकीबोली",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 4,
	 starty: 24
},
{
	 clue: "ये दिल ये दिल ये दिल-(6)",
	 answer: "येदिलदीवाना",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 2,
	 starty: 28
},
{
	 clue: "फ़लक से तोड़कर देखो सितारे लोग लाए हैं-(17)",
	 answer: "मगरमैंवोनहींलायाजोसारेलोगलाएहैं",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 1,
	 starty: 30
},
{
	 clue: "गुनगुना रहे हैं भँवरें खिल रही है कली कली-(8)",
	 answer: "गलीगलीकलीकली",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 1,
	 starty: 31
},
{
	 clue: "चंदा को ढूँढने सभी तारे निकल पड़े-(16)",
	 answer: "गलियोंमेंवोनसिबकेमारेनिकलपड़े",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 3,
	 starty: 31
},
{
	 clue: "सुनोकहो-(4)",
	 answer: "कहासुना",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 5,
	 starty: 31
},
{
	 clue: "कुछ कहता है ये सावन-(5)",
	 answer: "क्याकहताहै",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 7,
	 starty: 30
},
{
	 clue: "ये ना होगा-(6)",
	 answer: "नहीहोगाहोगा",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 3,
	 starty: 36
},
{
	 clue: "जय जय शिव शंकर काँटा लगे न कंकर-(10)",
	 answer: "केप्यालातेरेनामकापिया",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 3,
	 starty: 39
},
{
	 clue: "अब के सजन सावन में आग लगेगी बदन में-(16)",
	 answer: "घटाबरसेगीमगरतरसेगीनज़र",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 9,
	 starty: 33
},
{
	 clue: "कभी पहले देखा नहीं ये समा-(11)",
	 answer: "येमैंभूलसेआगयाहूँकहाँ",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 12,
	 starty: 32
},
{
	 clue: "ओ राम जी बड़ा दुःख दीना-(12)",
	 answer: "तेरेलखननेबड़ादुःखदीना",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 6,
	 starty: 39
},
{
	 clue: "कोरा कागज़ था ये मन मेरा-(11)",
	 answer: "लिखलियानामइसपेतेरा",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 2,
	 starty: 50
},
{
	 clue: "मेहरबानों कदरदानों दोस्तों यारों-(8)",
	 answer: "अरेखेलदेखोखेल",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 3,
	 starty: 52
},
{
	 clue: "ज़िन्दगी इम्तिहान लेती है-(8)",
	 answer: "लोगोंकीजानलेतीहै",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 2,
	 starty: 54
},
{
	 clue: "कोई परदेसी आया परदेस में-(10)",
	 answer: "देसबनायापरदेसमें",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 1,
	 starty: 56
},
{
	 clue: "हाथों की चंद लक़ीरों का-(12)",
	 answer: "सबखेलहैबसतकदीरोंका",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 9,
	 starty: 50
},
{
	 clue: "तुम आये तो आया मुझे याद-(10)",
	 answer: "गलीमेंआजचांदनिकला",
	 attempt: "", 
	 position: 31,
	 orientation: "across",
	 startx: 1,
	 starty: 58
},
{
	 clue: "आया है मुझे फिर याद वो ज़ालिम-(11)",
	 answer: "गुज़राज़मानाबचपनका",
	 attempt: "", 
	 position: 32,
	 orientation: "down",
	 startx: 12,
	 starty: 48
},
{
	 clue: "तू कितनी अच्छी है-(7)",
	 answer: "तूकितनीभोलीहै",
	 attempt: "", 
	 position: 33,
	 orientation: "down",
	 startx: 2,
	 starty: 60
},
{
	 clue: "ये समा समा है ये प्यार का-(8)",
	 answer: "किसीकेइंतज़ारका",
	 attempt: "", 
	 position: 34,
	 orientation: "across",
	 startx: 2,
	 starty: 61
},
{
	 clue: "मेरे ख़्वाबों में जो आए-(8)",
	 answer: "आकेमुझेछेडजाए",
	 attempt: "", 
	 position: 35,
	 orientation: "down",
	 startx: 4,
	 starty: 60
},
{
	 clue: "दिल ये बेचैन वे-(6)",
	 answer: "रस्तेपेनैनवे",
	 attempt: "", 
	 position: 36,
	 orientation: "down",
	 startx: 8,
	 starty: 61
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
