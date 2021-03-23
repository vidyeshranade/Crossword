
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "सुहानी चाँदनी रातें हमें सोने नहीं देती-(16)",
	 answer: "तुम्हारेप्यारकीबातेंहमेंसोनेनहींदेती",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 1
},
{
	 clue: "आशाओं के सावन में उमंगों की बहार में-(14)",
	 answer: "तुममुझकोढूंढोमैंखोजाऊँप्यारमें",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "नफ़रत की दुनिया को छोड़ के-(16)",
	 answer: "प्यारकीदुनियामेंखुशरहनामेरेयार",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 4,
	 starty: 1
},
{
	 clue: "इतना तो याद है मुझे के उनसे मुलाक़ात हुई-(16)",
	 answer: "बादमेंजानेक्याहुआनाजानेक्याबातहुई",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 7,
	 starty: 1
},
{
	 clue: "तुम साथ हो जब अपने दुनिया को दिखा देंगे-(15)",
	 answer: "हममौतकोजीनेकेअंदाज़सीखादेंगे",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 9,
	 starty: 1
},
{
	 clue: "नहीं नहीं अभी नहीं अभी करो इंतज़ार छोड़ो ना-(14)",
	 answer: "नहींनहींकभीनहींमैंहूँबेक़रार",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 13,
	 starty: 1
},
{
	 clue: "देखा फूलों को काँटों पे सोते हुए-(12)",
	 answer: "देखातूफ़ांकोकश्तीडुबोतेहुए",
	 attempt: "देखातूफ़ांकोकश्तीडुबोतेहु", 
	 position: 6,
	 orientation: "down",
	 startx: 15,
	 starty: 1
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
