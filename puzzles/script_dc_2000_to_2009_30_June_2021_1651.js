
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
	 starty: 3
},
{
	 clue: "शहनाइयों की सदा कह रही है XX X XXXX XX X XX X-(13)",
	 answer: "ख़ुशीकीमुबारकघडीआगईहै",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 5,
	 starty: 2
},
{
	 clue: "खाली है तेरे बिना दोनों अँखियाँ तुम गए कहाँ? XXX X XX X XX XX XXXX XXX X XXX XX-(24)",
	 answer: "अँखियोंकेआलोंमेंतेरेबिनारातभरजलतीहैंबातियाँयहाँ",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 3,
	 starty: 7
},
{
	 clue: "आग कभी कभी रोशनी कही कही शोर रौनके XX XX XX, XX XX XX-(12)",
	 answer: "कहींआगआगकहींधुआँधुआँ",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 11
},
{
	 clue: "छलका छलका रे कलसी का पानी XXXXXX XXX XXXX X XX X XX-(13)",
	 answer: "छलकाछलकारेओआँखनामानी",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 10,
	 starty: 3
},
{
	 clue: "और आहिस्ता कीजिये बातें XXXX XX XX XX XX-(12)",
	 answer: "धड़कनेंकोईसुनरहाहोगा",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 7,
	 starty: 9
},
{
	 clue: "साँवरिया साँवरिया मैं तो हुई बाँवरिया XX XX XX XX, XXXX X-(13)",
	 answer: "तूनेमनमोहलियासाँवरियाहो",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 1,
	 starty: 16
},
{
	 clue: "दो पल रुका ख्वाबों का कारवां XX XX XX XX, XX XX XX XX-(16)",
	 answer: "औरफिरचलदिएतुमकहाँहमकहाँ",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 12,
	 starty: 15
},
{
	 clue: "तुमको पाया है तो जैसे खोया हूँ XXX XX X X XXX X XX-(13)",
	 answer: "कहनाचाहूँभीतोतुमसेक्याकहूँ",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 10,
	 starty: 18
},
{
	 clue: "आ भी जा आ भी जा X XXX, X X X-(7)",
	 answer: "ऐसुबहआभीजा",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 5,
	 starty: 23
},
{
	 clue: "मैं चाँद निगल गयी X X X XX XXX XX XX X-(13)",
	 answer: "होजीमैंचाँदनिगलगयीदैय्यारे",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 1,
	 starty: 28
},
{
	 clue: "जानम देख लो मिट गयी दूरियाँ X XX X, XX X, XX X XX-(12)",
	 answer: "मैंयहाँहूँयहाँहूँयहाँहूँयहाँ",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 1,
	 starty: 30
},
{
	 clue: "अगर मैं कहूँ मुझे तुमसे मोहोब्बत है XX XX XX XXX X, X X XXX-(15)",
	 answer: "मेरीबसयहीचाहतहैतोक्याकहोगी",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 5,
	 starty: 26
},
{
	 clue: "तुम हमारे नहीं तो क्या ग़म है XX XXX X X XX X XX X-(13)",
	 answer: "हमतुम्हारेतोहैंयहक्याकमहै",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 8,
	 starty: 23
},
{
	 clue: "कुछ कम रोशन है रौशनी XX XX XX X XXX-(10)",
	 answer: "कुछकमगीलींहैंबारिशें",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 3,
	 starty: 38
},
{
	 clue: "कुछ पाने की हो आस आस XX XXX X X XX XX-(11)",
	 answer: "कुछअरमांहोजोख़ासख़ास",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 3,
	 starty: 38
},
{
	 clue: "लुकाछुपी बहुत हुई XXX X X X-(6)",
	 answer: "सामनेआजाना",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 7,
	 starty: 34
},
{
	 clue: "भीड़ में तनहाई में XX X XXXX X-(8)",
	 answer: "प्यासकीगहराईमें",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 2,
	 starty: 46
},
{
	 clue: "चंदा चमके चमचम XX XXX XX-(7)",
	 answer: "चीखेचौकन्नाचोर",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 6,
	 starty: 42
},
{
	 clue: "लहराती हुईं राहें खोले हुए हैं बाहें X XX X XX X XX-(9)",
	 answer: "येहमआगएहैंकहाँ",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 6,
	 starty: 45
},
{
	 clue: "ये हौसला कैसे झुके X XXX XX XX-(8)",
	 answer: "येआरज़ूकैसेरुके",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 5,
	 starty: 48
},
{
	 clue: "ऐ मसक्कली मसक्कली XX XXX XX XXX XX-(12)",
	 answer: "उड़मटककलीमटककली",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 1,
	 starty: 52
},
{
	 clue: "पंछी नदिया पवन के झोकें कोई सरहद ना इन्हे रोके XXXX XXX X XX X-(11)",
	 answer: "सरहदेंइन्सानोंकेलिएहैं",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 12,
	 starty: 41
},
{
	 clue: "है लिए हथियार दुश्मन XX X XX XXX-(8)",
	 answer: "ताकमेंबैठाउधर",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 1,
	 starty: 55
},
{
	 clue: "दिलको तुमसे प्यार हुआ पहली बार हुआ XXX XX XX-(7)",
	 answer: "तुमसेप्यारहुआ",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 8,
	 starty: 51
},
{
	 clue: "ऐ नाजनीन सुनो ना XX XX X XX X X X-(10)",
	 answer: "हमेतुमपेहकतोदोना",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 1,
	 starty: 58
},
{
	 clue: "ओ रे पिया ओ रे पिया XXX XX X XX XXX X-(12)",
	 answer: "उड़नेलगाक्योंमनबावलारे",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 6,
	 starty: 55
},
{
	 clue: "साथिया साथिया XXX, XXX, XX XX XX-(12)",
	 answer: "मद्धममद्धमतेरीगीलीहँसी",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 1,
	 starty: 61
},
{
	 clue: "बहता है मन कहीं XX XXX XX-(7)",
	 answer: "कहाँजानतीनहीं",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 11,
	 starty: 52
},
{
	 clue: "तौबा तुम्हारे ये इशारे XX X XXX X XXX-(10)",
	 answer: "हमतोदीवानेहैंतुम्हारे",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 4,
	 starty: 60
},
{
	 clue: "मुझसे बिछड़ के खुश रहते हो XX XXX XX X XX X-(11)",
	 answer: "मेरीतरहतुमभीझूठेहो",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 8,
	 starty: 60
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
