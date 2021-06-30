
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "दिल अपना और प्रीत पराई XX X X X XX XXX-(10)",
	 answer: "किसनेहैयेरीतबनाई",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 6,
	 starty: 2
},
{
	 clue: "दुनिया की सैर कर लो XX X XX XXXX-(9)",
	 answer: "इन्सांकेदोस्तबनकर",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 4,
	 starty: 8
},
{
	 clue: "सुर ना सजे क्या गाऊँ मैं XX X XX XXX XX-(10)",
	 answer: "सुरकेबिनाजीवनसूना",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 2,
	 starty: 10
},
{
	 clue: "साथ हो तुम और रात जवां XX XX XX XX XX-(10)",
	 answer: "नींदकिसेअबचैनकहाँ",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 9,
	 starty: 3
},
{
	 clue: "अब के बरस भेज भैया को बाबुल XXX X XX XXX X-(10)",
	 answer: "सावनमेंलीजोबुलायरे",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 2,
	 starty: 14
},
{
	 clue: "ओ बिछुआ हाय रे XXX XX XX XXXX X XX X XXXX, XX X-(22)",
	 answer: "पीपलछैंयाबैठीपलभरहोभरकेगगरियाहायरे",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 6,
	 starty: 16
},
{
	 clue: "झूमती चली हवा याद आ गया कोई XXX XXX XX X XX XX XX XX-(17)",
	 answer: "बुझतीबुझतीयादकोफिरजलागयाकोई",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 8,
	 starty: 14
},
{
	 clue: "प्यार हुआ इकरार हुआ है XX X XX X XXX X XX-(12)",
	 answer: "प्यारसेफिरक्योंडरताहैदिल",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 12,
	 starty: 10
},
{
	 clue: "वो एक निग़ाह क्या मिली तबीयतें मचल गईं XX X XXX XX, XXX XX XX XX-(17)",
	 answer: "ज़रावोमुस्कुरादिएशमाएँजैसेजलगईं",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 4,
	 starty: 22
},
{
	 clue: "याद आई आधी रात को कल रात की तौबा XX XXX X XXX XX XX X XX-(16)",
	 answer: "दिलपूछताहैझूमकेकिसबातकीतौबा",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 12,
	 starty: 20
},
{
	 clue: "मेरा गीत अधूरा है XX XXX XX XX X-(10)",
	 answer: "कोईबिखरेतारसजादे",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 8,
	 starty: 29
},
{
	 clue: "जा जा रे जा बालमवा XXX X XX XX XXX-(11)",
	 answer: "सौतनकेसंगरातबिताई",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 10,
	 starty: 29
},
{
	 clue: "रात ने क्याक्या ख़्वाब दिखाए XX XX X XX XXX-(10)",
	 answer: "रंगभरेसौजालबिछाए",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 3,
	 starty: 37
},
{
	 clue: "हाये रे वो दिन क्यों न आये X X X XX XX XX-(9)",
	 answer: "जाजाकेऋतुलौटआये",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 4,
	 starty: 39
},
{
	 clue: "साँझ ढली दिल की लगी थक चली पुकार के XX, XX, X X X-(7)",
	 answer: "आजाआजाआभीजा",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 3,
	 starty: 40
},
{
	 clue: "बहार बनके वो मुस्कुराए हमारे गुलशन में XX-X-XX X X XX X X-(11)",
	 answer: "बादएसबातूनआएतोक्या",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 12,
	 starty: 35
},
{
	 clue: "अलबेले दिन प्यारे मेरे बिछड़े साथ सहारे हाय कहाँ गये XX X XXXX, XX XX XX X XX, XX XX XX-(22)",
	 answer: "आँखोंकेउजियारेमेरीसुनीरातकेतारेहायकहाँगये",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 7,
	 starty: 42
},
{
	 clue: "नैन मिले चैन कहाँ दिल है वही तू है जहाँ X X XX XX XXX-(9)",
	 answer: "येक्याकियासैय्यासाँवरे",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 4,
	 starty: 47
},
{
	 clue: "मैं तो कब से खड़ी इस पार X XXX XX XX XX XXX-(13)",
	 answer: "येअँखियाँथकगयीपंथनिहार",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 4,
	 starty: 47
},
{
	 clue: "जोगी जब से तू आया मेरे द्वारे XX XX XX XX XXX-(11)",
	 answer: "मेरेरंगगयेसाँझसकारे",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 10,
	 starty: 41
},
{
	 clue: "अपनी तो हर आह एक तूफ़ान है X XX X XX XX XXXX X-(13)",
	 answer: "क्याकरेवोजानकरअनजानहै",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 12,
	 starty: 45
},
{
	 clue: "आ अब लौट चले XX XXX, XX XXX-(10)",
	 answer: "नैनबिछायेबाहेंपसारे",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 3,
	 starty: 63
},
{
	 clue: "जा जा जा मेरे बचपन XX X X XX XX-(8)",
	 answer: "कहींजाकेछुपनादाँ",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 10,
	 starty: 58
},
{
	 clue: "मेरा दिल अब तेरा ओ साजना XX XX XX, X XXX-(10)",
	 answer: "कैसाजादूफेराओसाजना",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 3,
	 starty: 66
},
{
	 clue: "तुम जो हमारे मीत ना होते XX X XX XX X XX-(10)",
	 answer: "गीतयेमेरेगीतनाहोते",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 12,
	 starty: 59
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
