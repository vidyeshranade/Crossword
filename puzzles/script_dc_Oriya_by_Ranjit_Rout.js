
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
         clue: 'ଅନୁଗୋଳ district is famous for …-[]',
         answer: 'ଅନୁଗୋଳ',
         attempt: '', 
         position: 1,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'କଟକ district is famous for …-[]',
         answer: 'କଟକ',
         attempt: '', 
         position: 2,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'କଳାହାଣ୍ଡି district is famous for …-[]',
         answer: 'କଳାହାଣ୍ଡି',
         attempt: '', 
         position: 3,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'କନ୍ଧମାଳ district is famous for …-[]',
         answer: 'କନ୍ଧମାଳ',
         attempt: '', 
         position: 4,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'କେନ୍ଦୁଝର district is famous for …-[]',
         answer: 'କେନ୍ଦୁଝର',
         attempt: '', 
         position: 5,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'କେନ୍ଦ୍ରାପଡ଼ା district is famous for …-[]',
         answer: 'କେନ୍ଦ୍ରାପଡ଼ା',
         attempt: '', 
         position: 6,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'କୋରାପୁଟ district is famous for …-[]',
         answer: 'କୋରାପୁଟ',
         attempt: '', 
         position: 7,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ଖୋର୍ଦ୍ଧା district is famous for …-[]',
         answer: 'ଖୋର୍ଦ୍ଧା',
         attempt: '', 
         position: 8,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ଗଜପତି district is famous for …-[]',
         answer: 'ଗଜପତି',
         attempt: '', 
         position: 9,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ଗଞ୍ଜାମ district is famous for …-[]',
         answer: 'ଗଞ୍ଜାମ',
         attempt: '', 
         position: 10,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ଜଗତସିଂହପୁର district is famous for …-[]',
         answer: 'ଜଗତସିଂହପୁର',
         attempt: '', 
         position: 11,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ଝାରସୁଗୁଡ଼ା district is famous for …-[]',
         answer: 'ଝାରସୁଗୁଡ଼ା',
         attempt: '', 
         position: 12,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ଢେଙ୍କାନାଳ district is famous for …-[]',
         answer: 'ଢେଙ୍କାନାଳ',
         attempt: '', 
         position: 13,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ଦେବଗଡ଼ district is famous for …-[]',
         answer: 'ଦେବଗଡ଼',
         attempt: '', 
         position: 14,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ନବରଙ୍ଗପୁର district is famous for …-[]',
         answer: 'ନବରଙ୍ଗପୁର',
         attempt: '', 
         position: 15,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ନୟାଗଡ଼ district is famous for …-[]',
         answer: 'ନୟାଗଡ଼',
         attempt: '', 
         position: 16,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ନୂଆପଡ଼ା district is famous for …-[]',
         answer: 'ନୂଆପଡ଼ା',
         attempt: '', 
         position: 17,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ପୁରୀ district is famous for …-[]',
         answer: 'ପୁରୀ',
         attempt: '', 
         position: 18,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ବରଗଡ଼ district is famous for …-[]',
         answer: 'ବରଗଡ଼',
         attempt: '', 
         position: 19,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ବଲାଙ୍ଗୀର district is famous for …-[]',
         answer: 'ବଲାଙ୍ଗୀର',
         attempt: '', 
         position: 20,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ବାଲେଶ୍ୱର district is famous for …-[]',
         answer: 'ବାଲେଶ୍ୱର',
         attempt: '', 
         position: 21,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ବୌଦ୍ଧ district is famous for …-[]',
         answer: 'ବୌଦ୍ଧ',
         attempt: '', 
         position: 22,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ଭଦ୍ରକ district is famous for …-[]',
         answer: 'ଭଦ୍ରକ',
         attempt: '', 
         position: 23,
         orientation: '',
         startx: ,
         starty: 
},
	{
         clue: 'ମୟୂରଭଞ୍ଜ district is famous for …-[]',
         answer: 'ମୟୂରଭଞ୍ଜ',
         attempt: '', 
         position: 24,
         orientation: '',
         startx: ,
         starty: 
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
	
	
	
	
	
	
