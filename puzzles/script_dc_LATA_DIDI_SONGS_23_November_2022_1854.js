
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "रुत है मिलन की साथी मेरे आ रे XX XX X XX XX X XXX-(13)",
	 answer: "मोहेकहींलेचलबाँहोंकेसहारे",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 2,
	 starty: 1
},
{
	 clue: "जिसके सपने हमें रोज़ आते रहे दिल लुभाते रहे X XX X, XX X-(7)",
	 answer: "येबतादोबतादो",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 5,
	 starty: 4
},
{
	 clue: "तुमको भी तो ऐसा ही कुछ XX XX X XXX-(8)",
	 answer: "होताहोगाओसजना",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 4,
	 starty: 6
},
{
	 clue: "चुपके चुपके चल री पुरवईया XXX XXX-(6)",
	 answer: "बाँसुरीबजाये",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 2,
	 starty: 8
},
{
	 clue: "ओ बाबुल प्यारे X XX XXX X XX XX-(11)",
	 answer: "ओरोएपायलकीछमछम",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 8,
	 starty: 6
},
{
	 clue: "तेरे चेहरे से नज़र नहीं हटती XXX XX X XX-(8)",
	 answer: "नज़ारेहमक्यादेखें",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 1,
	 starty: 16
},
{
	 clue: "आशाओं के सावन में XXX X XXX X-(8)",
	 answer: "उमंगोंकीबहारमें",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 5,
	 starty: 12
},
{
	 clue: "हम और तुम तुम और हम XX X X XX XXX-(9)",
	 answer: "खुशहैंयूँआजमिलके",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 3,
	 starty: 15
},
{
	 clue: "जाना है हमें तो जहाँ करार मिले XXX XX X XX XXX XX-(13)",
	 answer: "लूटेंगेराहोंमेंजहाँबहारमिले",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 12,
	 starty: 7
},
{
	 clue: "दिखाई दिए यूँ कि बेख़ुद किया XX XXX X XX XX XX-(12)",
	 answer: "हमेंआपसेभीजुदाकरचले",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 19
},
{
	 clue: "नदिया किनारे हेराए आई कंगना XX XXX XX XXX XXX-(13)",
	 answer: "ऐसेउलझगएअनाड़ीसजना",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 5,
	 starty: 18
},
{
	 clue: "झिलमिल सितारों का आँगन होगा XXXX XXXX XXX XX-(13)",
	 answer: "रिमझिमबरसतासावनहोगा",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 10,
	 starty: 14
},
{
	 clue: "दिल से दिल मिलने का कोई कारण होगा XX XXX XX XX XX XX-(13)",
	 answer: "बिनाकारणकोईबातनहींहोती",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 2,
	 starty: 27
},
{
	 clue: "जब हम जवां होंगे जाने कहाँ होंगे XXX XX XX, XX XXX XXX, XX XX XXX-(22)",
	 answer: "लेकिनजहाँहोंगेवहाँफ़र्यादकरेंगेतुझेयादकरेंगे",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 12,
	 starty: 19
},
{
	 clue: "ज़िहालएमस्कीं मकुन बारंजिश XXX-X-XX XXX XX X-(12)",
	 answer: "बहालएहिज्राबेचारादिलहै",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 8,
	 starty: 27
},
{
	 clue: "इस दिल में बसकर देखो तो X XXX XX XXX X-(10)",
	 answer: "येशहरबड़ापुरानाहै",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 4,
	 starty: 31
},
{
	 clue: "बाली उमर ने मेरा हाल वो किया XX XX X XX XX X XX-(12)",
	 answer: "जानछुड़ालीमैंनेदिलदेदिया",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 1,
	 starty: 36
},
{
	 clue: "मेरे दिल ने जो माँगा मिल गया XX X XX X XX XX XX-(12)",
	 answer: "मैंनेजोकुछभीचाहामिलगया",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 6,
	 starty: 36
},
{
	 clue: "अब के सजन सावन में आग लगेगी बदन में XX XXXX, XXX XXXX XXX-(16)",
	 answer: "घटाबरसेगीमगरतरसेगीनज़र",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 3,
	 starty: 42
},
{
	 clue: "ये मुलाक़ात एक बहाना है XX X XXXX XXX X-(11)",
	 answer: "प्यारकासिलसिलापुरानाहै",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 2,
	 starty: 45
},
{
	 clue: "रोज़ अकेली आए रोज़ अकेली जाए XX XXX XX XXXX XX-(13)",
	 answer: "चाँदकटोरालिएभिखारनरात",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 10,
	 starty: 41
},
{
	 clue: "तू कितनी अच्छी है X XXX XX X-(7)",
	 answer: "तूकितनीभोलीहै",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 1,
	 starty: 51
},
{
	 clue: "फिर छिड़ी रात बात फूलों की XX X X XXX XX X-(10)",
	 answer: "रातहैयाबारातफूलोंकी",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 12,
	 starty: 43
},
{
	 clue: "भोर भये पनघट पे XX XXXX XX XXX-(11)",
	 answer: "मोहेनटखटश्यामसताये",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 1,
	 starty: 55
},
{
	 clue: "ज़िन्दगी की ना टूटे लड़ी XX XX X XX X XX-(10)",
	 answer: "प्यारकरलेघड़ीदोघड़ी",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 2,
	 starty: 57
},
{
	 clue: "नाम ना जाने धाम ना जाने XX X XX XX-(7)",
	 answer: "जानेनासेवापूजा",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 1,
	 starty: 59
},
{
	 clue: "हज़ार राहें मुड़ के देखीं XX X XX XX X XX-(10)",
	 answer: "कहींसेकोईसदानाआई",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 4,
	 starty: 57
},
{
	 clue: "यूँही तुम मुझ से बात करती हो X XX XX X XXX X-(10)",
	 answer: "याकोईप्यारकाइरादाहै",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 2,
	 starty: 61
},
{
	 clue: "पिया बिना पिया बिना बाँसिया XX X, XX X, XX X-(9)",
	 answer: "बाजेनाबाजेनाबाजेना",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 2,
	 starty: 64
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
