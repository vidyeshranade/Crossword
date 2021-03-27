// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
         clue: 'શરીરનું એક અંગ',
         answer: 'કાન',
         attempt: '', 
         position: 1,
         orientation: 'across',
         startx: 1,
         starty: 1
},
{
         clue: 'એક રંગ',
         answer: 'કાળો',
         attempt: '', 
         position: 1,
         orientation: 'down',
         startx: 1,
         starty: 1
},
{
         clue: 'પપ્પાની મમ્મી',
         answer: 'દાદી',
         attempt: '', 
         position: 2,
         orientation: 'down',
         startx: 4,
         starty: 1
},
{
         clue: 'ડોનેશન, અનુદાન ',
         answer: 'દાન',
         attempt: '', 
         position: 2,
         orientation: 'across',
         startx: 4,
         starty: 1
},
{
         clue: 'મમ્મીના પપ્પા',
         answer: 'નાના',
         attempt: '', 
         position: 3,
         orientation: 'down',
         startx: 7,
         starty: 1
},
{
         clue: 'ગુનો કરી જેલમાં રાખેલ વ્યક્તિ કહેવાય',
         answer: 'કેદી',
         attempt: '', 
         position: 4,
         orientation: 'across',
         startx: 3,
         starty: 2
},
{
         clue: 'શા માટે',
         answer: 'કેમ',
         attempt: '', 
         position: 4,
         orientation: 'down',
         startx: 3,
         starty: 2
},
{
         clue: 'એક પંખી',
         answer: 'મેના',
         attempt: '', 
         position: 5,
         orientation: 'across',
         startx: 6,
         starty: 2
},
{
         clue: 'કચરો, ગંદકી',
         answer: 'મેલ',
         attempt: '', 
         position: 5,
         orientation: 'down',
         startx: 6,
         starty: 2
},
{
         clue: 'સોનું, કંચન',
         answer: 'હેમ',
         attempt: '', 
         position: 6,
         orientation: 'across',
         startx: 2,
         starty: 3
},
{
         clue: 'પ્રેમ, સ્નેહ',
         answer: 'હેત',
         attempt: '', 
         position: 6,
         orientation: 'down',
         startx: 2,
         starty: 3
},
{
         clue: 'ફૂટબોલમાં આનું મહત્ત્વ વધારે',
         answer: 'ગોલ',
         attempt: '', 
         position: 7,
         orientation: 'across',
         startx: 5,
         starty: 3
},
{
         clue: 'વર્તુળ',
         answer: 'ગોળ',
         attempt: '', 
         position: 7,
         orientation: 'down',
         startx: 5,
         starty: 3
},
{
         clue: 'કથની, કથા, કહાણી ',
         answer: 'વાત',
         attempt: '', 
         position: 8,
         orientation: 'across',
         startx: 1,
         starty: 4
},
{
         clue: 'કેશ',
         answer: 'વાળ',
         attempt: '', 
         position: 8,
         orientation: 'down',
         startx: 1,
         starty: 4
},
{
         clue: 'એક ઉપર એક આંટા ચડાવવા ',
         answer: 'વળ',
         attempt: '', 
         position: 9,
         orientation: 'across',
         startx: 4,
         starty: 4
},
{
         clue: 'કતલ, હત્યા, ખૂન',
         answer: 'વધ',
         attempt: '', 
         position: 9,
         orientation: 'down',
         startx: 4,
         starty: 4
},
{
         clue: 'બે વત્તા બે એટલે',
         answer: 'ચાર',
         attempt: '', 
         position: 10,
         orientation: 'down',
         startx: 7,
         starty: 4
},
{
         clue: 'ઊંચેથી વેગપૂર્વક પડતો પાણીનો પ્રવાહ ',
         answer: 'ધોધ',
         attempt: '', 
         position: 11,
         orientation: 'across',
         startx: 3,
         starty: 5
},
{
         clue: 'વિશ્વાસઘાત કરવો, .... આપવો',
         answer: 'ધોખો',
         attempt: '', 
         position: 11,
         orientation: 'down',
         startx: 3,
         starty: 5
},
{
         clue: 'ટેલિગ્રામનું ગુજરાતી',
         answer: 'તાર',
         attempt: '', 
         position: 12,
         orientation: 'across',
         startx: 6,
         starty: 5
},
{
         clue: 'ગરમી',
         answer: 'તાપ',
         attempt: '', 
         position: 12,
         orientation: 'down',
         startx: 6,
         starty: 5
},
{
         clue: 'એક રમત',
         answer: 'ખોખો',
         attempt: '', 
         position: 13,
         orientation: 'across',
         startx: 2,
         starty: 6
},
{
         clue: 'શરીરમાં કોઈ અને કોઈ અંગની ખામી',
         answer: 'ખોડ',
         attempt: '', 
         position: 13,
         orientation: 'down',
         startx: 2,
         starty: 6
},
{
         clue: 'બદદુવા',
         answer: 'શાપ',
         attempt: '', 
         position: 14,
         orientation: 'across',
         startx: 5,
         starty: 6
},
{
         clue: 'ઊનમાંથી બનતી એક વસ્તુ',
         answer: 'શાલ',
         attempt: '', 
         position: 14,
         orientation: 'down',
         startx: 5,
         starty: 6
},
{
         clue: 'અન્ય પશુ ખેતરમાં ન આવે તેથી ખેતરની ફરતે બંંધાય',
         answer: 'વાડ',
         attempt: '', 
         position: 15,
         orientation: 'across',
         startx: 1,
         starty: 7
},
{
         clue: 'આનંદ, મોજ',
         answer: 'ગેલ',
         attempt: '', 
         position: 16,
         orientation: 'across',
         startx: 4,
         starty: 7
},
{
         clue: 'હૃસ્વ એટલે કઈ માત્રા',
         answer: 'ઇ',
         attempt: '', 
         position: 17,
         orientation: 'across',
         startx: 7,
         starty: 7
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
