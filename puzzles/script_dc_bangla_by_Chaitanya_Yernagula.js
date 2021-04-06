// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
         clue: 'కార్తీక మాసం కి ముండు  వచ్చే నెల(4)',
         answer: 'ఆశ్వయుజం',
         attempt: '', 
         position: 1,
         orientation: 'across',
         startx: 1,
         starty: 1
},
{
         clue: 'హాస్పిటల్ తెలుగు లో (4)',
         answer: 'ఆసుపత్రి',
         attempt: '', 
         position: 1,
         orientation: 'down',
         startx: 1,
         starty: 1
},
{
         clue: 'శక్తి తో సాధించలేనిది దీనితో సాదించాలి అంటారు (2)',
         answer: 'యుక్తి',
         attempt: '', 
         position: 2,
         orientation: 'down',
         startx: 3,
         starty: 1
},
{
         clue: 'బాలుడి ని ఇలా కూడా పిలుస్తారు ఒక శోభన్ బాబు సినిమా పేరు (2)',
         answer: 'బాబు',
         attempt: '', 
         position: 3,
         orientation: 'across',
         startx: 6,
         starty: 1
},
{
         clue: 'దారి మరోవిధంగా (2) ',
         answer: 'బాట',
         attempt: '', 
         position: 3,
         orientation: 'down',
         startx: 6,
         starty: 1
},
{
         clue: 'Hour తెలుగు కాలమానం (2) ',
         answer: 'గంట',
         attempt: '', 
         position: 4,
         orientation: 'across',
         startx: 5,
         starty: 2
},
{
         clue: '.... కు తగ్గ బొంత అని సామెత (2)',
         answer: 'గంత',
         attempt: '', 
         position: 4,
         orientation: 'down',
         startx: 5,
         starty: 2
},
{
         clue: 'రకరకాల అనే అర్థంతో వాడే పదం (2) ',
         answer: 'నానా',
         attempt: '', 
         position: 5,
         orientation: 'down',
         startx: 8,
         starty: 2
},
{
         clue: 'టాక్స్ తెలుగు లో (2) ',
         answer: 'పన్ను',
         attempt: '', 
         position: 6,
         orientation: 'across',
         startx: 1,
         starty: 3
},
{
         clue: 'చిన్నారులు డబ్బులు దాచుకునే హుండీ వంటిది (2)',
         answer: 'ముంత',
         attempt: '', 
         position: 7,
         orientation: 'across',
         startx: 4,
         starty: 3
},
{
         clue: 'వెనుక కు వ్యతిరేకం (2)',
         answer: 'ముందు',
         attempt: '', 
         position: 7,
         orientation: 'down',
         startx: 4,
         starty: 3
},
{
         clue: 'చివరి అక్షరం లేని జనాభా (2) ',
         answer: 'జనా',
         attempt: '', 
         position: 8,
         orientation: 'across',
         startx: 7,
         starty: 3
},
{
         clue: 'ఫీస్ట్ తెలుగు లో (2) ',
         answer: 'విందు',
         attempt: '', 
         position: 9,
         orientation: 'across',
         startx: 3,
         starty: 4
},
{
         clue: 'కిటికీ ఇంగ్లీష్ లో (2)',
         answer: 'విండో',
         attempt: '', 
         position: 9,
         orientation: 'down',
         startx: 3,
         starty: 4
},
{
         clue: 'రెయిన్ తెలుగు లో (2)',
         answer: 'వాన',
         attempt: '', 
         position: 10,
         orientation: 'across',
         startx: 6,
         starty: 4
},
{
         clue: 'చివరి అక్షరం లేని ఏడోది (2)',
         answer: 'ఏడో',
         attempt: '', 
         position: 11,
         orientation: 'across',
         startx: 2,
         starty: 5
},
{
         clue: 'దశమి తర్వాత తిధి (4)',
         answer: 'ఏకాదశి',
         attempt: '', 
         position: 11,
         orientation: 'down',
         startx: 2,
         starty: 5
},
{
         clue: 'ఇవతల కానిది (4)',
         answer: 'అవతల',
         attempt: '', 
         position: 12,
         orientation: 'down',
         startx: 5,
         starty: 5
},
{
         clue: 'శివుడి వాహనం (2)',
         answer: 'నంది',
         attempt: '', 
         position: 13,
         orientation: 'across',
         startx: 7,
         starty: 5
},
{
         clue: 'మంత్రి హిందీ లో (3)',
         answer: 'దివాను',
         attempt: '', 
         position: 14,
         orientation: 'down',
         startx: 8,
         starty: 5
},
{
         clue: 'రెండొవ అక్షరానికి దీర్ఘం వచ్చిన నాక (2)',
         answer: 'నాకా',
         attempt: '', 
         position: 15,
         orientation: 'across',
         startx: 1,
         starty: 6
},
{
         clue: 'స్త్రీలు నడుముకి కట్టుకునే వస్త్రం(3)',
         answer: 'పావడ',
         attempt: '', 
         position: 16,
         orientation: 'across',
         startx: 4,
         starty: 6
},
{
         clue: 'డోలు వంటి వాద్యం (2)',
         answer: 'డప్పు',
         attempt: '', 
         position: 17,
         orientation: 'down',
         startx: 6,
         starty: 6
},
{
         clue: 'ఊరికే పొగరుబోతుతనంతో మాట్లాడే గుణం (3)',
         answer: 'పదరు',
         attempt: '', 
         position: 18,
         orientation: 'across',
         startx: 1,
         starty: 7
},
{
         clue: 'తొలగు (4)',
         answer: 'తప్పుకొను',
         attempt: '', 
         position: 19,
         orientation: 'across',
         startx: 5,
         starty: 7
},
{
         clue: 'కొలత చివరి అక్షరం లుప్తము (2)',
         answer: 'కొల',
         attempt: '', 
         position: 20,
         orientation: 'down',
         startx: 7,
         starty: 7
},
{
         clue: 'ఖరీదు(2)',
         answer: 'వెల',
         attempt: '', 
         position: 21,
         orientation: 'across',
         startx: 4,
         starty: 8
},	] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
