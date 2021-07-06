
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "फिर नज़र से पिला दीजिए XX XX XX XXX-(9)",
	 answer: "होशमेरेउड़ादीजिए",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 4,
	 starty: 1
},
{
	 clue: "चंदा चमके चमचम XX XXX XX-(7)",
	 answer: "चीखेचौकन्नाचोर",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 4,
	 starty: 3
},
{
	 clue: "साँसों को साँसों में ढलने दो ज़रा XX X XXXX X XXX X XX-(14)",
	 answer: "धीमीसीधड़कनकोबढ़नेदोज़रा",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 2,
	 starty: 8
},
{
	 clue: "तुम हो गम को छुपाए X X XX X XXX-(8)",
	 answer: "मैंहूँसरकोझुकाए",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 4,
	 starty: 6
},
{
	 clue: "आँखें खुली हो या हो बंद XXX XXX XX X-(9)",
	 answer: "दीदारउनकाहोताहै",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 10,
	 starty: 1
},
{
	 clue: "कहने को जश्नएबहारा है XX X XX X XX X-(9)",
	 answer: "इश्क़येदेखकेहैराँहै",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 4,
	 starty: 9
},
{
	 clue: "मालती गुँधाए केश प्यारे धुंघवारे XX XXX X XXXX XX XXXX-(16)",
	 answer: "मुखदामिनीसीदमकतचालमतवारी",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 8,
	 starty: 8
},
{
	 clue: "कैसे बताये क्यों तुझको चाहे यारा बता ना पाये XX XX X XX X XX XX XX XXXX-(18)",
	 answer: "बातेंदिलोंकीदेखोजोबाकीआँखेतुझेसमझाये",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 4,
	 starty: 14
},
{
	 clue: "तिनका तिनका ज़रा ज़रा X XXX X XX XX-(9)",
	 answer: "हैरोशनीसेजैसेभरा",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 10,
	 starty: 9
},
{
	 clue: "वो है रंगीला छैल छबीला X X XXXX, X XXXXX-(12)",
	 answer: "वोहैनटखटवोजमुनातट",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 12,
	 starty: 8
},
{
	 clue: "रात का शौक़ है XX X XX X XXX X XX X-(13)",
	 answer: "रातकीसौंधीसीख़ामोशीकाशौक़है",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 2,
	 starty: 21
},
{
	 clue: "तू जो गयी तो सूना होगा ये जहां XX XX XX XX X XX-(11)",
	 answer: "फीकीफीकीहोगीसारीयेदास्तां",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 23
},
{
	 clue: "कभी खुशी कभी ग़म X XX XX XX, XX XX, XX XX-(15)",
	 answer: "नाजुदाहोंगेहमकभीखुशीकभीग़म",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 10,
	 starty: 21
},
{
	 clue: "ये हवायें गुनगुनाए पूछे तू है कहाँ X X XX X, XXX X-(9)",
	 answer: "तूहैफूलोंमेंकलियोंमें",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 33
},
{
	 clue: "इन दिनों दिल मेरा मुझसे है कह रहा X XX XX, X X X XX-(10)",
	 answer: "तूख़्वाबसजातूजीलेज़रा",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 1,
	 starty: 33
},
{
	 clue: "नैणों की मत मानियों रे XX X XX XXX-(8)",
	 answer: "नैणोंकीमतसुनियों",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 8,
	 starty: 26
},
{
	 clue: "और आहिस्ता कीजिये बातें XXXX XX XX XX XX-(12)",
	 answer: "धड़कनेंकोईसुनरहाहोगा",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 6,
	 starty: 31
},
{
	 clue: "हम तुमसे दिल लगा बैठे XX-X-XX XX XX-(9)",
	 answer: "चैनओसुकूँगंवाबैठे",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 3,
	 starty: 37
},
{
	 clue: "भीगी भीगी रातों में फिर तुम आओ ना XX XXXX X XX X-(10)",
	 answer: "ऐसीबरसातोंमेंआओना",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 3,
	 starty: 39
},
{
	 clue: "ऐसा लगता है जो ना हुआ होने को है XX XXX X, XX XX XX XX X X-(16)",
	 answer: "ऐसालगताहैअबदिलमेराखोनेकोहै",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 3,
	 starty: 39
},
{
	 clue: "आपके प्यार में हम सँवरने लगे XXX XXX XX XXXX XX-(14)",
	 answer: "देखकेआपकोहमनिखरनेलगे",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 1,
	 starty: 46
},
{
	 clue: "छलका छलका रे कलसी का पानी XXXXXX XXX XXXX X XX X XX-(13)",
	 answer: "छलकाछलकारेओआँखनामानी",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 5,
	 starty: 43
},
{
	 clue: "ओ साथी रे दिन डूबे ना X XX XX X XX-(8)",
	 answer: "आचलदिनकोरोकें",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 10,
	 starty: 39
},
{
	 clue: "ये मेरे दिल में कैसा जुनून XX X X X XX XX XXX-(12)",
	 answer: "मनकोक्यूँनामिलेअबसुकून",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 1,
	 starty: 53
},
{
	 clue: "मोहब्बत को हम छोड़ दें XXXX XX XXX X XX-(12)",
	 answer: "मोहब्बतहमेंछोड़तीहीनहीं",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 12,
	 starty: 43
},
{
	 clue: "बुम्बरो बुम्बरो श्याम रंग बुम्बरो XX X XX XXX X X X XX-(13)",
	 answer: "आएहोकिसबगियासेहोहोतुम",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 9,
	 starty: 48
},
{
	 clue: "थोड़े बदमाश हो तुम XX XX X XX-(7)",
	 answer: "थोड़ेनादाँहोतुम",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 5,
	 starty: 57
},
{
	 clue: "हमको हमी से चुरा लो XX X XX XX XX X-(10)",
	 answer: "दिलमेंकहींतुमछुपालो",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 3,
	 starty: 60
},
{
	 clue: "हलचल हुई ज़रा शोर हुआ XX XX XX, XX XX XX-(12)",
	 answer: "दिलचोरहुआतेरीओरहुआ",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 4,
	 starty: 59
},
{
	 clue: "मौला मेरे मौला मेरे मौला मेरे मौला मेरे XX XX XXX XXX-(10)",
	 answer: "आँखेंतेरीकितनीहसीन",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 2,
	 starty: 65
},
{
	 clue: "रब ना करे ये के ज़िन्दगी XX XX X XX X-(8)",
	 answer: "कभीकिसीकोदगादे",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 6,
	 starty: 63
},
{
	 clue: "तुम बिन क्या है जीना क्या है जीना XX XX X XXXX-(8)",
	 answer: "तुमबिनक्याहैजीना",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 11,
	 starty: 62
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
