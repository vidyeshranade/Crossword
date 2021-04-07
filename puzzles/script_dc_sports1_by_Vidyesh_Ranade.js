// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
   $(function() {
      // provide crossword entries in an array of objects like the following example
      // Position refers to the numerical order of an entry. Each position can have
      // two entries: an across entry and a down entry
      var puzzleData = [
{
         clue: 'ढिंग एक्सप्रेस-[4]',
         answer: 'हिमादास',
         attempt: '', 
         position: 1,
         orientation: 'down',
         startx: 1,
         starty: 2
},
{
         clue: 'मास्टर ब्लास्टर-[8]',
         answer: 'सचिनतेंडुलकर',
         attempt: '', 
         position: 2,
         orientation: 'across',
         startx: 1,
         starty: 5
},
{
         clue: 'भारत के सार्वकालिक सर्वश्रेष्ठ खिलाड़ी-[5]',
         answer: 'कपिलदेव',
         attempt: '', 
         position: 3,
         orientation: 'down',
         startx: 7,
         starty: 5
},
{
         clue: 'चेस वर्ल्ड चैंपियन-[8]',
         answer: 'विश्वनाथनआनंद',
         attempt: '', 
         position: 4,
         orientation: 'down',
         startx: 3,
         starty: 1
},
{
         clue: 'बॅटमिंटन वर्ल्ड चैंपियन - फूलों की रानी-[7]',
         answer: 'साइनानेहवाल',
         attempt: '', 
         position: 7,
         orientation: 'across',
         startx: 1,
         starty: 11
},
{
         clue: 'टेनिस चॅम्प-[5]',
         answer: 'सानियामिर्झा',
         attempt: '', 
         position: 8,
         orientation: 'down',
         startx: 1,
         starty: 11
},
{
         clue: 'बॅटमिंटन वर्ल्ड चैंपियन-[4]',
         answer: 'पीव्हीसिंधु',
         attempt: '', 
         position: 5,
         orientation: 'down',
         startx: 9,
         starty: 1
},
{
         clue: 'भारतकी सुवर्णकन्या-[4]',
         answer: 'पीटीउषा',
         attempt: '', 
         position: 6,
         orientation: 'across',
         startx: 9,
         starty: 1
},
{
         clue: 'डॉलरमिया. ग्रेट contributor to इंडियन क्रिकेट-[9]',
         answer: 'जगमोहनदालमिया',
         attempt: '', 
         position: 9,
         orientation: 'down',
         startx: 5,
         starty: 8
},
{
         clue: 'सौरवगांगुली-[2]',
         answer: 'दादा',
         attempt: '', 
         position: 10,
         orientation: 'across',
         startx: 5,
         starty: 13
},
{
         clue: 'महेंद्रसिंगधोनी-[2]',
         answer: 'माही',
         attempt: '', 
         position: 11,
         orientation: 'across',
         startx: 1,
         starty: 3
},
{
         clue: 'हॉकी के जादूगर ड्री बलिंग मास्टर-[7]',
         answer: 'मेजरध्यानचंद',
         attempt: '', 
         position: 12,
         orientation: 'across',
         startx: 6,
         starty: 17
},
{
         clue: 'Indian professional sprinter and current national champion in the women\'s 100 metres event-[4]',
         answer: 'द्युतीचंद',
         attempt: '', 
         position: 13,
         orientation: 'down',
         startx: 12,
         starty: 14
},
{
         clue: 'क्रिकेट के रन मशीन-[5]',
         answer: 'रोहितशर्मा',
         attempt: '', 
         position: 14,
         orientation: 'across',
         startx: 8,
         starty: 10
},
{
         clue: 'बिलियर्ड्स चॅम्प-[4]',
         answer: 'गीतसेठी',
         attempt: '', 
         position: 15,
         orientation: 'down',
         startx: 10,
         starty: 9
},
{
         clue: 'First to reach 10K runs in Test Cricket-[4]',
         answer: 'गावस्कर',
         attempt: '', 
         position: 16,
         orientation: 'down',
         startx: 8,
         starty: 14
},
{
         clue: 'First Indian Olympic Gold Medalist-[6]',
         answer: 'अभिनवबिंद्रा',
         attempt: '', 
         position: 17,
         orientation: 'across',
         startx: 1,
         starty: 19
},
{
         clue: 'Silver medal in 7th World Body Building-[6]',
         answer: 'यतिंदरसिंह',
         attempt: '', 
         position: 18,
         orientation: 'across',
         startx: 5,
         starty: 3
},
{
         clue: 'known as The Flying Sikh-[4]',
         answer: 'मिल्खासिंह',
         attempt: '', 
         position: 19,
         orientation: 'across',
         startx: 1,
         starty: 14
},
   ] 
   
         // generate crossword with puzzleData into element id = puzzle-wrapper        
         $('#puzzle-wrapper').crossword(puzzleData);  
      
   })
   
})(jQuery)