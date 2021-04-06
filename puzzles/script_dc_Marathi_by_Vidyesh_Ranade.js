// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
         clue: 'क्षत्रिय कुलावंतस, गो-ब्राह्मण प्रतिपालक, सिंहासनाधीश्वर-[7]',
         answer: 'शिवाजीमहाराज',
         attempt: '', 
         position: 1,
         orientation: 'across',
         startx: 1,
         starty: 1
},
{
         clue: 'बाबासाहेब पुरंदरे-[5]',
         answer: 'शिवशाहीर',
         attempt: '', 
         position: 1,
         orientation: 'down',
         startx: 1,
         starty: 1
},
{
         clue: 'दत्तो वामन पोतदार-[7]',
         answer: 'महामहोपाध्याय',
         attempt: '', 
         position: 2,
         orientation: 'down',
         startx: 4,
         starty: 1
},
{
         clue: 'इस्राईल चा धर्म-[3]',
         answer: 'यहूदी',
         attempt: '', 
         position: 6,
         orientation: 'across',
         startx: 4,
         starty: 7
},
{
         clue: '- - - चिघळते-[3]',
         answer: 'जखम',
         attempt: '', 
         position: 7,
         orientation: 'down',
         startx: 7,
         starty: 3
},
{
         clue: 'भारतीय क्रिकेट मधील नवीन allrounder-[5]',
         answer: 'ऋषभपंत',
         attempt: '', 
         position: 3,
         orientation: 'down',
         startx: 11,
         starty: 1
},
{
         clue: 'बाबर चा मुलगा-[4]',
         answer: 'हूमायून',
         attempt: '', 
         position: 4,
         orientation: 'down',
         startx: 5,
         starty: 7
},
{
         clue: 'United Nations Educational, Scientific and Cultural Organization-[3]',
         answer: 'यूनेस्को',
         attempt: '', 
         position: 8,
         orientation: 'across',
         startx: 5,
         starty: 9
},
{
         clue: 'रामजन्मभुमी-[3]',
         answer: 'अयोध्या',
         attempt: '', 
         position: 9,
         orientation: 'across',
         startx: 2,
         starty: 6
},
{
         clue: 'Current situation in Hindi-[3]',
         answer: 'हालात',
         attempt: '', 
         position: 10,
         orientation: 'across',
         startx: 9,
         starty: 5
},
{
         clue: 'प्रतिभावान कवयित्री और गद्य लेखिका, एक प्रसिद्ध हिंदी साहित्यकार-[5]',
         answer: 'महादेवीवर्मा',
         attempt: '', 
         position: 5,
         orientation: 'down',
         startx: 9,
         starty: 4
},
{
         clue: 'Shef, cook in kitchen in joint family-[4]',
         answer: 'महाराज',
         attempt: '', 
         position: 11,
         orientation: 'across',
         startx: 4,
         starty: 3
},
	] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)