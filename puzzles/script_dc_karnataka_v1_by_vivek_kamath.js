
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "XXXXXXX district is famous for Named after Chamaraja Wodeyar IX, the erstwhile king of Mysore, previously known as Arikottara-(7)",
	 answer: "ಚಾಮರಾಜನಗರ",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 3,
	 starty: 45
},
{
	 clue: "XXXX district is located between Krishna and Tungabhadra rivers-(4)",
	 answer: "ರಾಯಚೂರು",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 5,
	 starty: 45
},
{
	 clue: "XXXX district is at the foot of Devarayadurga Hill famous for Bhoga Narasimha Swamy Temple-(4)",
	 answer: "ತುಮಕುರು",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 2,
	 starty: 48
},
{
	 clue: "XXX district is  Named for: Hasanamba temple-(3)",
	 answer: "ಹಾಸನ",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 7,
	 starty: 43
},
{
	 clue: "XXXXXXXX It is a major coastal district of Karnataka-(8)",
	 answer: "ಉತ್ತರಕನ್ನಡ",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 9,
	 starty: 42
},
{
	 clue: "XXX district is famous the huge, 13th-century Sri Krishna Temple-(3)",
	 answer: "ಉಡುಪಿ",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 9,
	 starty: 42
},
{
	 clue: "XXXXXX district is famous for ಮಂಗಳೂರು, Dharmasthala, ಮತ್ತು ನದಿ-(6)",
	 answer: "ದಕ್ಷಿಣಕನ್ನಡ",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 1,
	 starty: 54
},
{
	 clue: "XXXX district is famous for Kunduvada Lake, Sri Anjaneya Swamy Temple, Mathru Chaya Children Park-(4)",
	 answer: "ದವಾಂಗೆರೆ",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 1,
	 starty: 54
},
{
	 clue: "XXXXX has a beautiful temple of Lord Ranganatha (Vishnu) in the Vijayanagar style …-(5)",
	 answer: "ಚಿಕ್ಬಲ್ಲಾಪುರ",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 5,
	 starty: 52
},
{
	 clue: "XXXXXX district is famous for Mullayanagiri Peak, Baba Budangiri, a mountain range in the Western Ghats, with 3 large caves-(6)",
	 answer: "ಚಿಕ್ಕಮಗಲೂರು",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 5,
	 starty: 52
},
{
	 clue: "XXX district is is surrounded on three sides by hills. It was known as Kopana Nagara-(3)",
	 answer: "ಕೊಪ್ಪಲ್",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 8,
	 starty: 49
},
{
	 clue: "XXX district is famous for ಮಡಿಕೇರಿ, ತಾಲ ಕಾವೇರೀ, ಕುಶಾಲನಗರ, also known as Coorg-(3)",
	 answer: "ಕೊಡಗು",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 8,
	 starty: 49
},
{
	 clue: "XXXXX district is situated on branch of River Ghataprabha-(5)",
	 answer: "ಬಾಗಲ್ಕೋಟ್",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 4,
	 starty: 56
},
{
	 clue: "XXXX The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building-(4)",
	 answer: "ಬೆಂಗಳೂರು",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 2,
	 starty: 58
},
{
	 clue: "XXXX district is located on the valley of the Vedavati river-(4)",
	 answer: "ಚಿತ್ರದುರ್ಗ",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 11,
	 starty: 50
},
{
	 clue: "XXX district is famous Jain Temple Lakkundi, Magadikere Bird Conservation Reserve-(3)",
	 answer: "ಗಡಾಗ್",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 3,
	 starty: 58
},
{
	 clue: "XXX district is known for its milk production and gold mines-(3)",
	 answer: "ಕೋಲಾರ",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 7,
	 starty: 56
},
{
	 clue: "XXXX Attiveri Bird Sanctuary, Military Shri Mahadeva, Border issue with Maharashtra state-(4)",
	 answer: "ಬೆಳಗವಿ",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 9,
	 starty: 55
},
{
	 clue: "XXXXX is well known for its historical monuments of architectural importance built during the rule of the Adil Shahi dynasty-(5)",
	 answer: "ವಿಜಯಪುರ",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 12,
	 starty: 55
},
{
	 clue: "XXXXX district is famous Ramadevarabetta Vulture Sanctuary, Doddi Lake Boating, Kanva Reservoir-(5)",
	 answer: "ರಾಮನಗರ",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 8,
	 starty: 59
},
{
	 clue: "XXX district is famous Sugar factories-(3)",
	 answer: "ಮಂಡ್ಯ",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 10,
	 starty: 57
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
