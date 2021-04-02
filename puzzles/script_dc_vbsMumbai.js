// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
         clue: 'Various things covered in this programme-[3]',
         answer: 'विविध',
         attempt: '', 
         position: 1,
         orientation: 'across',
         startx: 1,
         starty: 1
},
{
         clue: 'देश कि सुरीली धडकन -[6]',
         answer: 'विविधभारती',
         attempt: '', 
         position: 1,
         orientation: 'down',
         startx: 1,
         starty: 1
},
{
         clue: 'माननीय प्रधानमंत्री श्री नरेन्द्र मोदी आपसे अपने XX XX XX साझा करतें है -[5]',
         answer: 'मनकीबात',
         attempt: '', 
         position: 2,
         orientation: 'down',
         startx: 7,
         starty: 1
},
{
         clue: '11pm Programme-[5]',
         answer: 'बेलाकेफुल',
         attempt: '', 
         position: 3,
         orientation: 'down',
         startx: 10,
         starty: 1
},
{
         clue: 'Todays Artist-[7]',
         answer: 'आजकेफ़नकार',
         attempt: '', 
         position: 4,
         orientation: 'across',
         startx: 3,
         starty: 2
},
{
         clue: 'Remembering the Legends-[9]',
         answer: 'उजालेउनकीयादोंके',
         attempt: '', 
         position: 5,
         orientation: 'across',
         startx: 2,
         starty: 3
},
{
         clue: 'Todays Guest-[7]',
         answer: 'आजकेमेहमान ',
         attempt: '', 
         position: 6,
         orientation: 'down',
         startx: 3,
         starty: 2
},
{
         clue: '11 am Programme-[5]',
         answer: 'मधुमालती',
         attempt: '', 
         position: 7,
         orientation: 'across',
         startx: 1,
         starty: 7
},
{
         clue: 'रेडिओ सखी ?-[5]',
         answer: 'ममतासिंह',
         attempt: '', 
         position: 8,
         orientation: 'down',
         startx: 1,
         starty: 7
},
{
         clue: 'Celebrity tweets के साथ गाने और तराने के ताने बाने-[6]',
         answer: 'भारतकीगूँज',
         attempt: '', 
         position: 9,
         orientation: 'down',
         startx: 7,
         starty: 7
},
{
         clue: 'KBKG -[8]',
         answer: 'कुछबातेंकुछगीत ',
         attempt: '', 
         position: 10,
         orientation: 'down',
         startx: 11,
         starty: 7
},
{
         clue: 'नदी, धारा-[3]',
         answer: 'सरिता',
         attempt: '', 
         position: 11,
         orientation: 'down',
         startx: 9,
         starty: 8
},
{
         clue: '6:30am program on Hindustani Classical Music-[6]',
         answer: 'संगीतसरिता',
         attempt: '', 
         position: 12,
         orientation: 'across',
         startx: 5,
         starty: 9
},
{
         clue: 'Program related to Stage-[5]',
         answer: 'नाट्यतरंग',
         attempt: '', 
         position: 13,
         orientation: 'down',
         startx: 12,
         starty: 11
},
{
         clue: 'पृथवीराज कपूर जी की संस्था -[5]',
         answer: 'बॉम्बेटॉकीज',
         attempt: '', 
         position: 14,
         orientation: 'across',
         startx: 3,
         starty: 12
},
{
         clue: 'Air-Castle-[5]',
         answer: 'हवामहल',
         attempt: '', 
         position: 15,
         orientation: 'across',
         startx: 3,
         starty: 13
},
{
         clue: 'The-most-listen Hindi Flim Music Programme-[4]',
         answer: 'छायागीत',
         attempt: '', 
         position: 16,
         orientation: 'across',
         startx: 9,
         starty: 13
},
{
         clue: 'प्यार के बारे  में -[8]',
         answer: 'हमहैंराहीप्यारके',
         attempt: '', 
         position: 17,
         orientation: 'down',
         startx: 9,
         starty: 15
},
{
         clue: 'Saaj and Sound-[7]',
         answer: 'साज़औरआवाज़',
         attempt: '', 
         position: 18,
         orientation: 'down',
         startx: 10,
         starty: 17
},
{
         clue: 'I remember-everything little-little-[11]',
         answer: 'मुझेयादसबहैज़राज़रा',
         attempt: '', 
         position: 19,
         orientation: 'across',
         startx: 1,
         starty: 18
},
{
         clue: 'Evergreen Songs-[8]',
         answer: 'सदाबहारनगमे',
         attempt: '', 
         position: 20,
         orientation: 'down',
         startx: 5,
         starty: 18
},
{
         clue: 'Meet ...-[6]',
         answer: 'इनसेमिलिए',
         attempt: '', 
         position: 21,
         orientation: 'across',
         startx: 4,
         starty: 23
},
{
         clue: '3pm Programme for all-Sakhi with awsome Title Song सरगम-[5]',
         answer: 'सखीसहेली',
         attempt: '', 
         position: 22,
         orientation: 'down',
         startx: 8,
         starty: 9
},
{
         clue: 'नॉनस्टॉप हिंदी गीतो  का कार्यक्रम (श्याम XXX)-[3]',
         answer: 'सिंदूरी',
         attempt: '', 
         position: 23,
         orientation: 'across',
         startx: 1,
         starty: 10
},
	] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
