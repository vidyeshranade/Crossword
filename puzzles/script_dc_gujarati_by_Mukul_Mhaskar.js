// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
         clue: 'જામનગર નું પ્રસિદ્ધ તળાવ',
         answer: 'લાખોટા',
         attempt: '', 
         position: 1,
         orientation: 'across',
         startx: 1,
         starty: 1
},
{
         clue: 'એક રંગ',
         answer: 'લાલ',
         attempt: '', 
         position: 1,
         orientation: 'down',
         startx: 1,
         starty: 1
},
{
         clue: 'આ ફળ ખાવા થી લોહી વધે',
         answer: 'દાડમ',
         attempt: '', 
         position: 2,
         orientation: 'down',
         startx: 5,
         starty: 1
},
{
         clue: 'મુંબઈ નું એક રેલવે સ્ટેશન',
         answer: 'દાદર',
         attempt: '', 
         position: 2,
         orientation: 'across',
         startx: 5,
         starty: 1
},
{
         clue: 'રામાયણ નું એક પાત્ર',
         answer: 'હનુમાન',
         attempt: '', 
         position: 4,
         orientation: 'across',
         startx: 1,
         starty: 5
},
{
         clue: 'કોઈનું સન્માન કરવા આ શબ્દ વપરાય',
         answer: 'માનનીય',
         attempt: '', 
         position: 5,
         orientation: 'down',
         startx: 3,
         starty: 5
},
{
         clue: 'મૃત્યુ નો  દેવતા ',
         answer: 'યમરાજ',
         attempt: '', 
         position: 7,
         orientation: 'across',
         startx: 3,
         starty: 8
},
{
         clue: 'રાજસ્થાન નું સુપ્રસિદ્ધ શહેર',
         answer: 'જયપુર',
         attempt: '', 
         position: 8,
         orientation: 'down',
         startx: 6,
         starty: 8
},
{
         clue: 'સમસ્યાનું સમાધાન',
         answer: 'નિરાકરણ',
         attempt: '', 
         position: 6,
         orientation: 'down',
         startx: 8,
         starty: 5
},
{
         clue: 'ખેલ',
         answer: 'રમત',
         attempt: '', 
         position: 9,
         orientation: 'across',
         startx: 8,
         starty: 8
},
{
         clue: 'દુઃખ',
         answer: 'ગમ',
         attempt: '', 
         position: 3,
         orientation: 'across',
         startx: 10,
         starty: 2
},
{
         clue: 'આકાશ',
         answer: 'ગગન',
         attempt: '', 
         position: 3,
         orientation: 'down',
         startx: 10,
         starty: 2
},			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
