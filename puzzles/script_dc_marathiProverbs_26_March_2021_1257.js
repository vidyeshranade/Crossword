
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "नकटी धाकटी नणंद असली तर तीचे लग्न लवकर न झाल्या मुळे ञास व छळ होणारच-(30)",
	 answer: "एकवेळकळसोसूनविहीरउपसावीपणधाकलीनणंदनकटीनसावी",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 1,
	 starty: 1
},
{
	 clue: "एक काम नीट पूर्ण न करता आणखी कामे हाती घेऊन सगळी कामे अर्धवट ठेवणे. Making a mess of multiple jobs when tackled together.It’s fashionably called multitasking today.-(11)",
	 answer: "एकनाधडभाराभारचिंध्या",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 1
},
{
	 clue: "High hopes dashed by a torn blanket.  किती ही प्रयत्न केले तरी अपयशच मिळणे-(12)",
	 answer: "कसलेकायअन्फाटक्यातपाय",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 5
},
{
	 clue: "पेलवणार अथवा परवडणार नाही अशी वस्तू मिरवायला आणणे-(8)",
	 answer: "नाकापेक्षामोताजड",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 4,
	 starty: 4
},
{
	 clue: "काळी काळु बाई , हिरवी लाजू बाई , पांढरा आजोबा, बोडकी आत्या बाई ऊत्तर ?-(2)",
	 answer: "विडा",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 10
},
{
	 clue: "कितीही श्रम वा इलाज वा उपदेश केला तरी काही परीणाम नाही-(11)",
	 answer: "सारेउलथ्याघड्यावरपाणी",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 1,
	 starty: 15
},
{
	 clue: "देणारे असले तर घेणारे मिळणारच.  अती दानशूर पणा वाइट अथवा अपाञ दान ठरतो.  जर काही फायद्याचे आढळले, तर त्या गोष्टीचा फायदा घेणारी लोके लगेच जमतील. Where left over crumbs do remain, there at once will hungry ghosts gather-(14)",
	 answer: "टाकशीलशितेतरजमतीलभुते",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 4,
	 starty: 12
},
{
	 clue: "एखाद्या च्या श्रमाचा फायदा , शाबासकी, कौतुक दुसर्याने घेणे-(10)",
	 answer: "आयत्याबिळावरनागोबा",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 12,
	 starty: 4
},
{
	 clue: "एखादी गोष्ट दुरून छान दिसत असली तरी जवळून पाहिल्यावर तिचे दोष उघडकीस येतात-(6)",
	 answer: "द्रुष्टीआडस्रुष्टी",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 6,
	 starty: 10
},
{
	 clue: "मोठ्या प्रतिष्ठित व्यक्ति बरोबर छोट्या व्यक्ति ला फायदा मिळणे-(12)",
	 answer: "गाडग्याबरोबरनळाचीयाञा",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 9,
	 starty: 9
},
{
	 clue: "घरचे पण आसरा देईना अन बाहेरून पण मदत मिळेना-(12)",
	 answer: "तातसाहीनाअनलग्नहोईना",
	 attempt: "", 
	 position: 10,
	 orientation: "down",
	 startx: 6,
	 starty: 19
},
{
	 clue: "साता समुद्रा पलि कडे रामा ने लावल्या केळी , हलतात पण मोडत नाहीत  ऊत्तर ?-(5)",
	 answer: "हाताचीबोटे",
	 attempt: "", 
	 position: 11,
	 orientation: "across",
	 startx: 7,
	 starty: 18
},
{
	 clue: "रोजच जो दु:ख करत बसतो त्याला फार काळ लोकांची सहानुभूती मिळत नाही-(10)",
	 answer: "रोजमरेत्यालाकोणरडे",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 3,
	 starty: 26
},
{
	 clue: "चांगल्या प्रसन्न चित्त व्यक्ति ला देव सुखात ठेवतो-(12)",
	 answer: "साखरेचेखाईत्यालादेवदेई",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 1,
	 starty: 29
},
{
	 clue: "कोणत्याही गोष्टीचा अतिरेक करू नये-(6)",
	 answer: "अतीतिथेमाती",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 6,
	 starty: 24
},
{
	 clue: "आलेल्या पाहुण्याच्या हातून अवघड काम करून घेणे-(13)",
	 answer: "आलाभेटीलाअनधरलावेठीला",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 8,
	 starty: 28
},
{
	 clue: "O crocodile, your back is so soft and tender! Please ferry me across the river  Flattering and praising even the bad points of someone may be the only way to get your work done.  ज्च्याच्या कडून काम करून घ्यायचे असेल त्याच्या दोषां कडे दुर्लक्ष करून खोटी स्तुती करणे-(13)",
	 answer: "सुसरबाईतुझीपाठकितीमऊ",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 12,
	 starty: 25
},
{
	 clue: "इलाज न करता परीस्थितीत सुधारणा होणे-(10)",
	 answer: "सुंठीवाचूनखोकलागेला",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 1,
	 starty: 40
},
{
	 clue: "Big  house with  hollow wooden beams.  A big rich house may really just have outward show and in debt to its last penny.  मोठा बढेजाव दाखवणारे आतुन कफल्लक असतात-(10)",
	 answer: "मोठावाडाअन्पोकळवासा",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 3,
	 starty: 38
},
{
	 clue: "आळशी खादाड लबाड  स्वार्थी व्रुत्तिचा व्यक्ति. Of no use but  a burden on earth-(12)",
	 answer: "कामनाधामअनभुईलाभार",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 10,
	 starty: 31
},
{
	 clue: "इतके वाटोळे की त्यातून सुटका कठिण-(7)",
	 answer: "अष्टकोनीवाटोळे",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 3,
	 starty: 42
},
{
	 clue: "स्वत: ची पत सर्वां समोर उघड केली नाही तर अधिक मान मिळेल-(10)",
	 answer: "झाकलीमुठसव्वालाखाची",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 2,
	 starty: 44
},
{
	 clue: "प्रत्येकाला आपल्या योग्यते प्रमाणे फळ अथवा स्थान मिळते-(8)",
	 answer: "जसाराजातशीप्रजा",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 2,
	 starty: 47
},
{
	 clue: "आळशी खादाड लबाड  स्वार्थी व्रुत्तिचा व्यक्ति. Of no use but  a burden on earth-(12)",
	 answer: "खायलाकाळअनभुईलाभार",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 10,
	 starty: 44
},
{
	 clue: "लाल पालखी हिरवा दांडा, आत मध्ये बसल्या बोडक्या रांडा ऊत्तर ?-(9)",
	 answer: "लालमिरचीअनबिया",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 4,
	 starty: 50
},
{
	 clue: "आपले दु:ख आपल्या लाच माहीत , दुसर्याना त्याची तीव्रता कळत नाही-(8)",
	 answer: "ज्याचेजळेत्यालाकळे",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 5,
	 starty: 53
},
{
	 clue: "राखणदाराला देखील राखत असलेल्या गोष्टीचा मोह होतो.  One who guards the pond will definitely drink from it.  You can protect everything from outsiders but not from its very watchmen.-(9)",
	 answer: "तळेराखीतोपाणीचाखी",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 8,
	 starty: 52
},
{
	 clue: "याचकाला मदत करायची सोडून उलट ञास देणे वा अपमानीत करणे-(11)",
	 answer: "भिकनकोपणकुञाआवर",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 4,
	 starty: 57
},
{
	 clue: "एवढेसे पोर, पण घर राखण्यात थोर ऊत्तर ?-(3)",
	 answer: "कुलुप",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 2,
	 starty: 61
},
{
	 clue: "एवढीशी बीबी चुल्या शी उभी ऊत्तर ?-(3)",
	 answer: "फूंकणी",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 6,
	 starty: 58
},
{
	 clue: "चंद्र सुर्य शेजारी , पण भेट नाही संसारी ऊत्तर ?-(2)",
	 answer: "डोळे",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 12,
	 starty: 52
},
{
	 clue: "काळी काळु बाई , हिरवी लाजू बाई , पांढरा आजोबा, बोडकी आत्या बाई ऊत्तर ?-(4)",
	 answer: "पानपट्टी",
	 attempt: "", 
	 position: 31,
	 orientation: "across",
	 startx: 8,
	 starty: 57
},
{
	 clue: "Big buttocks sway the world  Explanation self censored.-(9)",
	 answer: "मोठेकुलेअन्जगभूले",
	 attempt: "", 
	 position: 32,
	 orientation: "across",
	 startx: 2,
	 starty: 63
},
{
	 clue: "कितीही नालायक असली तरी आपल्या जवळच्या  नात्यांना चांगलेच म्हणणे-(14)",
	 answer: "पदरातपडलेअनपावनझाले",
	 attempt: "", 
	 position: 33,
	 orientation: "down",
	 startx: 10,
	 starty: 57
},
{
	 clue: "काळु बाई : कात, लाजू बाई : पान, आजोबा : चुना, आत्या बाई ?-(3)",
	 answer: "सुपारी",
	 attempt: "", 
	 position: 34,
	 orientation: "across",
	 startx: 9,
	 starty: 66
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
