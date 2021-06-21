
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "मेरा नाम राजू घराना आनाम-(11)",
	 answer: "जिसदेशमेंगंगाबहतीहै",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "ओ रामा हो..-(4)",
	 answer: "सरगम",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 2
},
{
	 clue: "सीने में जलन आँखों में तूफ़ान सा क्यों है-(3)",
	 answer: "गमन",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 3,
	 starty: 2
},
{
	 clue: "दीपावली मनाई सुहानी-(7)",
	 answer: "शिर्डीकेसांईबाबा",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 4,
	 starty: 5
},
{
	 clue: "चाँद छुपा बादल में शर्मा के मेरी जाना-(10)",
	 answer: "हमदिलदेचुकेसनम",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 1,
	 starty: 9
},
{
	 clue: "ऐ काश किसी दीवाने को हम से भी मोहब्बत हो जाये-(8)",
	 answer: "आयेदिनबहारके",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 3,
	 starty: 7
},
{
	 clue: "ना जिया लागे ना-(3)",
	 answer: "आनंद",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 3,
	 starty: 7
},
{
	 clue: "ना तुम हमें जानो-(7)",
	 answer: "बातएकरातकी",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 6,
	 starty: 7
},
{
	 clue: "ये मेरा जीवन तेरे लिए है-(2)",
	 answer: "बाबू",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 6,
	 starty: 7
},
{
	 clue: "हमारी ही मुठ्ठी में आकाश सारा-(3)",
	 answer: "प्रहार",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 2,
	 starty: 12
},
{
	 clue: "तुझे याद कर लिया है आयत की तरह-(7)",
	 answer: "बाजीरावमस्तानी",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 10,
	 starty: 5
},
{
	 clue: "अगर साज़ छेडा तराने बनेंगे-(6)",
	 answer: "जवानीदिवानी",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 5,
	 starty: 11
},
{
	 clue: "क्या यही प्यार है हाँ यही प्यार है-(2)",
	 answer: "रॉकी",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 12,
	 starty: 6
},
{
	 clue: "अदायें भी हैं मोहब्बत भी है शराफ़त भी है मेरे मेहबूब में-(9)",
	 answer: "दिलहैकेमानतानही",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 8,
	 starty: 11
},
{
	 clue: "खूबसुरत हसीना जानएजां जानएमन-(8)",
	 answer: "मिएक्सइनबॉम्बे",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 3,
	 starty: 16
},
{
	 clue: "हमको तो यारा तेरी यारी जान से प्यारी-(9)",
	 answer: "हमकिसीसेकमनहीं",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 18
},
{
	 clue: "धागे तोड़ लाओ चांदनी से नूर के-(8)",
	 answer: "झूमबराबरझूम",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 2,
	 starty: 17
},
{
	 clue: "मैं प्यासा तुम सावन मैं दिल तुम मेरी धड़कन-(3)",
	 answer: "फरार",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 1,
	 starty: 20
},
{
	 clue: "ले के पहला पहला प्यार भर के आँखों में खुमार-(7)",
	 answer: "सीआयडी",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 4,
	 starty: 18
},
{
	 clue: "पानी रे पानी तेरा रंग कैसा-(2)",
	 answer: "शोर",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 1,
	 starty: 22
},
{
	 clue: "KKKG-(8)",
	 answer: "कभीखुशीकभीगम",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 6,
	 starty: 18
},
{
	 clue: "कभी चाँद की तरह टपकी-(7)",
	 answer: "जहाँतुमलेचलो",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 3,
	 starty: 25
},
{
	 clue: "आती रहेंगी बहारें जाती रहेंगी बहारें-(4)",
	 answer: "कस्मेवादे",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 6,
	 starty: 22
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
