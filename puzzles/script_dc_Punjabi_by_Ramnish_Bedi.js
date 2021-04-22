
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "ਅੰਮ੍ਰਿਤਸਰ district is famous for …-(6)",
	 answer: "ਅੰਮ੍ਰਿਤਸਰ",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 5,
	 starty: 25
},
{
	 clue: "ਸ਼ਹੀਦਭਗਤਸਿੰਘਨਗਰ district is famous for …-(11)",
	 answer: "ਸ਼ਹੀਦਭਗਤਸਿੰਘਨਗਰ",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 7,
	 starty: 24
},
{
	 clue: "ਫਿਰੋਜ਼ਪੁਰ district is famous for …-(5)",
	 answer: "ਫਿਰੋਜ਼ਪੁਰ",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 1,
	 starty: 30
},
{
	 clue: "ਫ਼ਤਹਿਗੜ੍ਹਸਾਹਿਬ district is famous for …-(9)",
	 answer: "ਫ਼ਤਹਿਗੜ੍ਹਸਾਹਿਬ",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 4,
	 starty: 28
},
{
	 clue: "ਅਜੀਤਗੜ੍ਹ district is famous for …-(6)",
	 answer: "ਅਜੀਤਗੜ੍ਹ",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 9,
	 starty: 23
},
{
	 clue: "ਹੁਸ਼ਿਆਰਪੁਰ district is famous for …-(6)",
	 answer: "ਹੁਸ਼ਿਆਰਪੁਰ",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 2,
	 starty: 34
},
{
	 clue: "ਗੁਰਦਾਸਪੁਰ district is famous for …-(6)",
	 answer: "ਗੁਰਦਾਸਪੁਰ",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 5,
	 starty: 33
},
{
	 clue: "ਮੁਕਤਸਰ district is famous for …-(5)",
	 answer: "ਮੁਕਤਸਰ",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 2,
	 starty: 36
},
{
	 clue: "ਮਾਨਸਾ district is famous for …-(3)",
	 answer: "ਮਾਨਸਾ",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 6,
	 starty: 32
},
{
	 clue: "ਬਰਨਾਲਾ district is famous for …-(4)",
	 answer: "ਬਰਨਾਲਾ",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 12,
	 starty: 28
},
{
	 clue: "ਪਟਿਆਲਾ district is famous for …-(4)",
	 answer: "ਪਟਿਆਲਾ",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 9,
	 starty: 31
},
{
	 clue: "ਤਰਨਤਾਰਨ district is famous for …-(6)",
	 answer: "ਤਰਨਤਾਰਨ",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 4,
	 starty: 38
},
{
	 clue: "ਰੂਪਨਗਰ district is famous for …-(5)",
	 answer: "ਰੂਪਨਗਰ",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 8,
	 starty: 36
},
{
	 clue: "ਪਠਾਨਕੋਟ district is famous for …-(5)",
	 answer: "ਪਠਾਨਕੋਟ",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 9,
	 starty: 36
},
{
	 clue: "ਸੰਗਰੂਰ district is famous for …-(4)",
	 answer: "ਸੰਗਰੂਰ",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 12,
	 starty: 33
},
{
	 clue: "ਫਰੀਦਕੋਟ district is famous for …-(5)",
	 answer: "ਫਰੀਦਕੋਟ",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 5,
	 starty: 40
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
