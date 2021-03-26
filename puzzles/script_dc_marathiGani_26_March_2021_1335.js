
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "जीव दंगला गुंगला रंगला असा पिरमाची आस तू XX XXX XXX XX X XX XXXXX XX X-(21)",
	 answer: "जीवलागलालाभलाध्यासह्योतुझागहिवरलाश्वासतू",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "बाजारातून आणला एकच आंबा XX XX XXX XXX-(10)",
	 answer: "त्याचेकेलेसुंदरलोणचे",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 3,
	 starty: 2
},
{
	 clue: "हसरा नाचरा जरासा लाजरा XXX XXX XXX XX-(11)",
	 answer: "सुंदरसाजिराश्रावणआला",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 6,
	 starty: 2
},
{
	 clue: "तुज सगुण म्हणो की निर्गुण रे XXX XXX XX XXX X-(12)",
	 answer: "सगुणनिर्गुणएकुगोविंदरे",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 10
},
{
	 clue: "दिगंबरा दिगंबरा श्रीपाद वल्लभ दिगंबरा XXX XXX XXX XXX-(12)",
	 answer: "निघालोघेऊनदत्ताचीपालखी",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 11,
	 starty: 4
},
{
	 clue: "अवचिता परिमळू झुळकला अळुमाळू X XX XXX XX X XX-(11)",
	 answer: "मीम्हणेगोपाळूआलागेमाये",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 9,
	 starty: 7
},
{
	 clue: "रूप तुझे देवा दाखवी केशवा XXX XXX XXXX-(10)",
	 answer: "मुकुंदामाधवानारायणा",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 7,
	 starty: 14
},
{
	 clue: "परीकथेतील राजकुमारा XX XX XXX X-(8)",
	 answer: "स्वप्नीमाझ्यायेशिलका",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 5,
	 starty: 17
},
{
	 clue: "असावे घर ते अपुले छान XX XXX XXXXX-(10)",
	 answer: "पुढेअसावाबागबगिचा",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 3,
	 starty: 19
},
{
	 clue: "लक्षदीप हे उजळले घरी XX XXX XX XXX-(10)",
	 answer: "दारीशोभलीकणारांगोळी",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 23
},
{
	 clue: "एका माकडाने काढलंय दुकान XX XXXX XX XX-(10)",
	 answer: "आलीगिऱ्हाईकेछानछान",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 5,
	 starty: 22
},
{
	 clue: "माजो लवताय डावा डोळा XX XXX XXX XXX-(11)",
	 answer: "जाईजुईचोगजरोमाळता",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 2,
	 starty: 26
},
{
	 clue: "तुझी अंगकांती रे XXXX XXX XX-(9)",
	 answer: "रंगवितीरानचीफुले",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 7,
	 starty: 25
},
{
	 clue: "दाटु लागली उरांत चोळी XXXX XX XXXX-(10)",
	 answer: "कुठवरआताजपायचं",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 12,
	 starty: 21
},
{
	 clue: "तुज मागतो मी आता XX XX XXXX-(8)",
	 answer: "मजद्यावेएकदंता",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 3,
	 starty: 30
},
{
	 clue: "जो तो सांगे ज्याला त्याला XX XXX XXX-(8)",
	 answer: "वेडलागलेराधेला",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 3,
	 starty: 33
},
{
	 clue: "अग पोरी संबाल दर्याला तुफान आयलंय भारी XX XXXX XXX XXX XXX XX XXX-(20)",
	 answer: "लाटपिरतीचीभन्नाटहोऊनआभालीघेईभरारी",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 5,
	 starty: 33
},
{
	 clue: "अवघे गरजे पंढरपूर XXX XXX XXX-(9)",
	 answer: "चाललानामाचागजर",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 10,
	 starty: 31
},
{
	 clue: "स्वर्गीची लोटली जेथे XXXX XXXX-(8)",
	 answer: "रामगंगामहानदी",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 8,
	 starty: 33
},
{
	 clue: "अधीर याद तुझी जाळितसे रे दिलवर XXX XX XX XX XX X XXXX-(16)",
	 answer: "अशीचवाटतुझीपाहूकितीमीदिलवर",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 3,
	 starty: 39
},
{
	 clue: "अधीर मन झाले मधुर घन आले XXXX XXXX XX XX-(12)",
	 answer: "धुक्यातुनीनभातलेसख्याप्रिया",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 1,
	 starty: 44
},
{
	 clue: "त्या कोवळया फुलांचा बाजार पाहिला मी XXX XXXX XXX XXX X-(14)",
	 answer: "पैशातभावनेचाव्यापारपाहिलामी",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 7,
	 starty: 42
},
{
	 clue: "जा सांग लक्ष्मणा सांग रामराजाला XXXX XXX XX XX XXX-(14)",
	 answer: "समजलाम्हणावेन्यायतुझासीतेला",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 9,
	 starty: 44
},
{
	 clue: "कबीराचे विणतो शेले कौसल्येचा राम बाई कौसल्येचा राम XXX X XXXX XX XX XX-(14)",
	 answer: "भाबड्यायाभक्तासाठीदेवकरीकाम",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 12,
	 starty: 41
},
{
	 clue: "आनंद मनी माईना कसं गं सावरू X XXX XXX XX XX XXX-(14)",
	 answer: "घेगगनभरारीउडूपाहेपाखरू",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 2,
	 starty: 55
},
{
	 clue: "याडं लागलं गं याडं लागलं गं XXX XXX XX XXX X-(12)",
	 answer: "रंगलंतुझ्यातयाडंलागलंगं",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 1,
	 starty: 57
},
{
	 clue: "मानवतेचे मंदिर माझे XX XXX XXXX-(9)",
	 answer: "आतलाविल्याज्ञानज्योती",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 6,
	 starty: 56
},
{
	 clue: "हे एक रेशमी घरटे XX XXXXX XX-(9)",
	 answer: "जणूस्वप्नामधलेवाटे",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 4,
	 starty: 60
},
{
	 clue: "हे माधवा मोहना X XXX XXX X XXX-(11)",
	 answer: "हेमाधवाविठ्ठलाहेमाधवा",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 2,
	 starty: 65
},
{
	 clue: "सप्तपदी ही रोज चालते तुझ्या सवे ते XXXXX X XX XX-(10)",
	 answer: "शतजन्मीचेहोमाझेनाते",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 10,
	 starty: 59
},
{
	 clue: "चांद मातला चांद मातला XX XXX XX XXX-(10)",
	 answer: "जीवगुंतलाजीवगुंतला",
	 attempt: "", 
	 position: 31,
	 orientation: "down",
	 startx: 8,
	 starty: 61
},
{
	 clue: "किलबिलते गाणे नवे XXXXX XXX XX-(10)",
	 answer: "भिरभिरतेगुलाबीथवे",
	 attempt: "", 
	 position: 32,
	 orientation: "across",
	 startx: 2,
	 starty: 70
},
{
	 clue: "काय बाई सांगू कसं ग सांगू ? XXX XX XX XX-(9)",
	 answer: "मलाचमाझीवाटेलाज",
	 attempt: "", 
	 position: 33,
	 orientation: "down",
	 startx: 12,
	 starty: 60
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
