// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
         clue: 'Duck-[4]',
         answer: 'পাতিহাঁস',
         attempt: '', 
         position: 1,
         orientation: 'down',
         startx: 1,
         starty: 1
},
{
         clue: 'Potato-[2]',
         answer: 'আলু',
         attempt: '', 
         position: 1,
         orientation: 'across',
         startx: 1,
         starty: 1
},
{
         clue: 'Duplication-[3]',
         answer: 'সদৃশ',
         attempt: '', 
         position: 2,
         orientation: 'across',
         startx: 1,
         starty: 4
},
{
         clue: 'Related to ghost/ Satan/ Devil-[5]',
         answer: 'শয়তানের',
         attempt: '', 
         position: 3,
         orientation: 'down',
         startx: 3,
         starty: 4
},
{
         clue: 'Them-[3]',
         answer: 'তাদের',
         attempt: '', 
         position: 4,
         orientation: 'across',
         startx: 1,
         starty: 8
},
{
         clue: 'Ancestors-[6]',
         answer: 'বংশধরদের',
         attempt: '', 
         position: 5,
         orientation: 'down',
         startx: 5,
         starty: 1
},
{
         clue: 'Rich Person-[4]',
         answer: 'ধনবান',
         attempt: '', 
         position: 6,
         orientation: 'across',
         startx: 5,
         starty: 3
},
{
         clue: 'Related to Bible-[5]',
         answer: 'বাইবেলের',
         attempt: '', 
         position: 7,
         orientation: 'down',
         startx: 7,
         starty: 3
},
{
         clue: 'Good News-[6]',
         answer: 'সুসমাচারের',
         attempt: '', 
         position: 8,
         orientation: 'down',
         startx: 10,
         starty: 1
},
{
         clue: 'Servant-[5]',
         answer: 'পরিচারক',
         attempt: '', 
         position: 9,
         orientation: 'across',
         startx: 8,
         starty: 4
},
{
         clue: 'for doing-[3]',
         answer: 'করার',
         attempt: '', 
         position: 10,
         orientation: 'down',
         startx: 12,
         starty: 4
},
	] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
