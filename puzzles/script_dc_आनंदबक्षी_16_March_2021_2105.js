// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "जब हम जवां होंगे जाने कहाँ होंगे-(22)",
	 answer: "लेकिनजहाँहोंगेवहाँफ़र्यादकरेंगेतुझेयादकरेंगे",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 1,
	 starty: 1
},
{
	 clue: "माँझी नैया ढूँढे किनारा-(15)",
	 answer: "किसीनाकिसीकीखोजमेंहैयेजगसारा",
	 attempt: "", 
	 position: 2,
	 orientation: "down",
	 startx: 2,
	 starty: 1
},
{
	 clue: "हे काल के पंजे से माता बचाओ-(8)",
	 answer: "जयमाँअष्टभवानी",
	 attempt: "", 
	 position: 3,
	 orientation: "across",
	 startx: 2,
	 starty: 8
},
{
	 clue: "तू प्यार तू प्रीत तू चाँद तू रात-(19)",
	 answer: "जीनामरनासाथतेरामेराजुदाहोनामुश्किलहै",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 6,
	 starty: 5
},
{
	 clue: "ये जवानी है दीवानी हा मेरी रानी रुक जाओ रानी-(18)",
	 answer: "देखज़रापीछेमुडकेचलीकहाँऐसेउड़के",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 11,
	 starty: 3
},
{
	 clue: "मेरा परदेसी ना आया-(21)",
	 answer: "सबकेमनकेमीतमिलेहैंबागोंमेंफिरफूलखिलेहैं",
	 attempt: "", 
	 position: 6,
	 orientation: "across",
	 startx: 5,
	 starty: 12
},
{
	 clue: "मेरे दिल से सितमगर तू ने अच्छी दिल्लगी की है-(17)",
	 answer: "केबनकेदोस्तअपनेदोस्तोंसेदुश्मनीकीहै",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 6,
	 starty: 11
},
{
	 clue: "कोशिश कर के देख ले दरिया सारे नदिया सारी-(18)",
	 answer: "दिलकीलगीनहींबुझतीबुझतीहरचिंगारी",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 4,
	 starty: 14
},
{
	 clue: "कल की हसीं मुलाक़ात के लिये आज रात के लिये-(18)",
	 answer: "हमतुमजुदाहोजातेहैंअच्छाचलोसोजातेहैं",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 8,
	 starty: 11
},
{
	 clue: "इतना तो याद है मुझे के उनसे मुलाक़ात हुई-(16)",
	 answer: "बादमेंजानेक्याहुआनाजानेक्याबातहुई",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 12,
	 starty: 7
},
{
	 clue: "मेरे नैना सावन भादो फिर भी मेरा मन प्यासा-(12)",
	 answer: "ऐदिलदीवानेखेलहैक्याजाने",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 2,
	 starty: 18
},
{
	 clue: "हम तो तेरे आशिक़ हैं सदियों पुराने-(10)",
	 answer: "चाहेतूमानेचाहेनामाने",
	 attempt: "", 
	 position: 12,
	 orientation: "across",
	 startx: 10,
	 starty: 10
},
{
	 clue: "किसी राह में किसी मोड़ पर-(26)",
	 answer: "कहींचलनादेनातूछोड़करमेरेहमसफ़रमेरेहमसफ़र",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 20,
	 starty: 1
},
{
	 clue: "तू कितनी अच्छी है-(7)",
	 answer: "तूकितनीभोलीहै",
	 attempt: "", 
	 position: 14,
	 orientation: "down",
	 startx: 12,
	 starty: 10
},
{
	 clue: "मैं तेरे प्यार में पागल ऐसे घूमता हूँ-(18)",
	 answer: "जैसेमैंकोईप्यासाबादलबरखाकोढूंढताहूँ",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 10,
	 starty: 15
},
{
	 clue: "सुन री पवन पवन पुरवैया-(21)",
	 answer: "मैंहूँअकेलीअलबेलीतूसहेलीमेरीबनजासाथियाँ",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 10,
	 starty: 17
},
{
	 clue: "हम तुम युग युग से ये गीत मिलन के गाते रहे हैं गाते रहेंगे-(25)",
	 answer: "हमतुमजगमेंजीवनसाथीबनकेआतेरहेहैंआतेरहेंगे",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 27,
	 starty: 1
},
{
	 clue: "कुछ तो लोग कहेंगे लोगों का काम है कहना-(18)",
	 answer: "छोडोबेकारकीबातोंमेंकहींबीतनाजाएरैना",
	 attempt: "", 
	 position: 18,
	 orientation: "across",
	 startx: 20,
	 starty: 9
},
{
	 clue: "कुछ कहता है ये सावन-(5)",
	 answer: "क्याकहताहै",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 2,
	 starty: 27
},
{
	 clue: "मैं एक चोर तू मेरी रानी-(8)",
	 answer: "चोरीचोरीलेचलामैं",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 26,
	 starty: 5
},
{
	 clue: "सुहानी चाँदनी रातें हमें सोने नहीं देती-(16)",
	 answer: "तुम्हारेप्यारकीबातेंहमेंसोनेनहींदेती",
	 attempt: "", 
	 position: 21,
	 orientation: "across",
	 startx: 18,
	 starty: 14
},
{
	 clue: "चिट्ठी ना कोई संदेस जाने वो कौन सा देस-(8)",
	 answer: "जहाँतुमचलेगये",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 31,
	 starty: 1
},
{
	 clue: "चिट्ठी ना कोई संदेस जाने वो कौन सा देस-(8)",
	 answer: "जहाँतुमचलेगये",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 31,
	 starty: 1
},
{
	 clue: "गुलाबी आँखे जो तेरी देखी शराबी ये दिल हो गया-(21)",
	 answer: "संभालोमुझकोओमेरेयारोंसंभलनामुश्किलहोगया",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 12,
	 starty: 21
},
{
	 clue: "चुपके चुपके चल री पुरवईया-(6)",
	 answer: "बाँसुरीबजाये",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 2,
	 starty: 31
},
{
	 clue: "मेरे ख़्वाबों में जो आए-(8)",
	 answer: "आकेमुझेछेडजाए",
	 attempt: "", 
	 position: 25,
	 orientation: "down",
	 startx: 15,
	 starty: 19
},
{
	 clue: "मेहरबानों कदरदानों दोस्तों यारों-(8)",
	 answer: "अरेखेलदेखोखेल",
	 attempt: "", 
	 position: 26,
	 orientation: "across",
	 startx: 1,
	 starty: 33
},
{
	 clue: "ऐसे ना मुझे तुम देखो सीने से लगा लूँगा-(18)",
	 answer: "तुमकोमैंचुरालूँगातुमसेदिलमेंछुपालूँगा",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 17,
	 starty: 19
},
{
	 clue: "टूटके दिल के टुकड़े टुकड़े हो गए मेरे सीने में-(17)",
	 answer: "आगलेलगकेमरजाएंक्यारखाहैजीनेमें",
	 attempt: "", 
	 position: 28,
	 orientation: "across",
	 startx: 30,
	 starty: 7
},
{
	 clue: "दम मारो दम  मिट जाए गम-(15)",
	 answer: "बोलोसुबहशामहरेकृष्णाहरेराम",
	 attempt: "", 
	 position: 29,
	 orientation: "down",
	 startx: 2,
	 starty: 35
},
{
	 clue: "चंदा को ढूँढने सभी तारे निकल पड़े-(16)",
	 answer: "गलियोंमेंवोनसिबकेमारेनिकलपड़े",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 34,
	 starty: 4
},
{
	 clue: "हमें बस ये पता है वो बहोत ही खूबसूरत है-(18)",
	 answer: "लिफ़ाफ़ेकेलिएलेकिनपतेकीभीजरुरतहै",
	 attempt: "", 
	 position: 31,
	 orientation: "down",
	 startx: 35,
	 starty: 4
},
{
	 clue: "हवा के साथ साथ घटा के संग संग ओ साथी चल-(18)",
	 answer: "मुझेलेकेसाथचलतूयूँहीदिनरातचलतू",
	 attempt: "", 
	 position: 32,
	 orientation: "down",
	 startx: 12,
	 starty: 27
},
{
	 clue: "सुनो सजना पपीहे ने कहा सब से पुकार के-(19)",
	 answer: "संभलजाओचमनवालोंकेआयेदिनबहारके",
	 attempt: "", 
	 position: 33,
	 orientation: "down",
	 startx: 8,
	 starty: 31
},
{
	 clue: "तुमको भी तो ऐसा ही कुछ-(8)",
	 answer: "होताहोगाओसजना",
	 attempt: "", 
	 position: 34,
	 orientation: "across",
	 startx: 4,
	 starty: 35
},
{
	 clue: "मेरे गीतों में मेरी कहानियाँ हैं-(17)",
	 answer: "कलियोंकाबचपनहैफूलोंकीजवानियाँहैं",
	 attempt: "", 
	 position: 35,
	 orientation: "across",
	 startx: 28,
	 starty: 12
},
{
	 clue: "अकेला गया था मैं  हाँ मैं न आया अकेला-(15)",
	 answer: "मेरेसंगसंगआयातेरीयादोंकामेला",
	 attempt: "", 
	 position: 36,
	 orientation: "down",
	 startx: 23,
	 starty: 17
},
{
	 clue: "आओ झूमें गाएं-(8)",
	 answer: "मिलकेधूममचाएं",
	 attempt: "", 
	 position: 37,
	 orientation: "across",
	 startx: 4,
	 starty: 37
},
{
	 clue: "मैंने पूछा चाँद से के देखा है कहीं मेरे यार सा हसीन-(18)",
	 answer: "चाँदनेकहाचाँदनीकीकसमनहींनहींनहीं",
	 attempt: "", 
	 position: 38,
	 orientation: "down",
	 startx: 15,
	 starty: 27
},
{
	 clue: "ये दिल ये दिल ये दिल-(6)",
	 answer: "येदिलदीवाना",
	 attempt: "", 
	 position: 39,
	 orientation: "across",
	 startx: 4,
	 starty: 39
},
{
	 clue: "कोई सहरी बाबू-(10)",
	 answer: "दिललहरीबाबूहायरे",
	 attempt: "", 
	 position: 40,
	 orientation: "down",
	 startx: 25,
	 starty: 19
},
{
	 clue: "ज़रा सा झूम लूँ मैं-(7)",
	 answer: "अरेनारेनारेना",
	 attempt: "", 
	 position: 41,
	 orientation: "across",
	 startx: 1,
	 starty: 43
},
{
	 clue: "ऐ काश किसी दीवाने को हम से भी मोहब्बत हो जाये-(22)",
	 answer: "हमलूटजायेदिलखोजायेबसआजकयामतहोजाये",
	 attempt: "", 
	 position: 42,
	 orientation: "down",
	 startx: 19,
	 starty: 27
},
{
	 clue: "तुझे देखा तो ये जाना सनम-(11)",
	 answer: "प्यारहोताहैदीवानासनम",
	 attempt: "", 
	 position: 43,
	 orientation: "down",
	 startx: 41,
	 starty: 6
},
{
	 clue: "नफ़रत की दुनिया को छोड़ के-(16)",
	 answer: "प्यारकीदुनियामेंखुशरहनामेरेयार",
	 attempt: "", 
	 position: 44,
	 orientation: "down",
	 startx: 39,
	 starty: 10
},
{
	 clue: "ज़िन्दगी इम्तिहान लेती है-(8)",
	 answer: "लोगोंकीजानलेतीहै",
	 attempt: "", 
	 position: 45,
	 orientation: "across",
	 startx: 4,
	 starty: 45
},
{
	 clue: "तुम साथ हो जब अपने दुनिया को दिखा देंगे-(15)",
	 answer: "हममौतकोजीनेकेअंदाज़सीखादेंगे",
	 attempt: "", 
	 position: 46,
	 orientation: "across",
	 startx: 1,
	 starty: 49
},
{
	 clue: "रिमझिम के गीत सावन गाए हाए.. भीगी भीगी रातों में-(20)",
	 answer: "होठोंपेबातजीकीआए..हाएभीगीभीगीरातोंमें",
	 attempt: "", 
	 position: 47,
	 orientation: "down",
	 startx: 30,
	 starty: 21
},
{
	 clue: "खिलौना जानकर तुम तो मेरा दिल तोड़ जाते हो-(18)",
	 answer: "मुझेइसहालमेंकिसकेसहारेछोड़जातेहो",
	 attempt: "", 
	 position: 48,
	 orientation: "across",
	 startx: 4,
	 starty: 47
},
{
	 clue: "मेरे मितवा मेरे मीत रे-(18)",
	 answer: "आजातुझकोपुकारेमेरेगीतरेमेरेगीतरे",
	 attempt: "", 
	 position: 49,
	 orientation: "down",
	 startx: 27,
	 starty: 24
},
{
	 clue: "सावन का महीना पवन करे सोर-(17)",
	 answer: "जियारारेझूमेंऐसेजैसेबनमांनाचेमोर",
	 attempt: "", 
	 position: 50,
	 orientation: "down",
	 startx: 32,
	 starty: 20
},
{
	 clue: "मेरे मेहबूब तुझे सलाम-(17)",
	 answer: "मुश्किलमेंजानआईआयाहोंठोंपेतेरानाम",
	 attempt: "", 
	 position: 51,
	 orientation: "across",
	 startx: 10,
	 starty: 43
},
{
	 clue: "जब जब बहार आई और फूल मुस्कुराए-(8)",
	 answer: "मुझेतुमयादआए",
	 attempt: "", 
	 position: 52,
	 orientation: "across",
	 startx: 50,
	 starty: 3
},
{
	 clue: "एक था गुल और एक थी बुलबुल दोनों चमन में रहते थे-(19)",
	 answer: "हैयेकहानीबिलकुलसच्चीमेरेनानाकहतेथे",
	 attempt: "", 
	 position: 53,
	 orientation: "down",
	 startx: 25,
	 starty: 29
},
{
	 clue: "कुछ लोग मोहब्बत करके हो जाते हैं बरबाद-(20)",
	 answer: "कुछलोगमोहब्बतकरकेकरदेतेहैंबरबाद",
	 attempt: "", 
	 position: 54,
	 orientation: "down",
	 startx: 46,
	 starty: 9
},
{
	 clue: "रैना बीती जाए श्याम ना आए-(6)",
	 answer: "निंदीयानाआए",
	 attempt: "", 
	 position: 55,
	 orientation: "down",
	 startx: 54,
	 starty: 1
},
{
	 clue: "रंग रंग के फूल खिले मोहे भाये कोई रंग ना-(10)",
	 answer: "ओअबआनमिलोसजना",
	 attempt: "", 
	 position: 56,
	 orientation: "across",
	 startx: 51,
	 starty: 5
},
{
	 clue: "सच्चाई छुप नहीं सकती बनावट के उसूलों से-(19)",
	 answer: "किखुशबूआनहींसकतीकभीकागज़केफूलोंसे",
	 attempt: "", 
	 position: 57,
	 orientation: "down",
	 startx: 48,
	 starty: 9
},
{
	 clue: "वो तेरे प्यार का ग़म एक बहाना था सनम-(19)",
	 answer: "अपनीकिस्मतहीकुछऐसीथीकेदिलटूटगया",
	 attempt: "", 
	 position: 58,
	 orientation: "down",
	 startx: 43,
	 starty: 14
},
{
	 clue: "प्यार करनेवाले प्यार करते हैं शान से-(13)",
	 answer: "जीतेहैंशानसेमरतेहैंशानसे",
	 attempt: "", 
	 position: 59,
	 orientation: "down",
	 startx: 23,
	 starty: 35
},
{
	 clue: "बादल यूँ गरजता है डर कुछ ऐसा लगता है-(23)",
	 answer: "चमकचमककेलपककेयेबिजलीहमपेगिरजायेगी",
	 attempt: "", 
	 position: 60,
	 orientation: "down",
	 startx: 41,
	 starty: 19
},
{
	 clue: "मैं जहाँ चला जाऊं बहार चली आए-(21)",
	 answer: "ओमहकजाएराहोंकीधूलमैंबनफूलबनकाफूल",
	 attempt: "", 
	 position: 61,
	 orientation: "down",
	 startx: 51,
	 starty: 9
},
{
	 clue: "किसलिये मैंने प्यार किया दिल को यूँ ही बेकरार किया-(21)",
	 answer: "शामसवेरेतेरीराहदेखीरातदिनइंतज़ारकिया",
	 attempt: "", 
	 position: 62,
	 orientation: "across",
	 startx: 23,
	 starty: 38
},
{
	 clue: "ये मौसम आया है कितने सालों में-(11)",
	 answer: "आजाखोजाएँख्वाबोंख़यालोंमें",
	 attempt: "", 
	 position: 63,
	 orientation: "across",
	 startx: 48,
	 starty: 13
},
{
	 clue: "खूबसुरत हसीना जानएजां जानएमन-(15)",
	 answer: "रंगजिसकेलबोंकाढूंढताहैचमन",
	 attempt: "", 
	 position: 64,
	 orientation: "down",
	 startx: 54,
	 starty: 7
},
{
	 clue: "साँचा नाम तेरा साँचा नाम तेरा-(16)",
	 answer: "तूश्याममेरासाँचानामतेरातूश्याममेरा",
	 attempt: "", 
	 position: 65,
	 orientation: "down",
	 startx: 34,
	 starty: 28
},
{
	 clue: "कोई परदेसी आया परदेस में-(10)",
	 answer: "देसबनायापरदेसमें",
	 attempt: "", 
	 position: 66,
	 orientation: "down",
	 startx: 58,
	 starty: 4
},
{
	 clue: "साँची ज्योतो वाली माता  तेरी जयजयकार-(12)",
	 answer: "तूनेमुझेबुलायाशेरावालिए",
	 attempt: "", 
	 position: 67,
	 orientation: "down",
	 startx: 56,
	 starty: 7
},
{
	 clue: "गाड़ी बुला रही है सीटी बजा रही है-(16)",
	 answer: "चलनाहीज़िन्दगीहैचलतीहीजारहीहै",
	 attempt: "", 
	 position: 68,
	 orientation: "down",
	 startx: 60,
	 starty: 3
},
{
	 clue: "क्या यही प्यार है हाँ यही प्यार है-(21)",
	 answer: "दिलतेरेबिनकहींलगतानहींवक्तगुजरतानहीं",
	 attempt: "", 
	 position: 69,
	 orientation: "down",
	 startx: 37,
	 starty: 27
},
{
	 clue: "ये ना होगा-(6)",
	 answer: "नहीहोगाहोगा",
	 attempt: "", 
	 position: 70,
	 orientation: "down",
	 startx: 21,
	 starty: 45
},
{
	 clue: "आप के अनुरोध पे मैं ये गीत सुनाता हूँ-(19)",
	 answer: "अपनेदिलकीबातोंसेआपकादिलबहलाताहूँ",
	 attempt: "", 
	 position: 71,
	 orientation: "across",
	 startx: 40,
	 starty: 27
},
{
	 clue: "नदिया से दरिया दरिया से सागर-(9)",
	 answer: "सागरसेगहराजाम",
	 attempt: "", 
	 position: 72,
	 orientation: "across",
	 startx: 28,
	 starty: 43
},
{
	 clue: "किसी बात पर मैं किसी से खफ़ा हूँ-(13)",
	 answer: "मैंज़िंदाहूँपरज़िन्दगीसेखफ़ाहूँ",
	 attempt: "", 
	 position: 73,
	 orientation: "down",
	 startx: 58,
	 starty: 15
},
{
	 clue: "जानएजां ढूँढता फिर रहा-(13)",
	 answer: "हूँतुम्हेरातदिनमैंयहाँसेवहाँ",
	 attempt: "", 
	 position: 74,
	 orientation: "down",
	 startx: 39,
	 starty: 34
},
{
	 clue: "सोच के गगन झूमे अभी चाँद निकल आएगा-(10)",
	 answer: "झिलमिलचमकेंगेतारे",
	 attempt: "", 
	 position: 75,
	 orientation: "across",
	 startx: 29,
	 starty: 45
},
{
	 clue: "अपना है तू बेगाना नहीं मैंने तुझे पहचाना नहीं-(20)",
	 answer: "येसचहैंअफ़सानानहींमैंनेतुझेपहचानानहीं",
	 attempt: "", 
	 position: 76,
	 orientation: "across",
	 startx: 28,
	 starty: 47
},
{
	 clue: "दिल क्या करे जब किसी से किसी को प्यार हो जाए-(17)",
	 answer: "जानेकहाँकबकिसीकोकिसीसेप्यारहोजाए",
	 attempt: "", 
	 position: 77,
	 orientation: "down",
	 startx: 54,
	 starty: 22
},
{
	 clue: "फ़लक से तोड़कर देखो सितारे लोग लाए हैं-(17)",
	 answer: "मगरमैंवोनहींलायाजोसारेलोगलाएहैं",
	 attempt: "", 
	 position: 78,
	 orientation: "down",
	 startx: 56,
	 starty: 20
},
{
	 clue: "आदमी मुसाफ़िर है आता है जाता है-(14)",
	 answer: "आतेजातेरस्तेमेंयादेंछोड़जाताहै",
	 attempt: "", 
	 position: 79,
	 orientation: "down",
	 startx: 49,
	 starty: 27
},
{
	 clue: "मेरे दीवानेपन की भी दवां नहीं-(18)",
	 answer: "मैनेजानेक्यासुनलियातूनेतोकुछकहानहीं",
	 attempt: "", 
	 position: 80,
	 orientation: "down",
	 startx: 46,
	 starty: 31
},
{
	 clue: "सुनोकहो-(4)",
	 answer: "कहासुना",
	 attempt: "", 
	 position: 81,
	 orientation: "across",
	 startx: 44,
	 starty: 36
},
{
	 clue: "चाँद सी मेहबूबा हो मेरी कब ऐसा मैंने सोचा था-(17)",
	 answer: "हाँतुमबिलकुलवैसीहोजैसामैंनेसोचाथा",
	 attempt: "", 
	 position: 82,
	 orientation: "across",
	 startx: 41,
	 starty: 43
},
{
	 clue: "एक रास्ता आहा आहा-(7)",
	 answer: "दोराहीआहाआहा",
	 attempt: "", 
	 position: 83,
	 orientation: "down",
	 startx: 51,
	 starty: 33
},
{
	 clue: "आपका खत मिला आपका शुक्रिया-(16)",
	 answer: "आपनेयादमुझकोकियाशुक्रियाशुक्रिया",
	 attempt: "", 
	 position: 84,
	 orientation: "across",
	 startx: 44,
	 starty: 41
},
{
	 clue: "सारे शहर में आप सा कोई नहीं कोई नहीं-(19)",
	 answer: "यहीसोचकररातभरमैंसोयीनहींसोयीनहीं",
	 attempt: "", 
	 position: 85,
	 orientation: "across",
	 startx: 42,
	 starty: 45
},
{
	 clue: "पहले पहले प्यार की मुलाक़ातें याद हैं-(14)",
	 answer: "मुझकोतोतुम्हारीसारीबातेंयादहैं",
	 attempt: "", 
	 position: 86,
	 orientation: "down",
	 startx: 59,
	 starty: 30
},
{
	 clue: "भोली सी सूरत आँखों में मस्ती-(4)",
	 answer: "आयहाए",
	 attempt: "", 
	 position: 87,
	 orientation: "across",
	 startx: 51,
	 starty: 38
},
{
	 clue: "दिल ये बेचैन वे-(6)",
	 answer: "रस्तेपेनैनवे",
	 attempt: "", 
	 position: 88,
	 orientation: "down",
	 startx: 51,
	 starty: 45
},
{
	 clue: "अपने प्यार के सपने सच हुए-(12)",
	 answer: "होठोंपेगीतोंकेफूलखिलगए",
	 attempt: "", 
	 position: 89,
	 orientation: "across",
	 startx: 49,
	 starty: 47
},
{
	 clue: "तेरे मेरे बीच में कैसा है ये बंधन अन्जाना-(12)",
	 answer: "मैनेनहींजानातूनेनहींजाना",
	 attempt: "", 
	 position: 90,
	 orientation: "across",
	 startx: 49,
	 starty: 49
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
