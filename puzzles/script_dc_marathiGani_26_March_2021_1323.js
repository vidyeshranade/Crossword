
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "कोमल काया की मोहमाया पुनवचांदनं न्हाली XXX XXX XXX XXX XXXXXX XX XX-(22)",
	 answer: "सोन्यातसजलीरूप्यातभिजलीरत्‍नप्रभातनूल्याली",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "कसली जीवाला भूल पडे XXX XXXXX XX XX-(12)",
	 answer: "हरीच्यामुरलीवरजीवजडे",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 4,
	 starty: 2
},
{
	 clue: "विठुमाऊली तू माऊली जगाची XXXX XX XXXX-(10)",
	 answer: "माऊलीतमूर्तीविठ्ठलाची",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 9,
	 starty: 2
},
{
	 clue: "कशी झोकात चालली कोळ्याची पोर XX XXXX XXX XX-(11)",
	 answer: "जशीचवथीच्याचंद्राचीकोर",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 11
},
{
	 clue: "ओवाळीते  मी लाडक्या भाऊराया XX X XXX XXX XXX-(12)",
	 answer: "चंद्रहागगनीहासतोबघुनी",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 7,
	 starty: 11
},
{
	 clue: "कुठे पाठ फिरवून गेला निवारा XXXX XX XX XXX-(11)",
	 answer: "हरवूनगेल्याकुठेजाणिवा",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 11,
	 starty: 10
},
{
	 clue: "घेई छंद मकरंद XX X XXX-(6)",
	 answer: "प्रियहामिलिंद",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 5,
	 starty: 17
},
{
	 clue: "प्रियतम्मा प्रियतम्मा दे मला तू चुम्मा XXXX XXXX X XXX XX-(14)",
	 answer: "प्रियतम्माप्रियतम्मायेजवळीसीमा",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 5,
	 starty: 17
},
{
	 clue: "हृदयी धरा हा बोध खरा XXX XXX XX-(8)",
	 answer: "संसारीशांतिचाझरा",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 3,
	 starty: 19
},
{
	 clue: "भाळी अर्धचंद्र माथी शुभ्र गंगा XXX XXX XXXX-(10)",
	 answer: "लिंपिलेसर्वांगाचिताभस्म",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 9,
	 starty: 17
},
{
	 clue: "सांग तू माझाच ना XX XX XXXXX-(9)",
	 answer: "राहूकशीतुझियाविना",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 3,
	 starty: 26
},
{
	 clue: "अगं हेमा माझ्या प्रेमा XX XX XX XXX X-(10)",
	 answer: "तुझीमाझीजोडीजमलीगं",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 3,
	 starty: 30
},
{
	 clue: "मानसीचा चित्रकार तो तुझे निरंतर चित्र काढतो XX XXX XXX XXX-(11)",
	 answer: "भेटपहिलीअपुलीघडता",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 11,
	 starty: 26
},
{
	 clue: "कोण दुजा आधार XXXX XX XX XXX-(11)",
	 answer: "तुजविणकोणदुजाआधार",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 9,
	 starty: 29
},
{
	 clue: "सुन्या सुन्या मैफिलीत माझ्या XXX X XX XX XX-(10)",
	 answer: "तुझेचमीगीतगातआहे",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 37
},
{
	 clue: "करतो इशारा आवेग माझ्या XXX XXXX-(7)",
	 answer: "बेभानश्वासातला",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 6,
	 starty: 32
},
{
	 clue: "कधी वाटे मन का हरवते XX XXXX X XXXX-(11)",
	 answer: "आसूलपवूनकामिरवते",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 1,
	 starty: 39
},
{
	 clue: "पदरावरती जरतारीचा मोर नाचरा हवा XX XX XXX XX XX-(11)",
	 answer: "आईमलानेसवशालूनवा",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 1,
	 starty: 39
},
{
	 clue: "हर्षाचा वर्षाचा दिवाळसण आला XXX XXX XXX-(9)",
	 answer: "कारंजीउडतीतेजाळ",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 7,
	 starty: 39
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
