
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "रास्ते भागे पाँव से आगे-(16)",
	 answer: "एम.एस.धोनी-दअनटोल्डस्टोरी",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "दिल तोड़नेवाले तुझे दिल ढूँढ रहा है-(7)",
	 answer: "सनओफइंडिया",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 5
},
{
	 clue: "इक दिन बिक जायेगा माटी के मोल-(6)",
	 answer: "धरमकरम",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 5,
	 starty: 3
},
{
	 clue: "वो हसीन दर्द दे दो जिसे मैं गले लगा लूँ-(4)",
	 answer: "हमसाया",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 7,
	 starty: 2
},
{
	 clue: "नज़र के सामने जिगर के पास-(3)",
	 answer: "आशिकी",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 8,
	 starty: 1
},
{
	 clue: "पर्दे में रहने दो पर्दा न उठाओ-(3)",
	 answer: "शिकार",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 9,
	 starty: 1
},
{
	 clue: "मैंने पूछा चाँद से के देखा है कहीं मेरे यार सा हसीन-(4)",
	 answer: "अब्दुल्लाह",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 1,
	 starty: 11
},
{
	 clue: "बावरा मन राह ताके तरसे रे-(8)",
	 answer: "जॉलीएलएलबी२",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 6,
	 starty: 8
},
{
	 clue: "तुम अगर साथ देने का वादा करो-(4)",
	 answer: "हमराज",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 4,
	 starty: 11
},
{
	 clue: "भीगी भीगी रातों में मीठी मीठी बातों में-(4)",
	 answer: "अजनबी",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 3,
	 starty: 14
},
{
	 clue: "मुझे जाँ ना कहो मेरी जाँ-(4)",
	 answer: "अनुभव",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 3,
	 starty: 14
},
{
	 clue: "मुस्कुराता हुआ गुल खिलाता हुआ मेरा यार-(6)",
	 answer: "लहूकेदोरंग",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 6,
	 starty: 11
},
{
	 clue: "हम जब सिमट के आप की बाँहों में आ गए-(2)",
	 answer: "वक्त",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 3,
	 starty: 17
},
{
	 clue: "कोई जब राह ना पाए-(2)",
	 answer: "दोस्ती",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 9,
	 starty: 11
},
{
	 clue: "अरे अभी अभी प्यारा सा चेहरा दिखा है-(4)",
	 answer: "अंधाधुन",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 2,
	 starty: 21
},
{
	 clue: "तेरी आँखों की चाहत में तो मैं सबकुछ लूटा दूँगा-(8)",
	 answer: "जनताहवालदार",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 5,
	 starty: 20
},
{
	 clue: "तेरी गलियों में ना रखेंगे कदम आज के बाद-(3)",
	 answer: "हवस",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 5,
	 starty: 23
},
{
	 clue: "सावन का महीना पवन करे सोर-(3)",
	 answer: "मिलन",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 4,
	 starty: 25
},
{
	 clue: "ये चाँद सा रोशन चेहरा जुल्फों का रंग सुनहरा-(6)",
	 answer: "कश्मिरकीकली",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 3,
	 starty: 27
},
{
	 clue: "कोई नहीं है कहीं सपनों में क्यों खो गई-(3)",
	 answer: "किनारा",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 10,
	 starty: 23
},
{
	 clue: "जो तुम हँसोगे तो दुनिया हँसेगी-(5)",
	 answer: "कठपुतली",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 7,
	 starty: 27
},
{
	 clue: "नैनों में दर्पन है दर्पन में कोई-(3)",
	 answer: "आरोप",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 9,
	 starty: 25
},
{
	 clue: "बनेगी आशा इक दिन तेरी ये निराशा-(4)",
	 answer: "आराधना",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 9,
	 starty: 25
},
{
	 clue: "आदमी मुसाफ़िर है आता है जाता है-(5)",
	 answer: "अपनापन",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 12,
	 starty: 23
},
{
	 clue: "श्याम तेरी बन्सी पुकारे राधा नाम-(6)",
	 answer: "गीतगाताचल",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 6,
	 starty: 30
},
{
	 clue: "ये हवायें गुनगुनाए पूछे तू है कहाँ-(4)",
	 answer: "परिणीता",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 9,
	 starty: 27
},
{
	 clue: "ऐ मेरे मुश्किलकुशा फ़रियाद है फ़रियाद है-(9)",
	 answer: "मुगल-ए-आझम",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 11,
	 starty: 28
},
{
	 clue: "शामएग़म की क़सम आज ग़मगीं हैं हम-(4)",
	 answer: "फूटपाथ",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 8,
	 starty: 34
},
{
	 clue: "हँसता हुआ नूरानी चेहरा काली ज़ुल्फ़ें रंग सुनहरा-(5)",
	 answer: "पारसमणी",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 8,
	 starty: 36
},
{
	 clue: "आजा रे अब मेरा दिल पुकारा-(2)",
	 answer: "आह",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 11,
	 starty: 34
},
{
	 clue: "यूँही तुम मुझ से बात करती हो-(4)",
	 answer: "सच्चाझूठा",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 10,
	 starty: 36
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
