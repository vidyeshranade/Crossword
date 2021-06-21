
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "XXXXXX is famous for Rock Fort, Arulmigu Soundararaja Perumal Temple-(6)",
	 answer: "திண்டுக்கல்",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 8,
	 starty: 4
},
{
	 clue: "XXXXX is famous for Arulmigu Avinashi Lingeshwarar, Konganagiri Murugan and Kasi Viswanathar Temple-(5)",
	 answer: "திருப்பூர்",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 8,
	 starty: 4
},
{
	 clue: "XXX is famous for Vellode Bird Sanctuary-(3)",
	 answer: "ஈரோடு",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 6,
	 starty: 6
},
{
	 clue: "XXXXX is famous for XXXX Sree Anjaneyar Temple and fort-(5)",
	 answer: "நாமக்கல்",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 4,
	 starty: 9
},
{
	 clue: "XXXXXX is famous for Kalyanasundareswarar Temple-(6)",
	 answer: "மயிலாடுதுறை",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 5,
	 starty: 9
},
{
	 clue: "XXX is famous for Sri Lakshmi Narayani Golden Temple and fort-(3)",
	 answer: "வேலூர்",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 12,
	 starty: 2
},
{
	 clue: "XXXX is famous for Silver Beach-(4)",
	 answer: "கடலூர்",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 7,
	 starty: 9
},
{
	 clue: "XXXXXX This town is located on the banks the Vellar River-(6)",
	 answer: "புதுக்கோட்டை",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 4,
	 starty: 13
},
{
	 clue: "XXXXXXX is famous for Sri Srarda Shamrakshana Narayanan-(7)",
	 answer: "செங்கல்பட்டு",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 4,
	 starty: 15
},
{
	 clue: "XXXXXXXXX is famous for sacred Hindu sites Sri Ranganathaswamy Temple-(9)",
	 answer: "திருச்சிராப்பள்ளி",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 2,
	 starty: 18
},
{
	 clue: "XXXXXXX The town is known for abundant sandalwood in the surrounding hills-(7)",
	 answer: "திருப்பத்தூர்",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 19
},
{
	 clue: "XXXXXXX is Dravidian-style Arulmigu Subramaniyaswami Temple, Marudamalai-(7)",
	 answer: "கோயம்புத்தூர்",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 7,
	 starty: 13
},
{
	 clue: "XXX is Textile Export Hub. It is located on the banks of River Amaravathi in the Kongunadu-(3)",
	 answer: "கரூர்",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 4,
	 starty: 17
},
{
	 clue: "XXXXXXX is an industrial hub of Southern Chennai city-(7)",
	 answer: "இராணிப்பேட்டை",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 1,
	 starty: 22
},
{
	 clue: "XXXXXXXX is famous Gomuki Dam , Manimukta Dam , Chinnathirupathi Temple, Tenponparappi Shiva-(8)",
	 answer: "கள்ளக்குறிச்சி",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 25
},
{
	 clue: "XXXXXX is famous The 8th-century Kailasanathar Temple, dedicated to Lord Shiva,-(6)",
	 answer: "காஞ்சிபுரம்",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 8,
	 starty: 23
},
{
	 clue: "XXXXXX This district is a special town in the Alathur Union Territory-(6)",
	 answer: "பெரம்பலூர்",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 7,
	 starty: 27
},
{
	 clue: "XXXXXXXX is famous for The town came to prominence during the period of Medieval Cholas-(8)",
	 answer: "நாகப்பட்டினம்",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 10,
	 starty: 24
},
{
	 clue: "XXXXX is famous for Thiruvarur Thiyagarasar Temple and Pond-(5)",
	 answer: "திருவாரூர்",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 12,
	 starty: 23
},
{
	 clue: "XXXXXX is famous for Arignar Anna Government Arts College-(6)",
	 answer: "விழுப்புரம்",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 5,
	 starty: 31
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
