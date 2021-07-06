
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "कच्ची डोरियों डोरियों डोरियों से XX X XX X-(6)",
	 answer: "मैनुतूबांधले",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 5
},
{
	 clue: "किसे पूछूँ है ऐसा क्यों XXX X X XX X-(8)",
	 answer: "बेजुबांसायेजहांहै",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 4,
	 starty: 3
},
{
	 clue: "ज़रदोज़ी लम्हें ओढ़ के दिल XX XX XX XX X XX-(11)",
	 answer: "ग़मसारेपीछेछोड़केदिल",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 1,
	 starty: 9
},
{
	 clue: "तू आता है सीने में XX XX XX XXX X-(10)",
	 answer: "जबजबसाँसेभरतीहूँ",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 2,
	 starty: 8
},
{
	 clue: "ऐसी क्या चली हवा X X XX-(4)",
	 answer: "केलेगई",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 6,
	 starty: 4
},
{
	 clue: "तो क्या जुदा हुए XXX X XX XX X X-(10)",
	 answer: "मगरहैख़ुशीमिलेतोथे",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 1,
	 starty: 10
},
{
	 clue: "पल भर ठहर जाओ XX X XXX XX-(8)",
	 answer: "दिलयेसंभलजाए",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 1,
	 starty: 18
},
{
	 clue: "जगावे सारी रैना XXX X XX-(6)",
	 answer: "निगोड़ेदोनैना",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 7,
	 starty: 12
},
{
	 clue: "मन यह साहिबजी जाने है सब जी XX X XXX XXX-(9)",
	 answer: "फिरभीबनायेबहाने",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 3,
	 starty: 17
},
{
	 clue: "सानु एक पल चैन न आवे सजना तेरे बिना XX XX X XXXX XXX XX XX-(16)",
	 answer: "दिलजानेक्योंघबरावेसजनातेरेबिना",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 11,
	 starty: 14
},
{
	 clue: "मुझको बरसात बना लो XX XX XX XX X-(9)",
	 answer: "एकलंबीरातबनालो",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 1,
	 starty: 25
},
{
	 clue: "तुम मेरे हो इस पल मेरे हो XX XXX X XXX X XX-(12)",
	 answer: "कलशायदयेआलमनारहे",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 2,
	 starty: 25
},
{
	 clue: "तेरी बाँहों में मिली XX XXX X XX-(8)",
	 answer: "ऐसीराहतसीमुझे",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 6,
	 starty: 21
},
{
	 clue: "बड़ी धीरे जली रैना XX XX XX-(6)",
	 answer: "धुआँधुआँनैना",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 8,
	 starty: 20
},
{
	 clue: "केसरिया म्हारो बलमा पधारो म्हारी कंट्री मा रे XX XXX-(5)",
	 answer: "आओपधारो",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 2,
	 starty: 31
},
{
	 clue: "अपने करम की कर अदाएं XXXXXXXXXX-(10)",
	 answer: "यारा…यारा…यारा….",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 8,
	 starty: 27
},
{
	 clue: "ना वो अँखियाँ रूहानी कहीं X X XXX XXX XX-(10)",
	 answer: "नावोचेहरानूरानीकहीं",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 2,
	 starty: 34
},
{
	 clue: "तेरे बिन तेरे बिन XX XX XXX XX-(9)",
	 answer: "तेरेबिनामरनानहीं",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 11,
	 starty: 26
},
{
	 clue: "हम चीज़ हैं बड़े काम की यारम XX XX X XX X XX, XXX-(13)",
	 answer: "हमेंकामपेरखलोकभीयारम",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 5,
	 starty: 34
},
{
	 clue: "मुझे छोड़ दो मेरे हाल पे XX X XX, XX X-(8)",
	 answer: "जिंदाहूँयारकाफीहै",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 1,
	 starty: 39
},
{
	 clue: "रास्ते भागे पाँव से आगे XXX X XX, XX XX X XX-(13)",
	 answer: "ज़िन्दगीसेचलकुछऔरभीमाँगे",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 12,
	 starty: 34
},
{
	 clue: "कौन मेरा मेरा क्या तू लागे X X XX, XX X XX X XX-(12)",
	 answer: "क्योंतूबाँधेमनसेमनकेधागे",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 1,
	 starty: 46
},
{
	 clue: "तेरे संग यारा ख़ुशरंग बहारा X XX XXX X XX XXX-(12)",
	 answer: "तूरातदीवानीमैंज़र्दसितारा",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 2,
	 starty: 46
},
{
	 clue: "दिलों में तुम अपनी बेताबियाँ लेके चल रहे हो तो ज़िंदा हो तुम XXX X XX X XXXX XX XX XX X, X XX X XX-(24)",
	 answer: "नज़रमेंख्वाबोंकीबिजलियाँलेकेचलरहेहोतोज़िंदाहोतुम",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 6,
	 starty: 46
},
{
	 clue: "तुझे याद कर लिया है आयत की तरह XXX X X XX X XXXX X XXX-(16)",
	 answer: "कायमतूहोगयीहैरिवायतकीतरह",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 8,
	 starty: 44
},
{
	 clue: "नैना लगिया बारिशा X XX XX XXX X XX XX-(13)",
	 answer: "तेसुकेसुकेसपनेविपीजगये",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 10,
	 starty: 42
},
{
	 clue: "तेरी ही बोली बोलूंगी मैं XX X XX XXX X-(9)",
	 answer: "तेरीहीबानीगाउंगीमैं",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 4,
	 starty: 51
},
{
	 clue: "दिन परेशां है रात भारी है XXX X X XX X XX X-(11)",
	 answer: "ज़िन्दगीहैकेफिरभीप्यारीहै",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 2,
	 starty: 58
},
{
	 clue: "तुम जो एक पल को मुड़ जाते X XX XX XX XX-(9)",
	 answer: "क्यापतारस्तेजुड़जाते",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 3,
	 starty: 61
},
{
	 clue: "तू जो रूठा तो कौन हँसेगा X X XX X XX XXX-(10)",
	 answer: "तूजोछूटातोकौनरहेगा",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 2,
	 starty: 64
},
{
	 clue: "हीर हीर ना आखो अड़ियों X X XXX XX-(7)",
	 answer: "मैंतेसाहिबांहोई",
	 attempt: "", 
	 position: 31,
	 orientation: "across",
	 startx: 1,
	 starty: 67
},
{
	 clue: "क्यों ना बोले मोसे मोहन X X XX XX XXX X-(10)",
	 answer: "क्योंहैरूठेरूठेमोहनयूँ",
	 attempt: "", 
	 position: 32,
	 orientation: "down",
	 startx: 12,
	 starty: 57
},
{
	 clue: "हालएदिल हालएदिल XXX XX XX-(7)",
	 answer: "तुमसेकैसेकहूँ",
	 attempt: "", 
	 position: 33,
	 orientation: "across",
	 startx: 5,
	 starty: 69
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
