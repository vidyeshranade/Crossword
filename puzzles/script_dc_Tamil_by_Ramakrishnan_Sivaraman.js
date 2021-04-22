
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "திண்டுக்கல்is famous for ...-(6)",
	 answer: "திண்டுக்கல்",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 8,
	 starty: 4
},
{
	 clue: "திருப்பூர்is famous for ...-(5)",
	 answer: "திருப்பூர்",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 8,
	 starty: 4
},
{
	 clue: "ஈரோடுis famous for ...-(3)",
	 answer: "ஈரோடு",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 6,
	 starty: 6
},
{
	 clue: "நாமக்கல்is famous for ...-(5)",
	 answer: "நாமக்கல்",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 4,
	 starty: 9
},
{
	 clue: "மயிலாடுதுறைis famous for ...-(6)",
	 answer: "மயிலாடுதுறை",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 5,
	 starty: 9
},
{
	 clue: "வேலூர்is famous for ...-(3)",
	 answer: "வேலூர்",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 12,
	 starty: 2
},
{
	 clue: "கடலூர்is famous for ...-(4)",
	 answer: "கடலூர்",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 7,
	 starty: 9
},
{
	 clue: "புதுக்கோட்டைis famous for ...-(6)",
	 answer: "புதுக்கோட்டை",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 4,
	 starty: 13
},
{
	 clue: "செங்கல்பட்டுis famous for ...-(7)",
	 answer: "செங்கல்பட்டு",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 4,
	 starty: 15
},
{
	 clue: "திருச்சிராப்பள்ளிis famous for ...-(9)",
	 answer: "திருச்சிராப்பள்ளி",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 2,
	 starty: 18
},
{
	 clue: "திருப்பத்தூர்is famous for ...-(7)",
	 answer: "திருப்பத்தூர்",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 19
},
{
	 clue: "கோயம்புத்தூர்is famous for ...-(7)",
	 answer: "கோயம்புத்தூர்",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 7,
	 starty: 13
},
{
	 clue: "கரூர்is famous for ...-(3)",
	 answer: "கரூர்",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 4,
	 starty: 17
},
{
	 clue: "இராணிப்பேட்டைis famous for ...-(7)",
	 answer: "இராணிப்பேட்டை",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 1,
	 starty: 22
},
{
	 clue: "கள்ளக்குறிச்சிis famous for ...-(8)",
	 answer: "கள்ளக்குறிச்சி",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 25
},
{
	 clue: "காஞ்சிபுரம்is famous for ...-(6)",
	 answer: "காஞ்சிபுரம்",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 8,
	 starty: 23
},
{
	 clue: "பெரம்பலூர்is famous for ...-(6)",
	 answer: "பெரம்பலூர்",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 7,
	 starty: 27
},
{
	 clue: "நாகப்பட்டினம்is famous for ...-(8)",
	 answer: "நாகப்பட்டினம்",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 10,
	 starty: 24
},
{
	 clue: "திருவாரூர்is famous for ...-(5)",
	 answer: "திருவாரூர்",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 12,
	 starty: 23
},
{
	 clue: "விழுப்புரம்is famous for ...-(6)",
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
