
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "रणी फडकती लाखो झेंडे अरुणाचा अवतार महा XXXXX XXXXX XXX XX XXX X XXX-(22)",
	 answer: "विजयश्रीलाश्रीविष्णूपरीभगवाझेंडाएकचिहा॥ध्रु॥",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "जय शारदे वागीश्वरी XXXXX XXXX-(9)",
	 answer: "विधिकन्यकेविद्याधरी",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 1
},
{
	 clue: "सुंदर ते ध्यान उभे विटेवरी XX XXXX XXXX-(10)",
	 answer: "करकटावरीठेवोनिया",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 3,
	 starty: 1
},
{
	 clue: "प्रीतीच्या चांदराती XXX XX XX-(7)",
	 answer: "घेऊनिहातहाती",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 5,
	 starty: 3
},
{
	 clue: "मी गाताना गीत तुला लडिवाळा X XX XXX XX-(8)",
	 answer: "हाकंठदाटुनीआला",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 5,
	 starty: 6
},
{
	 clue: "नदीच्या पल्याड आईचा डोंगुर XXXXXX XXX XXX-(12)",
	 answer: "डोंगरमाथ्यालादेवीचंमंदीर",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 12,
	 starty: 1
},
{
	 clue: "कसे कसे हसायाचे XXXX XX XX-(8)",
	 answer: "हसायाचेआहेमला",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 3,
	 starty: 14
},
{
	 clue: "नाव गाव कशाला पुसता XX X XX XXXXX-(10)",
	 answer: "अहोमीआहेकोल्हापुरची",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 8,
	 starty: 10
},
{
	 clue: "शपथ या बोटांची शपथ या ओठांची XX X XXXX-(7)",
	 answer: "तुझीमीजोडीदार",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 6,
	 starty: 12
},
{
	 clue: "स्वप्नात साजणा येशील का ? XXX XX X XXXX X X-(12)",
	 answer: "चित्रातरंगहेभरशीलका?",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 1,
	 starty: 18
},
{
	 clue: "क्षणमात्र घडली माया XXX XX XXX-(8)",
	 answer: "क्षणातविश्वबुडाले",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 3,
	 starty: 16
},
{
	 clue: "विनायका हो सिद्धगणेशा XXXXX X XX X-(9)",
	 answer: "रंगसभेलायातुम्हीया",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 5,
	 starty: 17
},
{
	 clue: "त्या तरुतळी विसरले गीत XXX XXX XXX XXX-(12)",
	 answer: "हृदयरिकामेघेऊनफिरतो",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 11,
	 starty: 14
},
{
	 clue: "मी तुझी का? का तुझी रे? XXX X XX-(6)",
	 answer: "तुझीचकारे?",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 5,
	 starty: 23
},
{
	 clue: "होनारा होतंला जानारा जातंला मागे तू फिरू नको XXX XXX XXX XXX XXX XX XX-(19)",
	 answer: "उगाचसांडूनखऱ्याचीसंगतखोट्याचीधरूनको",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 7,
	 starty: 21
},
{
	 clue: "आला वसंत ऋतु आला XXXXX XXXXX-(10)",
	 answer: "वसुंधरेलाहसवायाला",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 9,
	 starty: 20
},
{
	 clue: "जो तो आपापला येथे कुणी ना आधार XXXX XXXX XXX XXX-(14)",
	 answer: "मनाचियाघावावरीमनाचीफुंकर",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 1,
	 starty: 31
},
{
	 clue: "चाळ माझ्या पायांत पाय माझे तालांत XXX X XXX XXXX X-(12)",
	 answer: "नाचतेमीतोऱ्यातमोरावाणीरे",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 1,
	 starty: 32
},
{
	 clue: "मानसकन्या कण्वमुनींची बसुनी वनी एकांती XXX XX XXXXXX-(11)",
	 answer: "गुंफितेमाळबकुळफुलांची",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 3,
	 starty: 30
},
{
	 clue: "वाट इथे स्वप्नातील संपली जणू XXXX XXX XXX XX-(12)",
	 answer: "थांबवितोधारांनीसावळाघनू",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 5,
	 starty: 29
},
{
	 clue: "जगी ज्यास कोणी नाही त्यास देव आहे XXXX XXXX XX XX XX-(14)",
	 answer: "निराधारआभाळाचातोचभारसाहे",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 9,
	 starty: 31
},
{
	 clue: "पहाटे पहाटे मला जाग आली XX XXXX XX XX XX-(12)",
	 answer: "तुझीरेशमाचीमिठीसैलझाली",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 12,
	 starty: 30
},
{
	 clue: "गणपती बाप्पा मोरया XXXXX XXX-(8)",
	 answer: "मंगलमुर्तीमोरया",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 3,
	 starty: 42
},
{
	 clue: "प्रीत रंगली ग कशी राजहंसी XX XX X XXX XX-(10)",
	 answer: "अगबाईगलाजलीहंसी",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 4,
	 starty: 41
},
{
	 clue: "बोल ग मैने बोल XX X XX XX-(7)",
	 answer: "बोलगमैनेबोल",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 2,
	 starty: 45
},
{
	 clue: "ओल्या सांजवेळी उन्हे सावलीस बिलगावी XX X XXX  X XX-(9)",
	 answer: "तशीतूजवळीयेजरा",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 1,
	 starty: 47
},
{
	 clue: "गडद जांभळं XXX XXX-(6)",
	 answer: "भरलंआभाळ",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 3,
	 starty: 51
},
{
	 clue: "साथ तुझी दिनरात झरे XX XX X XXX-(8)",
	 answer: "जणूघनहासुखाचा",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 8,
	 starty: 47
},
{
	 clue: "घेई छंद मकरंद XX X XXX-(6)",
	 answer: "प्रियहामिलिंद",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 6,
	 starty: 51
},
{
	 clue: "पुस्तक नंतर वाचा XX XX XX-(6)",
	 answer: "आताखेळानाचा",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 3,
	 starty: 54
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
