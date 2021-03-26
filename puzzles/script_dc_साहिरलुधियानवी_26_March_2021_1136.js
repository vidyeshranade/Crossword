
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "कुछ भी कर लो एक दिन तुमको मेरी होना होगा-(26)",
	 answer: "हमारातुम्हाराओदिलबरदिलारानहोगागुज़ारा..अरेहोगा",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "हम जब चलें तो ये जहान झूमें-(12)",
	 answer: "आरज़ूहमारीआसमाँकोचूमें",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 4,
	 starty: 1
},
{
	 clue: "दिन हैं बहार के तेरे मेरे इकरार के-(12)",
	 answer: "दिलकेसहारेआजाप्यारकरें",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 1,
	 starty: 8
},
{
	 clue: "तुम्हारी नज़र क्यों खफा हो गई-(12)",
	 answer: "ख़ताबख़्शदोगरख़ताहोगई",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 10,
	 starty: 2
},
{
	 clue: "रात के रही थक मत जाना सुबह की मंज़िल दूर नहीं-(15)",
	 answer: "थकमतजानाओराहीथकमतजाना",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 8,
	 starty: 4
},
{
	 clue: "तुम्हारी नज़र क्यों खफा हो गई-(12)",
	 answer: "ख़ताबख़्शदोगरख़ताहोगई",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 10,
	 starty: 2
},
{
	 clue: "मेरी सुन ले अरज बनवारी-(10)",
	 answer: "तेरेद्वारखड़ीदुखियारी",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 6,
	 starty: 7
},
{
	 clue: "यह देश है वीर जवानों का-(9)",
	 answer: "अलबेलोंकामस्तानोंका",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 23
},
{
	 clue: "चंदा रे मेरे भैया से कहना-(6)",
	 answer: "बहनायादरे",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 6,
	 starty: 18
},
{
	 clue: "समझी थी की ये घर मेरा है-(11)",
	 answer: "मालूमहुआमेहमानथीमैं",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 6,
	 starty: 21
},
{
	 clue: "तेरे चेहरे से नज़र नहीं हटती-(8)",
	 answer: "नज़ारेहमक्यादेखें",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 11,
	 starty: 16
},
{
	 clue: "आप क्या जाने मुझको समझते हैं क्या?-(7)",
	 answer: "मैंतोकुछभीनहीं",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 3,
	 starty: 26
},
{
	 clue: "छू लेने दो नाज़ूक होठों को-(11)",
	 answer: "कुछऔरनहींहैजामहैये",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 2,
	 starty: 29
},
{
	 clue: "ऐ मेरी ज़िन्दगी-(7)",
	 answer: "आजरातझूमले",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 6,
	 starty: 25
},
{
	 clue: "आगे भी जाने ना तू पीछे भी जाने ना तू-(12)",
	 answer: "जोभीहैबसयहीएकपलहै",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 8,
	 starty: 27
},
{
	 clue: "ऐ मेरी टोपी पलट के आ-(10)",
	 answer: "नअपनेफंटूशकोसता",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 1,
	 starty: 36
},
{
	 clue: "मैं जब भी अकेली होती हूँ-(10)",
	 answer: "तुमचुपकेसेआजातेहो",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 10,
	 starty: 28
},
{
	 clue: "यूँ तो हम ने लाख हसीं देखे हैं तुमसा नहीं देखा-(11)",
	 answer: "उफ़येनज़रउफ़येअदा",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 12,
	 starty: 27
},
{
	 clue: "शर्मा ना यूँ घबरा ना यूँ-(8)",
	 answer: "पर्दाकियेयेरातहै",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 1,
	 starty: 38
},
{
	 clue: "दिल जले तो जले-(7)",
	 answer: "ग़मपलेतोपले",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 3,
	 starty: 36
},
{
	 clue: "देख तेरे भगवान की हालत क्या हो गई इन्सान-(12)",
	 answer: "कितनाबदलगयाभगवान",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 3,
	 starty: 38
},
{
	 clue: "ना कोई दिल में समाया-(9)",
	 answer: "नाकोईपहलूमेंआया",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 3,
	 starty: 40
},
{
	 clue: "आज की रात पिया दिल ना तोडो-(10)",
	 answer: "मनकीबातपियामानलो",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 2,
	 starty: 49
},
{
	 clue: "हज़ार ख़्वाब हक़ीक़त का रूप ले लेंगे-(17)",
	 answer: "मगरयेशर्तहैतुममुस्कुराकेहाँकहदो",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 2,
	 starty: 49
},
{
	 clue: "दम है बाक़ी तो ग़म नहीं-(9)",
	 answer: "ऐशकेरस्तेकमनहीं",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 10,
	 starty: 42
},
{
	 clue: "दिल लेके दग़ा देंगे-(8)",
	 answer: "यारहैंमतलबके",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 8,
	 starty: 49
},
{
	 clue: "दिल में किसी के प्यार का जलता हुआ दीया-(16)",
	 answer: "दुनियाकीआँधियोंसेभलायेबुझेगाक्या?",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 6,
	 starty: 52
},
{
	 clue: "सर जो तेरा चकराए-(7)",
	 answer: "यादिलडूबाजाए",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 6,
	 starty: 54
},
{
	 clue: "लागा चुनरी में दाग़ छुपाऊँ कैसे-(6)",
	 answer: "घरजाऊँकैसे",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 11,
	 starty: 52
},
{
	 clue: "जाएँ तो जाएँ कहाँ समझेगा कौन यहाँ-(9)",
	 answer: "दर्दभरेदिलकीजुबां",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 4,
	 starty: 60
},
{
	 clue: "जाएँ तो जाएँ कहाँ समझेगा कौन यहाँ-(9)",
	 answer: "दर्दभरेदिलकीजुबां",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 4,
	 starty: 60
},
{
	 clue: "पल दो पल का साथ हमारा-(10)",
	 answer: "पलदोपलकेयारानेहैं",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 9,
	 starty: 59
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
