
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "This district is famous for The GOLDEN TEMPLE/ ਗੋਲਡਨ ਟੈਂਪਲ-(6)",
	 answer: "ਅੰਮ੍ਰਿਤਸਰ",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 5,
	 starty: 25
},
{
	 clue: "This district is famous for FREEDOM FIGHTER BHAGAT SINGH's HOME/ ਆਜ਼ਾਦੀ ਘੁਲਾਟੀਏ ਭਗਤ ਸਿੰਘ ਦਾ ਘਰ-(11)",
	 answer: "ਸ਼ਹੀਦਭਗਤਸਿੰਘਨਗਰ",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 7,
	 starty: 24
},
{
	 clue: "This district is famous for LAND OF MARTYRS/ ਸ਼ਹੀਦਾਂ ਦੀ ਧਰਤੀ -(5)",
	 answer: "ਫਿਰੋਜ਼ਪੁਰ",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 1,
	 starty: 30
},
{
	 clue: "This district is famous for ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਮਹਾਨ ਸ਼ਹਾਦਤ ਨੂੰ ਸਮਰਪਿਤ ਗੁਰਦੁਆਰਾ ਸ੍ਰੀ ਫਤਹਿਗੜ੍ਹ ਸਾਹਿਬ-(9)",
	 answer: "ਫ਼ਤਹਿਗੜ੍ਹਸਾਹਿਬ",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 4,
	 starty: 28
},
{
	 clue: "This district is famous for One of the best cricket stadiums in India/ ਭਾਰਤ ਦੇ ਸਭ ਤੋਂ ਵਧੀਆ ਕ੍ਰਿਕਟ ਸਟੇਡੀਅਮਾਂ ਵਿੱਚੋਂ ਇੱਕ-(6)",
	 answer: "ਅਜੀਤਗੜ੍ਹ",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 9,
	 starty: 23
},
{
	 clue: "This district is famous for Wooden and Ivory Handicraft/ ਲੱਕੜ ਅਤੇ ਹਾਥੀ ਦੰਦ ਦੀ ਕਲਾਕਾਰੀ -(6)",
	 answer: "ਹੁਸ਼ਿਆਰਪੁਰ",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 2,
	 starty: 34
},
{
	 clue: "This district is famous for Birth city of legendary Actor Dev Anand/ ਮਸ਼ਹੂਰ ਅਦਾਕਾਰ ਦੇਵ ਆਨੰਦ ਦਾ ਜਨਮ ਸ਼ਹਿਰ-(6)",
	 answer: "ਗੁਰਦਾਸਪੁਰ",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 5,
	 starty: 33
},
{
	 clue: "This district is famous for Beaded Footwear/ ਮਣਕੇ ਵਾਲੀ ਜੁੱਤੀ-(5)",
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
	 clue: "This district is famous for Cotton Fields/ ਕਪਾਹ ਦੇ ਖੇਤ-(3)-(4)",
	 answer: "ਬਰਨਾਲਾ",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 12,
	 starty: 28
},
{
	 clue: "This district is famous for Traditional Royal Turban/ ਰਵਾਇਤੀ ਸ਼ਾਹੀ ਪੱਗ-(4)",
	 answer: "ਪਟਿਆਲਾ",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 9,
	 starty: 31
},
{
	 clue: "This district is famous for Largest Lake/ Sarovar (Holy Tank) of all the Gurudwaras/ ਸਾਰੇ ਗੁਰਦੁਆਰਿਆਂ ਵਿੱਚੋਂ ਸਭ ਤੋਂ ਵੱਡਾ ਸਰੋਵਰ (ਪਵਿੱਤਰ ਸਰੋਵਰ)-(6)",
	 answer: "ਤਰਨਤਾਰਨ",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 4,
	 starty: 38
},
{
	 clue: "This district is famous for First Indus Valley Excavation Site/ ਪਹਿਲੀ ਸਿੰਧੂ ਘਾਟੀ ਖੁਦਾਈ ਸਾਈਟ-(5)",
	 answer: "ਰੂਪਨਗਰ",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 8,
	 starty: 36
},
{
	 clue: "This district is famous for Shawl weaving industry/ ਸ਼ਾਲ ਬੁਣਾਈ ਉਦਯੋਗ-(5)",
	 answer: "ਪਠਾਨਕੋਟ",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 9,
	 starty: 36
},
{
	 clue: "This district is famous for City Of Gurudwaras/ ਗੁਰਦੁਆਰਿਆਂ ਦਾ ਸ਼ਹਿਰ-(4)",
	 answer: "ਸੰਗਰੂਰ",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 12,
	 starty: 33
},
{
	 clue: "This district का निर्माण 1972 में बठिंडा और फिरोज़पुर जिलों से किया गया।  इस शहर का नाम सूफी संत बाबा शेख़ फ़रीदुद्दीन गंजशाकर के नाम पर पड़ा-(5)",
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
