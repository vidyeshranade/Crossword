
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "नौजवानों बात मानो XX XX X X XX XXX-(11)",
	 answer: "कभीकिसीसेनाप्यारकरना",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 4
},
{
	 clue: "रब ना करे ये के ज़िन्दगी XX XX X XX X-(8)",
	 answer: "कभीकिसीकोदगादे",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 4
},
{
	 clue: "तीजा तेरा रंग था मैं तो XX XX XX X X X-(9)",
	 answer: "जियातेरेढंगसेमैंतो",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 4,
	 starty: 7
},
{
	 clue: "दोस्तों से झूठी मूठी दूसरों का नाम ले के XX XX XX XXX, XX XX X XX XXX-(19)",
	 answer: "तेरीमेरीबातेंकरनायारारातसेदिनकरना",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 7,
	 starty: 6
},
{
	 clue: "आग कभी कभी रोशनी कही कही शोर रौनके XX XX XX, XX XX XX-(12)",
	 answer: "कहींआगआगकहींधुआँधुआँ",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 12
},
{
	 clue: "आ भी जा आ भी जा X XXX, X X X-(7)",
	 answer: "ऐसुबहआभीजा",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 5,
	 starty: 17
},
{
	 clue: "यूँ शबनमी पहले नहीं थी चाँदनी XX X XXX XX-(8)",
	 answer: "चाँदवोभरमागया",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 3,
	 starty: 23
},
{
	 clue: "कभी तो नज़र मिलाओ XX X XXX XX-(8)",
	 answer: "कभीतोकरीबआओ",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 4,
	 starty: 22
},
{
	 clue: "आँखें खुली हो या हो बंद XXX XXX XX X-(9)",
	 answer: "दीदारउनकाहोताहै",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 1,
	 starty: 27
},
{
	 clue: "क्या आपको एहसास है XX XX X X XX X-(9)",
	 answer: "बातअबयेहीख़ासहै",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 9,
	 starty: 19
},
{
	 clue: "काश एक दिन ऐसा भी आए XX X XX XX XX XX-(11)",
	 answer: "वक़्तकापलपलथमजाए",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 6,
	 starty: 25
},
{
	 clue: "आओगे जब तुम ओ साजना XXX XX XXX-(8)",
	 answer: "अंगनाफूलखिलेंगे",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 2,
	 starty: 29
},
{
	 clue: "यूँ ही चला चल राही X X XX XX XX-(8)",
	 answer: "यूँहीचलाचलराही",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 31
},
{
	 clue: "ऐ नाजनीन सुनो ना XX XX X XX X X X-(10)",
	 answer: "हमेतुमपेहकतोदोना",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 3,
	 starty: 33
},
{
	 clue: "कितना प्यार करते हैं तुम्हें सनम XX XX X XX X X-(9)",
	 answer: "मेरेदिलसेपूछलोना",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 12,
	 starty: 25
},
{
	 clue: "ये तारा वो तारा हर तारा XX XX X XX XX-(9)",
	 answer: "देखोजिसेभीलगेप्यारा",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 4,
	 starty: 35
},
{
	 clue: "मेरे हाथ में तेरा हाथ हो सारी जन्नते मेरे साथ हो X X XX X XX X X XX, XX XX X X XX XX-(21)",
	 answer: "तूजोपासहोफिरक्यायेजहांतेरेप्यारमेंहोजाऊँफ़ना",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 2,
	 starty: 38
},
{
	 clue: "ये समा ये नज़ारे खो गये हैं XX XXX X XXX X XX X-(13)",
	 answer: "हमकसमसेतुम्हारेहोगयेहैं",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 8,
	 starty: 33
},
{
	 clue: "दिल मेरा हर बार ये सुनने को बेकरार है XX X XX X, XX X XX X-(12)",
	 answer: "कहोनाप्यारहैकहोनाप्यारहै",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 1,
	 starty: 42
},
{
	 clue: "दिलको तुमसे प्यार हुआ पहली बार हुआ XXX XX XX-(7)",
	 answer: "तुमसेप्यारहुआ",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 6,
	 starty: 38
},
{
	 clue: "आँखों में जिसके कोई तो ख्वाब है XX X XX X XX XXX X-(12)",
	 answer: "खुशहैवोहीजोथोडाबेताबहै",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 6,
	 starty: 40
},
{
	 clue: "लुकाछुपी बहुत हुई XXX X X X-(6)",
	 answer: "सामनेआजाना",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 12,
	 starty: 35
},
{
	 clue: "आजा माही मेरे आजा माही मेरे आजा माही मेरे आ X XX XX X XX XX X-(11)",
	 answer: "आधूपमलूँमैंतेरेहाथोंमें",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 4,
	 starty: 46
},
{
	 clue: "मैं कभी बतलाता नहीं XX XXX X XXX X X X-(12)",
	 answer: "परअंधेरेसेडरताहूँमैंमाँ",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 11,
	 starty: 41
},
{
	 clue: "आहिस्ता आहिस्ता आहिस्ता आहिस्ता XXX X X, XX X XX X-(11)",
	 answer: "निंदियातूआइनदोनैनोंमें",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 8,
	 starty: 47
},
{
	 clue: "तुमको भी है खबर मुझको भी है पता X XX X XX XX X XX-(11)",
	 answer: "होरहाहैजुदादोनोंकारास्ता",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 2,
	 starty: 54
},
{
	 clue: "तेरा मुस्कुराना फिर हँस के पास आना XX XXX XX XXX-(10)",
	 answer: "मुझेअपनानामबताना",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 4,
	 starty: 58
},
{
	 clue: "ऐ ज़िन्दगी ये लम्हा जी लेने दे XXX X XX XX X XX-(11)",
	 answer: "पहलेसेलिखाकुछभीनहीं",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 6,
	 starty: 58
},
{
	 clue: "रतिया कारी कारी रतिया रतिया अंधियारी रतिया XX XXX X XX X XXX X-(13)",
	 answer: "रातहमारीतोचाँदकीसहेलीहै",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 11,
	 starty: 54
},
{
	 clue: "सजदे में यूँही झुकता हूँ XX X X X X XXX X-(10)",
	 answer: "तुमपेहीआकेरुकताहूँ",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 9,
	 starty: 58
},
{
	 clue: "ये जो ज़िन्दगी की किताब है X XXX X X XXX X-(10)",
	 answer: "येकिताबभीक्याकिताबहै",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 2,
	 starty: 66
},
{
	 clue: "हमको हमी से चुरा लो XX X XX XX XX X-(10)",
	 answer: "दिलमेंकहींतुमछुपालो",
	 attempt: "", 
	 position: 31,
	 orientation: "across",
	 startx: 2,
	 starty: 68
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
