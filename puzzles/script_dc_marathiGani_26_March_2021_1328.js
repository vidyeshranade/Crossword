
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "वादलवारं सुटल ग वार्‍यानं तुफान उठलं ग XXXX XXXXX XXXX XXXXX XXXX XXX XXX XXX-(31)",
	 answer: "भिरभिरवार्‍यातपावसाच्यामार्‍यातसजनानंहोडीलापान्यातलोटलं",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "तू सुखकर्ता तू दुःखहर्ता XX XX XX XXXX-(10)",
	 answer: "तूचकर्ताआणिकरविता",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 3,
	 starty: 1
},
{
	 clue: "कोकिळ कुहुकुहु बोले X XX XX X XX-(8)",
	 answer: "तूमाझातुझीमीझाले",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 3,
	 starty: 1
},
{
	 clue: "सुखाचे हे नाम आवडीनें गावें XX XXXX XXXX-(10)",
	 answer: "वाचेआळवावेविठोबासी",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 1,
	 starty: 5
},
{
	 clue: "शब्दाविना ओठांतले कळले मला कळले तुला XXXX XXX XX-(9)",
	 answer: "शब्दाविनाकळलेमला",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 7,
	 starty: 3
},
{
	 clue: "तुझा नि माझा एकपणा XX XXX XXX-(8)",
	 answer: "कसाकळवाशब्दांना",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 5,
	 starty: 7
},
{
	 clue: "रुणुझुणु रुणुझुणु रे भ्रमरा XX X XXXX X XXX-(11)",
	 answer: "सांडीतूअवगुणुरेभ्रमरा",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 4,
	 starty: 11
},
{
	 clue: "नाच ग घुमा XX X XX X-(6)",
	 answer: "कशीमीनाचू?",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 12,
	 starty: 4
},
{
	 clue: "काळजात खोल खोल दुःख झरे XXXX XX XXX XX XX-(13)",
	 answer: "पापणीचीओलवाहूननेईसारे",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 9,
	 starty: 9
},
{
	 clue: "हे माधवा मोहना X XXX XXX X XXX-(11)",
	 answer: "हेमाधवाविठ्ठलाहेमाधवा",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 6,
	 starty: 14
},
{
	 clue: "असा हात हाती असावा सुखाचा XX X XXX XXX XXX-(12)",
	 answer: "जसाकिमनालादिलासामनाचा",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 20
},
{
	 clue: "हा रुसवा सोड सखे XX X XXX XX X XXX-(12)",
	 answer: "पुरेहाबहाणासोडनाअबोला",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 11,
	 starty: 12
},
{
	 clue: "घरात हसरे तारे असता XX XXX XXXX-(9)",
	 answer: "पाहूकशालानभाकडे",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 26
},
{
	 clue: "आधी होते इतराजी XX XX XX XX-(8)",
	 answer: "मगकसेझालेराजी",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 3,
	 starty: 24
},
{
	 clue: "कमोदिनी काय जाणे तो परिमळ XXX XXX XXXX-(10)",
	 answer: "भ्रमरसकळभोगितसे",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 8,
	 starty: 22
},
{
	 clue: "काय बाई सांगू कसं ग सांगू ? XXX XX XX XX-(9)",
	 answer: "मलाचमाझीवाटेलाज",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 5,
	 starty: 25
},
{
	 clue: "मी जलवंती मी फुलवंती XX XXX XXX XX-(10)",
	 answer: "तुझीनजरलागंलमला",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 2,
	 starty: 33
},
{
	 clue: "शपथ या बोटांची शपथ या ओठांची XX X XXXX-(7)",
	 answer: "तुझीमीजोडीदार",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 3,
	 starty: 32
},
{
	 clue: "नाच नाचुनी अती मी दमले XXX X XXXX-(8)",
	 answer: "थकलेरेनंदलाला",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 11,
	 starty: 26
},
{
	 clue: "गोड गोजिरी लाज लाजरी ताई तू होणार नवरी XXXXX XXXXXX XXX XX X XX-(18)",
	 answer: "फुलाफुलांच्याबांधूनमाळामंडपघालागदारी",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 7,
	 starty: 32
},
{
	 clue: "बोल ग मैने बोल XX X XX XX-(7)",
	 answer: "बोलगमैनेबोल",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 9,
	 starty: 32
},
{
	 clue: "पुन्हा पावसालाच सांगायचे XXX XX XX XXXX-(11)",
	 answer: "कुणालाकितीथेंबवाटायचे",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 4,
	 starty: 40
},
{
	 clue: "फिरत्या चाकावरती देसी मातीला आकार XXX X XX XXX-(9)",
	 answer: "विठ्ठलातूवेडाकुंभार",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 2,
	 starty: 42
},
{
	 clue: "धागा जुळला जीव फुलला XX XXXX XX XXX-(11)",
	 answer: "वेड्याबहिणीलाभाऊमिळाला",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 2,
	 starty: 46
},
{
	 clue: "निशाणा तुला दिसला ना XXXX XXXX XXXXX-(13)",
	 answer: "झिरमिरझिरमिरपाऊसधारा",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 10,
	 starty: 40
},
{
	 clue: "श्री गुरुदेव दत्त श्री गुरुदेव दत्त XX XXX XX XX-(9)",
	 answer: "दत्तनामाचालागोछंद",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 12,
	 starty: 41
},
{
	 clue: "राजा राणीची नको काऊ माऊची नको XX XX XX XX XXX-(11)",
	 answer: "गोष्टमलासांगआईरामाची",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 2,
	 starty: 52
},
{
	 clue: "ब्रम्हा विष्णू आणि महेश्वर सामोरी बसले XX X XXXX XXX-(10)",
	 answer: "मलाहेदत्तगुरुदिसले",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 5,
	 starty: 51
},
{
	 clue: "माझे पुण्य फळा आले XX X XXXX XXX-(10)",
	 answer: "आजमीदत्तगुरुपाहिले",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 2,
	 starty: 54
},
{
	 clue: "हे आदिमा हे अंतिमा X XXX X X XX-(8)",
	 answer: "जेवांछिलेतेतूदिले",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 2,
	 starty: 60
},
{
	 clue: "ही अनोखी गाठ कोणी बांधली XX XX XX XX XXX-(11)",
	 answer: "एकझालेऊनआणिसावली",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 9,
	 starty: 57
},
{
	 clue: "तुझी अंगकांती रे XXXX XXX XX-(9)",
	 answer: "रंगवितीरानचीफुले",
	 attempt: "", 
	 position: 31,
	 orientation: "across",
	 startx: 4,
	 starty: 62
},
{
	 clue: "तव भास अंतरा झाला मन रमता मोहना XXX  XX XXXX-(9)",
	 answer: "हासतीफुलेभवताली",
	 attempt: "", 
	 position: 32,
	 orientation: "down",
	 startx: 12,
	 starty: 58
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
