// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
         clue: 'Known as Quilon in English. It is Ashtamudi Lake.-[2]',
         answer: 'കൊല്ലം',
         attempt: '', 
         position: 1,
         orientation: 'across',
         startx: 1,
         starty: 1
},
{
         clue: 'Kannirakkuttam meaning of the kusirakut the Kannada word -[5]',
         answer: 'കാസർഗോഡ്',
         attempt: '', 
         position: 2,
         orientation: 'across',
         startx: 1,
         starty: 4
},
{
         clue: 'XXXX Tripurantaka Temple-[4]',
         answer: 'മലപ്പുറം',
         attempt: '', 
         position: 3,
         orientation: 'across',
         startx: 3,
         starty: 8
},
{
         clue: 'Mananchira Square. This area were part of Polanad ruled by King Porlathiri-[4]',
         answer: 'കോഴിക്കോട്',
         attempt: '', 
         position: 4,
         orientation: 'across',
         startx: 1,
         starty: 10
},
{
         clue: ' Major attractions here are : St. Angelo Fort, Thalassery Fort, Run Beach, Payyambalam,Ezhimala -[3]',
         answer: 'കണ്ണൂർ',
         attempt: '', 
         position: 5,
         orientation: 'down',
         startx: 3,
         starty: 2
},
{
         clue: 'Land of forest. Kabini river flows through this place.-[4]',
         answer: 'വയനാട്',
         attempt: '', 
         position: 6,
         orientation: 'down',
         startx: 5,
         starty: 1
},
{
         clue: 'XXXX is famous for its coir industry.-[4]',
         answer: 'ആലപ്പുഴ',
         attempt: '', 
         position: 7,
         orientation: 'down',
         startx: 5,
         starty: 6
},
{
         clue: 'Royal family was in the form of Nedumporaiyoor. XXXX was known as Porainad -[4]',
         answer: 'പാലക്കാട്',
         attempt: '', 
         position: 8,
         orientation: 'down',
         startx: 4,
         starty: 7
},
{
         clue: 'XXX is famous for its three L\'s. It is also known as the Land of Letters, Latex and Lakes-[3]',
         answer: 'കോട്ടയം',
         attempt: '', 
         position: 9,
         orientation: 'down',
         startx: 1,
         starty: 10
},
	] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
