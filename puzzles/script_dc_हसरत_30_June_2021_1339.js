
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "ऐ बादल झूम के चल XX X XX X XX-(8)",
	 answer: "ज़मींकोचूमकेचल",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 4,
	 starty: 4
},
{
	 clue: "तुम्हें और क्या दूँ मैं दिल के सिवाय XXX XXX XXX XX XX-(13)",
	 answer: "तुमकोहमारीउमरलगजाए",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 3,
	 starty: 8
},
{
	 clue: "याद किया दिल ने कहाँ हो तुम XXX XXX X, XX X XX-(12)",
	 answer: "झूमतीबहारहैकहाँहोतुम",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 8,
	 starty: 3
},
{
	 clue: "जाना तुम्हारे प्यार में XXX XX XX X-(8)",
	 answer: "शैतानबनगयाहूँ",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 5,
	 starty: 6
},
{
	 clue: "ओ मोरा नादान बालमा न जाने जी की बात X XX X XX X X XX-(10)",
	 answer: "नजानेकीमानेजीकीबात",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 6,
	 starty: 9
},
{
	 clue: "मेरी मोहब्बत पाक मोहब्बत XX XX X XX XXXX-(11)",
	 answer: "औरजहाँकीखांकमोहब्बत",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 2,
	 starty: 16
},
{
	 clue: "एहसान तेरा होगा मुझ पर XX XXX X X XXX X-(11)",
	 answer: "दिलचाहताहैवोकहनेदो",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 10,
	 starty: 8
},
{
	 clue: "हम छोड़ चले हैं महफ़िल को XX XX XX X XX XX-(11)",
	 answer: "यादआयेकभीतोमतरोना",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 12,
	 starty: 8
},
{
	 clue: "फ़ल्सफ़ा प्यार का तुम क्या जानो XXX XX XX X XX-(10)",
	 answer: "तुमनेकभीप्यारनाकिया",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 8,
	 starty: 13
},
{
	 clue: "जापान लव इन टोकियो X XX XX XXX XXX X-(12)",
	 answer: "लेगईदिलगुड़ियाजापानकी",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 1,
	 starty: 22
},
{
	 clue: "पंख होते तो उड़ आती रे रसिया ओ जालिमा XX XX X XX XXXX X-(12)",
	 answer: "तुझेदिलकादाग़दिखलातीरे",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 5,
	 starty: 19
},
{
	 clue: "दिन सारा गुज़ारा तोरे अंगना XX XX X XX XX XXX-(12)",
	 answer: "अबजानेदेमुझेमोरेसजना",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 1,
	 starty: 24
},
{
	 clue: "दाग़ न लग जाए कहीं दाग़ न लग जाए XX XX X XXX XXX-(11)",
	 answer: "प्यारकियातोकरकेनिभाना",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 3,
	 starty: 24
},
{
	 clue: "सुनते थे नाम हम जिनका बहार से XX X XX XX XX XX X-(12)",
	 answer: "देखातोडोलाजियाझूमझूमके",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 28
},
{
	 clue: "मन गाए वो तराना XX XX X X XX-(8)",
	 answer: "जिसेसुनकेआजाना",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 11,
	 starty: 19
},
{
	 clue: "यहाँ कोई नहीं तेरा मेरे सिवा XXX X XXX XX XX-(11)",
	 answer: "कहतीहैंझूमतीगातीहवा",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 8,
	 starty: 24
},
{
	 clue: "गर तुम भूला ना दोगे सपने ये सच ही होंगे XX XX XX X XX-(9)",
	 answer: "हमतुमजुदानाहोंगे",
	 attempt: "", 
	 position: 17,
	 orientation: "down",
	 startx: 5,
	 starty: 33
},
{
	 clue: "आजा सनम XXX XXX X XX XX XX X XXX X X X XXX XXX-(26)",
	 answer: "मधुरचाँदनीमेंहमतुममिलेतोवीरानेमेंभीआजाएगीबहार",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 11,
	 starty: 28
},
{
	 clue: "काश्मिर की कली हूँ मैं XX X X XX XXX-(9)",
	 answer: "मुझसेनारुठोबाबूजी",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 2,
	 starty: 39
},
{
	 clue: "जिया बेकरार है छाई बहार है XX XX XXX, XX XXXX X-(14)",
	 answer: "आजामोरेबालमातेराइंतजारहै",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 8,
	 starty: 35
},
{
	 clue: "इब्तिदाएइश्क़ में हम सारी रात जागे XXX XX X XX XX-(10)",
	 answer: "अल्लाहजानेक्याहोगाआगे",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 5,
	 starty: 42
},
{
	 clue: "उनकी पहली नज़र क्या असर कर गई XXX X X XX X XX XX-(12)",
	 answer: "मुझकोक्याहोगयाहैखुदाजाने",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 1,
	 starty: 48
},
{
	 clue: "समा है सुहाना सुहाना नशे में जहां है XXX XXX XXX X XX X-(13)",
	 answer: "किसीकोकिसीकीखबरहीकहाँहै",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 3,
	 starty: 46
},
{
	 clue: "तुम तो प्यार हो सजना XX XX X XX XX X XX-(12)",
	 answer: "मुझेतुमसेप्याराऔरनाकोई",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 1,
	 starty: 48
},
{
	 clue: "तेरी प्यारी प्यारी सूरत को किसीकी नज़र ना लगे XX-X-XXX-(6)",
	 answer: "चश्मएबद्दूर",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 6,
	 starty: 53
},
{
	 clue: "प्यार आँखों से जताया तो बुरा मान गए XX-X-XX XXX XXX X XX XX XX-(18)",
	 answer: "हालएदिलहमनेसुनायातोबुरामानगए",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 8,
	 starty: 51
},
{
	 clue: "मेरी मोहोब्बत जवाँ रहेगी XX XX X, XX XXX-(10)",
	 answer: "सदारहीहैसदारहेगी",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 3,
	 starty: 60
},
{
	 clue: "अजहूँ न आए बालमा सावन बिता जाए हाए रे XX X XXXX XX X XX-(12)",
	 answer: "नींदभीअंखियनद्वारनाआए",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 6,
	 starty: 59
},
{
	 clue: "मेरी आँखों में बस गया कोई रे XX XX X XX X X XX-(11)",
	 answer: "मोहेनींदनाआएमैंकाकरूँ",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 2,
	 starty: 68
},
{
	 clue: "झूमता मौसम मस्त महीना XX X XX XX XXX-(10)",
	 answer: "चांदसीगोरीएकहसीना",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 1,
	 starty: 70
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
